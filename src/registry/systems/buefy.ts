import { UISystem } from '../../schemas/uiSystem.js';

export const buefy: UISystem = {
  id: 'buefy',
  name: 'Buefy (Lightweight UI for Vue & Bulma)',
  organization: 'Rafael Beraldo / Buefy Community',
  description: 'The classic, lightweight UI component library for Vue.js built on top of the Bulma CSS framework, providing reactive Bulma components (Table, Modal, Autocomplete, Toast, Steps, Datepicker) with zero CSS-in-JS overhead.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas'],
  frameworks: ['vue'],
  stylingApproach: 'sass',
  packageNames: ['buefy', 'bulma'],
  docsUrl: 'https://buefy.org',
  repositoryUrl: 'https://github.com/buefy/buefy',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides semantic Bulma HTML structure and keyboard accessible modal/dropdown interactions.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Bulma Sass variables',
    packageName: 'bulma'
  },
  icons: {
    available: true,
    name: 'Material Design Icons / FontAwesome integration'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean Bulma CSS aesthetic: Bulma Turquoise (#00d1b2) accents, rounded inputs, crisp table borders, tag chips, and clean modal popups.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 2 / Vue 3 applications styled with Bulma CSS',
    'Developers who love Bulma’s clean modern CSS aesthetic and want reactive Vue components',
    'Lightweight SaaS web applications'
  ],
  avoidFor: [
    'React or Angular projects'
  ],
  strengths: [
    'Seamless bridge between Vue.js reactivity and Bulma CSS simplicity',
    'Lightweight: zero heavy JavaScript runtime dependencies',
    'Rich component suite (Table, Modal, Autocomplete, Datepicker, Taginput, Toast)'
  ],
  weaknesses: [
    'Coupled to Bulma CSS; for modern Vue 3 agnostic use see Oruga'
  ],
  tags: [
    'buefy',
    'bulma',
    'vue',
    'css-framework',
    'sass',
    'established'
  ],
  aliases: ['Buefy', 'Buefy UI', 'Bulma Vue'],
  relatedSystems: ['bulma', 'oruga'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install buefy bulma',
      packages: ['buefy', 'bulma'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `buefy/dist/buefy.css` in `main.js` and `Vue.use(Buefy)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'b-button',
      description: 'Buefy button with type="is-primary" | "is-info" | "is-success" | "is-danger".',
      importExample: '<b-button type="is-primary">Save Changes</b-button>',
      docSubUrl: 'documentation/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<b-*>` component tags in Vue templates.',
      'Import `buefy/dist/buefy.css` at app root.',
      'Use Bulma modifier classes (e.g. `type="is-primary"`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Bulma Sass variables.',
    iconUsage: 'Use `<b-icon icon="magnify" />`.',
    layoutConventions: 'Use Bulma columns and section layout.'
  }
};
