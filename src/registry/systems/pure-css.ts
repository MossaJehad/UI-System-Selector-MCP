import { UISystem } from '../../schemas/uiSystem.js';

export const pureCss: UISystem = {
  id: 'pure-css',
  name: 'Pure.css',
  organization: 'Yahoo / Pure.css Community',
  description: 'An open-source, ultra-lightweight (~3.7KB gzipped) set of small, responsive CSS modules created by Yahoo, providing a pure CSS responsive grid, accessible forms, menus, tables, and buttons.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['purecss'],
  docsUrl: 'https://pure-css.github.io',
  repositoryUrl: 'https://github.com/pure-css/pure',
  license: 'BSD-3-Clause',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible table and form baselines.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Pure CSS minimalist classes (`pure-button`, `pure-form`, `pure-table`, `pure-menu`).'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Ultra-lightweight minimalist CSS baseline: unopinionated buttons, simple horizontal/vertical menus, striped tables, and clean forms.',
  noveltyLevel: 'established',
  bestFor: [
    'Ultra-fast, lightweight web pages where bundle size is strictly constrained (<4KB total CSS)',
    'Building custom CSS themes on top of a battle-tested minimalist grid and form baseline',
    'HTML/CSS projects with zero JavaScript dependencies'
  ],
  avoidFor: [
    'Complex SaaS apps wanting pre-built interactive tabs, modals, and date pickers'
  ],
  strengths: [
    'Tiny total bundle size: entire framework is under 3.7KB gzipped',
    'Modular architecture: import only the grid (`pure-u-*`), forms, or buttons',
    'Zero styling opinions: easy to override and customize with your own CSS'
  ],
  weaknesses: [
    'Minimalist feature set with no JavaScript plugins'
  ],
  tags: [
    'pure-css',
    'purecss',
    'yahoo',
    'lightweight',
    'minimalist',
    'css-framework',
    'responsive-grid',
    'established'
  ],
  aliases: ['Pure.css', 'PureCSS', 'Yahoo Pure'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install purecss',
      packages: ['purecss'],
      setupInstructions: 'Import `purecss/build/pure-min.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'pure-button',
      description: 'Pure.css action button with pure-button-primary modifier.',
      importExample: '<button class="pure-button pure-button-primary">Click Me</button>',
      docSubUrl: 'buttons/'
    },
    grid: {
      canonicalName: 'pure-g',
      description: 'Pure.css responsive grid row with pure-u-* columns.',
      importExample: '<div class="pure-g"><div class="pure-u-1-2">Left Column</div><div class="pure-u-1-2">Right Column</div></div>',
      docSubUrl: 'grid/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Pure.css classes (`pure-g`, `pure-u-*`, `pure-form`, `pure-table`, `pure-menu`).',
      'Use fractional grid classes (e.g. `pure-u-1-3`, `pure-u-2-3`, `pure-u-1-2`).',
      'Apply custom CSS rules directly on top of Pure’s minimalist classes.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Override Pure classes with custom CSS declarations.',
    iconUsage: 'Embed SVG icons inside buttons or headers.',
    layoutConventions: 'Use `.pure-g` with `.pure-u-*`.'
  }
};
