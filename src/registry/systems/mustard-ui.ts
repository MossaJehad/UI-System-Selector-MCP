import { UISystem } from '../../schemas/uiSystem.js';

export const mustardUi: UISystem = {
  id: 'mustard-ui',
  name: 'Mustard UI (Starter CSS Framework)',
  organization: 'Kyle Anthony / Mustard UI Community',
  description: 'An open-source starter CSS framework engineered for building clean, modern web applications with buttons, forms, progress bars, cards, modals, tooltips, and grid systems in under 8KB gzipped.',
  category: 'css-framework',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['mustard-ui'],
  docsUrl: 'https://kyleanthony.github.io/mustard-ui',
  repositoryUrl: 'https://github.com/kyleanthony/mustard-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible button and form focus indicators.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Mustard UI SCSS variables',
    packageName: 'mustard-ui'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern friendly CSS starter aesthetic: Mustard Yellow/Amber (#ffab00) / Teal accents, rounded cards, clean progress bars, and crisp typography in under 8KB.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting a lightweight starter CSS framework (<8KB) with pre-built components',
    'HTML prototypes, personal portfolios, and web tools',
    'Clean modern design without heavy CSS-in-JS dependencies'
  ],
  avoidFor: [
    'Complex single-page applications needing headless state engines'
  ],
  strengths: [
    'Compact size: under 8KB gzipped for a complete component set',
    'Clean component library: Buttons, Forms, Progress, Cards, Modals, Tooltips, Accordions',
    'Zero JavaScript required for layout and visual styling'
  ],
  weaknesses: [
    'CSS only'
  ],
  tags: [
    'mustard-ui',
    'mustard',
    'css-framework',
    'starter-kit',
    'sass',
    'minimalist',
    'hidden-gem'
  ],
  aliases: ['Mustard UI', 'Mustard', 'Mustard CSS'],
  relatedSystems: ['picnic-css', 'cirrus-css', 'chota'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install mustard-ui',
      packages: ['mustard-ui'],
      setupInstructions: 'Import `mustard-ui/dist/css/mustard-ui.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Mustard button with button-primary, button-success, button-warning, button-danger.',
      importExample: '<button class="button-primary">Get Started</button>',
      docSubUrl: 'docs/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use Mustard UI component classes (e.g. `card`, `button-primary`, `stepper`).',
      'Import `mustard-ui.min.css` in `<head>`.',
      'Use Mustard responsive grid (`row`, `col-*`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Sass variables before compiling.',
    iconUsage: 'Embed SVG icons inside buttons.',
    layoutConventions: 'Use `row` and `col-*` grid layout.'
  }
};
