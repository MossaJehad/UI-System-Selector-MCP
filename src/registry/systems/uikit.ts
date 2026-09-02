import { UISystem } from '../../schemas/uiSystem.js';

export const uikit: UISystem = {
  id: 'uikit',
  name: 'UIkit',
  organization: 'YOOtheme / UIkit Community',
  description: 'An open-source, modular, lightweight front-end CSS/JS framework with 30+ components, built-in SVG icons, responsive off-canvas menus, parallax scrolling, lightbox viewers, filterable masonry grids, and comprehensive Less/Sass theming.',
  category: 'css-framework',
  secondaryCategories: ['creative-tool', 'consumer', 'component-library'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'less',
  packageNames: ['uikit'],
  docsUrl: 'https://getuikit.com',
  repositoryUrl: 'https://github.com/uikit/uikit',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides full keyboard navigation and ARIA roles across interactive overlays.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'UIkit Less/Sass theme variables and CSS Custom Properties',
    packageName: 'uikit'
  },
  icons: {
    available: true,
    packageName: 'uikit',
    name: 'UIkit Built-in SVG Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Elegant, modern European design aesthetic: subtle translucent overlays, smooth off-canvas drawers, filterable photo grids, parallax hero sections, and minimalist typography.',
  noveltyLevel: 'established',
  bestFor: [
    'Creative agency websites, portfolios, photography showcases, and marketing landing pages',
    'Interactive components like Lightbox, Slider, Slideshow, Filter, Parallax, and Sortable with zero extra plugins',
    'HTML/CSS projects wanting a clean, high-craft aesthetic with built-in SVG iconography'
  ],
  avoidFor: [
    'Dense financial tabular spreadsheets'
  ],
  strengths: [
    'Unbeatable out-of-the-box creative components (Lightbox, Slideshow, Filter, Parallax, Sticky, Scrollspy)',
    'Built-in SVG icon library (`uk-icon="icon: check"`) rendered dynamically',
    'Pure vanilla JS plugins: zero jQuery or heavy runtime required'
  ],
  weaknesses: [
    'Less widely discussed in React/Next.js single-page application circles'
  ],
  tags: [
    'uikit',
    'css-framework',
    'lightbox',
    'slider',
    'creative',
    'less',
    'icons',
    'established'
  ],
  aliases: ['UIkit', 'UIkit 3', 'getuikit', 'YOOtheme UIkit'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install uikit',
      packages: ['uikit'],
      setupInstructions: 'Import `uikit/dist/css/uikit.min.css` and `uikit/dist/js/uikit.min.js`, `uikit/dist/js/uikit-icons.min.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'uk-button',
      description: 'UIkit button with uk-button-primary, uk-button-secondary, uk-button-default.',
      importExample: '<button class="uk-button uk-button-primary">Explore Portfolio</button>',
      docSubUrl: 'docs/button'
    },
    lightbox: {
      canonicalName: 'uk-lightbox',
      description: 'Built-in responsive image and video lightbox overlay.',
      importExample: '<div uk-lightbox><a class="uk-button uk-button-default" href="image.jpg">Open Lightbox</a></div>',
      docSubUrl: 'docs/lightbox'
    }
  },
  aiInstructions: {
    principles: [
      'Use `uk-*` CSS classes and `uk-*` HTML data attributes for JavaScript triggers.',
      'Use UIkit Grid (`.uk-grid`) with `.uk-width-*` for responsive layouts.',
      'Use `uk-icon="icon: ..."` for SVG iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Less/Sass variables or CSS variables.',
    iconUsage: 'Use `<span uk-icon="icon: search"></span>`.',
    layoutConventions: 'Use `.uk-container`, `.uk-section`, and `.uk-grid`.'
  }
};
