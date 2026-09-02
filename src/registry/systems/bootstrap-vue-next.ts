import { UISystem } from '../../schemas/uiSystem.js';

export const bootstrapVueNext: UISystem = {
  id: 'bootstrap-vue-next',
  name: 'BootstrapVueNext',
  organization: 'BootstrapVue Team',
  description: 'The official next-generation Bootstrap 5 component library for Vue 3 and Nuxt 3, providing reactive Bootstrap 5 components, composables, directives, and TypeScript support without jQuery or Bootstrap JavaScript runtime dependencies.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas', 'dashboard'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'sass',
  packageNames: ['bootstrap-vue-next', 'bootstrap'],
  docsUrl: 'https://bootstrap-vue-next.github.io/bootstrap-vue-next',
  repositoryUrl: 'https://github.com/bootstrap-vue-next/bootstrap-vue-next',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Bootstrap 5 accessibility standards with ARIA attributes and focus management.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Bootstrap 5 Sass variables and CSS custom properties',
    packageName: 'bootstrap'
  },
  icons: {
    available: true,
    packageName: 'bootstrap-icons',
    name: 'Bootstrap Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Bootstrap 5 aesthetic in Vue 3: primary blue (#0d6efd) buttons, responsive modal dialogs, tabbed navigation, toast notifications, and dark-mode theme switching.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt 3 applications migrating from BootstrapVue (Vue 2)',
    'Enterprise and admin web applications built with Bootstrap 5 and Vue 3',
    'Developers wanting the familiar Bootstrap 5 mental model in modern Vue 3'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'Official Vue 3 and Nuxt 3 successor to BootstrapVue',
    '100% Bootstrap 5 component parity with pure Vue 3 reactivity and TypeScript',
    'Full dark mode support and Nuxt 3 module integration'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'bootstrap-vue',
    'bootstrap-vue-next',
    'bootstrap',
    'vue3',
    'nuxt',
    'css-framework',
    'sass',
    'established'
  ],
  aliases: ['BootstrapVueNext', 'BootstrapVue 3', 'Bootstrap Vue Next', 'BootstrapVue'],
  relatedSystems: ['bootstrap', 'react-bootstrap', 'buefy'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install bootstrap-vue-next bootstrap',
      packages: ['bootstrap-vue-next', 'bootstrap'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `bootstrap/dist/css/bootstrap.min.css` and `bootstrap-vue-next/dist/bootstrap-vue-next.css` in `main.ts`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'BButton',
      description: 'BootstrapVueNext button with variant="primary" | "secondary" | "success" | "danger".',
      importExample: '<BButton variant="primary">Save Changes</BButton>',
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<B*>` component tags in Vue 3 templates.',
      'Import Bootstrap CSS and BootstrapVueNext CSS at root.',
      'Use Bootstrap grid classes (`BContainer`, `BRow`, `BCol`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Bootstrap 5 Sass variables.',
    iconUsage: 'Use `bootstrap-icons`.',
    layoutConventions: 'Use Bootstrap 5 12-column grid layout.'
  }
};
