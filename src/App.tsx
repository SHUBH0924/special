/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppContentConfig, ViewMode } from './types';
import { defaultContent } from './data/defaultContent';
import { BackgroundParticles } from './components/BackgroundParticles';
import { AudioPlayer } from './components/AudioPlayer';
import { NavigationHeader } from './components/NavigationHeader';
import { LandingScreen } from './components/steps/LandingScreen';
import { Step1Impression } from './components/steps/Step1Impression';
import { Step2Smile } from './components/steps/Step2Smile';
import { Step3Beauty } from './components/steps/Step3Beauty';
import { Step4BeyondBeauty } from './components/steps/Step4BeyondBeauty';
import { Step5Journey } from './components/steps/Step5Journey';
import { Step6Envelope } from './components/steps/Step6Envelope';
import { Step7Gallery } from './components/steps/Step7Gallery';
import { Step8FinalSurprise } from './components/steps/Step8FinalSurprise';
import { FullOverview } from './components/FullOverview';

export default function App() {
  const [config, setConfig] = useState<AppContentConfig>(defaultContent);

  useEffect(() => {
    try {
      // Clear any legacy cached configuration so fresh images/content always load
      localStorage.removeItem('surprise_app_config');
    } catch {
      // ignore
    }
  }, []);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>('step');

  // Save config changes
  const handleUpdateConfig = (updated: AppContentConfig) => {
    setConfig(updated);
    try {
      localStorage.setItem('surprise_app_config', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetDefault = () => {
    setConfig(defaultContent);
    try {
      localStorage.removeItem('surprise_app_config');
    } catch {
      // ignore
    }
  };

  const handleNextStep = () => {
    if (currentStep < 8) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJumpToStep = (step: number) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplay = () => {
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C221E] relative font-sans selection:bg-[#E8D5C8] selection:text-[#581C24]">
      {/* Subtle Floating Petals & Particles */}
      <BackgroundParticles />

      {/* Ambient Audio Synth / Music Controls */}
      <AudioPlayer customAudioUrl={config.audioUrl} useSynth={config.useSynthAudio} />

      {/* Top Header Controls (Progress 01/08, Skip) */}
      <NavigationHeader
        currentStep={currentStep}
        totalSteps={8}
        onNext={handleNextStep}
        onJumpToStep={handleJumpToStep}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(prev => (prev === 'step' ? 'scroll' : 'step'))}
        herName={config.herName}
      />

      {/* Main Experience Layout */}
      <main className="relative z-10">
        {viewMode === 'scroll' ? (
          <FullOverview config={config} onReplay={handleReplay} />
        ) : (
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <LandingScreen
                  herName={config.herName}
                  subhead={config.landingSubhead}
                  onStart={() => setCurrentStep(1)}
                />
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step1Impression quoteText={config.impressionQuote} onNext={handleNextStep} />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step2Smile photo={config.smilePhoto} text={config.smileText} onNext={handleNextStep} />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step3Beauty
                  photo={config.beautyPhoto}
                  poetryLines={config.poetryLines}
                  subtext={config.poetrySubtext}
                  onNext={handleNextStep}
                />
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step4BeyondBeauty
                  headline={config.beyondBeautyHeadline}
                  traits={config.traits}
                  onNext={handleNextStep}
                />
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step5Journey
                  photo={config.journeyPhoto}
                  journeyText={config.journeyText}
                  timeline={config.timeline}
                  onNext={handleNextStep}
                />
              </motion.div>
            )}

            {currentStep === 6 && (
              <motion.div
                key="step-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step6Envelope
                  teaser={config.envelopeTeaser}
                  letterContent={config.envelopeLetterContent}
                  onNext={handleNextStep}
                />
              </motion.div>
            )}

            {currentStep === 7 && (
              <motion.div
                key="step-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step7Gallery photos={config.galleryPhotos} onNext={handleNextStep} />
              </motion.div>
            )}

            {currentStep === 8 && (
              <motion.div
                key="step-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <Step8FinalSurprise
                  triggerText={config.finalTriggerText}
                  finalLines={config.finalMessageLines}
                  finalOutro={config.finalOutroText}
                  yourName={config.yourName}
                  onReplay={handleReplay}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
