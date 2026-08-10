import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Compass, Heart } from 'lucide-react';
import { TraitCard } from '../../types';

interface Step4BeyondBeautyProps {
  headline: string;
  traits: TraitCard[];
  onNext: () => void;
}

export const Step4BeyondBeauty: React.FC<Step4BeyondBeautyProps> = ({ headline, traits, onNext }) => {
  const [activeTraitId, setActiveTraitId] = useState<string | null>(traits[0]?.id || null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#8B4444]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#8B4444]" />;
      default: return <Sparkles className="w-6 h-6 text-[#8B4444]" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative bg-[#FDFBF7] bg-editorial-dots">
      <div className="w-full max-w-4xl mx-auto space-y-10 text-center">
        
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <p className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4444]">
            04 // Beyond Beauty
          </p>

          <h2 className="font-serif-title text-2xl sm:text-4xl text-[#1A1A1A] font-light leading-relaxed">
            "{headline}"
          </h2>
        </motion.div>

        {/* 3 Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {traits.map((trait, idx) => {
            const isSelected = activeTraitId === trait.id;

            return (
              <motion.div
                key={trait.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                onClick={() => setActiveTraitId(trait.id)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 relative border overflow-hidden ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-[#FDFBF7] border-[#8B4444] shadow-2xl -translate-y-1 ring-2 ring-[#8B4444]/40'
                    : 'glass-panel hover:bg-[#F5EFE6] border-[#E8D3D3] text-[#2D2926] hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Background decorative watermark icon */}
                <div className={`absolute -right-4 -bottom-4 opacity-10 pointer-events-none transition-transform duration-500 ${isSelected ? 'scale-125 text-[#FDFBF7]' : 'text-[#8B4444]'}`}>
                  {getIcon(trait.iconName)}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#8B4444]/30 text-[#E8D3D3]' : 'bg-[#E8D3D3]/50 text-[#8B4444]'
                  }`}>
                    {getIcon(trait.iconName)}
                  </div>

                  <div>
                    <h3 className={`font-serif-title text-2xl font-normal ${isSelected ? 'text-[#FDFBF7]' : 'text-[#8B4444]'}`}>
                      {trait.title}
                    </h3>
                    <p className={`text-[10px] font-mono-custom uppercase tracking-[0.2em] font-medium mt-1 ${isSelected ? 'text-[#E8D3D3]' : 'text-[#8B4444]/80'}`}>
                      {trait.subtitle}
                    </p>
                  </div>

                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#FDFBF7]/90' : 'text-[#2D2926]/80'}`}>
                    {trait.description}
                  </p>

                  <p className={`text-xs italic pt-2 border-t ${isSelected ? 'border-white/10 text-[#E8D3D3]' : 'border-[#E8D3D3] text-[#8B4444]'}`}>
                    "{trait.quote}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-4"
        >
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#8B4444] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#1A1A1A]"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 text-[#E8D3D3]" />
          </button>
        </motion.div>

      </div>
    </div>
  );
};
