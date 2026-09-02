import { UISystem } from '../../schemas/uiSystem.js';

export const tachyons: UISystem = {
  id: 'tachyons',
  name: 'Tachyons',
  organization: 'Adam Morse / Tachyons Community',
  description: 'The pioneering open-source functional and atomic CSS design system, providing fast, responsive, immutable utility classes for rapid UI prototyping, scales for typography and spacing, and tiny footprint.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'developer-tool', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['tachyons'],
  docsUrl: 'https://tachyons.io',
  repositoryUrl: 'https://github.com/tachyons-css/tachyons',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible focus states and high-contrast color combinations.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Functional atomic CSS scales for type, spacing, and colors',
    packageName: 'tachyons'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Crisp, functional, atomic CSS aesthetic: concise utility classes (`pa3`, `ba`, `b--black-20`, `f4`, `fw6`, `dim`, `pointer`), clean typographic rhythm, and responsive breakpoint prefixes (`-ns`, `-m`, `-l`).',
  noveltyLevel: 'established',
  bestFor: [
    'Developers who appreciate the original functional/atomic CSS philosophy that inspired Tailwind CSS',
    'Rapid HTML prototyping with ultra-concise class names (`pa3 br2 bg-blue white`)',
    'Projects requiring a tiny (~14KB gzipped) immutable CSS foundation'
  ],
  avoidFor: [
    'Developers wanting pre-built JavaScript component widgets'
  ],
  strengths: [
    'Pioneer of functional/atomic CSS that shaped the modern utility-first CSS movement',
    'Ultra-concise class naming convention (`f1`-`f7`, `pa1`-`pa7`, `ma1`-`ma7`)',
    'Immutable CSS: classes do one thing and never conflict'
  ],
  weaknesses: [
    'Tailwind CSS has become the dominant modern evolution of the atomic CSS paradigm'
  ],
  tags: [
    'tachyons',
    'functional-css',
    'atomic-css',
    'utility-first',
    'css-framework',
    'lightweight',
    'established'
  ],
  aliases: ['Tachyons', 'Tachyons CSS', 'Tachyons.io'],
  relatedSystems: ['basscss', 'pure-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install tachyons',
      packages: ['tachyons'],
      setupInstructions: 'Import `tachyons/css/tachyons.min.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Tachyons functional button with concise utility classes.',
      importExample: '<a class="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Button Text</a>',
      docSubUrl: 'components/buttons/'
    },
    card: {
      canonicalName: 'article',
      description: 'Tachyons card container.',
      importExample: '<article class="ba b--black-10 mw5 br3 pa3 pa4-ns mv3 ba b--black-10"><h1 class="f4">Title</h1><p class="lh-copy measure">Content</p></article>',
      docSubUrl: 'components/cards/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Tachyons concise functional classes (`f1`-`f7`, `pa1`-`pa7`, `ma1`-`ma7`, `ba`, `br1`-`br4`).',
      'Use responsive suffix classes (`-ns` not-small, `-m` medium, `-l` large).',
      'Compose readable UI directly in HTML markup.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure custom scales in PostCSS or custom stylesheet.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Flexbox utilities (`flex`, `items-center`, `justify-between`).'
  }
};
