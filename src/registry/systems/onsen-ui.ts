import { UISystem } from '../../schemas/uiSystem.js';

export const onsenUi: UISystem = {
  id: 'onsen-ui',
  name: 'Onsen UI',
  organization: 'Monaca / Onsen UI Community',
  description: 'An open-source, hybrid mobile and web component library providing automatic iOS and Android Material Design visual styling from a single codebase across React, Vue, Angular, and vanilla JavaScript.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer'],
  frameworks: ['react', 'vue', 'angular', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'css-modules',
  packageNames: ['onsenui', 'react-onsenui', 'vue-onsenui', 'ngx-onsenui'],
  docsUrl: 'https://onsen.io',
  repositoryUrl: 'https://github.com/OnsenUI/OnsenUI',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides mobile touch gestures and native accessibility traits.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Onsen CSS theme variables with automatic platform switching (iOS Cupertino vs Android Material)',
    packageName: 'onsenui'
  },
  icons: {
    available: true,
    packageName: 'onsenui',
    name: 'Ionicons / FontAwesome / Material Icons bundle'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Adaptive hybrid mobile aesthetic: automatically renders authentic iOS Flat UI (Cupertino navbars, back chevrons) on Apple devices and Google Material Design (floating action buttons, ripple effects) on Android.',
  noveltyLevel: 'established',
  bestFor: [
    'Hybrid mobile web applications, Capacitor, and Cordova apps in React, Vue, or Angular',
    'Apps requiring automatic platform auto-styling (iOS Cupertino vs Android Material Design)',
    'Mobile web apps wanting smooth 60 FPS page transitions and pull-to-refresh'
  ],
  avoidFor: [
    'Desktop widescreen administration consoles'
  ],
  strengths: [
    'Auto-styling engine: automatically adapts visual design to match iOS or Android platforms',
    'Multi-framework bindings: official packages for React, Vue, Angular, and Vanilla JS',
    'Rich mobile gestures: pull-to-refresh, carousel swipe, infinite scroll, split view'
  ],
  weaknesses: [
    'Mobile-centric UI paradigms'
  ],
  tags: [
    'onsen-ui',
    'mobile',
    'hybrid',
    'auto-styling',
    'ios',
    'android',
    'cordova',
    'capacitor',
    'established'
  ],
  aliases: ['Onsen UI', 'OnsenUI', 'Onsen', 'Monaca Onsen'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install onsenui react-onsenui',
      packages: ['onsenui', 'react-onsenui'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `onsenui/css/onsenui.css` and `onsenui/css/onsen-css-components.css`.'
    },
    vue: {
      command: 'npm install onsenui vue-onsenui',
      packages: ['onsenui', 'vue-onsenui'],
      peerDependencies: ['vue']
    }
  },
  componentGuidance: {
    page: {
      canonicalName: 'Page',
      description: 'Mobile page container with toolbar and scrollable content.',
      importExample: "import { Page, Toolbar, Button } from 'react-onsenui';\n\n<Page renderToolbar={() => <Toolbar><div className=\"center\">Mobile Title</div></Toolbar>}><Button modifier=\"large--cta\">Action</Button></Page>",
      docSubUrl: 'v2/api/react/Page.html'
    }
  },
  aiInstructions: {
    principles: [
      'Import `onsenui/css/onsenui.css` and `onsenui/css/onsen-css-components.css` at root.',
      'Use Onsen Page, Navigator, and Toolbar layout primitives.',
      'Allow Onsen auto-styling to adapt to user agent platform.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes using Onsen Theme Roller or CSS variables.',
    iconUsage: 'Use `<Icon icon="md-search" />` or `<Icon icon="ion-ios-search" />`.',
    layoutConventions: 'Use standard mobile page and navigator containers.'
  }
};
