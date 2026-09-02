import { UISystem } from '../../schemas/uiSystem.js';

export const cosmicUi: UISystem = {
  id: 'cosmic-ui',
  name: 'Cosmic UI',
  organization: 'Cosmic UI Community',
  description: 'An open-source, source-owned component library built with Tailwind CSS, React, and Framer Motion, delivering glowing nebula cards, cosmic starfield backgrounds, floating glass badges, and futuristic dark-mode UI components.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled', 'retro'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://cosmic-ui.vercel.app',
  repositoryUrl: 'https://github.com/cosmic-ui/cosmic-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard triggers and high-contrast dark background readability.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with cosmic nebula gradients',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'Cosmic deep-space aesthetic: starry deep navy/violet backgrounds, glowing galactic aurora cards, glassmorphism blur layers, and shimmering text highlights.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Space, AI, and developer tool landing pages wanting a cosmic sci-fi look',
    'Interactive web applications with animated starfield backgrounds and glowing cards',
    'Modern Next.js & Tailwind CSS projects'
  ],
  avoidFor: [
    'Traditional corporate accounting ledgers'
  ],
  strengths: [
    'Stunning cosmic space and glowing nebula visual aesthetic',
    '100% source-owned copy-paste code compatible with shadcn/ui',
    'Smooth Framer Motion entrance and glow transitions'
  ],
  weaknesses: [
    'Dark-mode space aesthetic focus'
  ],
  tags: [
    'cosmic-ui',
    'cosmic',
    'space',
    'framer-motion',
    'nebula',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Cosmic UI', 'CosmicUI', 'Cosmic Design'],
  relatedSystems: ['aceternity-ui', 'magic-ui', 'arwes'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npm install framer-motion clsx tailwind-merge lucide-react',
      packages: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss', 'framer-motion']
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'NebulaCard',
      description: 'Glowing nebula border card with cosmic star background.',
      importExample: "// Copy from components/cosmic/nebula-card.tsx\nimport { NebulaCard } from '@/components/ui/nebula-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s project.',
      'Use deep space dark background canvas (`bg-slate-950` or `bg-black`).',
      'Use glowing gradient borders for interactive hover states.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with cosmic nebula colors.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
