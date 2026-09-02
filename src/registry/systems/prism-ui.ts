import { UISystem } from '../../schemas/uiSystem.js';

export const prismUi: UISystem = {
  id: 'prism-ui',
  name: 'Prism UI',
  organization: 'Prism UI Community',
  description: 'An open-source, source-owned component library built for React and Tailwind CSS, featuring colorful refractive gradients, translucent prism card surfaces, and dynamic color refraction effects.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'],
  docsUrl: 'https://prismui.tech',
  repositoryUrl: 'https://github.com/prism-ui/prism-ui',
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
    format: 'Tailwind CSS theme tokens with spectral prism gradient presets',
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
  aesthetic: 'Refractive prism aesthetic: multi-spectrum color gradients, translucent glass refraction effects, rainbow hover highlights, and luminous button borders.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Creative technology showcases, AI application landing pages, and designer portfolios',
    'Spectral gradient cards and luminous border effects',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Monochromatic corporate banking portals'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Luminous spectral gradient and refraction aesthetics',
    'Seamless drop-in compatibility with Tailwind CSS and Next.js'
  ],
  weaknesses: [
    'Refractive gradient aesthetic focus'
  ],
  tags: [
    'prism-ui',
    'prism',
    'gradients',
    'refraction',
    'luminous',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Prism UI', 'PrismUI', 'Prism'],
  relatedSystems: ['aceternity-ui', 'magic-ui', 'shadcn-ui'],
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
      canonicalName: 'PrismCard',
      description: 'Card with multi-spectrum refractive gradient border on hover.',
      importExample: "// Copy from components/prism/prism-card.tsx\nimport { PrismCard } from '@/components/ui/prism-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use PrismCard and LuminousButton for creative feature highlights.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with spectral gradient tokens.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
