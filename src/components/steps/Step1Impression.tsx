import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Quote } from 'lucide-react';

interface Step1ImpressionProps {
  quoteText: string;
  onNext: () => void;
}

export const Step1Impression: React.FC<Step1ImpressionProps> = ({ quoteText, onNext }) => {
  const lines = quoteText.split('\n');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative bg-[#FDFBF7] bg-editorial-dots">
      <div className="w-full max-w-xl mx-auto space-y-8 text-center">
        
        {/* Step Label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4444]"
        >
          01 // The First Impression
        </motion.p>

        {/* Animated Editorial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel editorial-shadow p-8 sm:p-12 rounded-2xl relative border border-[#E8D3D3] space-y-6"
        >
          <Quote className="w-8 h-8 text-[#8B4444] mx-auto opacity-70" />

          <div className="space-y-3 font-serif-title text-2xl sm:text-3xl text-[#1A1A1A] font-light leading-relaxed">
            {lines.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.2, duration: 0.8 }}
                className={idx === lines.length - 1 ? 'font-normal italic text-[#8B4444]' : ''}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div className="w-12 h-0.5 bg-[#E8D3D3] mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#8B4444] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 border border-[#1A1A1A]"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 text-[#E8D3D3]" />
          </button>
        </motion.div>

      </div>
    </div>
  );
};
