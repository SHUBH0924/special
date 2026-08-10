import React from 'react';
import { AppContentConfig } from '../types';
import { Step1Impression } from './steps/Step1Impression';
import { Step2Smile } from './steps/Step2Smile';
import { Step3Beauty } from './steps/Step3Beauty';
import { Step4BeyondBeauty } from './steps/Step4BeyondBeauty';
import { Step5Journey } from './steps/Step5Journey';
import { Step6Envelope } from './steps/Step6Envelope';
import { Step7Gallery } from './steps/Step7Gallery';
import { Step8FinalSurprise } from './steps/Step8FinalSurprise';

interface FullOverviewProps {
  config: AppContentConfig;
  onReplay: () => void;
}

export const FullOverview: React.FC<FullOverviewProps> = ({ config, onReplay }) => {
  const dummyNext = () => {};

  return (
    <div className="w-full space-y-12 divide-y divide-[#E8D3D3]/60">
      <section id="step-1">
        <Step1Impression quoteText={config.impressionQuote} onNext={dummyNext} />
      </section>

      <section id="step-2">
        <Step2Smile photo={config.smilePhoto} text={config.smileText} onNext={dummyNext} />
      </section>

      <section id="step-3">
        <Step3Beauty
          photo={config.beautyPhoto}
          poetryLines={config.poetryLines}
          subtext={config.poetrySubtext}
          onNext={dummyNext}
        />
      </section>

      <section id="step-4">
        <Step4BeyondBeauty
          headline={config.beyondBeautyHeadline}
          traits={config.traits}
          onNext={dummyNext}
        />
      </section>

      <section id="step-5">
        <Step5Journey
          photo={config.journeyPhoto}
          journeyText={config.journeyText}
          timeline={config.timeline}
          onNext={dummyNext}
        />
      </section>

      <section id="step-6">
        <Step6Envelope
          teaser={config.envelopeTeaser}
          letterContent={config.envelopeLetterContent}
          onNext={dummyNext}
        />
      </section>

      <section id="step-7">
        <Step7Gallery photos={config.galleryPhotos} onNext={dummyNext} />
      </section>

      <section id="step-8">
        <Step8FinalSurprise
          triggerText={config.finalTriggerText}
          finalLines={config.finalMessageLines}
          finalOutro={config.finalOutroText}
          yourName={config.yourName}
          onReplay={onReplay}
        />
      </section>
    </div>
  );
};
