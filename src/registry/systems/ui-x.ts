import { UISystem } from '../../schemas/uiSystem.js';

export const uiX: UISystem = {
  id: 'ui-x',
  name: 'UI-X',
  organization: 'UI-X Community',
  description: 'An open-source, source-owned component collection offering sleek, experimental, and modern UI components built with Next.js, Tailwind CSS, and TypeScript for creative developers.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'],
  docsUrl: 'https://ui-x.dev',
  repositoryUrl: 'https://github.com/ui-x/ui-x',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus indicators.'
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
  aesthetic: 'Modern experimental UI aesthetic: subtle grain textures, glowing accent edges, floating navigation pills, and interactive hover cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Creative technology showcases, experimental developer projects, and Next.js applications',
    'Developers wanting copy-paste UI blocks with a distinct aesthetic edge',
    'Modern landing pages'
  ],
  avoidFor: [
    'Traditional government enterprise portals'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Distinct visual personality with subtle glow and texture',
    'Clean TypeScript definitions and Tailwind CSS classes'
  ],
  weaknesses: [
    'Experimental design focus'
  ],
  tags: [
    'ui-x',
    'uix',
    'experimental',
    'creative',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['UI-X', 'UIX', 'UI X', 'UI-X Components'],
  relatedSystems: ['cult-ui', 'aceternity-ui', 'shadcn-ui'],
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
      canonicalName: 'GlowCard',
      description: 'Card with gradient edge glow following cursor movement.',
      importExample: "// Copy from components/uix/glow-card.tsx\nimport { GlowCard } from '@/components/ui/glow-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use GlowCard and FloatingNav for creative landing pages.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
