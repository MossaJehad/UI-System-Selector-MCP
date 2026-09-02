import { UISystem } from '../../schemas/uiSystem.js';

export const keenUi: UISystem = {
  id: 'keen-ui',
  name: 'Keen UI (Material Design Components for Vue.js)',
  organization: 'Joseph Fortune (JosephusPaye)',
  description: 'An open-source, lightweight Material Design UI component library for Vue.js, focused on essential interactive components (alert, autocomplete, datepicker, modal, popover, tabs, tooltip) with clean APIs and zero CSS framework dependencies.',
  category: 'component-library',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['vue'],
  stylingApproach: 'sass',
  packageNames: ['keen-ui'],
  docsUrl: 'https://josephuspaye.github.io/Keen-UI',
  repositoryUrl: 'https://github.com/JosephusPaye/Keen-UI',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with keyboard accessible dialogs and popovers.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Keen UI Sass customization variables',
    packageName: 'keen-ui'
  },
  icons: {
    available: true,
    name: 'Material Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Lightweight Material Design aesthetic: clean floating modals, accessible tabs, date picker dropdowns, and minimal ripple buttons.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue.js developers who need interactive JavaScript components (modals, tooltips, popovers, datepickers) without a full CSS grid system',
    'Historical reference and studying early Vue component library design',
    'Lightweight Vue web apps'
  ],
  avoidFor: [
    'New Vue 3 / Nuxt 3 projects'
  ],
  strengths: [
    'Focused strictly on interactive components rather than imposing a global CSS layout system',
    'Clean, well-documented Vue component APIs',
    'Zero heavy CSS framework dependencies'
  ],
  weaknesses: [
    'Archived; Vue 2 focus'
  ],
  tags: [
    'keen-ui',
    'keen',
    'vue',
    'material-design',
    'interactive',
    'archived',
    'hidden-gem'
  ],
  aliases: ['Keen UI', 'KeenUI', 'Keen'],
  relatedSystems: ['muse-ui', 'vue-material', 'wave-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    vue: {
      command: 'npm install keen-ui',
      packages: ['keen-ui'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `keen-ui/dist/keen-ui.css` and use `Vue.use(KeenUI)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ui-button>',
      description: 'Keen UI action button with color="primary" | "accent".',
      importExample: '<ui-button color="primary">Confirm Action</ui-button>',
      docSubUrl: '#/ui-button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Vue library: uses `<ui-*>` components.',
      'Import `keen-ui/dist/keen-ui.css`.',
      'Use Keen UI for interactive popovers, modals, and datepickers.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Sass variables before compilation.',
    iconUsage: 'Use Material Icons.',
    layoutConventions: 'Bring your own layout system (Flexbox/Grid).'
  }
};
