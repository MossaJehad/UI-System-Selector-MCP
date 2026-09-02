import { UISystem } from '../../schemas/uiSystem.js';

export const skiperUi: UISystem = {
  id: 'skiper-ui',
  name: 'Skiper UI',
  organization: 'Skiper UI Community',
  description: 'An open-source, source-owned component library providing modern animated React and Tailwind CSS UI components, 3D interactive carousels, text scramble effects, and particle hero headers.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://skiper-ui.com',
  repositoryUrl: 'https://github.com/skiper-ui/skiper-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard triggers and reduced-motion options.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with Framer Motion easing curves',
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
  aesthetic: 'Creative 3D animated web aesthetic: interactive 3D perspective carousels, glowing particle rings, text scramble reveals, and floating glass navigation bars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Creative technology showcases, Web3 landing pages, and interactive developer portfolios',
    '3D perspective card carousels and animated text effects',
    'Next.js projects using source-owned copy-paste architecture'
  ],
  avoidFor: [
    'Traditional enterprise business software'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Unique 3D interactive carousel and perspective animation components',
    'Drop-in compatibility with shadcn/ui and Tailwind CSS'
  ],
  weaknesses: [
    'Visual flair focus'
  ],
  tags: [
    'skiper-ui',
    '3d-carousel',
    'framer-motion',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Skiper UI', 'SkiperUI', 'Skiper'],
  relatedSystems: ['magic-ui', 'aceternity-ui', 'cult-ui'],
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
    carousel: {
      canonicalName: 'PerspectiveCarousel',
      description: '3D perspective card carousel with smooth swipe drag physics.',
      importExample: "// Copy from components/skiper/perspective-carousel.tsx\nimport { PerspectiveCarousel } from '@/components/ui/perspective-carousel';",
      docSubUrl: 'docs/components/carousel'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use 3D perspective carousels for portfolio and feature showcases.',
      'Use Tailwind CSS for layout styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
