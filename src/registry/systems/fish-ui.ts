import { UISystem } from '../../schemas/uiSystem.js';

export const fishUi: UISystem = {
  id: 'fish-ui',
  name: 'Fish UI (A Lightweight UI Toolkit for Vue.js)',
  organization: 'Fish UI Community (myliang)',
  description: 'An open-source, lightweight desktop UI toolkit for Vue.js, offering a clean 24-column grid, modular Less stylesheets, semantic forms, tables, and modal dialogs with zero heavy dependencies.',
  category: 'component-library',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['vue'],
  stylingApproach: 'less',
  packageNames: ['fish-ui'],
  docsUrl: 'https://myliang.github.io/fish-ui',
  repositoryUrl: 'https://github.com/myliang/fish-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus indicators.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Fish UI Less customization variables',
    packageName: 'fish-ui'
  },
  icons: {
    available: true,
    name: 'Fish UI Icon Font'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean lightweight desktop aesthetic: soft blue/gray tones, 24-column grid layout, modular cards, and clean modal dialogs.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Historical reference and exploring alternative lightweight Vue.js desktop UI designs',
    'Lightweight Vue web applications',
    'Studying modular Less-based Vue component styling'
  ],
  avoidFor: [
    'New Vue 3 / Nuxt 3 projects'
  ],
  strengths: [
    'Simple, straightforward Vue component architecture',
    'Full 24-column responsive grid system',
    'Clean Less modular stylesheets'
  ],
  weaknesses: [
    'Archived; Vue 2 focus'
  ],
  tags: [
    'fish-ui',
    'fish',
    'vue',
    'lightweight',
    'less',
    'archived',
    'hidden-gem'
  ],
  aliases: ['Fish UI', 'FishUI', 'Fish'],
  relatedSystems: ['keen-ui', 'muse-ui', 'view-ui-plus'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install fish-ui',
      packages: ['fish-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `fish-ui/dist/fish-ui.css` and use `Vue.use(FishUI)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<fish-button>',
      description: 'Fish UI action button with type="primary" | "dashed" | "danger".',
      importExample: '<fish-button type="primary">Confirm</fish-button>',
      docSubUrl: '#/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Vue 2 library: uses `<fish-*>` components.',
      'Import `fish-ui/dist/fish-ui.css` at root.',
      'Use `<fish-row>` and `<fish-col>` for 24-column grid layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Less variables before compilation.',
    iconUsage: 'Use `<fish-icon type="home"></fish-icon>`.',
    layoutConventions: 'Use 24-column grid.'
  }
};
