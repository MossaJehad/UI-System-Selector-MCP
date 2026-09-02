import { UISystem } from '../../schemas/uiSystem.js';

export const mambaUi: UISystem = {
  id: 'mamba-ui',
  name: 'Mamba UI',
  organization: 'Mamba UI Community',
  description: 'An open-source collection of 100+ Tailwind CSS components and website templates with full dark-mode support, responsive layouts, and copy-paste code for HTML, React, and Vue.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://mambaui.com',
  repositoryUrl: 'https://github.com/mambaui/mamba-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive viewport handling.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-contrast dark mode palettes',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern dark-mode Tailwind aesthetic: deep charcoal backdrops (`bg-gray-900`), electric violet (#8b5cf6) accents, stat widgets, hero headers, and responsive forms.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting 100+ instant Tailwind CSS snippets with built-in dark mode',
    'HTML, React, and Vue prototypes',
    'Clean landing pages and dashboard widgets'
  ],
  avoidFor: [
    'Complex single-page applications needing headless state engines'
  ],
  strengths: [
    '100+ copy-paste components and templates',
    'First-class dark mode presets across all components',
    'Zero framework lock-in'
  ],
  weaknesses: [
    'Pure copy-paste HTML/Tailwind snippet library'
  ],
  tags: [
    'mamba-ui',
    'mamba',
    'tailwind',
    'dark-mode',
    'html-css',
    'snippets',
    'hidden-gem'
  ],
  aliases: ['Mamba UI', 'Mamba', 'MambaUI'],
  relatedSystems: ['hyperui', 'tailblocks', 'sailboat-ui'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy HTML / JSX snippets directly into your Tailwind project.'
    }
  },
  componentGuidance: {
    stat: {
      canonicalName: 'StatCard',
      description: 'Dark-mode metric stat card with icon and trend percentage.',
      importExample: '<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100"><div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400 text-gray-900"><svg>...</svg></div><div class="flex flex-col justify-center align-middle"><p class="text-3xl font-semibold leading-none">2,103</p><p class="capitalize">Daily Users</p></div></div>',
      docSubUrl: 'components/stat'
    }
  },
  aiInstructions: {
    principles: [
      'Copy HTML/JSX snippets directly into templates.',
      'Use Tailwind CSS utility classes.',
      'Apply dark mode classes (`dark:bg-gray-900`, `dark:text-gray-100`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
