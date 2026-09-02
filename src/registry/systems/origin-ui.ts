import { UISystem } from '../../schemas/uiSystem.js';

export const originUi: UISystem = {
  id: 'origin-ui',
  name: 'Origin UI',
  organization: 'Origin UI Community',
  description: 'An extensive open-source collection of copy-paste, source-owned React components built on Radix Primitives and Tailwind CSS, providing hundreds of specialized micro-interactions, input variants, sliders, toggles, badges, and search bars for modern web apps.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['lucide-react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://originui.com',
  repositoryUrl: 'https://github.com/origin-space/originui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on top of Radix UI primitives with accessible keyboard navigation and focus rings.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme variables matching shadcn/ui conventions',
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
  aesthetic: 'Ultra-refined modern micro-interaction style: 50+ button variations, animated password strength meters, interactive tag inputs, and slider gauges.',
  noveltyLevel: 'established',
  bestFor: [
    'React and Next.js applications wanting copy-paste source-owned component variations beyond standard shadcn/ui',
    'Rich interactive form inputs (credit card formatters, phone number pickers, password strength indicators)',
    'Modern SaaS apps built on Tailwind CSS'
  ],
  avoidFor: [
    'Non-Tailwind or non-React projects'
  ],
  strengths: [
    'Deepest library of specialized component micro-variations (50+ inputs, 30+ buttons, 20+ sliders)',
    '100% source-owned: copy-paste directly into your codebase with zero extra npm package lock-in',
    'Drop-in compatible with standard shadcn/ui component directory structure'
  ],
  weaknesses: [
    'Copy-paste component architecture requires manual updates'
  ],
  tags: [
    'origin-ui',
    'shadcn',
    'source-owned',
    'copy-paste',
    'tailwind',
    'react',
    'next',
    'micro-interactions',
    'established'
  ],
  aliases: ['Origin UI', 'OriginUI', 'Origin Space'],
  relatedSystems: ['shadcn-ui', 'kibo-ui', 'magic-ui', 'radix-primitives'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx shadcn@latest add ... # or copy component code from originui.com',
      packages: ['lucide-react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Copy the component JSX code from originui.com into your `components/` folder.'
    }
  },
  componentGuidance: {
    input: {
      canonicalName: 'InputWithPasswordStrength',
      description: 'Password input with live animated character score and requirement checklist.',
      importExample: "// Copy from components/origin/input-password-strength.tsx\nimport { Input } from '@/components/ui/input';",
      docSubUrl: 'inputs'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use `lucide-react` for icons and `cn()` from `@/lib/utils` for class merging.',
      'Keep component code source-owned and editable in the repository.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure colors via Tailwind CSS CSS variables.',
    iconUsage: 'Use `lucide-react` icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
