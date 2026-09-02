import { UISystem } from '../../schemas/uiSystem.js';

export const twElements: UISystem = {
  id: 'tw-elements',
  name: 'TW Elements (Tailwind Elements)',
  organization: 'MDBootstrap / TW Elements',
  description: 'An open-source UI kit and component library combining Bootstrap’s familiar component taxonomy (Modal, Dropdown, Carousel, Datepicker, Stepper, Sidenav) with Tailwind CSS utility classes and modern vanilla JavaScript plugins.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'consumer'],
  frameworks: ['html-css', 'react', 'vue', 'angular', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['tw-elements', 'tw-elements-react'],
  docsUrl: 'https://tw-elements.com',
  repositoryUrl: 'https://github.com/mdbootstrap/Tailwind-Elements',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard navigation, focus trapping, and ARIA attributes via interactive plugins.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin configuration and theme variables',
    packageName: 'tw-elements'
  },
  icons: {
    available: true,
    name: 'FontAwesome / Material Icons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Bootstrap-meets-Tailwind aesthetic: familiar interactive dropdowns, carousels, responsive sidebars, ripple effects, and dark mode toggles.',
  noveltyLevel: 'established',
  bestFor: [
    'Developers transitioning from Bootstrap to Tailwind CSS wanting familiar component conventions',
    'Full-stack apps needing rich interactive JS plugins (Carousel, Modal, Datepicker, Chart, Stepper) in Tailwind CSS',
    'Multi-framework applications across React, Vue, Angular, and plain HTML'
  ],
  avoidFor: [
    'Projects avoiding Tailwind CSS'
  ],
  strengths: [
    'Over 500+ interactive UI components, design blocks, and templates built on Tailwind CSS',
    'Built-in ripple effects, chart integrations, and multi-framework support',
    'Familiar Bootstrap mental model with Tailwind utility class flexibility'
  ],
  weaknesses: [
    'Requires TW Elements plugin setup'
  ],
  tags: [
    'tw-elements',
    'tailwind',
    'bootstrap',
    'component-library',
    'interactive',
    'dark-mode',
    'established'
  ],
  aliases: ['TW Elements', 'Tailwind Elements', 'TWE', 'MDB Tailwind'],
  relatedSystems: ['flowbite-react', 'preline', 'bootstrap'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install tw-elements',
      packages: ['tw-elements'],
      setupInstructions: 'Add `require("tw-elements/plugin.cjs")` to plugins in `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'TW Elements button with ripple effect.',
      importExample: '<button type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white shadow-primary-3 hover:bg-primary-accent-300" data-twe-ripple-init data-twe-ripple-color="light">Button</button>',
      docSubUrl: 'docs/standard/components/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Configure `tw-elements/plugin.cjs` in `tailwind.config.js`.',
      'Use `data-twe-*` attributes for interactive component behavior.',
      'Initialize plugins via `initTWE({ Dropdown, Ripple, Modal })`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Use FontAwesome or Material Icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
