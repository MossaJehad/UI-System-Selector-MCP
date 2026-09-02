import { UISystem } from '../../schemas/uiSystem.js';

export const mintUi: UISystem = {
  id: 'mint-ui',
  name: 'Mint UI (Mobile UI Elements for Vue.js)',
  organization: 'ElemeFE (Ele.me / Alibaba)',
  description: 'A historic, open-source mobile UI component library for Vue.js created by the Ele.me team (creators of Element UI), featuring lightweight mobile touch components (ActionSheet, Toast, Swipe, InfiniteScroll, IndexList, Picker) in under 30KB.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer'],
  frameworks: ['vue'],
  stylingApproach: 'css-in-js',
  packageNames: ['mint-ui'],
  docsUrl: 'https://mint-ui.github.io/#!/en',
  repositoryUrl: 'https://github.com/ElemeFE/mint-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: false,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Optimized for mobile touch gestures and mobile viewport interactions.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Mint UI mobile stylesheet.'
  },
  icons: {
    available: true,
    name: 'Mint UI Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Classic mobile consumer app aesthetic: iOS-style bottom action sheets, swipeable banner carousels, sticky index contact lists, and pull-to-refresh indicators.',
  noveltyLevel: 'established',
  bestFor: [
    'Historical reference and studying early mobile component architectures in Vue.js',
    'Maintaining legacy Vue 2 mobile web apps and hybrid Cordova wrappers',
    'Mobile touch gesture design patterns'
  ],
  avoidFor: [
    'New Vue 3 / Nuxt 3 mobile projects (use Vant or NutUI instead)'
  ],
  strengths: [
    'Pioneering mobile UI library by ElemeFE that shaped the entire Vue mobile ecosystem',
    'Tiny footprint (<30KB) with essential mobile touch components',
    'Smooth touch momentum and swipe interactions'
  ],
  weaknesses: [
    'Archived; superseded by Vant and NutUI for Vue 3'
  ],
  tags: [
    'mint-ui',
    'mint',
    'vue',
    'mobile',
    'elemefe',
    'touch',
    'archived',
    'historical'
  ],
  aliases: ['Mint UI', 'MintUI', 'Mint', 'Eleme Mint UI'],
  relatedSystems: ['vant', 'nutui', 'element-plus'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install mint-ui',
      packages: ['mint-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `mint-ui/lib/style.css` and use `Vue.use(MintUI)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<mt-button>',
      description: 'Mint UI mobile button with type="primary" | "danger" | "default".',
      importExample: '<mt-button type="primary" size="large">Submit Order</mt-button>',
      docSubUrl: '#!/en/button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Vue 2 mobile library: uses `<mt-*>` components.',
      'Import `mint-ui/lib/style.css` at root.',
      'Use `Toast()` and `MessageBox()` for programmatic mobile dialogs.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Override styles with custom CSS.',
    iconUsage: 'Use Mint UI built-in font icons.',
    layoutConventions: 'Use mobile-first viewport layout.'
  }
};
