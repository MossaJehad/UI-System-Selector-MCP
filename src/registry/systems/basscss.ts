import { UISystem } from '../../schemas/uiSystem.js';

export const basscss: UISystem = {
  id: 'basscss',
  name: 'Basscss (Low-Level CSS Toolkit)',
  organization: 'Brent Jackson / Basscss Community',
  description: 'The historic, pioneering low-level functional CSS toolkit that paved the way for modern utility-first CSS and Tailwind, providing composable atomic utility classes for fast, responsive web design.',
  category: 'css-framework',
  secondaryCategories: ['minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['basscss'],
  docsUrl: 'https://basscss.com',
  repositoryUrl: 'https://github.com/basscss/basscss',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Pure semantic HTML utility classes.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties and atomic utility scale',
    packageName: 'basscss'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Pioneering functional utility CSS aesthetic: typography scales (`h1` through `h6`), margin/padding scales (`p1` through `p4`), flexbox utilities, and minimal color scales.',
  noveltyLevel: 'established',
  bestFor: [
    'Developers studying the history and origins of utility-first CSS (predecessor to Tailwind)',
    'Ultra-lightweight web pages wanting basic utility classes (<5KB gzipped)',
    'Static sites and minimalist web toys'
  ],
  avoidFor: [
    'Complex projects wanting modern Tailwind CSS ecosystem'
  ],
  strengths: [
    'Historic foundational framework that inspired Tachyons, Tailwind CSS, and Styled System',
    'Extremely small file size (~2KB gzipped)',
    'Zero build step required'
  ],
  weaknesses: [
    'Ecosystem has largely modernized around Tailwind CSS'
  ],
  tags: [
    'basscss',
    'atomic-css',
    'utility-first',
    'functional-css',
    'minimalist',
    'established'
  ],
  aliases: ['Basscss', 'Bass CSS', 'BassCSS Toolkit'],
  relatedSystems: ['tachyons', 'pure-css', 'milligram'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install basscss',
      packages: ['basscss'],
      setupInstructions: 'Import `basscss/css/basscss.min.css` in HTML or CSS entry.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Basscss button utility class combination.',
      importExample: '<button class="btn btn-primary bg-blue white p2 rounded">Button</button>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Use Basscss atomic utility classes (e.g. `flex`, `items-center`, `p2`, `m1`, `h2`).',
      'Import `basscss.min.css` in `<head>`.',
      'Compose markup with functional CSS primitives.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use `flex`, `col`, and `clearfix` utilities.'
  }
};
