import { UISystem } from '../../schemas/uiSystem.js';

export const reui: UISystem = {
  id: 'reui',
  name: 'ReUI',
  organization: 'ReUI Community',
  description: 'An open-source, source-owned component library built for React and Tailwind CSS, featuring reusable accessible primitives, modular card blocks, modal dialogs, and responsive layout utilities.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://reui.dev',
  repositoryUrl: 'https://github.com/reui/reui',
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
  aesthetic: 'Clean modern SaaS aesthetic: neutral gray cards, subtle hover outlines, accessible button states, and structured grid sections.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting reusable copy-paste React and Tailwind CSS components',
    'Next.js applications using source-owned copy-paste architectures',
    'Fast web application development'
  ],
  avoidFor: [
    'Legacy non-React apps'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Clean, readable Tailwind CSS classes',
    'Seamless drop-in compatibility with shadcn/ui'
  ],
  weaknesses: [
    'React and Next.js focus'
  ],
  tags: [
    'reui',
    're-ui',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['ReUI', 'Re-UI', 'Re UI'],
  relatedSystems: ['origin-ui', 'shadcn-ui', 'kibo-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install clsx tailwind-merge lucide-react',
      packages: ['clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'Card',
      description: 'Clean responsive card component with header, content, and footer.',
      importExample: "// Copy from components/reui/card.tsx\nimport { Card } from '@/components/ui/card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use Tailwind CSS for styling.',
      'Maintain accessible focus rings.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
