import { UISystem } from '../../schemas/uiSystem.js';

export const chota: UISystem = {
  id: 'chota',
  name: 'Chota (Super Tiny Micro-Framework)',
  organization: 'Jenil Gogari / Chota Community',
  description: 'An open-source, micro CSS framework (~3KB minified & gzipped) providing a responsive 12-column grid, semantic typography, buttons, forms, navbars, cards, and automatic dark mode support using CSS custom properties.',
  category: 'css-framework',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['chota'],
  docsUrl: 'https://jenil.github.io/chota',
  repositoryUrl: 'https://github.com/jenil/chota',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible form focus rings and dark mode contrast.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties on `:root` and `body.dark` (e.g. `--color-primary`, `--grid-maxWidth`)',
    packageName: 'chota'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Ultra-clean micro-framework aesthetic: Chota Purple/Blue accents, automatic dark mode via `body.dark`, clean button pills, and responsive 12-column flexbox grid in ~3KB.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Static sites, personal blogs, documentation portals, and web toys under strict bandwidth budgets (<3KB)',
    'Developers wanting full CSS components + 12-column grid + dark mode in a tiny file',
    'Rapid zero-build HTML prototypes'
  ],
  avoidFor: [
    'Complex single-page application component libraries'
  ],
  strengths: [
    'Incredible size-to-feature ratio: ~3KB for full components, grid, and dark mode',
    'Dark mode ready out-of-the-box via CSS custom properties and `body.dark`',
    'Semantic HTML styling with minimal utility classes'
  ],
  weaknesses: [
    'Micro scope; no complex interactive JS widgets'
  ],
  tags: [
    'chota',
    'micro-framework',
    'css-framework',
    'minimalist',
    'dark-mode',
    '3kb',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['Chota', 'Chota CSS', 'Chota Micro Framework'],
  relatedSystems: ['milligram', 'skeleton-css', 'pico-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install chota',
      packages: ['chota'],
      setupInstructions: 'Import `chota/dist/chota.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Chota button with button primary, button secondary, button error.',
      importExample: '<button class="button primary">Submit</button>',
      docSubUrl: '#buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic HTML elements (buttons, inputs, cards, tables).',
      'Toggle dark mode by adding `class="dark"` to `<body>`.',
      'Use Chota grid (`<div class="row"><div class="col-6">...</div></div>`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables on `:root` (e.g. `--color-primary: #14854f;`).',
    iconUsage: 'Embed SVG icons inside buttons.',
    layoutConventions: 'Use `container`, `row`, and `col-*` flexbox grid.'
  }
};
