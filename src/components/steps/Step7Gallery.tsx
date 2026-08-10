import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Maximize2, X, Sparkles } from 'lucide-react';
import { PhotoItem } from '../../types';

interface Step7GalleryProps {
  photos: PhotoItem[];
  onNext: () => void;
}

export const Step7Gallery: React.FC<Step7GalleryProps> = ({ photos, onNext }) => {
  const [activeModalPhoto, setActiveModalPhoto] = useState<PhotoItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative bg-[#FDFBF7] bg-editorial-dots">
      <div className="w-full max-w-6xl mx-auto space-y-10 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <p className="font-mono-custom text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B4444]">
            07 // Photo Gallery
          </p>
          <h2 className="font-serif-title text-3xl sm:text-5xl text-[#1A1A1A] font-light">
            Moments Captured in Time
          </h2>
          <p className="text-xs text-[#2D2926]/70 max-w-md mx-auto">
            Click any image to view in full resolution layout.
          </p>
        </motion.div>

        {/* Masonry / Mixed Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {photos.map((photo, idx) => {
            const isWide = photo.aspectRatio === 'wide' || idx === 4;

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.8 }}
                onClick={() => setActiveModalPhoto(photo)}
                className={`cursor-pointer group relative bg-[#FDFBF7] p-3 sm:p-4 rounded-xl editorial-shadow border border-[#E8D3D3] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Polaroid Frame Container */}
                <div className="overflow-hidden rounded-lg relative bg-[#F5EFE6]">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className={`w-full ${
                      isWide ? 'h-[280px] sm:h-[340px]' : 'h-[320px] sm:h-[380px]'
                    } object-cover transition-transform duration-700 group-hover:scale-105`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-[#FDFBF7] text-left text-xs font-medium space-y-1">
                      <p className="font-serif-title text-base italic">{photo.caption}</p>
                      {photo.location && (
                        <p className="text-[10px] font-mono-custom text-[#E8D3D3] uppercase tracking-wider">{photo.location}</p>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#1A1A1A]/70 backdrop-blur-md p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Subtle Polaroid Bottom Label */}
                <div className="pt-3 pb-1 text-left flex justify-between items-center text-xs font-serif-title text-[#1A1A1A]">
                  <span className="italic font-normal truncate max-w-[80%]">{photo.caption}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#8B4444]" />
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
          className="pt-6"
        >
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] hover:bg-[#8B4444] text-[#FDFBF7] text-xs font-semibold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#1A1A1A]"
          >
            <span>Proceed to the Final Message</span>
            <ArrowRight className="w-4 h-4 text-[#E8D3D3]" />
          </button>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeModalPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalPhoto(null)}
              className="fixed inset-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl border border-[#E8D3D3] p-2 sm:p-4 text-left"
              >
                <button
                  onClick={() => setActiveModalPhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1A1A1A]/80 text-[#FDFBF7] hover:bg-[#8B4444] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[80vh] overflow-hidden rounded-xl bg-[#1A1A1A] flex items-center justify-center">
                  <img
                    src={activeModalPhoto.url}
                    alt={activeModalPhoto.caption}
                    className="max-h-[75vh] w-auto object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 bg-[#FDFBF7] rounded-b-xl mt-2 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-title text-xl text-[#1A1A1A] italic">
                      {activeModalPhoto.caption}
                    </h4>
                    {activeModalPhoto.location && (
                      <p className="text-xs text-[#2D2926]/70">{activeModalPhoto.location}</p>
                    )}
                  </div>
                  <span className="text-[10px] font-mono-custom uppercase tracking-[0.2em] text-[#8B4444] font-semibold">
                    Memory
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
