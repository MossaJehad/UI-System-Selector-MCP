import { UISystem } from '../../schemas/uiSystem.js';

export const mvpCss: UISystem = {
  id: 'mvp-css',
  name: 'MVP.css (Minimalist HTML Elements CSS)',
  organization: 'Andy Brewer / MVP.css Community',
  description: 'An open-source, classless CSS stylesheet that automatically formats semantic HTML tags to build clean, modern, responsive landing pages and MVP prototypes with zero custom CSS classes.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'minimalist', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['mvp.css'],
  docsUrl: 'https://andybrewer.github.io/mvp',
  repositoryUrl: 'https://github.com/andybrewer/mvp',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with native browser focus indicators.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties (`--color-accent`, `--color-bg`)',
    packageName: 'mvp.css'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern startup MVP prototype aesthetic: centered header navbars, feature card grids using `<section><aside>`, clean forms, and responsive tables.',
  noveltyLevel: 'established',
  bestFor: [
    'Fast MVP web prototypes, hackathon projects, and proof-of-concept landing pages',
    'HTML/Markdown content sites where developers want to avoid writing CSS classes entirely',
    'Simple server-rendered web applications'
  ],
  avoidFor: [
    'Complex enterprise dashboards requiring multi-tier nested navigation'
  ],
  strengths: [
    'No classes needed: write pure HTML (`<nav>`, `<header>`, `<main>`, `<section>`, `<aside>`) and MVP.css formats it as a modern landing page',
    'Built-in responsive grid using `<section><aside>...</aside><aside>...</aside></section>`',
    'Automatic dark mode with CSS variables'
  ],
  weaknesses: [
    'Classless layout constraint'
  ],
  tags: [
    'mvp-css',
    'classless',
    'semantic-html',
    'minimalist',
    'css-framework',
    'prototype',
    'established'
  ],
  aliases: ['MVP.css', 'MVP CSS', 'MVPCSS'],
  relatedSystems: ['simple-css', 'pico-css', 'water-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install mvp.css # or link CDN',
      packages: ['mvp.css'],
      setupInstructions: 'Add `<link rel="stylesheet" href="https://unpkg.com/mvp.css">` to `<head>`.'
    }
  },
  componentGuidance: {
    cards: {
      canonicalName: 'section-aside',
      description: 'Responsive card grid using semantic section and aside tags.',
      importExample: '<section><aside><h3>Feature 1</h3><p>Description</p></aside><aside><h3>Feature 2</h3><p>Description</p></aside></section>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Write pure semantic HTML5 tags.',
      'Use `<header><nav>...</nav></header>` for top navigation.',
      'Use `<section><aside>...</aside></section>` for multi-column feature card grids.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables (`--color-accent`, `--color-bg`, `--color-text`).',
    iconUsage: 'Use Unicode emoji or inline SVG.',
    layoutConventions: 'Use semantic `<main>`, `<section>`, and `<aside>`.'
  }
};
