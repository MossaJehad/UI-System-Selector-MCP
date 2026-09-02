import { UISystem } from '../../schemas/uiSystem.js';

export const museUi: UISystem = {
  id: 'muse-ui',
  name: 'Muse UI (Material Design for Vue 2)',
  organization: 'myronliu / Muse UI Community',
  description: 'A historic, open-source Material Design component library for Vue.js, featuring 40+ components, customizable theme colors, ripple animations, and mobile-first responsive interactions.',
  category: 'component-library',
  secondaryCategories: ['styled', 'consumer'],
  frameworks: ['vue'],
  stylingApproach: 'less',
  packageNames: ['muse-ui'],
  docsUrl: 'https://muse-ui.org',
  repositoryUrl: 'https://github.com/museui/muse-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Material Design keyboard focus indicators and touch feedback.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Muse UI theme configuration via `muse-ui/lib/theme`',
    packageName: 'muse-ui'
  },
  icons: {
    available: true,
    name: 'Material Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Classic Google Material Design 2 aesthetic: vibrant primary app bars, floating action buttons (FAB), bottom sheets, and ripple effects.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Maintaining or studying classic Vue 2 Material Design applications',
    'Developers researching historical Vue UI architectures and theme switchers',
    'Historical reference'
  ],
  avoidFor: [
    'New Vue 3 / Nuxt 3 greenfield projects (use Vuetify or Varlet instead)'
  ],
  strengths: [
    'One of the most popular Material Design libraries of the early Vue 2 era',
    'Rich component catalog: AppBar, BottomNav, Drawer, Dialog, Ripple, Tooltip',
    'Dynamic runtime theme switching'
  ],
  weaknesses: [
    'Archived; Vue 2 ecosystem focus'
  ],
  tags: [
    'muse-ui',
    'muse',
    'vue2',
    'material-design',
    'archived',
    'historical',
    'hidden-gem'
  ],
  aliases: ['Muse UI', 'MuseUI', 'Muse'],
  relatedSystems: ['vue-material', 'vuetify', 'varlet'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install muse-ui',
      packages: ['muse-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `muse-ui/dist/muse-ui.css` and use `Vue.use(MuseUI)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<mu-button>',
      description: 'Muse UI Material button with color="primary" | "secondary" | "success".',
      importExample: '<mu-button color="primary">Submit</mu-button>',
      docSubUrl: '#/zh-CN/button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Vue 2 library: uses `<mu-*>` components.',
      'Import `muse-ui/dist/muse-ui.css` at root.',
      'Use `theme.add()` to customize colors.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `muse-ui/lib/theme`.',
    iconUsage: 'Use `<mu-icon value="home"></mu-icon>`.',
    layoutConventions: 'Use `<mu-container>`, `<mu-row>`, `<mu-col>`.'
  }
};
