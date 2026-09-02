import { UISystem } from '../../schemas/uiSystem.js';

export const lion: UISystem = {
  id: 'lion',
  name: 'Lion Web Components',
  organization: 'ING Bank',
  description: 'ING’s high-performance, white-label, accessible-by-default foundational Web Component library engineered as an unopinionated core for building financial and corporate design systems.',
  category: 'web-components',
  secondaryCategories: ['company-design-system', 'enterprise', 'headless', 'accessibility-focused'],
  frameworks: ['web-components', 'vanilla', 'react', 'vue', 'svelte', 'angular'],
  stylingApproach: 'unstyled',
  packageNames: ['@lion/ui'],
  docsUrl: 'https://lion-web.netlify.app',
  repositoryUrl: 'https://github.com/ing-bank/lion',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Extensively engineered for strict banking accessibility standards with 100% keyboard and screen reader support.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: false,
    format: 'Unstyled / CSS Custom Properties'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Unstyled, highly accessible foundational primitives designed to be themed with any custom brand look.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Financial services, banking, and fintech platforms needing white-label foundations',
    'Custom enterprise design systems built on Web Components',
    'Multi-framework enterprise teams needing strict AAA accessibility'
  ],
  avoidFor: [
    'Developers wanting copy-paste pre-styled visual UI with zero CSS setup'
  ],
  strengths: [
    'Gold standard for unstyled Web Component primitives',
    'Powerful form validation system with asynchronous validation and localization',
    'True framework independence (Lit-based)'
  ],
  weaknesses: [
    'Requires custom CSS styling since components are deliberately unstyled'
  ],
  tags: [
    'ing-bank',
    'fintech',
    'web-components',
    'headless',
    'unstyled',
    'wcag-aaa',
    'multi-framework',
    'hidden-gem'
  ],
  installation: {
    generic: {
      command: 'npm install @lion/ui',
      packages: ['@lion/ui'],
      setupInstructions: 'Import specific components e.g. `import "@lion/ui/define/lion-button.js";`'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<lion-button>',
      description: 'Unstyled accessible custom element button.',
      importExample: 'import "@lion/ui/define/lion-button.js";\n\n<lion-button>Transfer Funds</lion-button>',
      docSubUrl: 'components/button/overview'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `@lion/ui/define/*`.',
      'Apply custom styles via CSS custom properties and standard CSS.',
      'Leverage Lion’s built-in form validation rules.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style using CSS custom properties and standard stylesheets targeting custom elements.',
    iconUsage: 'Use SVG icons inside slots.',
    layoutConventions: 'Standard CSS Grid/Flexbox.'
  }
};
