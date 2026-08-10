import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PhotoItem } from '../../types';

interface Step2SmileProps {
  photo: PhotoItem;
  text: string;
  onNext: () => void;
}

export const Step2Smile: React.FC<Step2SmileProps> = ({ photo, text, onNext }) => {
  const lines = text.split('\n');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative bg-[#FDFBF7] bg-editorial-dots">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Photo Column */}
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 relative group"
        >
          {/* Subtle Outer Frame Layer */}
          <div className="absolute -inset-3 rounded-2xl bg-[#E8D3D3]/40 blur-md opacity-70"></div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#E8D3D3] bg-[#FDFBF7] p-2">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-[400px] sm:h-[480px] object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Photo Caption Tag */}
            <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7] text-xs font-mono-custom tracking-wider bg-[#1A1A1A]/85 backdrop-blur-md px-4 py-2.5 rounded-md border border-white/10 flex items-center justify-between">
              <span className="uppercase tracking-[0.15em] font-semibold text-[10px] text-[#E8D3D3]">{photo.caption}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#E8D3D3]" />
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 space-y-6 text-left"
        >
          <p className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4444]">
            02 // Her Smile
          </p>

          <div className="space-y-4 font-serif-title text-3xl sm:text-4xl text-[#1A1A1A] leading-snug font-light">
            {lines.map((line, idx) => (
              <p key={idx} className={idx === lines.length - 1 ? 'italic text-[#8B4444] font-normal' : ''}>
                {line}
              </p>
            ))}
          </div>

          <p className="text-xs text-[#2D2926]/70 leading-relaxed max-w-md pt-2">
            A genuine smile has a way of warming a space effortlessly, leaving a gentle memory that lingers long after the moment passes.
          </p>

          <div className="pt-4">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#8B4444] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#1A1A1A]"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 text-[#E8D3D3]" />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
