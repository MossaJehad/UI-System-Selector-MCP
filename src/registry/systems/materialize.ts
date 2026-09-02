import { UISystem } from '../../schemas/uiSystem.js';

export const materialize: UISystem = {
  id: 'materialize',
  name: 'Materialize CSS',
  organization: 'Materialize Community',
  description: 'An open-source responsive CSS/JS framework based on Google Material Design, providing card panels, wave ripple effects, floating action buttons (FAB), modals, parallax scrolling, and responsive 12-column grid with zero jQuery dependencies in modern releases.',
  category: 'css-framework',
  secondaryCategories: ['consumer', 'component-library'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['@materializecss/materialize'],
  docsUrl: 'https://materializecss.github.io/materialize',
  repositoryUrl: 'https://github.com/materializecss/materialize',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Implements Material Design focus states and accessible modal traps.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Material Design Sass color variables',
    packageName: '@materializecss/materialize'
  },
  icons: {
    available: true,
    name: 'Material Icons via Materialize'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Google Material Design CSS style: wave click effects, floating action buttons (FAB), card panels with image covers, collapsibles, and side navigation.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'HTML/CSS server-rendered web applications wanting pure CSS Google Material Design styling',
    'Developers wanting wave click animations, side-nav, and FAB buttons with zero heavy framework runtimes',
    'Projects built on Rails, Django, Laravel, or Express'
  ],
  avoidFor: [
    'Tailwind-only modern projects'
  ],
  strengths: [
    'Pure CSS & vanilla JavaScript implementation of Google Material Design',
    'Built-in wave click effects, parallax, modals, tabs, and side-nav drawers',
    'Active community fork (`@materializecss/materialize`) maintaining modern vanilla JS without jQuery'
  ],
  weaknesses: [
    'Traditional Material Design visual appearance'
  ],
  tags: [
    'materialize',
    'material-design',
    'css-framework',
    'waves',
    'fab',
    'sass',
    'mainstream'
  ],
  aliases: ['Materialize', 'Materialize CSS', 'MaterializeCSS'],
  relatedSystems: ['bootstrap', 'bulma', 'mui'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @materializecss/materialize',
      packages: ['@materializecss/materialize'],
      setupInstructions: 'Import `@materializecss/materialize/dist/css/materialize.min.css` and `@materializecss/materialize/dist/js/materialize.min.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Materialize action button with waves-effect and waves-light.',
      importExample: '<button class="btn waves-effect waves-light" type="submit">Submit Record</button>',
      docSubUrl: 'buttons.html'
    },
    fab: {
      canonicalName: 'btn-floating',
      description: 'Floating Action Button (FAB) with pulse or large modifier.',
      importExample: '<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>',
      docSubUrl: 'floating-action-button.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use Materialize classes (`btn waves-effect`, `card`, `sidenav`, `modal`).',
      'Use 12-column grid with `.row` and `.col s12 m6 l4`.',
      'Initialize JS components via `M.AutoInit()` or `M.Sidenav.init()`. '
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Sass color palette variables.',
    iconUsage: 'Use Material Icons with `<i class="material-icons">search</i>`.',
    layoutConventions: 'Use `.container`, `.row`, and `.col`.'
  }
};
