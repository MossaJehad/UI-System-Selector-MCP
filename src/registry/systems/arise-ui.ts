import { UISystem } from '../../schemas/uiSystem.js';

export const ariseUi: UISystem = {
  id: 'arise-ui',
  name: 'Arise UI',
  organization: 'Arise UI Community',
  description: 'An open-source, copy-paste React component collection built with Tailwind CSS and Framer Motion, offering modern gradient borders, animated pricing matrices, morphing dialogs, and sleek SaaS hero blocks.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://ariseui.com',
  repositoryUrl: 'https://github.com/arise-ui/arise-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Accessible semantic HTML elements with keyboard navigation support.'
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
  aesthetic: 'Modern dark-mode SaaS aesthetic: shimmering gradient borders, interactive pricing tables with monthly/yearly toggles, feature badges, and glass cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SaaS product websites, pricing tiers, and modern conversion funnels',
    'Developers using copy-paste shadcn/ui architectures in Next.js',
    'Interactive landing page components'
  ],
  avoidFor: [
    'Legacy non-React apps'
  ],
  strengths: [
    '100% source-owned copy-paste code with zero package lock-in',
    'Specialized conversion-oriented components: Pricing tables, comparison grids, hero CTAs',
    'Clean Tailwind CSS integration'
  ],
  weaknesses: [
    'SaaS landing page focus'
  ],
  tags: [
    'arise-ui',
    'saas',
    'pricing-table',
    'framer-motion',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Arise UI', 'AriseUI', 'Arise'],
  relatedSystems: ['launch-ui', 'origin-ui', 'shadcn-ui'],
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
    pricing: {
      canonicalName: 'PricingTable',
      description: 'Animated pricing table with billing frequency switch and highlighted plan.',
      importExample: "// Copy from components/arise/pricing-table.tsx\nimport { PricingTable } from '@/components/ui/pricing-table';",
      docSubUrl: 'docs/components/pricing-table'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use PricingTable and ComparisonGrid for SaaS landing pages.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
