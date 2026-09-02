import { UISystem } from '../../schemas/uiSystem.js';

export const waveUi: UISystem = {
  id: 'wave-ui',
  name: 'Wave UI',
  organization: 'Antoni Andre / Wave UI Community',
  description: 'An open-source, lightweight, and accessible UI framework for Vue 3 and Vue 2, offering 45+ components with responsive breakpoints, dynamic color themes, notification managers, and zero dependencies.',
  category: 'component-library',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['vue'],
  stylingApproach: 'vanilla-css',
  packageNames: ['wave-ui'],
  docsUrl: 'https://antoniandre.github.io/wave-ui',
  repositoryUrl: 'https://github.com/antoniandre/wave-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'WAI-ARIA compliant keyboard focus indicators and semantic HTML markup.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Wave UI dynamic color token configuration',
    packageName: 'wave-ui'
  },
  icons: {
    available: true,
    name: 'Material Design Icons / Font Awesome integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern fresh Vue aesthetic: Wave Blue / Teal accents, smooth ripple interactions, floating notifications, and clean form inputs.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue 3 single page applications wanting a fast, lightweight alternative to Vuetify or Quasar',
    'Developers who want a complete component suite with zero heavy dependencies',
    'Clean web tools and admin portals'
  ],
  avoidFor: [
    'React or Angular codebases'
  ],
  strengths: [
    'Lightweight footprint with zero external dependencies',
    '45+ components with responsive layout, notifications, and form validation',
    'Dynamic runtime theme configuration'
  ],
  weaknesses: [
    'Vue only'
  ],
  tags: [
    'wave-ui',
    'wave',
    'vue',
    'vue3',
    'lightweight',
    'zero-dependencies',
    'hidden-gem'
  ],
  aliases: ['Wave UI', 'WaveUI', 'Wave'],
  relatedSystems: ['vuestic-ui', 'inkline', 'vuetify'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install wave-ui',
      packages: ['wave-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `wave-ui/dist/wave-ui.css` and configure with `app.use(WaveUI, { colors: { ... } })`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<w-button>',
      description: 'Wave UI button with bg-color="primary" | "secondary", outline, round, shadow.',
      importExample: '<w-button bg-color="primary" @click="handleClick">Action</w-button>',
      docSubUrl: 'w-button'
    }
  },
  aiInstructions: {
    principles: [
      'Install and register `WaveUI` in Vue 3 `main.ts`.',
      'Use `<w-*>` components for UI elements.',
      'Import `wave-ui/dist/wave-ui.css`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors object passed to `app.use(WaveUI)`.',
    iconUsage: 'Use `<w-icon>mdi mdi-home</w-icon>`.',
    layoutConventions: 'Use `<w-flex>` and `<w-grid>`.'
  }
};
