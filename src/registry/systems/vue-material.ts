import { UISystem } from '../../schemas/uiSystem.js';

export const vueMaterial: UISystem = {
  id: 'vue-material',
  name: 'Vue Material (Material Design for Vue.js)',
  organization: 'Marcos Moura / Vue Material Community',
  description: 'A historic, open-source Material Design component library for Vue.js, implementing Google Material Design with 50+ components (MdApp, MdCard, MdDatepicker, MdDrawer, MdSnackbar, MdTable) and dynamic theme generation.',
  category: 'component-library',
  secondaryCategories: ['styled', 'consumer'],
  frameworks: ['vue'],
  stylingApproach: 'sass',
  packageNames: ['vue-material'],
  docsUrl: 'https://vuematerial.io',
  repositoryUrl: 'https://github.com/vuematerial/vue-material',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Material Design keyboard focus rings and ARIA dialog roles.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Vue Material theme registration via `Vue.material.theming`',
    packageName: 'vue-material'
  },
  icons: {
    available: true,
    name: 'Material Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Google Material Design 2 aesthetic: bold primary app bars, floating action buttons (FAB), elevation card surfaces, and dynamic theme colors.',
  noveltyLevel: 'established',
  bestFor: [
    'Historical reference and studying early full-suite Material Design implementations in Vue.js',
    'Maintaining legacy Vue 2 Material applications',
    'Material Design app scaffold architectures (`md-app`, `md-drawer`)'
  ],
  avoidFor: [
    'New Vue 3 / Nuxt 3 projects (use Vuetify, Varlet, or BalmUI instead)'
  ],
  strengths: [
    'One of the most widely starred and celebrated Material Design libraries in Vue history (9.5k+ stars)',
    'Comprehensive component suite covering full app shells, drawer navigation, and data tables',
    'Dynamic runtime theme registration'
  ],
  weaknesses: [
    'Archived; Vue 2 focus'
  ],
  tags: [
    'vue-material',
    'vue',
    'material-design',
    'google',
    'archived',
    'historical',
    'established'
  ],
  aliases: ['Vue Material', 'VueMaterial', 'Vue Material Design'],
  relatedSystems: ['vuetify', 'balm-ui', 'varlet', 'muse-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install vue-material',
      packages: ['vue-material'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `vue-material/dist/vue-material.min.css` and `vue-material/dist/theme/default.css`, then use `Vue.use(VueMaterial)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<md-button>',
      description: 'Vue Material button with class="md-raised md-primary".',
      importExample: '<md-button class="md-raised md-primary">Save Changes</md-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Vue 2 library: uses `<md-*>` components.',
      'Import `vue-material/dist/vue-material.min.css` and theme stylesheet.',
      'Use `<md-app>` for app shell layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `Vue.material.theming.theme` registration.',
    iconUsage: 'Use `<md-icon>home</md-icon>`.',
    layoutConventions: 'Use `<md-app>` with `<md-app-toolbar>` and `<md-app-drawer>`.'
  }
};
