import { UISystem } from '../../schemas/uiSystem.js';

export const bulma: UISystem = {
  id: 'bulma',
  name: 'Bulma',
  organization: 'Jeremy Thomas / Bulma Community',
  description: 'A modern, 100% pure CSS framework based on Flexbox and Sass/CSS variables, providing clean, human-readable class names with zero JavaScript dependencies.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'consumer', 'saas'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['bulma'],
  docsUrl: 'https://bulma.io',
  repositoryUrl: 'https://github.com/jgthms/bulma',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML5 structure with accessible form labels and color contrast ratios.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Bulma 1.0+ CSS custom properties and Sass variables',
    packageName: 'bulma'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, elegant, human-readable CSS aesthetic: Bulma Turquoise (#00d1b2), rounded buttons, intuitive columns (`is-one-third`, `is-half`), and beautiful hero banners.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Developers wanting a 100% pure CSS framework with zero JavaScript dependencies',
    'HTML/CSS projects prioritizing readable, semantic class names (`button is-primary is-rounded`)',
    'Full-stack server-rendered applications (Rails, Django, Go, Laravel, Elixir Phoenix)'
  ],
  avoidFor: [
    'Developers wanting complex pre-wired JS state machines (comboboxes, virtualized tables)'
  ],
  strengths: [
    'Zero JavaScript: 100% pure CSS that leaves JS framework choice entirely up to you',
    'Most readable and intuitive CSS class naming system in the CSS framework ecosystem',
    'Bulma 1.0+ adds full CSS custom properties, dark mode, and modular CSS layers'
  ],
  weaknesses: [
    'No built-in JavaScript plugins for modals or dropdowns (requires writing 3 lines of vanilla JS or framework state)'
  ],
  tags: [
    'bulma',
    'css-framework',
    'pure-css',
    'flexbox',
    'sass',
    'no-js',
    'dark-mode',
    'mainstream'
  ],
  aliases: ['Bulma', 'Bulma CSS', 'Bulma.io'],
  relatedSystems: ['bootstrap', 'buefy', 'pico-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install bulma',
      packages: ['bulma'],
      setupInstructions: 'Import `bulma/css/bulma.min.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Bulma button with modifier classes (is-primary, is-info, is-success, is-danger, is-rounded).',
      importExample: '<button class="button is-primary is-rounded">Get Started</button>',
      docSubUrl: 'documentation/elements/button/'
    },
    columns: {
      canonicalName: 'columns',
      description: 'Bulma Flexbox column grid container.',
      importExample: '<div class="columns"><div class="column is-half">Left Column</div><div class="column is-half">Right Column</div></div>',
      docSubUrl: 'documentation/columns/'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic Bulma classes (`columns`, `column`, `box`, `card`, `hero`).',
      'Use natural language modifiers (`is-primary`, `is-half`, `is-centered`, `has-text-weight-bold`).',
      'Handle interactive element state (e.g. `is-active` on modal/dropdown) with lightweight JS or framework state.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Configure Bulma CSS variables (--bulma-primary, --bulma-scheme-main).',
    iconUsage: 'Use FontAwesome with `<span class="icon"><i class="fas fa-home"></i></span>`.',
    layoutConventions: 'Use `.section`, `.container`, `.columns`, and `.column`.'
  }
};
