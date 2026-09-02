import { UISystem } from '../../schemas/uiSystem.js';

export const sakuraCss: UISystem = {
  id: 'sakura-css',
  name: 'Sakura CSS (Classless CSS Theme)',
  organization: 'Mitesh Shah / Sakura Community',
  description: 'An open-source, minimalist classless CSS framework that transforms plain, raw HTML into beautiful, readable, responsive typography and tables with zero HTML class markup and instant dark theme variants.',
  category: 'css-framework',
  secondaryCategories: ['minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['sakura.css'],
  docsUrl: 'https://oxal.org/projects/sakura',
  repositoryUrl: 'https://github.com/oxalorg/sakura',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Optimized for typography readability, high color contrast, and semantic HTML accessibility.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties and precompiled color themes (Sakura Dark, Earthly, Solarized)',
    packageName: 'sakura.css'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'spacious',
  aesthetic: 'Beautiful literary typography aesthetic: elegant serif/sans headers, Sakura Blossom Pink (#c23616) accents, comfortable line heights, clean blockquotes, and borderless tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Markdown blogs, personal essays, academic papers, and documentation pages with 100% pure HTML',
    'Developers who do not want to write a single CSS class in their HTML markup',
    'Distraction-free reading experiences'
  ],
  avoidFor: [
    'Complex application dashboards or custom UI components'
  ],
  strengths: [
    '100% Classless: drop the stylesheet in `<head>` and pure HTML tags (`<h1>`, `<p>`, `<table>`, `<form>`) are styled beautifully',
    'Multiple pre-built theme variants (Default, Dark, Earthly, Solarized, Vader)',
    'Exceptional typography rhythm and readability'
  ],
  weaknesses: [
    'Classless: not designed for complex web applications'
  ],
  tags: [
    'sakura-css',
    'sakura',
    'classless',
    'minimalist',
    'typography',
    'markdown',
    'reading',
    'hidden-gem'
  ],
  aliases: ['Sakura CSS', 'Sakura', 'Sakura.css', 'Oxal Sakura'],
  relatedSystems: ['water-css', 'simple-css', 'mvp-css', 'pico-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install sakura.css',
      packages: ['sakura.css'],
      setupInstructions: 'Link `sakura.css/css/sakura.css` or `sakura-dark.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    typography: {
      canonicalName: 'article',
      description: 'Sakura styles raw HTML elements without requiring CSS classes.',
      importExample: '<article><h1>Article Title</h1><p>Readable body text styled automatically.</p></article>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Write 100% semantic HTML without adding custom utility classes.',
      'Link `sakura.css` (or `sakura-dark.css`) in `<head>`.',
      'Use native HTML tags (`blockquote`, `table`, `pre`, `form`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Switch between theme files (`sakura.css`, `sakura-dark.css`, `sakura-earthly.css`).',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Follow natural single-column reading flow.'
  }
};
