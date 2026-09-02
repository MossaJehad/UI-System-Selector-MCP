import { UISystem } from '../../schemas/uiSystem.js';

export const waterCss: UISystem = {
  id: 'water-css',
  name: 'Water.css (Classless CSS)',
  organization: 'Kognise / Water.css Community',
  description: 'An open-source, classless CSS framework that makes plain HTML look clean, modern, and readable without writing a single CSS class name, featuring automatic dark mode, responsive layout, and beautiful typography.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'minimalist', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['water.css'],
  docsUrl: 'https://watercss.kognise.dev',
  repositoryUrl: 'https://github.com/kognise/water.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Pure semantic HTML elements with high-contrast automatic dark mode.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Classless CSS stylesheet styling native HTML5 tags directly.'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Gentle, modern classless HTML aesthetic: rounded buttons, soft blue accents, centered responsive page layout, and automatic dark theme switching.',
  noveltyLevel: 'established',
  bestFor: [
    'Static markdown documentation, personal blogs, and developer notes with zero CSS classes',
    'HTML prototypes and API demo pages where zero styling overhead is desired',
    'Simple web tools with pure HTML5 markup'
  ],
  avoidFor: [
    'Complex commercial web applications needing bespoke branding and custom grid structures'
  ],
  strengths: [
    '100% classless: just drop `<link rel="stylesheet" href="water.css">` into `<head>` and your raw HTML looks beautiful',
    'Automatic dark mode based on `prefers-color-scheme`',
    'Tiny footprint (~2KB gzipped) with zero JavaScript'
  ],
  weaknesses: [
    'Styles HTML elements globally with fixed max-width container'
  ],
  tags: [
    'water-css',
    'classless',
    'semantic-html',
    'minimalist',
    'css-framework',
    'dark-mode',
    'established'
  ],
  aliases: ['Water.css', 'Water CSS', 'WaterCSS'],
  relatedSystems: ['pico-css', 'simple-css', 'mvp-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install water.css # or link via CDN',
      packages: ['water.css'],
      setupInstructions: 'Add `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">` to `<head>`.'
    }
  },
  componentGuidance: {
    form: {
      canonicalName: 'form',
      description: 'Standard HTML form automatically styled with clean labels and inputs.',
      importExample: '<form><label for="name">Name</label><input id="name" type="text"><button type="submit">Submit</button></form>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Write pure semantic HTML5 without custom utility class names.',
      'Use native elements (`<button>`, `<form>`, `<table>`, `<blockquote>`, `<dialog>`).',
      'Let Water.css handle layout width and responsive typography automatically.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Choose light, dark, or automatic stylesheet variants (`water.css`, `light.css`, `dark.css`).',
    iconUsage: 'Embed SVG icons inside HTML elements.',
    layoutConventions: 'Rely on default centered layout container.'
  }
};
