import { UISystem } from '../../schemas/uiSystem.js';

export const blazeUi: UISystem = {
  id: 'blaze-ui',
  name: 'Blaze UI (Open Source Framework-Free UI Kit)',
  organization: 'Blaze UI Community',
  description: 'An open-source, framework-free UI toolkit and CSS component library providing BEM-structured CSS components, custom elements, and accessible forms without locking developers into a specific JS framework.',
  category: 'css-framework',
  secondaryCategories: ['web-components', 'minimalist'],
  frameworks: ['html-css', 'web-components', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['@blaze/css', '@blaze/atoms'],
  docsUrl: 'https://www.blazeui.com',
  repositoryUrl: 'https://github.com/BlazeUI/blaze',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'BEM semantic markup with accessible button, modal, and alert interactions.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Blaze Sass variables and design tokens',
    packageName: '@blaze/css'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern BEM CSS aesthetic: Blaze Orange/Blue accents, structured card surfaces, clean progress bars, and accessible modal overlays.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers who prefer pure BEM CSS architecture (`c-card`, `c-button`, `c-modal`)',
    'Framework-free web applications and static sites',
    'Teams wanting optional Web Component enhancements (`@blaze/atoms`)'
  ],
  avoidFor: [
    'Tailwind-only modern projects'
  ],
  strengths: [
    'Strict BEM naming convention prevents global CSS collisions',
    'Available as pure CSS (`@blaze/css`) or enhanced Web Components (`@blaze/atoms`)',
    'Zero framework lock-in: works anywhere'
  ],
  weaknesses: [
    'BEM class verbosity'
  ],
  tags: [
    'blaze-ui',
    'blaze',
    'css-framework',
    'bem',
    'web-components',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['Blaze UI', 'BlazeUI', 'Blaze CSS'],
  relatedSystems: ['spectre-css', 'cirrus-css', 'bulma'],
  systemTypes: ['css-framework', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @blaze/css',
      packages: ['@blaze/css'],
      setupInstructions: 'Import `@blaze/css/dist/blaze/blaze.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'c-button',
      description: 'Blaze BEM button with c-button--brand, c-button--info, c-button--success.',
      importExample: '<button type="button" class="c-button c-button--brand">Primary Button</button>',
      docSubUrl: 'components/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use BEM naming convention (`c-card`, `c-button`, `c-modal`).',
      'Import `@blaze/css` at root.',
      'Use Blaze responsive layout classes (`o-grid`, `o-grid__cell`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Blaze Sass variables.',
    iconUsage: 'Embed SVG icons inside buttons.',
    layoutConventions: 'Use `o-grid` and `o-grid__cell` layout primitives.'
  }
};
