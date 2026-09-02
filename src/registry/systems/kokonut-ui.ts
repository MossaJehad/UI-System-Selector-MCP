import { UISystem } from '../../schemas/uiSystem.js';

export const kokonutUi: UISystem = {
  id: 'kokonut-ui',
  name: 'Kokonut UI',
  organization: 'Kokonut UI Community',
  description: 'An open-source, source-owned collection of modern, copy-paste React and Tailwind CSS components, featuring animated profile cards, interactive pricing switches, input visualizers, and polished micro-interactions.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['lucide-react', 'clsx', 'tailwind-merge', 'framer-motion'],
  docsUrl: 'https://kokonutui.com',
  repositoryUrl: 'https://github.com/kokonut-space/kokonutui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard focus rings and semantic DOM structure.'
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
  aesthetic: 'Modern startup SaaS aesthetic: sleek interactive card hover states, animated toggle switches, gradient badge pills, and polished pricing tiers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Next.js & React startups wanting source-owned copy-paste UI blocks beyond standard shadcn/ui',
    'Interactive pricing calculators, card grids, and input micro-interactions',
    'Modern landing pages and product dashboards'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    '100% source-owned copy-paste code with zero package lock-in',
    'High visual craft and refined micro-interactions',
    'Seamless drop-in compatibility with shadcn/ui directories'
  ],
  weaknesses: [
    'Copy-paste component model requires manual code updates'
  ],
  tags: [
    'kokonut-ui',
    'shadcn',
    'source-owned',
    'copy-paste',
    'tailwind',
    'react',
    'next',
    'hidden-gem'
  ],
  aliases: ['Kokonut UI', 'Kokonut', 'Kokonut Space'],
  relatedSystems: ['origin-ui', 'kibo-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx shadcn@latest add ... # or copy code from kokonutui.com',
      packages: ['lucide-react', 'clsx', 'tailwind-merge', 'framer-motion'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'ProfileCard',
      description: 'Animated interactive user profile card with badge pills.',
      importExample: "// Copy from components/kokonut/profile-card.tsx\nimport { ProfileCard } from '@/components/ui/profile-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code into the user’s `components/ui/` directory.',
      'Use `lucide-react` for icons and `cn()` from `@/lib/utils`.',
      'Keep components source-owned and editable in repo.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme via Tailwind CSS variables.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
