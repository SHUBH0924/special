import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface LandingScreenProps {
  herName: string;
  subhead: string;
  onStart: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ herName, subhead, onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-6 py-12 text-center overflow-hidden bg-[#FDFBF7] bg-editorial-dots">
      {/* Background Soft Editorial Aura Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#E8D3D3]/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto space-y-8 z-10"
      >
        {/* Editorial Decorative Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFBF7] border border-[#E8D3D3] text-[#8B4444] text-[10px] uppercase tracking-[0.25em] font-mono-custom font-semibold shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B4444]" />
          <span>A Dedicated Moment</span>
        </motion.div>

        {/* Dedicated To Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-light text-[#1A1A1A] tracking-tight leading-[1.05]"
        >
          For <span className="italic font-normal font-serif-title text-[#8B4444] border-b border-[#8B4444]/40 pb-1">{herName}</span>
        </motion.h1>

        {/* Editorial Opening Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-serif-title text-xl sm:text-2xl text-[#2D2926]/80 italic font-light max-w-xl mx-auto leading-relaxed"
        >
          "{subhead}"
        </motion.p>

        {/* Begin Journey Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-6"
        >
          <button
            onClick={onStart}
            id="start-journey-btn"
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#8B4444] hover:bg-[#1A1A1A] text-[#FDFBF7] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 border border-[#8B4444]"
          >
            <span>Begin the little surprise</span>
            <Sparkles className="w-4 h-4 text-[#E8D3D3] group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute -inset-1 rounded-full border border-[#8B4444]/30 animate-pulse pointer-events-none"></div>
          </button>
        </motion.div>
      </motion.div>

      {/* Subtle Bottom Scroll Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 font-mono-custom text-[10px] uppercase tracking-[0.25em] text-[#8B4444]"
      >
        Designed with warmth & grace
      </motion.p>
    </div>
  );
};
