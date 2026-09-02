import { UISystem } from '../../schemas/uiSystem.js';

export const tacitCss: UISystem = {
  id: 'tacit-css',
  name: 'Tacit CSS (Classless CSS for Web Authors)',
  organization: 'Yegor Bugayenko / Tacit Community',
  description: 'An open-source, zero-class CSS framework designed for web authors who do not want to learn CSS or use class attributes, transforming raw HTML5 into clean, readable, professional web pages.',
  category: 'css-framework',
  secondaryCategories: ['minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['tacit-css'],
  docsUrl: 'https://yegor256.github.io/tacit',
  repositoryUrl: 'https://github.com/yegor256/tacit',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Enforces proper HTML5 semantic element usage and provides clean focus indicators.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Classless stylesheet applying opinionated defaults directly to HTML5 elements.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean academic author aesthetic: crisp serif headers, clear form inputs with subtle shadows, bordered tables, and clean bullet lists without a single class.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Academic papers, technical essays, personal manifestos, and minimalist web pages',
    'Developers who believe HTML should contain zero CSS class attributes',
    'Rapid zero-styling prototyping'
  ],
  avoidFor: [
    'Complex multi-pane web applications'
  ],
  strengths: [
    'Zero classes required: 100% pure semantic HTML5 styling',
    'Enforces correct HTML5 tag semantics (uses `<section>`, `<article>`, `<nav>`, `<aside>`)',
    'Lightweight and instantly usable via a single `<link>` tag'
  ],
  weaknesses: [
    'Classless: impossible to override individual elements without custom CSS'
  ],
  tags: [
    'tacit-css',
    'tacit',
    'classless',
    'semantic-html',
    'minimalist',
    'pure-css',
    'hidden-gem'
  ],
  aliases: ['Tacit CSS', 'Tacit', 'Tacit Framework'],
  relatedSystems: ['sakura-css', 'water-css', 'simple-css', 'mvp-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install tacit-css',
      packages: ['tacit-css'],
      setupInstructions: 'Link `tacit-css/dist/tacit.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    form: {
      canonicalName: 'form',
      description: 'Tacit automatically formats and aligns native HTML5 forms and inputs.',
      importExample: '<form><label for="email">Email</label><input type="email" id="email"><button type="submit">Submit</button></form>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Write pure semantic HTML5 without `class` or `id` attributes for styling.',
      'Link `tacit.min.css` in `<head>`.',
      'Use native HTML tags (`table`, `form`, `fieldset`, `button`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Override styles with custom external stylesheet if necessary.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` tags.'
  }
};
