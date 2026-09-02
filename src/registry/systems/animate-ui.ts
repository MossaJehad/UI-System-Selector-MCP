import { UISystem } from '../../schemas/uiSystem.js';

export const animateUi: UISystem = {
  id: 'animate-ui',
  name: 'Animate UI',
  organization: 'Animate UI Community',
  description: 'An open-source, source-owned collection of animated React and Tailwind CSS components powered by Framer Motion, providing smooth layout morphs, magnetic buttons, text revealers, and micro-interactions for modern web applications.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://animate-ui.com',
  repositoryUrl: 'https://github.com/animate-ui/animate-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides reduced-motion accessibility fallbacks and keyboard accessible triggers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with custom Framer Motion transitions',
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
  aesthetic: 'Fluid animated modern startup aesthetic: smooth magnetic hover pulls, accordion card morphs, gradient glow borders, and fluid drawer entrances.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Next.js & React startups wanting copy-paste animated components beyond standard static shadcn/ui',
    'Interactive landing pages, hero banners, and feature showcases',
    'Modern creative developer portfolios'
  ],
  avoidFor: [
    'Static legacy enterprise applications'
  ],
  strengths: [
    '100% source-owned copy-paste code with zero package lock-in',
    'Rich motion animations powered by Framer Motion and Tailwind CSS',
    'Drop-in compatibility with standard shadcn/ui component trees'
  ],
  weaknesses: [
    'Animation focus; requires Framer Motion'
  ],
  tags: [
    'animate-ui',
    'framer-motion',
    'animations',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Animate UI', 'AnimateUI', 'Animate CSS UI'],
  relatedSystems: ['motion-primitives', 'magic-ui', 'aceternity-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install framer-motion clsx tailwind-merge lucide-react',
      packages: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss', 'framer-motion']
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'AnimatedCard',
      description: 'Card with animated magnetic hover glow and physics transition.',
      importExample: "// Copy from components/animate/card.tsx\nimport { AnimatedCard } from '@/components/ui/animated-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use Framer Motion for micro-interactions.',
      'Respect `prefers-reduced-motion` media queries.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with custom animation timing curves.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
