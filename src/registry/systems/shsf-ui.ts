import { UISystem } from '../../schemas/uiSystem.js';

export const shsfUi: UISystem = {
  id: 'shsf-ui',
  name: 'SHSF UI',
  organization: 'SHSF UI Community',
  description: 'An open-source, source-owned component library crafted with React and Tailwind CSS, featuring ultra-fast search bars, command palettes, filter drawers, and keyboard-first navigation widgets.',
  category: 'source-owned',
  secondaryCategories: ['developer-tool', 'saas'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'cmdk'],
  docsUrl: 'https://shsfui.com',
  repositoryUrl: 'https://github.com/shsf-ui/shsf-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Keyboard-first command palette navigation with full ARIA combobox patterns.'
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
  density: 'compact/dense',
  aesthetic: 'Fast keyboard-driven productivity aesthetic: instant modal command palettes (`Cmd+K`), quick filter tag pills, hotkey badges (`⌘+Shift+P`), and split-second fuzzy search lists.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developer tools, SaaS navigation menus, command palettes, and fast-search interfaces',
    'Keyboard-first productivity applications',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Touchscreen-only kiosk displays'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Optimized for instant keyboard-driven search and navigation',
    'Clean integration with `cmdk` and Tailwind CSS'
  ],
  weaknesses: [
    'Search and command palette focus'
  ],
  tags: [
    'shsf-ui',
    'shsf',
    'command-palette',
    'search',
    'cmdk',
    'keyboard-first',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['SHSF UI', 'SHSFUI', 'SHSF'],
  relatedSystems: ['origin-ui', 'shadcn-ui', 'kibo-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install cmdk clsx tailwind-merge lucide-react',
      packages: ['cmdk', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    command: {
      canonicalName: 'CommandMenu',
      description: 'Keyboard-driven command menu palette with fuzzy search.',
      importExample: "// Copy from components/shsf/command-menu.tsx\nimport { CommandMenu } from '@/components/ui/command-menu';",
      docSubUrl: 'docs/components/command-menu'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use CommandMenu for `Cmd+K` global search and hotkeys.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
