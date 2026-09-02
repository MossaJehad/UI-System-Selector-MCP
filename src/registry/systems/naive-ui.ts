import { UISystem } from '../../schemas/uiSystem.js';

export const naiveUi: UISystem = {
  id: 'naive-ui',
  name: 'Naive UI',
  organization: 'TuSimple / Naive UI Community',
  description: 'An open-source, full-featured Vue 3 component library built with TypeScript and css-render (zero CSS imports required), delivering 80+ components, customizable theme overrides, fast tree-shaking, and dark mode.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'developer-tool', 'styled'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'css-in-js',
  packageNames: ['naive-ui', 'vooks', 'vdirs'],
  docsUrl: 'https://www.naiveui.com',
  repositoryUrl: 'https://github.com/tusen-ai/naive-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Vue 3 desktop administrative components.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'TypeScript theme override objects via `<n-config-provider>`',
    packageName: 'naive-ui'
  },
  icons: {
    available: true,
    name: 'vicons integration (Ionicons, Material, Tabler, Fluent)'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Clean, modern, highly customizable aesthetic: Naive Green (#18a058) primary accents, refined typography, subtle rounded cards, and smooth modal transitions.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt applications wanting complete zero-CSS-import convenience with css-render',
    'Developers wanting complete type-safe theme customization via `<n-config-provider>`',
    'Modern SaaS applications, developer portals, and enterprise dashboards in Vue 3'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'Complete zero-CSS-import architecture: styles are injected on demand by css-render',
    'Complete type safety and theme overrides via TypeScript theme object props',
    'Over 80+ components with first-class dark theme (`darkTheme`) out of the box'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'naive-ui',
    'vue',
    'vue3',
    'nuxt',
    'typescript',
    'css-in-js',
    'dark-mode',
    'rtl',
    'established'
  ],
  aliases: ['Naive UI', 'NaiveUI', 'Naive Vue'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install naive-ui @vicons/ionicons5',
      packages: ['naive-ui', '@vicons/ionicons5'],
      peerDependencies: ['vue'],
      setupInstructions: 'Wrap your app in `<n-config-provider>` and `<n-message-provider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'n-button',
      description: 'Naive UI button with type="primary" | "info" | "success" | "warning" | "error" | "tertiary".',
      importExample: '<n-button type="primary">Explore</n-button>',
      docSubUrl: 'en-US/os-theme/components/button'
    },
    card: {
      canonicalName: 'n-card',
      description: 'Naive UI container card with title and action footer.',
      importExample: '<n-card title="Dashboard Summary">Card Content</n-card>',
      docSubUrl: 'en-US/os-theme/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root in `<n-config-provider :theme="darkTheme">`.',
      'Wrap interactive areas in `<n-message-provider>`, `<n-dialog-provider>`, `<n-notification-provider>`.',
      'Use `n-space`, `n-grid`, and `n-gi` for layout structure.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `<n-config-provider :theme-overrides="themeOverrides">`.',
    iconUsage: 'Use `@vicons/ionicons5` with `<n-icon>`.',
    layoutConventions: 'Use `n-layout`, `n-layout-header`, `n-layout-sider`, `n-layout-content`.'
  }
};
