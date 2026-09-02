import { UISystem } from '../../schemas/uiSystem.js';

export const scrollxUi: UISystem = {
  id: 'scrollx-ui',
  name: 'ScrollX UI',
  organization: 'ScrollX UI Community',
  description: 'An open-source, source-owned component library providing smooth horizontal scroll containers, parallax showcase carousels, and timeline controllers built with React, Tailwind CSS, and Framer Motion.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'],
  docsUrl: 'https://scrollxui.dev',
  repositoryUrl: 'https://github.com/scrollx-ui/scrollx-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides keyboard accessible scroll navigation and snap points.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with horizontal snap utilities',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Smooth horizontal scrollytelling aesthetic: momentum snap scrolling, parallax image cards, progress indicator tracks, and dynamic timeline nodes.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Interactive case studies, product feature tours, project timelines, and scrollytelling experiences',
    'Horizontal scroll galleries with smooth keyboard and trackpad snap',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Static printable documents'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Optimized horizontal scroll physics with CSS scroll-snap and Framer Motion',
    'Seamless drop-in compatibility with Tailwind CSS'
  ],
  weaknesses: [
    'Horizontal scroll and timeline focus'
  ],
  tags: [
    'scrollx-ui',
    'scrollx',
    'horizontal-scroll',
    'scrollytelling',
    'parallax',
    'timeline',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['ScrollX UI', 'ScrollXUI', 'ScrollX', 'Scroll-X UI'],
  relatedSystems: ['motion-primitives', 'skiper-ui', 'magic-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install framer-motion clsx tailwind-merge lucide-react',
      packages: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    scroller: {
      canonicalName: 'HorizontalScroll',
      description: 'Horizontal scrollytelling track with momentum snap and progress bar.',
      importExample: "// Copy from components/scrollx/horizontal-scroll.tsx\nimport { HorizontalScroll } from '@/components/ui/horizontal-scroll';",
      docSubUrl: 'docs/components/horizontal-scroll'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use HorizontalScroll for feature showcases and timelines.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
