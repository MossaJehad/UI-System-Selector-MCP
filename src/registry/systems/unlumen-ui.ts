import { UISystem } from '../../schemas/uiSystem.js';

export const unlumenUi: UISystem = {
  id: 'unlumen-ui',
  name: 'unlumen UI',
  organization: 'unlumen Community',
  description: 'An open-source, source-owned component collection engineered with React, Tailwind CSS, and subtle physics animations, providing minimalist glowing borders, frosted glass overlays, and polished micro-interactions.',
  category: 'source-owned',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://unlumen.com',
  repositoryUrl: 'https://github.com/unlumen/unlumen',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus rings.'
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
  aesthetic: 'Ultra-clean minimalist dark aesthetic: monochromatic gray tones, subtle hairline borders (`border-neutral-800`), frosted acrylic backdrops, and understated glowing highlights.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Minimalist developer portfolios, dark-mode SaaS dashboards, and tech blogs',
    'Developers who prefer subtle understatement over flashy animations',
    'Next.js applications using copy-paste component architecture'
  ],
  avoidFor: [
    'Bright colorful consumer applications'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Refined monochromatic visual discipline',
    'Seamless drop-in compatibility with shadcn/ui and Tailwind CSS'
  ],
  weaknesses: [
    'Minimalist dark-mode focus'
  ],
  tags: [
    'unlumen-ui',
    'unlumen',
    'minimalist',
    'monochrome',
    'dark-mode',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['unlumen UI', 'Unlumen', 'unlumenUI'],
  relatedSystems: ['kibo-ui', 'origin-ui', 'shadcn-ui'],
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
    card: {
      canonicalName: 'MinimalCard',
      description: 'Monochrome card with hairline border and subtle hover glow.',
      importExample: "// Copy from components/unlumen/card.tsx\nimport { MinimalCard } from '@/components/ui/minimal-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use monochromatic neutral palettes (`neutral-900`, `neutral-800`).',
      'Keep animations subtle and understated.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with neutral color scales.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
