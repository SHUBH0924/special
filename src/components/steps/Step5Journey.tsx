import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PhotoItem, TimelineItem } from '../../types';

interface Step5JourneyProps {
  photo: PhotoItem;
  journeyText: string;
  timeline: TimelineItem[];
  onNext: () => void;
}

export const Step5Journey: React.FC<Step5JourneyProps> = ({
  photo,
  journeyText,
  timeline,
  onNext
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const lines = journeyText.split('\n');

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative bg-[#FDFBF7] bg-editorial-dots">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* Top Header & Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8D3D3] bg-[#FDFBF7] p-2 group relative">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7] text-xs font-medium">
                <p className="italic font-serif-title text-base">{photo.caption}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-7 space-y-6 text-left"
          >
            <p className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4444]">
              05 // Her Journey
            </p>

            <div className="space-y-3 font-serif-title text-3xl sm:text-4xl text-[#1A1A1A] font-light leading-relaxed">
              {lines.map((line, idx) => (
                <p key={idx} className={idx >= lines.length - 3 ? 'text-[#8B4444] font-normal italic' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Animated Timeline Progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6 pt-4"
        >
          {/* Timeline Node Buttons */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-[#E8D3D3] z-0"></div>

            <div className="grid grid-cols-4 gap-2 relative z-10">
              {timeline.map((item, idx) => {
                const isActive = activeStageIndex === idx;

                return (
                  <button
                    key={item.stage}
                    onClick={() => setActiveStageIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 font-mono-custom font-semibold text-xs ${
                        isActive
                          ? 'bg-[#1A1A1A] text-[#FDFBF7] ring-4 ring-[#8B4444]/40 shadow-lg scale-110 border border-[#8B4444]'
                          : 'bg-[#FDFBF7] text-[#2D2926] border-2 border-[#E8D3D3] hover:border-[#8B4444] hover:text-[#8B4444]'
                      }`}
                    >
                      0{idx + 1}
                    </div>
                    <span
                      className={`text-[10px] font-mono-custom uppercase tracking-[0.15em] mt-2.5 transition-colors ${
                        isActive ? 'text-[#8B4444] font-bold' : 'text-[#2D2926]/70 group-hover:text-[#1A1A1A]'
                      }`}
                    >
                      {item.stage}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Card */}
          {timeline[activeStageIndex] && (
            <motion.div
              key={timeline[activeStageIndex].stage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#E8D3D3] space-y-3 text-left max-w-2xl mx-auto editorial-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif-title text-2xl font-semibold text-[#1A1A1A]">
                  {timeline[activeStageIndex].title}
                </h3>
                <span className="text-[10px] font-mono-custom uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-[#8B4444]/15 text-[#8B4444] font-semibold border border-[#8B4444]/30">
                  {timeline[activeStageIndex].stage}
                </span>
              </div>

              <p className="text-sm text-[#2D2926]/90 leading-relaxed">
                {timeline[activeStageIndex].description}
              </p>

              <p className="text-xs italic text-[#8B4444] pt-2 border-t border-[#E8D3D3]">
                "{timeline[activeStageIndex].quote}"
              </p>
            </motion.div>
          )}

        </motion.div>

        {/* Continue Button */}
        <div className="text-center pt-2">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#8B4444] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#1A1A1A]"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 text-[#E8D3D3]" />
          </button>
        </div>

      </div>
    </div>
  );
};
