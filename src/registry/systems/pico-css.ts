import { UISystem } from '../../schemas/uiSystem.js';

export const picoCss: UISystem = {
  id: 'pico-css',
  name: 'Pico CSS (Minimal Classless / Semantic CSS)',
  organization: 'Pico CSS Community (Lucas Chiari)',
  description: 'A minimalist, elegant, semantic CSS framework that styles standard HTML elements without requiring custom class names, featuring automatic dark mode, pure CSS responsive grid, accessible interactive dialogs, and tiny footprint (~10KB).',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'styled', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['@picocss/pico'],
  docsUrl: 'https://picocss.com',
  repositoryUrl: 'https://github.com/picocss/pico',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Semantic HTML elements are accessible out of the box with native browser focus indicators.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties (`--pico-*`)',
    packageName: '@picocss/pico'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Ultra-clean, modern minimalist typography and semantic HTML style: elegant native form inputs, automated dark/light mode, `<article>` cards, and clean `<dialog>` popups.',
  noveltyLevel: 'established',
  bestFor: [
    'Lightweight websites, markdown documentation, blogs, and backend admin utilities with pure semantic HTML',
    'Developers wanting beautiful out-of-the-box styling without writing dozens of CSS utility classes',
    'Projects requiring automatic light/dark mode based on `prefers-color-scheme` with zero configuration'
  ],
  avoidFor: [
    'Complex custom-branded SaaS products requiring proprietary visual identities'
  ],
  strengths: [
    'Pure semantic HTML: `<button>`, `<input>`, `<article>`, `<dialog>` look gorgeous with zero class names',
    'Tiny footprint (~10KB gzipped) with zero JavaScript runtime overhead',
    'Built-in automatic light and dark mode switching'
  ],
  weaknesses: [
    'Minimalist design by definition; not intended for complex bespoke multi-tiered widgets'
  ],
  tags: [
    'pico-css',
    'classless',
    'semantic-html',
    'minimalist',
    'css-framework',
    'dark-mode',
    'lightweight',
    'established'
  ],
  aliases: ['Pico CSS', 'Pico.css', 'PicoCSS', 'Pico'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @picocss/pico',
      packages: ['@picocss/pico'],
      setupInstructions: 'Import `@picocss/pico/css/pico.min.css` in your HTML or root stylesheet.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'article',
      description: 'Semantic HTML article element automatically styled as an elevated card.',
      importExample: '<article><header>Card Header</header><p>Card Body Content</p><footer>Card Footer</footer></article>',
      docSubUrl: 'docs/card'
    },
    button: {
      canonicalName: 'button',
      description: 'Standard HTML button automatically styled by Pico CSS.',
      importExample: '<button type="submit">Submit Form</button>',
      docSubUrl: 'docs/button'
    }
  },
  aiInstructions: {
    principles: [
      'Write pure semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<dialog>`, `<nav>`).',
      'Avoid unnecessary wrapper classes; let Pico CSS style native tags.',
      'Use `<main class="container">` for centered responsive layout.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure CSS variables (`--pico-primary`, `--pico-background-color`).',
    iconUsage: 'Embed inline SVG icons.',
    layoutConventions: 'Use `.grid` class or native flex/grid containers.'
  }
};
