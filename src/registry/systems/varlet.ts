import { UISystem } from '../../schemas/uiSystem.js';

export const varlet: UISystem = {
  id: 'varlet',
  name: 'Varlet UI (Material You for Vue 3)',
  organization: 'Varletjs Community',
  description: 'An open-source, Material Design 3 (Material You) component library for Vue 3, supporting mobile and desktop web applications with dynamic color palettes, smooth animations, internationalization, and SSR support.',
  category: 'component-library',
  secondaryCategories: ['mobile', 'consumer', 'styled'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'css-modules',
  packageNames: ['@varlet/ui', '@varlet/icons'],
  docsUrl: "https://varletjs.org",
  repositoryUrl: 'https://github.com/varletjs/varlet',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides Material 3 ripple effects, keyboard navigation, and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Material Design 3 tokens in CSS custom properties via `StyleProvider`',
    packageName: '@varlet/ui'
  },
  icons: {
    available: true,
    packageName: '@varlet/icons',
    name: 'Varlet Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Material Design 3 (Material You) aesthetic: pill-shaped buttons, dynamic tonal surface palettes, rounded sheet modals, bottom app navigation bars, and fluid ripple feedback.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue 3 and Nuxt applications wanting Google Material You / Material Design 3 styling',
    'Mobile-first and responsive cross-device web applications',
    'Developers wanting dark mode and dynamic theme generation in Vue 3'
  ],
  avoidFor: [
    'Traditional desktop enterprise tables with 50+ columns'
  ],
  strengths: [
    'One of the best Material Design 3 (Material You) implementations in Vue 3',
    'Supports both mobile touch interactions and desktop mouse/keyboard navigation',
    'Dynamic theme provider with dark theme and custom color generation'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'varlet',
    'material-design',
    'material-you',
    'm3',
    'vue3',
    'nuxt',
    'mobile',
    'hidden-gem'
  ],
  aliases: ["Varlet UI", "Varlet", "Varletjs"],
  relatedSystems: ['vant', 'vuetify', 'material-web'],
  systemTypes: ['component-library', 'mobile'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install @varlet/ui @varlet/icons',
      packages: ['@varlet/ui', '@varlet/icons'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@varlet/ui/es/style` in `main.ts` and `app.use(Varlet)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'var-button',
      description: 'Varlet Material 3 button with type="primary" | "info" | "success" | "warning" | "danger".',
      importExample: '<var-button type="primary">Explore</var-button>',
      docSubUrl: '#/en-US/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<var-*>` component tags in Vue 3 templates.',
      'Wrap root with `StyleProvider` for dynamic Material 3 theme switching.',
      'Import `@varlet/ui/es/style` at app root.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `StyleProvider` from `@varlet/ui`.',
    iconUsage: 'Use `<var-icon name="magnify" />`.',
    layoutConventions: 'Use standard responsive flex and grid layout.'
  }
};
