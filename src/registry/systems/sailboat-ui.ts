import { UISystem } from '../../schemas/uiSystem.js';

export const sailboatUi: UISystem = {
  id: 'sailboat-ui',
  name: 'Sailboat UI',
  organization: 'Sailboat UI Community',
  description: 'A modern, open-source Tailwind CSS component library providing 150+ customizable HTML/Tailwind components with clean typography, responsive form inputs, cards, and modal layouts.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://sailboatui.com',
  repositoryUrl: 'https://github.com/sailboatui/sailboatui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with Tailwind CSS styling.'
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
    name: 'Heroicons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern clean Tailwind aesthetic: crisp borders, subtle drop shadows, neutral surface cards, and responsive form controls.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting 150+ ready-to-use HTML + Tailwind CSS snippets without heavy JS frameworks',
    'HTML prototypes, static landing pages, and multi-framework web apps',
    'Clean Tailwind CSS styling'
  ],
  avoidFor: [
    'Complex single-page applications needing headless state engines'
  ],
  strengths: [
    '150+ ready-made HTML/Tailwind components',
    'Zero framework lock-in: works with plain HTML, React, Vue, Blade, or Django',
    'Pure Tailwind CSS utility classes'
  ],
  weaknesses: [
    'HTML/Tailwind snippet focus'
  ],
  tags: [
    'sailboat-ui',
    'sailboat',
    'tailwind',
    'html-css',
    'snippets',
    'hidden-gem'
  ],
  aliases: ['Sailboat UI', 'Sailboat', 'SailboatUI'],
  relatedSystems: ['hyperui', 'tailblocks', 'float-ui'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy HTML snippets directly into your Tailwind CSS project.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'Card',
      description: 'Clean Tailwind card with header, body, and action footer.',
      importExample: '<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"><h3 class="text-lg font-medium text-gray-900 dark:text-white">Card Title</h3><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Card description text.</p></div>',
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy HTML/Tailwind snippets directly into templates.',
      'Use Tailwind CSS utility classes for styling.',
      'Support dark mode via `dark:` class modifiers.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG Heroicons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
