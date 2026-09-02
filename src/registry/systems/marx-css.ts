import { UISystem } from '../../schemas/uiSystem.js';

export const marxCss: UISystem = {
  id: 'marx-css',
  name: 'Marx CSS (The Classless CSS Reset & Reskin)',
  organization: 'Matthew Blode / Marx Community',
  description: 'An open-source, classless CSS reset and stylish stylesheet that makes raw HTML look great with zero class names, zero JavaScript, and zero build configuration, engineered as the equalizing baseline for the web.',
  category: 'css-framework',
  secondaryCategories: ['minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['marx-css'],
  docsUrl: 'https://mblode.github.io/marx',
  repositoryUrl: 'https://github.com/mblode/marx',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible default form and button styling.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Classless CSS stylesheet applying beautiful defaults directly to HTML tags.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean modern typographic baseline: San Francisco / Segoe UI typography, subtle button borders, cleanly aligned form inputs, and responsive layout containers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Quick HTML prototypes and markdown blog posts with zero CSS setup',
    'Developers wanting clean default styling for raw HTML without adding CSS classes',
    'Lightweight documentation pages'
  ],
  avoidFor: [
    'Complex multi-tiered enterprise web apps'
  ],
  strengths: [
    '100% classless: drop `marx.min.css` into `<head>` and every standard HTML element looks clean',
    'Tiny footprint (~4KB minified)',
    'Zero build tools or npm bundler setup required'
  ],
  weaknesses: [
    'Classless: minimal component customizability'
  ],
  tags: [
    'marx-css',
    'marx',
    'classless',
    'css-reset',
    'minimalist',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['Marx CSS', 'Marx', 'Marx.css'],
  relatedSystems: ['sakura-css', 'tacit-css', 'water-css', 'simple-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install marx-css',
      packages: ['marx-css'],
      setupInstructions: 'Link `marx-css/css/marx.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    layout: {
      canonicalName: 'main',
      description: 'Marx automatically provides responsive centered layout on <main>.',
      importExample: '<main><h1>Title</h1><p>Paragraph text.</p><button>Action</button></main>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Write pure semantic HTML.',
      'Link `marx.min.css` in `<head>`.',
      'Wrap page content in `<main>` for automatic centering and responsive width.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Override styles with custom CSS rules.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use semantic `<header>`, `<main>`, `<footer>`.'
  }
};
