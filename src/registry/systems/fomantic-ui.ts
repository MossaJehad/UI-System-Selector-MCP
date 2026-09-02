import { UISystem } from '../../schemas/uiSystem.js';

export const fomanticUi: UISystem = {
  id: 'fomantic-ui',
  name: 'Fomantic-UI',
  organization: 'Fomantic Community (Semantic-UI Community Fork)',
  description: 'The official community fork and continuation of Semantic-UI, providing natural language CSS classes (`ui primary button`, `ui huge header`), 50+ UI elements, full dark mode, calendar/slider modules, and zero-configuration theming.',
  category: 'css-framework',
  secondaryCategories: ['component-library', 'saas', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'less',
  packageNames: ['fomantic-ui-css', 'fomantic-ui'],
  docsUrl: 'https://fomantic-ui.com',
  repositoryUrl: 'https://github.com/fomantic/Fomantic-UI',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Community-maintained updates to WAI-ARIA and keyboard navigation across dropdowns, calendars, and modals.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Fomantic-UI Less theme variables and packaged themes',
    packageName: 'fomantic-ui'
  },
  icons: {
    available: true,
    packageName: 'fomantic-ui-css',
    name: 'FontAwesome Free 5 & 6 integration via Fomantic Icon'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Human-friendly natural language UI style: teal/blue accents, segment containers, labeled buttons, intuitive calendar modules, and comprehensive UI elements.',
  noveltyLevel: 'established',
  bestFor: [
    'HTML/CSS applications wanting expressive, natural language class names (`ui primary fluid button`)',
    'Projects upgrading from legacy Semantic UI with modern fixes and new components (Calendar, Slider, Toast)',
    'Full-stack applications (Laravel, Django, Rails, Express) wanting comprehensive CSS/JS components'
  ],
  avoidFor: [
    'Tailwind-only workflows'
  ],
  strengths: [
    'Actively maintained community continuation of Semantic-UI with modern features (Calendar, Toast, Range Slider, Dark Mode)',
    'Unbeatable human readability in HTML markup',
    'Rich UI taxonomy: Elements, Collections, Views, Modules, and Behaviors'
  ],
  weaknesses: [
    'Less widely used in modern React single-page application setups compared to Tailwind/Radix'
  ],
  tags: [
    'fomantic-ui',
    'semantic-ui',
    'css-framework',
    'natural-language',
    'less',
    'dark-mode',
    'established'
  ],
  aliases: ['Fomantic-UI', 'Fomantic UI', 'Fomantic', 'Semantic-UI Fork'],
  relatedSystems: ['semantic-ui-react', 'bootstrap', 'bulma'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install fomantic-ui-css jquery',
      packages: ['fomantic-ui-css', 'jquery'],
      setupInstructions: 'Import `fomantic-ui-css/semantic.min.css` and `fomantic-ui-css/semantic.min.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Fomantic natural language button (ui primary button, ui positive button).',
      importExample: '<button class="ui primary button">Save Project</button>',
      docSubUrl: 'elements/button.html'
    },
    segment: {
      canonicalName: 'segment',
      description: 'Fomantic container segment with raised, stacked, piled variations.',
      importExample: '<div class="ui raised segment"><h3>Report Details</h3><p>Content</p></div>',
      docSubUrl: 'elements/segment.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use natural language Fomantic classes (`ui primary button`, `ui card`, `ui form`).',
      'Use Semantic/Fomantic UI Grid (`ui grid`, `column`) for layouts.',
      'Initialize modules with jQuery (e.g. `$(".ui.dropdown").dropdown()`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes in `theme.config` or Less variables.',
    iconUsage: 'Use `<i class="search icon"></i>`.',
    layoutConventions: 'Use `.ui.container`, `.ui.grid`, and `.ui.segment`.'
  }
};
