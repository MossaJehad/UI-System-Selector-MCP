import { UISystem } from '../../schemas/uiSystem.js';

export const radUi: UISystem = {
  id: 'rad-ui',
  name: 'Rad UI',
  organization: 'Rad UI Community',
  description: 'An open-source, source-owned component library providing accessible React and Tailwind CSS components with a focus on speed, composability, and clean modern aesthetics.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'accessibility-focused'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', '@radix-ui/react-primitive'],
  docsUrl: 'https://radui.dev',
  repositoryUrl: 'https://github.com/rad-ui/rad-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on top of Radix headless primitives for AAA accessibility.'
  },
  darkMode: true,
  rtlSupport: true,
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
  aesthetic: 'Modern crisp SaaS aesthetic: smooth rounded corners, clean neutral borders, accessible keyboard focus rings, and high contrast.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Fast-moving React and Next.js applications wanting copy-paste UI components',
    'Developers who appreciate Radix Primitives accessibility with custom Tailwind styling',
    'Modern web dashboards'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Flawless Radix Primitives accessibility foundation',
    'Clean, uncluttered Tailwind CSS structure'
  ],
  weaknesses: [
    'React focus'
  ],
  tags: [
    'rad-ui',
    'radui',
    'radix',
    'accessibility',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Rad UI', 'RadUI', 'Rad'],
  relatedSystems: ['shadcn-ui', 'origin-ui', 'radix-primitives'],
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
    dialog: {
      canonicalName: 'Modal',
      description: 'Accessible modal dialog with overlay backdrop blur.',
      importExample: "// Copy from components/rad/modal.tsx\nimport { Modal } from '@/components/ui/modal';",
      docSubUrl: 'docs/components/modal'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use Radix headless primitives where accessible state is needed.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
