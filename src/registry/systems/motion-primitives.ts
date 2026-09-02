import { UISystem } from '../../schemas/uiSystem.js';

export const motionPrimitives: UISystem = {
  id: 'motion-primitives',
  name: 'Motion Primitives',
  organization: 'Julien Thibeaut (ibelick)',
  description: 'An open-source, source-owned collection of animated UI components built with Framer Motion, Radix Primitives, and Tailwind CSS, providing smooth morphing dialogs, text shuffles, magnetic buttons, and physics-driven micro-interactions.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled', 'experimental'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://motion-primitives.com',
  repositoryUrl: 'https://github.com/ibelick/motion-primitives',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard triggers and reduced-motion fallback states.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with Framer Motion layout transitions',
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
  aesthetic: 'Ultra-fluid physics animation style: morphing dialog cards that expand smoothly from list items, magnetic cursor attraction, text scramble reveals, and springy floating action dock bars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Interactive developer portfolios, high-craft creative websites, and mobile-like web apps',
    'Morphing layout transitions (expanding cards, smooth layout id transitions)',
    'Next.js applications wanting copy-paste Framer Motion primitives'
  ],
  avoidFor: [
    'Heavy static enterprise data entry forms'
  ],
  strengths: [
    'Benchmark craftsmanship for Framer Motion layout animations and morphing dialogs',
    '100% source-owned copy-paste code with zero extra package lock-in',
    'Drop-in compatibility with standard shadcn/ui and Tailwind projects'
  ],
  weaknesses: [
    'Animation-centric focus; requires Framer Motion runtime'
  ],
  tags: [
    'motion-primitives',
    'framer-motion',
    'animations',
    'morphing',
    'source-owned',
    'copy-paste',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Motion Primitives', 'MotionPrimitives', 'ibelick motion'],
  relatedSystems: ['magic-ui', 'aceternity-ui', 'cult-ui', 'shadcn-ui'],
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
    morphingdialog: {
      canonicalName: 'MorphingDialog',
      description: 'Card that smoothly morphs and expands into a modal dialog using Framer Motion layoutId.',
      importExample: "import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContent } from '@/components/core/morphing-dialog';\n\n<MorphingDialog><MorphingDialogTrigger>Open Card</MorphingDialogTrigger><MorphingDialogContent>Expanded Details</MorphingDialogContent></MorphingDialog>",
      docSubUrl: 'docs/morphing-dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Framer Motion `layoutId` for morphing component transitions.',
      'Copy component files directly into `components/core/` or `components/ui/`.',
      'Use Tailwind CSS for custom styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with custom animations.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid with Framer Motion layout props.'
  }
};
