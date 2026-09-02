import { UISystem } from '../../schemas/uiSystem.js';

export const miniCss: UISystem = {
  id: 'mini-css',
  name: 'mini.css (Minimal, Responsive, Style-Agnostic CSS Framework)',
  organization: 'Chalarangelo / mini.css Community',
  description: 'An open-source, ultra-lightweight (~7KB gzipped), style-agnostic CSS framework engineered with responsive flexbox grids, clean cards, navigation bars, modals, tooltips, and tab controls with zero JavaScript.',
  category: 'css-framework',
  secondaryCategories: ['minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['mini.css'],
  docsUrl: 'https://chalarangelo.github.io/mini.css',
  repositoryUrl: 'https://github.com/Chalarangelo/mini.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus indicators and pure CSS interactive controls.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'mini.css SCSS flavor variables (Default, Dark, Nordic themes)',
    packageName: 'mini.css'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Ultra-lightweight minimalist aesthetic: clean 12-column flexbox grid, subtle borders, card sections, tab bars, and breadcrumbs in ~7KB.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Lightweight websites, personal documentation, prototypes, and blogs wanting complete UI components in ~7KB',
    'Developers who want responsive grids, tabs, and modals without JavaScript',
    'Fast HTML prototypes'
  ],
  avoidFor: [
    'Complex single-page applications needing headless state engines'
  ],
  strengths: [
    'One of the most versatile micro CSS frameworks ever built (~7KB gzipped)',
    'Includes responsive grid, tabs, modals, accordions, tooltips, cards, and navigation bars with 0KB JS',
    'Multiple built-in flavor themes (Default, Dark, Nordic)'
  ],
  weaknesses: [
    'Pure CSS only'
  ],
  tags: [
    'mini-css',
    'mini',
    'micro-framework',
    'minimalist',
    'css-framework',
    '7kb',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['mini.css', 'Mini CSS', 'mini css', 'Mini.css'],
  relatedSystems: ['chota', 'picnic-css', 'cirrus-css', 'mustard-ui'],
  systemTypes: ['css-framework'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install mini.css',
      packages: ['mini.css'],
      setupInstructions: 'Import `mini.css/dist/mini-default.min.css` (or `mini-dark.min.css` / `mini-nordic.min.css`) in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'card',
      description: 'mini.css responsive card with section and fluid variant.',
      importExample: '<div class="card fluid"><div class="section"><h2>Card Title</h2><p>Content text</p></div></div>',
      docSubUrl: 'index.html#cards'
    }
  },
  aiInstructions: {
    principles: [
      'Import `mini-default.min.css` or flavor stylesheet in `<head>`.',
      'Use semantic HTML elements and mini.css component classes (`card`, `button`, `row`, `col-*`).',
      'Use CSS-only modal and tab mechanisms.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Choose from mini.css flavors (Default, Dark, Nordic).',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use `container`, `row`, `col-*` grid.'
  }
};
