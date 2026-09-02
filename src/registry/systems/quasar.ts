import { UISystem } from '../../schemas/uiSystem.js';

export const quasar: UISystem = {
  id: 'quasar',
  name: 'Quasar Framework',
  organization: 'Quasar Community (Razvan Stoenescu)',
  description: 'An open-source, full-stack Vue 3 UI framework and build toolchain that compiles a single Vue codebase to Responsive Web (SPA/SSR/PWA), Cross-Platform Desktop (Electron), and Mobile Apps (Capacitor/Cordova) with Material Design components.',
  category: 'component-library',
  secondaryCategories: ['mobile', 'enterprise', 'dashboard', 'saas'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'sass',
  packageNames: ['quasar', '@quasar/extras'],
  docsUrl: 'https://quasar.dev',
  repositoryUrl: 'https://github.com/quasarframework/quasar',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Material Design accessibility specifications in Vue 3 across desktop and mobile.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Quasar Sass variables and dynamic Dark plugin theme manager',
    packageName: 'quasar'
  },
  icons: {
    available: true,
    packageName: '@quasar/extras',
    name: 'Quasar Extras (Material, FontAwesome, Eva, Ionicons)'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'configurable',
  aesthetic: 'Universal cross-platform Material Design style: adaptive navigation tabs, floating action buttons, bottom sheets on mobile, and responsive desktop layout grids.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Cross-platform applications targeting Web, Desktop (Electron), and Mobile (Capacitor/Cordova) from a single Vue 3 codebase',
    'Complex Vue 3 enterprise applications needing layout builders, virtual scroll tables, and tree components',
    'High-velocity full-stack Vue development with integrated CLI toolchain'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'Write code once and deploy simultaneously to Web (SPA/SSR), PWA, Mobile (iOS/Android), and Desktop (Electron)',
    'Massive library of 70+ high-performance components (`q-table`, `q-select`, `q-dialog`, `q-splitter`)',
    'Built-in layout builder (`q-layout`, `q-header`, `q-drawer`, `q-page-container`)'
  ],
  weaknesses: [
    'Opinionated framework ecosystem that works best when adopting Quasar CLI/Vite conventions'
  ],
  tags: [
    'quasar',
    'vue',
    'vue3',
    'cross-platform',
    'mobile',
    'electron',
    'ssr',
    'pwa',
    'material-design',
    'dark-mode',
    'mainstream'
  ],
  aliases: ['Quasar', 'Quasar Framework', 'Quasar UI'],
  systemTypes: ['component-library', 'mobile', 'design-system'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install quasar @quasar/extras',
      packages: ['quasar', '@quasar/extras'],
      peerDependencies: ['vue'],
      setupInstructions: 'Use `@quasar/vite-plugin` or install via `npm create quasar`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'q-btn',
      description: 'Quasar action button with color="primary" | "secondary", unelevated, outline, rounded props.',
      importExample: '<q-btn color="primary" label="Submit" icon="send" />',
      docSubUrl: 'vue-components/button'
    },
    layout: {
      canonicalName: 'q-layout',
      description: 'Quasar top-level application layout shell with header, drawer, and page container.',
      importExample: '<q-layout view="lHh Lpr lFf"><q-header elevated><q-toolbar><q-toolbar-title>App Title</q-toolbar-title></q-toolbar></q-header><q-page-container><q-page padding>Content</q-page></q-page-container></q-layout>',
      docSubUrl: 'layout/layout'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<q-layout>` and `<q-page-container>` for application layout anatomy.',
      'Use `q-*` component prefix across all UI elements.',
      'Use Quasar Dark plugin (`$q.dark.set(true)`) for dark mode management.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Quasar brand colors in Sass variables ($primary, $secondary, $accent).',
    iconUsage: 'Use `@quasar/extras` icon sets with `icon="mdi-*"` or `icon="eva-*"` props.',
    layoutConventions: 'Wrap pages in `<q-layout><q-page-container><q-page>...</q-page></q-page-container></q-layout>`.'
  }
};
