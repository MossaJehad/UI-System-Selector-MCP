import { UISystem } from '../../schemas/uiSystem.js';

export const tailKit: UISystem = {
  id: 'tail-kit',
  name: 'Tail-kit (Tailwind CSS UI Kit & Dashboard)',
  organization: 'Tail-kit Community',
  description: 'An open-source, all-in-one UI kit and dashboard component library built with Tailwind CSS, providing 250+ components and templates for React, Vue.js, Angular, and HTML.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'saas', 'dashboard'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue', 'angular'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://tailwind-kit.com',
  repositoryUrl: 'https://github.com/Charlie-Root/tail-kit',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive viewport layout.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with complete dashboard palette',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'Feather Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Complete dashboard SaaS aesthetic: multi-metric stats, user profile cards, kanban board columns, analytics charts, and responsive sidebars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Building admin dashboards, SaaS backends, and user portals in React, Vue, Angular, or HTML',
    'Developers wanting 250+ Tailwind CSS components across all functional categories',
    'Fast dashboard prototyping'
  ],
  avoidFor: [
    'Ultra-minimalist classless text pages'
  ],
  strengths: [
    '250+ components across dashboards, forms, cards, tables, and navigation',
    'Multi-framework availability (React, Vue, Angular, HTML)',
    '100% open source under MIT license'
  ],
  weaknesses: [
    'Snippet copy-paste library'
  ],
  tags: [
    'tail-kit',
    'tailwind-kit',
    'tailwind',
    'dashboard',
    'admin',
    'react',
    'vue',
    'angular',
    'html-css',
    'hidden-gem'
  ],
  aliases: ['Tail-kit', 'Tailwind Kit', 'TailKit', 'tail-kit UI'],
  relatedSystems: ['tailgrids', 'tailblocks', 'preline'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy component snippets directly into your Tailwind project.'
    }
  },
  componentGuidance: {
    dashboard: {
      canonicalName: 'DashboardCard',
      description: 'Analytics metric card with sparkline chart and trend tag.',
      importExample: '<div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">...</div>',
      docSubUrl: 'components/dashboard'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component snippets directly into templates.',
      'Use Tailwind CSS utility classes.',
      'Support dark mode via `dark:` class modifiers.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG Feather icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
