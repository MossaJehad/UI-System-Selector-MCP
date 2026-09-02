import { UISystem } from '../../schemas/uiSystem.js';

export const balmUi: UISystem = {
  id: 'balm-ui',
  name: 'BalmUI (Next Generation Material UI for Vue.js)',
  organization: 'BalmUI Team',
  description: 'An open-source, modular Material Design component library for Vue 3 and Vue 2, implementing Google Material Components for the Web (MDC Web) with full TypeScript support and custom plugins.',
  category: 'component-library',
  secondaryCategories: ['styled', 'consumer'],
  frameworks: ['vue'],
  stylingApproach: 'sass',
  packageNames: ['balm-ui'],
  docsUrl: 'https://material.balmjs.com',
  repositoryUrl: 'https://github.com/balmjs/balm-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Google MDC Web accessibility and ARIA specifications in Vue 3.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design MDC theme tokens and Sass variables',
    packageName: 'balm-ui'
  },
  icons: {
    available: true,
    packageName: 'balm-ui',
    name: 'Material Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Google Material Design MDC aesthetic: floating labels, ripple effects, elevation surface shadows, and Material action buttons.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue 3 web applications wanting faithful Google Material Components (MDC) implementation',
    'Developers who appreciate Material Design with direct Vue component bindings',
    'Mobile-first and desktop web apps'
  ],
  avoidFor: [
    'Tailwind CSS copy-paste architectures'
  ],
  strengths: [
    'Official Vue 3 binding layer on top of Google MDC Web',
    'Full TypeScript definitions and modular component imports',
    'Built-in Vue plugins for toast, alert, and confirmation dialogs'
  ],
  weaknesses: [
    'Material Design visual constraint'
  ],
  tags: [
    'balm-ui',
    'balmui',
    'vue',
    'vue3',
    'material-design',
    'mdc',
    'hidden-gem'
  ],
  aliases: ['BalmUI', 'Balm UI', 'BalmJS Material'],
  relatedSystems: ['vue-material', 'varlet', 'vuetify'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install balm-ui',
      packages: ['balm-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `balm-ui/dist/balm-ui.css` and register with `app.use(BalmUI)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ui-button>',
      description: 'BalmUI Material action button with raised, outlined, or text variant.',
      importExample: '<ui-button raised @click="handleClick">Submit</ui-button>',
      docSubUrl: 'button'
    }
  },
  aiInstructions: {
    principles: [
      'Install and register `balm-ui` plugin in Vue 3 `main.ts`.',
      'Use `<ui-*>` components for Material Design UI.',
      'Import `balm-ui/dist/balm-ui.css`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure MDC Sass theme variables before compiling.',
    iconUsage: 'Use `<ui-icon>search</ui-icon>`.',
    layoutConventions: 'Use MDC grid system (`<ui-grid>`).'
  }
};
