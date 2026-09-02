import { UISystem } from '../../schemas/uiSystem.js';

export const inkline: UISystem = {
  id: 'inkline',
  name: 'Inkline (Intuitive UI for Vue 3)',
  organization: 'Alex Grozav / Inkline Community',
  description: 'An open-source, mobile-first component library for Vue 3 and Nuxt 3 designed for exceptional developer experience, customization via CSS variables, automated form validation, dark mode, and accessibility.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'sass',
  packageNames: ['@inkline/inkline'],
  docsUrl: 'https://inkline.io',
  repositoryUrl: 'https://github.com/inkline/inkline',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for WAI-ARIA compliance, keyboard focus trapping, and screen reader announcements.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Sass variables',
    packageName: '@inkline/inkline'
  },
  icons: {
    available: true,
    name: 'Inkline Icon integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Intuitive modern SaaS aesthetic: Inkline Navy / Primary Blue accents, clean form validation states, dark theme, and lightweight responsive grid.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue 3 and Nuxt 3 developers wanting a lightweight, accessible alternative to Vuetify or Element Plus',
    'Apps requiring powerful built-in form validation (schema validation, touched/dirty states)',
    'Modern responsive web applications'
  ],
  avoidFor: [
    'React or Angular projects'
  ],
  strengths: [
    'Outstanding developer experience: intuitive component naming, zero config dark mode, and Nuxt 3 module',
    'Built-in form validation engine with automatic error message handling',
    'Customization powered entirely by standardized CSS variables'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'inkline',
    'vue3',
    'nuxt',
    'form-validation',
    'dark-mode',
    'accessibility',
    'hidden-gem'
  ],
  aliases: ['Inkline', 'Inkline UI', 'Inkline Vue'],
  relatedSystems: ['vuestic-ui', 'primevue', 'element-plus'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install @inkline/inkline',
      packages: ['@inkline/inkline'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@inkline/inkline/css/index.scss` or CSS and `app.use(Inkline, { colorMode: "system" })`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'i-button',
      description: 'Inkline button with color="primary" | "secondary" | "success" | "danger" | "warning" | "info".',
      importExample: '<i-button color="primary">Save Changes</i-button>',
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<i-*>` component tags in Vue 3 templates.',
      'Import `@inkline/inkline/css/index.scss` at app root.',
      'Use Inkline `<i-form>` and `<i-form-group>` for form validation.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables prefixed with `--inkline--*`.',
    iconUsage: 'Use `<i-icon name="ink-search" />`.',
    layoutConventions: 'Use `<i-container>`, `<i-row>`, `<i-column>`.'
  }
};
