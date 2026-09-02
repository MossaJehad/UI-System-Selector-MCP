import { UISystem } from '../../schemas/uiSystem.js';

export const wingCss: UISystem = {
  id: 'wing-css',
  name: 'Wing CSS (Micro CSS Framework)',
  organization: 'Kabir Shah / Wing Community',
  description: 'An open-source, ultra-minimalist CSS framework (~1.5KB gzipped) providing automatic styling for native HTML elements, a 12-column responsive flexbox grid, cards, navbars, and clean form inputs with zero configuration.',
  category: 'css-framework',
  secondaryCategories: ['minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['wingcss'],
  docsUrl: 'https://kbrsh.github.io/wing',
  repositoryUrl: 'https://github.com/kbrsh/wing',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML element styling with responsive mobile viewport handling.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Micro CSS framework applying opinionated defaults directly to HTML elements.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Micro minimalism aesthetic: Wing Turquoise (#00c853) / Blue accents, borderless responsive cards, clean typography, and 12-column grid in ~1.5KB.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Ultra-lightweight web pages, static landing pages, and prototypes requiring the smallest possible CSS file (~1.5KB)',
    'Developers who want a 12-column grid and clean automatic element styling with zero bloat',
    'Fast HTML prototypes'
  ],
  avoidFor: [
    'Complex single-page applications'
  ],
  strengths: [
    'One of the smallest CSS frameworks ever created (~1.5KB minified & gzipped)',
    'Includes a full 12-column flexbox grid system and automatic element styling',
    'Zero build step required'
  ],
  weaknesses: [
    'Micro scope'
  ],
  tags: [
    'wing-css',
    'wing',
    'micro-framework',
    'minimalist',
    '1.5kb',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['Wing CSS', 'Wing', 'WingCSS'],
  relatedSystems: ['chota', 'milligram', 'skeleton-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install wingcss',
      packages: ['wingcss'],
      setupInstructions: 'Link `wingcss/dist/wing.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    grid: {
      canonicalName: 'row',
      description: 'Wing 12-column responsive flexbox grid layout.',
      importExample: '<div class="row"><div class="col-6">Half Column</div><div class="col-6">Half Column</div></div>',
      docSubUrl: '#grid'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic HTML elements (buttons, inputs, and cards are styled automatically).',
      'Use Wing grid classes (`row`, `col-*`).',
      'Link `wing.min.css` in `<head>`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Override styles with custom CSS.',
    iconUsage: 'Embed SVG icons inside buttons.',
    layoutConventions: 'Use `container`, `row`, and `col-*` grid.'
  }
};
