import { UISystem } from '../../schemas/uiSystem.js';

export const tailgrids: UISystem = {
  id: 'tailgrids',
  name: 'TailGrids (Tailwind UI Components & Templates)',
  organization: 'TailGrids / GrayGrids',
  description: 'An open-source and commercial Tailwind CSS component library offering 600+ UI components, dashboard widgets, e-commerce cards, marketing sections, and application layouts for HTML, React, and Vue.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'saas', 'dashboard'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue'],
  stylingApproach: 'tailwind',
  packageNames: ['tailgrids', 'tailwindcss'],
  docsUrl: 'https://tailgrids.com',
  repositoryUrl: 'https://github.com/tailgrids/tailgrids',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive mobile touch targets.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'TailGrids Tailwind plugin and theme config',
    packageName: 'tailgrids'
  },
  icons: {
    available: true,
    name: 'Lineicons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Comprehensive Tailwind product aesthetic: TailGrids Blue (#3056d3) accents, multi-metric dashboard charts, e-commerce product grids, and responsive navigation headers.',
  noveltyLevel: 'established',
  bestFor: [
    'Developers and teams wanting an extensive library (600+) of Tailwind CSS components across marketing, dashboards, and e-commerce',
    'HTML, React, and Vue applications',
    'Full-featured website prototyping'
  ],
  avoidFor: [
    'Ultra-minimalist classless text pages'
  ],
  strengths: [
    'Massive catalog: 600+ UI components and templates',
    'Official TailGrids Tailwind CSS plugin (`tailgrids`) with custom utility components',
    'Multi-framework availability (HTML, React, Vue)'
  ],
  weaknesses: [
    'Large scope with commercial tier'
  ],
  tags: [
    'tailgrids',
    'tailwind',
    'dashboard',
    'ecommerce',
    'marketing',
    'components',
    'html-css',
    'established'
  ],
  aliases: ['TailGrids', 'TailGrids UI', 'TailGrids Tailwind', 'Tailgrids'],
  relatedSystems: ['preline', 'flowbite-react', 'hyperui'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install tailgrids tailwindcss',
      packages: ['tailgrids', 'tailwindcss'],
      setupInstructions: 'Add `require("tailgrids/plugin")` to plugins in `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    navbar: {
      canonicalName: 'Navbar',
      description: 'Responsive navbar with mobile hamburger menu and dropdown links.',
      importExample: '<header class="flex w-full items-center bg-white dark:bg-dark">...</header>',
      docSubUrl: 'components/headers'
    }
  },
  aiInstructions: {
    principles: [
      'Add `tailgrids/plugin` to `tailwind.config.js`.',
      'Use TailGrids component classes or utility snippets.',
      'Support dark mode via `dark:` class modifiers.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js` with TailGrids plugin.',
    iconUsage: 'Embed Lineicons or SVG icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
