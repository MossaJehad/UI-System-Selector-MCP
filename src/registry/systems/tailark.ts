import { UISystem } from '../../schemas/uiSystem.js';

export const tailark: UISystem = {
  id: 'tailark',
  name: 'Tailark UI',
  organization: 'Tailark Community',
  description: 'An open-source, source-owned component library pairing Ark UI’s headless multi-framework state machine engine with Tailwind CSS styling and shadcn/ui copy-paste conventions for React and Next.js.',
  category: 'source-owned',
  secondaryCategories: ['headless', 'saas', 'accessibility-focused'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['@ark-ui/react', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://tailark.dev',
  repositoryUrl: 'https://github.com/tailark/tailark',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Powered by Zag.js state machines via Ark UI for uncompromising accessibility.'
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
  aesthetic: 'State-machine driven modern SaaS aesthetic: rock-solid popovers, comboboxes with virtual scrolling, color pickers, and clean neutral Tailwind borders.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers who want Ark UI / Zag.js state machine power combined with shadcn/ui copy-paste Tailwind ergonomics',
    'Complex UI widgets: ColorPicker, PinInput, Splitter, Slider, Combobox',
    'Next.js applications'
  ],
  avoidFor: [
    'Non-React frameworks (use Ark UI directly)'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Backed by Zag.js state machines (Ark UI) for bulletproof interactive state',
    'Clean Tailwind CSS styling'
  ],
  weaknesses: [
    'Requires Ark UI headless understanding'
  ],
  tags: [
    'tailark',
    'ark-ui',
    'zag-js',
    'state-machine',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Tailark UI', 'Tailark', 'TailarkUI'],
  relatedSystems: ['ark-ui', 'park-ui', 'jolly-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library', 'headless'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install @ark-ui/react clsx tailwind-merge lucide-react',
      packages: ['@ark-ui/react', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    combobox: {
      canonicalName: 'Combobox',
      description: 'Accessible combobox with autocomplete powered by Ark UI.',
      importExample: "// Copy from components/tailark/combobox.tsx\nimport { Combobox } from '@/components/ui/combobox';",
      docSubUrl: 'docs/components/combobox'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use `@ark-ui/react` primitives for state management.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
