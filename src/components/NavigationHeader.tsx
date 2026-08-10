import React from 'react';
import { Eye, FastForward, Sparkles } from 'lucide-react';
import { ViewMode } from '../types';

interface NavigationHeaderProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onJumpToStep: (step: number) => void;
  viewMode: ViewMode;
  onToggleViewMode: () => void;
  herName: string;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onJumpToStep,
  viewMode,
  onToggleViewMode,
  herName
}) => {
  if (currentStep === 0 && viewMode === 'step') {
    // Hidden on opening landing screen for maximum cinematic immersion
    return null;
  }

  const stepLabels = [
    'Landing',
    'Impression',
    'Smile',
    'Beauty',
    'Beyond Beauty',
    'Journey',
    'Surprise Letter',
    'Gallery',
    'Final Message'
  ];

  return (
    <header className="fixed top-5 left-5 z-40 flex items-center gap-3">
      {/* Step Indicator & Quick Jump */}
      {viewMode === 'step' && (
        <div className="flex items-center gap-2 bg-[#FDFBF7]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8D3D3] shadow-sm text-xs font-medium text-[#2D2926]">
          <span className="font-mono-custom text-[11px] tracking-tight font-semibold text-[#8B4444]">
            0{currentStep} // 0{totalSteps}
          </span>
          <div className="w-1 h-1 rounded-full bg-[#8B4444]"></div>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8B4444] truncate max-w-[120px]">
            {stepLabels[currentStep] || ''}
          </span>

          {/* Quick Step Selector dropdown */}
          <select
            value={currentStep}
            onChange={(e) => onJumpToStep(Number(e.target.value))}
            className="bg-transparent text-[10px] uppercase tracking-[0.1em] font-mono focus:outline-none cursor-pointer text-[#8B4444] ml-1 pr-1 font-semibold"
            title="Jump to step"
          >
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => (
              <option key={stepNum} value={stepNum} className="bg-[#FDFBF7] text-[#2D2926]">
                Step {stepNum}: {stepLabels[stepNum]}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Skip Button */}
      {viewMode === 'step' && currentStep < totalSteps && (
        <button
          onClick={onNext}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/90 hover:bg-[#F5EFE6] text-[#2D2926] hover:text-[#8B4444] border border-[#E8D3D3] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all backdrop-blur-md shadow-sm"
          title="Skip to next step"
        >
          <span className="hidden sm:inline">Skip</span>
          <FastForward className="w-3 h-3 text-[#8B4444]" />
        </button>
      )}

      {/* View Mode Toggle */}
      <button
        onClick={onToggleViewMode}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDFBF7]/90 hover:bg-[#F5EFE6] text-[#2D2926] hover:text-[#8B4444] border border-[#E8D3D3] text-[10px] uppercase tracking-[0.2em] font-semibold transition-all backdrop-blur-md shadow-sm"
        title={viewMode === 'step' ? 'Switch to Full Scroll View' : 'Switch to Step-by-Step View'}
      >
        <Eye className="w-3.5 h-3.5 text-[#8B4444]" />
        <span className="hidden sm:inline">
          {viewMode === 'step' ? 'Full View' : 'Step Journey'}
        </span>
      </button>
    </header>
  );
};
