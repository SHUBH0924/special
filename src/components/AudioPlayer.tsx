import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  customAudioUrl?: string;
  useSynth?: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ customAudioUrl, useSynth = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ytPlayerRef = useRef<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const youtubeId = extractYouTubeId(customAudioUrl);

  // Initialize audio / YouTube elements
  useEffect(() => {
    if (youtubeId) {
      // Load YouTube IFrame API if not loaded
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          initYTPlayer(youtubeId);
        };
      } else {
        initYTPlayer(youtubeId);
      }
    } else if (customAudioUrl) {
      const audio = new Audio(customAudioUrl);
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.destroy();
        } catch {
          // ignore
        }
        ytPlayerRef.current = null;
      }
      stopSynth();
    };
  }, [customAudioUrl, youtubeId]);

  const initYTPlayer = (vId: string) => {
    if (ytPlayerRef.current) {
      try {
        ytPlayerRef.current.destroy();
      } catch {
        // ignore
      }
    }

    if (window.YT && window.YT.Player) {
      ytPlayerRef.current = new window.YT.Player('yt-audio-player', {
        height: '0',
        width: '0',
        videoId: vId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: vId,
          playsinline: 1
        },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(50);
          }
        }
      });
    }
  };

  // Ambient Web Audio Synthesizer (dreamy, soothing ambient chords)
  const startSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Gentle ambient chord frequencies
      const chords = [
        [146.83, 174.61, 220.00, 261.63, 329.63], // Dm9
        [116.54, 146.83, 174.61, 220.00, 293.66], // Bbmaj7
        [130.81, 164.81, 196.00, 246.94, 293.66], // Cmaj9
        [110.00, 146.83, 174.61, 220.00, 293.66]  // Am7
      ];

      let chordIndex = 0;

      const playChord = (frequencies: number[]) => {
        oscNodesRef.current.forEach(osc => {
          try {
            osc.stop(ctx.currentTime + 1.5);
          } catch {
            // ignore
          }
        });
        oscNodesRef.current = [];

        frequencies.forEach(freq => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.detune.setValueAtTime((Math.random() - 0.5) * 8, ctx.currentTime);

          oscGain.gain.setValueAtTime(0, ctx.currentTime);
          oscGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2.5);

          osc.connect(oscGain);
          oscGain.connect(masterGain);

          osc.start(ctx.currentTime);
          oscNodesRef.current.push(osc);
        });
      };

      playChord(chords[0]);

      intervalRef.current = window.setInterval(() => {
        chordIndex = (chordIndex + 1) % chords.length;
        playChord(chords[chordIndex]);
      }, 7000);

    } catch (e) {
      console.warn('Web Audio Ambient synth error:', e);
    }
  };

  const stopSynth = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 1);
      } catch {
        // ignore
      }
    }
    setTimeout(() => {
      oscNodesRef.current.forEach(osc => {
        try {
          osc.stop();
        } catch {
          // ignore
        }
      });
      oscNodesRef.current = [];
    }, 1000);
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (youtubeId && ytPlayerRef.current?.pauseVideo) {
        ytPlayerRef.current.pauseVideo();
      } else if (audioRef.current) {
        audioRef.current.pause();
      } else {
        stopSynth();
      }
      setIsPlaying(false);
    } else {
      if (youtubeId && ytPlayerRef.current?.playVideo) {
        ytPlayerRef.current.playVideo();
      } else if (audioRef.current) {
        audioRef.current.play().catch(() => {
          startSynth();
        });
      } else if (useSynth) {
        startSynth();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      {/* Hidden YouTube player container */}
      <div id="yt-audio-player" className="hidden" aria-hidden="true" />

      <button
        onClick={togglePlay}
        id="audio-toggle-btn"
        className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-semibold border shadow-sm ${
          isPlaying
            ? 'bg-[#8B4444] text-[#FDFBF7] border-[#8B4444] shadow-md ring-2 ring-[#E8D3D3]/50'
            : 'bg-[#FDFBF7]/90 text-[#2D2926] border-[#E8D3D3] hover:bg-[#F5EFE6]'
        }`}
        title={isPlaying ? 'Mute ambient sound' : 'Play ambient music'}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8D3D3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FDFBF7]"></span>
            </span>
            <Volume2 className="w-3.5 h-3.5 text-[#E8D3D3]" />
            <span className="hidden sm:inline">Mute Audio</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
            <span className="hidden sm:inline">Play Sound</span>
          </>
        )}
      </button>
    </div>
  );
};
