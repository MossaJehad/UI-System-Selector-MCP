import { UISystem } from '../../schemas/uiSystem.js';

export const diceUi: UISystem = {
  id: 'dice-ui',
  name: 'Dice UI',
  organization: 'Dice UI Community',
  description: 'An open-source, source-owned component library built for React, Next.js, and Tailwind CSS, providing specialized high-interaction components, multi-step wizards, code comparison diff viewers, and command menu widgets.',
  category: 'source-owned',
  secondaryCategories: ['developer-tool', 'saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['lucide-react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://diceui.com',
  repositoryUrl: 'https://github.com/diceui/diceui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on top of accessible React primitives with keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme variables',
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
  aesthetic: 'Modern developer tool aesthetic: dark mode command bars, inline code diff inspectors, animated tabs, and interactive stepper workflows.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developer tools, code diff viewers, and documentation hubs',
    'Interactive onboarding wizards and step-by-step setup guides',
    'Source-owned component architectures on Next.js & Tailwind CSS'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Specialized developer UI components (DiffViewer, CommandBar, Stepper, AudioTimeline)',
    '100% source-owned: zero lock-in with direct copy-paste JSX',
    'Full dark mode support'
  ],
  weaknesses: [
    'Requires manual copy-paste'
  ],
  tags: [
    'dice-ui',
    'source-owned',
    'copy-paste',
    'developer-tool',
    'diff-viewer',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Dice UI', 'DiceUI', 'Dice Components'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx shadcn@latest add ... # or copy code from diceui.com',
      packages: ['lucide-react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    diff: {
      canonicalName: 'DiffViewer',
      description: 'Side-by-side or unified code difference inspector.',
      importExample: "// Copy from components/dice/diff-viewer.tsx\nimport { DiffViewer } from '@/components/ui/diff-viewer';",
      docSubUrl: 'components/diff-viewer'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code into user’s project.',
      'Use Tailwind CSS for custom styling.',
      'Use Lucide icons.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme in Tailwind CSS.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
