import { AppContentConfig } from '../types';

export const defaultContent: AppContentConfig = {
  herName: 'Lucky 🌸',
  yourName: 'mentor 🎀',
  
  landingSubhead: 'Some people are not meant to be described in a few words...',
  
  impressionQuote: 'Sometimes, someone simply leaves a beautiful impression.\nNot because they tried to,\nbut because there was something naturally special about them.',
  
  smilePhoto: {
    id: 'smile-1',
    url: '/assets/lucky_1.jpg',
    caption: 'Open shirt & lavender pink charm',
    location: 'Lotus Temple, Delhi',
    aspectRatio: 'portrait'
  },
  smileText: "Some smiles don't need an explanation.\nThey simply make an ordinary moment feel a little brighter.",
  
  beautyPhoto: {
    id: 'beauty-1',
    url: '/assets/lucky_2.jpg',
    caption: 'Elegance & quiet poise in the stairwell',
    location: 'Corner Sanctuary',
    aspectRatio: 'portrait'
  },
  poetryLines: [
    "Khoobsurati ki misaal poochho to naam na lunga,",
    "bas itna kahunga...",
    "kuch chehre aise hote hain,",
    "jinhe dekhkar lagta hai,",
    "Khuda ne fursat se banaya hai."
  ],
  poetrySubtext: 'A tribute to grace that moves silently.',
  
  beyondBeautyHeadline: "Beauty catches attention, but kindness, strength, ambition and the way someone carries themselves... that's what makes a person unforgettable.",
  
  traits: [
    {
      id: 'trait-grace',
      title: 'Grace',
      subtitle: 'Effortless Poise',
      description: 'The quiet composure and warmth you carry into every room, making everyone around feel instantly comfortable.',
      quote: 'Grace isn’t loud; it’s the quiet harmony you leave behind.',
      iconName: 'Sparkles'
    },
    {
      id: 'trait-strength',
      title: 'Strength',
      subtitle: 'Resilient Spirit',
      description: 'An unwavering inner pillar that handles challenges with patience, dignity, and soft determination.',
      quote: 'True strength is gentle, resolute, and unwavering.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'trait-ambition',
      title: 'Ambition',
      subtitle: 'Inspiring Vision',
      description: 'Your relentless focus on growth, learning, and crafting a meaningful life on your own distinct terms.',
      quote: 'Dreaming big, building quietly, reaching high.',
      iconName: 'Compass'
    }
  ],
  
  journeyPhoto: {
    id: 'journey-1',
    url: '/assets/lucky_3.jpg',
    caption: 'Sunflowers, warm sunlight & closed-eye bliss',
    location: 'Golden Hour Bloom',
    aspectRatio: 'portrait'
  },
  journeyText: "You're building your own story, one step at a time.\nKeep learning. Keep growing. Keep becoming the person you want to be.",
  
  timeline: [
    {
      stage: 'Learning',
      title: 'Curiosity & Discovery',
      description: 'Embracing new ideas, absorbing wisdom, and asking deep questions about the world.',
      quote: 'Every day brings a fresh perspective.'
    },
    {
      stage: 'Growth',
      title: 'Inner Evolution',
      description: 'Transforming experiences into wisdom, stepping into confidence with every challenge met.',
      quote: 'Roots run deep, branches reach wide.'
    },
    {
      stage: 'Dreams',
      title: 'Unapologetic Ambition',
      description: 'Visualizing meaningful milestones and working with focus to bring them to fruition.',
      quote: 'Passions turned into purpose.'
    },
    {
      stage: 'Future',
      title: 'Infinite Horizons',
      description: 'Stepping into a bright, self-made path where your potential has no ceiling.',
      quote: 'The best chapters are still being written.'
    }
  ],
  
  envelopeTeaser: "There's one more thing...",
  envelopeLetterContent: [
    "Thank you for being exactly who you are, Lucky.",
    "For the conversations.",
    "For the smiles.",
    "For the little moments that somehow become memorable."
  ],
  
  galleryPhotos: [
    {
      id: 'gal-1',
      url: '/assets/lucky_1.jpg',
      caption: 'Lotus Temple Glass Architecture',
      location: 'Lotus Temple, Delhi',
      aspectRatio: 'portrait'
    },
    {
      id: 'gal-2',
      url: '/assets/lucky_2.jpg',
      caption: 'Warm Stairwell Reflections',
      location: 'Corner Sanctuary',
      aspectRatio: 'portrait'
    },
    {
      id: 'gal-3',
      url: '/assets/lucky_3.jpg',
      caption: 'Sunflowers & Golden Sunlight',
      location: 'Golden Hour Bloom',
      aspectRatio: 'square'
    },
    {
      id: 'gal-4',
      url: '/assets/lucky_4.jpg',
      caption: 'Off-Shoulder Gown & Floral Arch',
      location: 'Fiore Sanctuary',
      aspectRatio: 'portrait'
    },
    {
      id: 'gal-5',
      url: '/assets/lucky_5.jpg',
      caption: 'Red Kurti & Pink Flower in Bloom',
      location: 'Heritage Garden',
      aspectRatio: 'wide'
    }
  ],
  
  finalTriggerText: 'One last message...',
  finalMessageLines: [
    "Some people enter our lives quietly,",
    "and somehow leave a beautiful mark.",
    "",
    "Whatever the future brings,",
    "I hope you always keep that beautiful smile,",
    "keep chasing your dreams,",
    "and keep becoming the best version of yourself.",
    "",
    "You deserve beautiful things. ✨"
  ],
  finalOutroText: "That's it...\nNo expectations.\nJust a little reminder that\nsomeone thinks you're genuinely special.",
  
  audioUrl: 'https://www.youtube.com/watch?v=y_GVDbfaiwQ',
  useSynthAudio: false
};
