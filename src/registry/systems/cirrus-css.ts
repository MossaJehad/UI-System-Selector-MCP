import { UISystem } from '../../schemas/uiSystem.js';

export const cirrusCss: UISystem = {
  id: 'cirrus-css',
  name: 'Cirrus CSS',
  organization: 'Stanley Lim / Cirrus Community',
  description: 'An open-source, component- and utility-centric SCSS framework engineered for rapid prototyping, responsive layouts, modern card surfaces, modal dialogs, and dark mode without JavaScript runtime requirements.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['cirrus-ui'],
  docsUrl: 'https://cirrus-ui.netlify.app',
  repositoryUrl: 'https://github.com/Spiderpig86/Cirrus',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides semantic HTML structures with accessible button and form focus styling.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'SCSS variables and CSS custom properties via `@cirrus-ui/core`',
    packageName: 'cirrus-ui'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern component-meets-utility aesthetic: Cirrus Indigo (#4b0082) accents, soft rounded buttons, responsive grid columns, and card tiles.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting the structure of Bulma/Bootstrap combined with modern utility classes',
    'Static sites, Jamstack blogs, and rapid prototypes',
    'Applications wanting pure CSS styling without npm bundler complexity'
  ],
  avoidFor: [
    'Complex single-page application state machines'
  ],
  strengths: [
    'Hybrid approach: combines structured pre-built components with Tailwind-like utility classes',
    'Zero JavaScript runtime dependencies: pure CSS',
    'Customizable build using Sass configuration maps'
  ],
  weaknesses: [
    'CSS only; interactive toggles require vanilla JS'
  ],
  tags: [
    'cirrus-css',
    'cirrus',
    'css-framework',
    'sass',
    'utility-css',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['Cirrus CSS', 'Cirrus UI', 'Cirrus'],
  relatedSystems: ['bulma', 'picnic-css', 'spectre-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install cirrus-ui',
      packages: ['cirrus-ui'],
      setupInstructions: 'Import `cirrus-ui/dist/cirrus.min.css` in your HTML/JS entry.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Cirrus button with btn--primary, btn--link, btn--dark.',
      importExample: '<button class="btn btn--primary">Get Started</button>',
      docSubUrl: 'elements/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use Cirrus component classes (e.g. `card`, `btn`, `modal`, `nav`).',
      'Combine with Cirrus utility classes (e.g. `u-flex`, `u-center`, `p-2`).',
      'Import `cirrus.min.css` in `<head>`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Sass variables before importing Cirrus SCSS.',
    iconUsage: 'Embed SVG icons inside buttons.',
    layoutConventions: 'Use `row` and `col-*` grid layout.'
  }
};
