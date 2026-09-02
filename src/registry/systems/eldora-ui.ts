import { UISystem } from '../../schemas/uiSystem.js';

export const eldoraUi: UISystem = {
  id: 'eldora-ui',
  name: 'Eldora UI',
  organization: 'Eldora UI Community (Kapa99)',
  description: 'An open-source collection of animated components, bento grid layouts, interactive card carousels, and landing page blocks built with React, Tailwind CSS, and Framer Motion for modern web products.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://eldoraui.site',
  repositoryUrl: 'https://github.com/kapa99/eldoraui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard triggers and semantic markup.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens',
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
  aesthetic: 'Modern startup bento aesthetic: dark-mode glass cards, glowing neon borders, animated testimonial sliders, and high-impact hero headers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SaaS landing pages, AI product showcases, and developer portfolio websites',
    'Bento grid layouts with animated micro-features',
    'Next.js applications using copy-paste shadcn/ui component architecture'
  ],
  avoidFor: [
    'Traditional corporate administrative ledgers'
  ],
  strengths: [
    '100% source-owned copy-paste code with zero npm package lock-in',
    'Stunning bento grid and interactive landing page blocks',
    'Seamless drop-in compatibility with Tailwind CSS and Next.js'
  ],
  weaknesses: [
    'Marketing landing page focus'
  ],
  tags: [
    'eldora-ui',
    'bento-grid',
    'framer-motion',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Eldora UI', 'EldoraUI', 'Eldora'],
  relatedSystems: ['magic-ui', 'aceternity-ui', 'shadcn-ui'],
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
    bento: {
      canonicalName: 'BentoGrid',
      description: 'Interactive animated bento grid item with hover elevation.',
      importExample: "// Copy from components/eldora/bento-grid.tsx\nimport { BentoGrid, BentoCard } from '@/components/ui/bento-grid';",
      docSubUrl: 'docs/components/bento-grid'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use BentoGrid and BentoCard for feature highlights.',
      'Apply dark background tones (`bg-neutral-950`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with custom gradient colors.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
