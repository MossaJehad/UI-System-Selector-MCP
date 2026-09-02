import { UISystem } from '../../schemas/uiSystem.js';

export const picnicCss: UISystem = {
  id: 'picnic-css',
  name: 'Picnic CSS',
  organization: 'Francisco Presencia / Picnic CSS Community',
  description: 'An open-source, lightweight (~10KB) CSS framework with pure HTML/CSS interactive components (Modals, Tabs, Tooltips, File Pickers, Navbars) driven entirely by CSS checkboxes and radio buttons without JavaScript.',
  category: 'css-framework',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['picnic'],
  docsUrl: 'https://picnicss.com',
  repositoryUrl: 'https://github.com/franciscop/picnic',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible CSS checkbox hack interactive components.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Picnic SCSS variables',
    packageName: 'picnic'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Delightful minimalist web aesthetic: Picnic Blue (#0074d9) accents, pure-CSS interactive modal overlays, clean tabs, file upload dropzones, and subtle card hover elevations.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Static sites, documentation pages, and personal websites wanting interactive modals and tabs with ZERO JavaScript',
    'Developers who appreciate clever pure-CSS interactive architecture (checkbox hacks)',
    'Lightweight projects under 10KB CSS budget'
  ],
  avoidFor: [
    'Complex enterprise SPAs with heavy JS state'
  ],
  strengths: [
    'Pure HTML/CSS interactive components: Modals, Tabs, and Tooltips work with 0 lines of JavaScript',
    'Extremely lightweight (~10KB minified & gzipped)',
    'Native HTML elements (buttons, inputs, tables) are automatically styled by default'
  ],
  weaknesses: [
    'Pure CSS interactivity model'
  ],
  tags: [
    'picnic-css',
    'picnic',
    'css-framework',
    'pure-css',
    'no-js',
    'minimalist',
    'hidden-gem'
  ],
  aliases: ['Picnic CSS', 'Picnic', 'PicnicCSS'],
  relatedSystems: ['pico-css', 'spectre-css', 'pure-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install picnic',
      packages: ['picnic'],
      setupInstructions: 'Import `picnic/picnic.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Picnic automatically styles native buttons with class="success", "warning", "error".',
      importExample: '<button class="success">Save Changes</button>',
      docSubUrl: 'documentation#buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic HTML elements (buttons, inputs, tables are styled automatically).',
      'Use Picnic pure-CSS interactive modal and tab patterns (checkbox triggers).',
      'Import `picnic.min.css` in `<head>`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Picnic Sass variables before compiling.',
    iconUsage: 'Embed SVG icons inside buttons.',
    layoutConventions: 'Use `flex`, `row`, and `col` layout classes.'
  }
};
