import { UISystem } from '../../schemas/uiSystem.js';

export const vuesticUi: UISystem = {
  id: 'vuestic-ui',
  name: 'Vuestic UI',
  organization: 'Epicmax / Vuestic Community',
  description: 'An open-source Vue 3 component library built by Epicmax, featuring 60+ customizable components, deep dark mode support, comprehensive admin dashboard templates, and built-in i18n localization.',
  category: 'component-library',
  secondaryCategories: ['dashboard', 'saas', 'styled'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'css-modules',
  packageNames: ['vuestic-ui'],
  docsUrl: 'https://ui.vuestic.dev',
  repositoryUrl: 'https://github.com/epicmaxco/vuestic-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard navigation, focus indicators, and ARIA roles across all components.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties via Vuestic Global Config',
    packageName: 'vuestic-ui'
  },
  icons: {
    available: true,
    packageName: 'vuestic-ui',
    name: 'Vuestic Icon Config / Material Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern European SaaS admin aesthetic: Vuestic Primary Blue (#154ec1) / Coral accents, clean data tables, responsive side navigation drawers, and smooth dark mode switching.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt admin dashboards, SaaS applications, and back-office portals',
    'Developers wanting an all-in-one component suite without heavy framework lock-in',
    'Fast full-featured admin template development (Vuestic Admin)'
  ],
  avoidFor: [
    'React or Angular projects'
  ],
  strengths: [
    'Complete Vue 3 admin suite: 60+ components with Nuxt 3 module support',
    'First-class dark mode with reactive color presets',
    'Extensible Global Configuration engine for colors, icons, and component defaults'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'vuestic-ui',
    'vuestic',
    'vue3',
    'nuxt',
    'admin',
    'dashboard',
    'saas',
    'dark-mode',
    'established'
  ],
  aliases: ['Vuestic UI', 'Vuestic', 'Vuestic Admin', 'Epicmax Vuestic'],
  relatedSystems: ['vuetify', 'primevue', 'element-plus'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install vuestic-ui',
      packages: ['vuestic-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `vuestic-ui/css` in `main.ts` and `app.use(createVuestic())`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'va-button',
      description: 'Vuestic button with preset="primary" | "secondary" | "plain" | "outline".',
      importExample: '<va-button preset="primary">Save Changes</va-button>',
      docSubUrl: 'ui-elements/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<va-*>` component tags in Vue 3 templates.',
      'Import `vuestic-ui/css` at app root.',
      'Use `createVuestic({ config: { colors: { ... } } })` for theming.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `createVuestic()` Global Config.',
    iconUsage: 'Use `<va-icon name="search" />`.',
    layoutConventions: 'Use `<va-navbar>`, `<va-sidebar>`, `<va-card>`.'
  }
};
