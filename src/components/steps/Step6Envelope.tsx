import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, Sparkles, ArrowRight, Check } from 'lucide-react';

interface Step6EnvelopeProps {
  teaser: string;
  letterContent: string[];
  onNext: () => void;
}

export const Step6Envelope: React.FC<Step6EnvelopeProps> = ({ teaser, letterContent, onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative bg-[#FDFBF7] bg-editorial-dots">
      <div className="w-full max-w-xl mx-auto space-y-8 text-center">
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4444]"
        >
          06 // A Little Surprise
        </motion.p>

        {!isOpen ? (
          /* Closed Envelope Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E8D3D3] space-y-6 editorial-shadow cursor-pointer hover:border-[#8B4444]/60 transition-all group"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#FDFBF7] flex items-center justify-center mx-auto shadow-lg group-hover:bg-[#8B4444] group-hover:scale-110 transition-all duration-300 border border-[#8B4444]">
              <Mail className="w-8 h-8 text-[#E8D3D3]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-title text-3xl font-light text-[#1A1A1A] italic">
                "{teaser}"
              </h3>
              <p className="text-[10px] font-mono-custom uppercase tracking-[0.2em] text-[#8B4444]">
                Click to unseal the letter
              </p>
            </div>

            <div className="pt-2">
              <button
                id="open-envelope-btn"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FDFBF7] border border-[#E8D3D3] text-[#1A1A1A] text-[10px] uppercase font-semibold tracking-[0.2em] shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#FDFBF7] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8B4444]" />
                <span>Open Envelope</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Open Letter Card Animation */
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FDFBF7] p-8 sm:p-12 rounded-3xl border-2 border-[#E8D3D3] editorial-shadow space-y-6 text-left relative overflow-hidden"
          >
            {/* Stamp Detail */}
            <div className="absolute top-6 right-6 border-2 border-[#8B4444]/60 p-2 rounded text-center rotate-3 opacity-85">
              <span className="text-[10px] font-mono-custom uppercase text-[#8B4444] font-bold tracking-[0.2em] block">With Warmth</span>
            </div>

            <div className="flex items-center gap-2 text-[#8B4444] font-serif-title italic text-lg border-b border-[#E8D3D3] pb-3">
              <Sparkles className="w-4 h-4 text-[#8B4444]" />
              <span>A note for you</span>
            </div>

            {/* Letter Lines */}
            <div className="space-y-4 font-serif-title text-xl sm:text-2xl text-[#1A1A1A] font-light leading-relaxed">
              {letterContent.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.2, duration: 0.8 }}
                  className={idx === 0 ? 'text-[#8B4444] font-normal italic' : ''}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E8D3D3] flex justify-between items-center">
              <span className="text-xs italic text-[#2D2926]/70">Simple, sincere & memorable.</span>

              <button
                onClick={onNext}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#8B4444] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:-translate-y-0.5 border border-[#1A1A1A]"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8D3D3]" />
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
