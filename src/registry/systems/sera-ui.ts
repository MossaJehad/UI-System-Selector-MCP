import { UISystem } from '../../schemas/uiSystem.js';

export const seraUi: UISystem = {
  id: 'sera-ui',
  name: 'Sera UI',
  organization: 'Sera UI Community',
  description: 'An open-source, source-owned component library built for React and Tailwind CSS, featuring serene pastel gradients, translucent frosted glass cards, soft glow hover states, and calm micro-interactions.',
  category: 'source-owned',
  secondaryCategories: ['styled', 'creative-tool'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'],
  docsUrl: 'https://seraui.com',
  repositoryUrl: 'https://github.com/sera-ui/sera-ui',
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
    format: 'Tailwind CSS theme tokens with serene pastel scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'spacious',
  aesthetic: 'Serene ethereal aesthetic: soft lilac (#c8b6ff) / seafoam (#b8e0d2) pastel gradients, translucent acrylic card backdrops, gentle float animations, and spacious layouts.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Mindfulness apps, meditation portals, creative portfolios, and lifestyle products',
    'Developers wanting calm, gentle visual aesthetics without harsh contrasts',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Aggressive high-density trading software'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Calm, serene, mindful visual atmosphere',
    'Clean Tailwind CSS structure'
  ],
  weaknesses: [
    'Ethereal pastel aesthetic focus'
  ],
  tags: [
    'sera-ui',
    'sera',
    'serene',
    'pastel',
    'mindfulness',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Sera UI', 'SeraUI', 'Sera'],
  relatedSystems: ['kalyx', 'hana-ui', 'shadcn-ui'],
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
      canonicalName: 'SereneCard',
      description: 'Card with translucent frosted glass background and soft lilac glow.',
      importExample: "// Copy from components/sera/serene-card.tsx\nimport { SereneCard } from '@/components/ui/serene-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use serene pastel colors (lilac, seafoam, soft blue) with spacious padding.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with pastel tokens.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
