export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  location?: string;
  date?: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape' | 'wide';
}

export interface TraitCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  iconName: string;
}

export interface TimelineItem {
  stage: string;
  title: string;
  description: string;
  quote: string;
}

export interface AppContentConfig {
  herName: string;
  yourName: string;
  
  // Landing
  landingSubhead: string;
  
  // Step 1 - First Impression
  impressionQuote: string;
  
  // Step 2 - Her Smile
  smilePhoto: PhotoItem;
  smileText: string;
  
  // Step 3 - Her Beauty
  beautyPhoto: PhotoItem;
  poetryLines: string[];
  poetrySubtext: string;
  
  // Step 4 - Beyond Beauty
  beyondBeautyHeadline: string;
  traits: TraitCard[];
  
  // Step 5 - Her Journey
  journeyPhoto: PhotoItem;
  journeyText: string;
  timeline: TimelineItem[];
  
  // Step 6 - A Little Surprise (Envelope)
  envelopeTeaser: string;
  envelopeLetterContent: string[];
  
  // Step 7 - Gallery
  galleryPhotos: PhotoItem[];
  
  // Step 8 - Final Surprise
  finalTriggerText: string;
  finalMessageLines: string[];
  finalOutroText: string;
  
  // Audio Config
  audioUrl?: string;
  useSynthAudio: boolean;
}

export type ViewMode = 'step' | 'scroll';
