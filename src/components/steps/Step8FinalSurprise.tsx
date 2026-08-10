import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, RotateCcw, Heart } from 'lucide-react';

interface Step8FinalSurpriseProps {
  triggerText: string;
  finalLines: string[];
  finalOutro: string;
  yourName: string;
  onReplay: () => void;
}

export const Step8FinalSurprise: React.FC<Step8FinalSurpriseProps> = ({
  triggerText,
  finalLines,
  finalOutro,
  yourName,
  onReplay
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const outroParagraphs = finalOutro.split('\n');

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative bg-[#1A1A1A] text-[#FDFBF7] overflow-hidden">
      
      {/* Dark Editorial Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#8B4444]/35 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-2xl mx-auto space-y-10 text-center relative z-10">
        
        {/* Step Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E8D3D3]"
        >
          08 // The Final Note
        </motion.p>

        {!isRevealed ? (
          /* Glowing Trigger Button */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 py-10"
          >
            <div className="w-20 h-20 rounded-full bg-[#1A1A1A] border-2 border-[#8B4444] flex items-center justify-center mx-auto glow-burgundy animate-pulse">
              <Sparkles className="w-10 h-10 text-[#E8D3D3]" />
            </div>

            <button
              onClick={() => setIsRevealed(true)}
              id="final-message-trigger-btn"
              className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#8B4444] text-[#FDFBF7] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-[#FDFBF7] hover:text-[#1A1A1A] transition-all duration-300 hover:scale-105 active:scale-100 border border-[#8B4444]"
            >
              <span>{triggerText}</span>
              <Sparkles className="w-4 h-4 text-[#E8D3D3] group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        ) : (
          /* Revealed Final Cinematic Content */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Main Letter Content Box */}
            <div className="glass-panel-dark p-8 sm:p-12 rounded-3xl border border-[#8B4444]/50 space-y-6 glow-burgundy text-left">
              <div className="space-y-3 font-serif-title text-2xl sm:text-3xl text-[#FDFBF7] font-light leading-relaxed">
                {finalLines.map((line, idx) => {
                  if (line === '') return <div key={idx} className="h-4"></div>;
                  return (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                      className={idx === finalLines.length - 1 ? 'font-normal text-[#E8D3D3] italic pt-2' : ''}
                    >
                      {line}
                    </motion.p>
                  );
                })}
              </div>
            </div>

            {/* Outro Final Screen Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="space-y-6 border-t border-[#8B4444]/40 pt-8"
            >
              <div className="space-y-2 font-serif-title text-xl sm:text-2xl text-[#E8D3D3] italic font-light">
                {outroParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="pt-4 space-y-1">
                <p className="text-[10px] font-mono-custom uppercase tracking-[0.25em] text-[#E8D3D3]/80">With warmth,</p>
                <p className="font-serif-title text-3xl font-semibold text-[#FDFBF7] italic">{yourName}</p>
              </div>

              {/* Replay Button */}
              <div className="pt-8">
                <button
                  onClick={onReplay}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#FDFBF7]/10 hover:bg-[#8B4444] text-[#FDFBF7] border border-[#E8D3D3]/30 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#E8D3D3]" />
                  <span>Replay the journey ↻</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
