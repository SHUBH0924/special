import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PhotoItem } from '../../types';

interface Step3BeautyProps {
  photo: PhotoItem;
  poetryLines: string[];
  subtext: string;
  onNext: () => void;
}

export const Step3Beauty: React.FC<Step3BeautyProps> = ({
  photo,
  poetryLines,
  subtext,
  onNext
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative px-6 py-16 overflow-hidden bg-[#FDFBF7] bg-editorial-dots">
      {/* Background Soft Image Blend with Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 filter blur-xl scale-110">
        <img
          src={photo.url}
          alt="Background atmosphere"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Full-Screen Cinematic Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 relative order-2 md:order-1"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8D3D3] bg-[#FDFBF7] p-2 group">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-[450px] sm:h-[550px] object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent rounded-xl"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7] space-y-1">
              <span className="text-[10px] font-mono-custom uppercase tracking-[0.2em] text-[#E8D3D3]">Elegance in Stillness</span>
              <p className="font-serif-title text-lg font-light italic">{photo.caption}</p>
            </div>
          </div>
        </motion.div>

        {/* Poetic Shayari Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:col-span-6 space-y-6 order-1 md:order-2 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B4444]/10 border border-[#8B4444]/20 text-[#8B4444] text-[10px] uppercase tracking-[0.25em] font-mono-custom font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8B4444]" />
            <span>03 // Her Beauty</span>
          </div>

          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-[#E8D3D3] space-y-4 editorial-shadow">
            <div className="space-y-3 font-serif-title text-2xl sm:text-3xl text-[#1A1A1A] leading-relaxed italic font-light">
              {poetryLines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.8 }}
                  className={idx === poetryLines.length - 1 ? 'font-normal text-[#8B4444] not-italic pt-1' : ''}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <p className="text-xs text-[#2D2926]/70 tracking-wide pt-2 border-t border-[#E8D3D3]/60">
              {subtext}
            </p>
          </div>

          <div className="pt-2">
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
