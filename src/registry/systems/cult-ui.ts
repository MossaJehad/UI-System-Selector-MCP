import { UISystem } from '../../schemas/uiSystem.js';

export const cultUi: UISystem = {
  id: 'cult-ui',
  name: 'Cult UI',
  organization: 'Cult UI Community',
  description: 'An open-source, source-owned component collection of expressive React and Tailwind CSS micro-interactions, neo-brutalist buttons, dynamic island widgets, retro pixel shaders, and interactive SVG animations.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'experimental', 'retro'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://cult-ui.com',
  repositoryUrl: 'https://github.com/nicoalbanese/cult-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard triggers with custom creative visual wrappers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme configuration',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Edgy, neo-brutalist and creative interactive aesthetic: springy physics buttons, dynamic island floating pills, pixel-noise background textures, and playful hover micro-interactions.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Creative agency websites, indie developer portfolios, and experimental web apps',
    'Neo-brutalist and playful micro-interaction showcases',
    'Source-owned React components built on Tailwind CSS and Framer Motion'
  ],
  avoidFor: [
    'Conservative enterprise banking portals'
  ],
  strengths: [
    'Unique expressive micro-interactions not found in standard component kits',
    'Specialized creative components (DynamicIsland, PixelTrail, ShimmerText, NeoButton, GlitchText)',
    '100% source-owned copy-paste code with zero package lock-in'
  ],
  weaknesses: [
    'Expressive niche visual style'
  ],
  tags: [
    'cult-ui',
    'neo-brutalism',
    'micro-interactions',
    'source-owned',
    'copy-paste',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Cult UI', 'CultUI', 'Cult Components'],
  relatedSystems: ['aceternity-ui', 'magic-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npm install framer-motion lucide-react clsx tailwind-merge',
      packages: ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss', 'framer-motion']
    }
  },
  componentGuidance: {
    dynamicisland: {
      canonicalName: 'DynamicIsland',
      description: 'Expandable floating pill widget inspired by mobile Dynamic Island interactions.',
      importExample: "// Copy from components/cult/dynamic-island.tsx\nimport { DynamicIsland } from '@/components/ui/dynamic-island';",
      docSubUrl: 'docs/components/dynamic-island'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component files directly into the user’s project.',
      'Use Framer Motion for expressive physics-based animations.',
      'Apply neo-brutalist borders and shadow offsets where appropriate.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with Cult UI animation keyframes.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
