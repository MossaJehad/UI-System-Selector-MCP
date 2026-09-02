import { UISystem } from '../../schemas/uiSystem.js';

export const simpleCss: UISystem = {
  id: 'simple-css',
  name: 'Simple.css (Classless CSS Framework)',
  organization: 'Kev Quirk / Simple.css Community',
  description: 'An open-source, classless CSS framework created by Kev Quirk that turns plain semantic HTML into a clean, modern, responsive website with zero class names, automatic light/dark mode, and zero build steps.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'minimalist', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['simple-css-reset'],
  docsUrl: 'https://simplecss.org',
  repositoryUrl: 'https://github.com/kevquirk/simple.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with high-contrast color scheme and native focus outlines.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties (`--accent`, `--bg`, `--text`)',
    packageName: 'simple-css-reset'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Clean, modern typography-focused classless aesthetic: subtle pastel accents, automatic dark mode, readable line lengths, clean tables, and responsive header/nav.',
  noveltyLevel: 'established',
  bestFor: [
    'Personal blogs, static documentation sites, and content-rich websites built with plain HTML/Markdown',
    'Developers wanting instant clean styling with zero custom CSS classes or complex build systems',
    'Fast MVP web pages'
  ],
  avoidFor: [
    'Complex commercial web applications needing bespoke branding and multi-tiered widgets'
  ],
  strengths: [
    'Zero class names: write standard semantic HTML and Simple.css does the rest',
    'Automatic dark mode with CSS custom property theming variables',
    'Tiny footprint (~4KB unminified) and zero dependencies'
  ],
  weaknesses: [
    'Classless layout constraint'
  ],
  tags: [
    'simple-css',
    'classless',
    'semantic-html',
    'minimalist',
    'css-framework',
    'dark-mode',
    'established'
  ],
  aliases: ['Simple.css', 'Simple CSS', 'SimpleCSS'],
  relatedSystems: ['pico-css', 'water-css', 'mvp-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install simple-css-reset # or link CDN',
      packages: ['simple-css-reset'],
      setupInstructions: 'Add `<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">` to `<head>`.'
    }
  },
  componentGuidance: {
    notice: {
      canonicalName: 'notice',
      description: 'Simple.css callout notice box class.',
      importExample: '<aside class="notice"><p>Important alert notice</p></aside>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Write pure semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`).',
      'Use `<aside class="notice">` for callout boxes.',
      'Configure theme using CSS variables (`--accent`, `--accent-hover`, `--bg`, `--text`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables on `:root` and `@media (prefers-color-scheme: dark)`.',
    iconUsage: 'Embed SVG icons inside HTML elements.',
    layoutConventions: 'Use standard semantic HTML structure.'
  }
};
