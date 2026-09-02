import { UISystem } from '../../schemas/uiSystem.js';

export const framework7: UISystem = {
  id: 'framework7',
  name: 'Framework7 (Full Featured Mobile UI Framework)',
  organization: 'Vladimir Kharlampidi / Framework7 Community',
  description: 'An open-source, full-featured mobile UI framework for building iOS and Android apps with native look and feel, supporting React, Vue 3, Svelte, and vanilla JS with Cupertino and Material Design themes.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer'],
  frameworks: ['react', 'vue', 'svelte', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'less',
  packageNames: ['framework7', 'framework7-react', 'framework7-vue', 'framework7-svelte'],
  docsUrl: 'https://framework7.io',
  repositoryUrl: 'https://github.com/framework7io/framework7',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides pixel-perfect native iOS Cupertino and Android Material accessibility traits and swipe gestures.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Framework7 CSS custom properties and theme configuration (iOS vs MD theme)',
    packageName: 'framework7'
  },
  icons: {
    available: true,
    packageName: 'framework7-icons',
    name: 'Framework7 Icons (iOS SF Symbols style)'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Pixel-perfect native mobile aesthetic: authentic iOS Cupertino (translucent frosted glass navbars, action sheets, wheel pickers, pull-to-refresh) and Android Material Design.',
  noveltyLevel: 'established',
  bestFor: [
    'Hybrid mobile apps, Capacitor, Cordova, and Progressive Web Apps (PWAs)',
    'Apps wanting pixel-perfect native iOS Cupertino look and feel in web technologies',
    'Multi-framework mobile teams across React, Vue 3, and Svelte'
  ],
  avoidFor: [
    'Desktop widescreen administration portals'
  ],
  strengths: [
    'Unmatched pixel-perfect fidelity to Apple iOS Cupertino UI design guidelines',
    'Full support for React, Vue 3, Svelte, and vanilla JS with shared core',
    'Rich native-feel interactions: swipe back, pull to refresh, virtual lists, photo browser, sheet modals'
  ],
  weaknesses: [
    'Mobile app paradigm focus'
  ],
  tags: [
    'framework7',
    'mobile',
    'ios',
    'cupertino',
    'android',
    'pwa',
    'capacitor',
    'react',
    'vue',
    'svelte',
    'established'
  ],
  aliases: ['Framework7', 'F7', 'Framework 7', 'Framework7 React', 'Framework7 Vue'],
  relatedSystems: ['ionic', 'onsen-ui', 'konsta-ui'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install framework7 framework7-react framework7-icons',
      packages: ['framework7', 'framework7-react', 'framework7-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `framework7/css/bundle` and wrap app in `<App theme="ios">`.'
    },
    vue: {
      command: 'npm install framework7 framework7-vue framework7-icons',
      packages: ['framework7', 'framework7-vue', 'framework7-icons'],
      peerDependencies: ['vue']
    }
  },
  componentGuidance: {
    page: {
      canonicalName: 'Page',
      description: 'Framework7 mobile page with navbar and scrollable content.',
      importExample: "import { Page, Navbar, Block, Button } from 'framework7-react';\n\n<Page><Navbar title=\"iOS Mobile\" /><Block><Button fill>Action</Button></Block></Page>",
      docSubUrl: 'react/page.html'
    }
  },
  aiInstructions: {
    principles: [
      'Import `framework7/css/bundle` at root.',
      'Wrap root with `<App>` component from `framework7-react` / `framework7-vue` / `framework7-svelte`.',
      'Use native mobile page navigation structures (`<View>`, `<Page>`, `<Navbar>`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `theme: "ios"` or `theme: "md"`.',
    iconUsage: 'Use `<Icon f7="search" />`.',
    layoutConventions: 'Use Framework7 mobile Views and Pages.'
  }
};
