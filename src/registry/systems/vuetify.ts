import { UISystem } from '../../schemas/uiSystem.js';

export const vuetify: UISystem = {
  id: 'vuetify',
  name: 'Vuetify 3',
  organization: 'Vuetify Community (John Leider)',
  description: 'The world’s most popular open-source Material Design component framework for Vue 3 and Nuxt, providing 80+ production-grade components, dynamic theme generation, responsive grid system, and extensive form validation.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'enterprise', 'consumer'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'sass',
  packageNames: ['vuetify', '@mdi/font'],
  docsUrl: 'https://vuetifyjs.com',
  repositoryUrl: 'https://github.com/vuetifyjs/vuetify',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Material Design accessibility specifications in Vue 3.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Vuetify Theme engine with dynamic CSS custom properties and Sass variables',
    packageName: 'vuetify'
  },
  icons: {
    available: true,
    packageName: '@mdi/font',
    name: 'Material Design Icons (MDI)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Google Material Design 3 for Vue: ripple effect touch animations, elevated floating action buttons, navigation drawers, and clean card elevations.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Vue 3 and Nuxt applications wanting a comprehensive, battle-tested Material Design framework',
    'Enterprise SaaS applications and admin dashboards needing deep component variety (v-data-table, v-date-picker, v-autocomplete)',
    'Rapid application development in Vue with zero CSS configuration needed'
  ],
  avoidFor: [
    'React or Svelte projects',
    'Projects wanting ultra-minimalist non-Material aesthetics'
  ],
  strengths: [
    'Largest and most mature component framework in the Vue.js ecosystem',
    'Over 80+ components with comprehensive props, events, and slots',
    'First-class Nuxt 3 integration (`vuetify-nuxt-module`) and dynamic theme switcher'
  ],
  weaknesses: [
    'Opinionated Material Design styling requires customization for custom brand aesthetics'
  ],
  tags: [
    'vuetify',
    'vue',
    'vue3',
    'nuxt',
    'material-design',
    'component-library',
    'enterprise',
    'dark-mode',
    'rtl',
    'mainstream'
  ],
  aliases: ['Vuetify', 'Vuetify 3', 'VuetifyJS'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install vuetify @mdi/font',
      packages: ['vuetify', '@mdi/font'],
      peerDependencies: ['vue'],
      setupInstructions: 'Initialize with `createVuetify()` and import `vuetify/styles` in `main.ts`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'v-btn',
      description: 'Vuetify button with color="primary" | "secondary", variant="elevated" | "flat" | "tonal" | "outlined" | "text".',
      importExample: '<v-btn color="primary" variant="elevated">Get Started</v-btn>',
      docSubUrl: 'components/buttons/'
    },
    card: {
      canonicalName: 'v-card',
      description: 'Material card with v-card-title, v-card-text, and v-card-actions.',
      importExample: '<v-card title="Card Title" subtitle="Subtitle" text="Content"><v-card-actions><v-btn>Action</v-btn></v-card-actions></v-card>',
      docSubUrl: 'components/cards/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<v-app>` as the top-level application wrapper in Vue.',
      'Use `v-container`, `v-row`, and `v-col` for the 12-column responsive layout grid.',
      'Use `v-form` with rules arrays for form validation.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure themes in `createVuetify({ theme: { defaultTheme: "dark" } })`.',
    iconUsage: 'Use MDI icons via `mdi-*` (e.g. `icon="mdi-account"`).',
    layoutConventions: 'Wrap in `<v-app><v-main><v-container>...</v-container></v-main></v-app>`.'
  }
};
