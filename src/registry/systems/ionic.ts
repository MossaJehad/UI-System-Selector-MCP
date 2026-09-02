import { UISystem } from '../../schemas/uiSystem.js';

export const ionic: UISystem = {
  id: 'ionic',
  name: 'Ionic Framework',
  organization: 'Ionic / OutSystems',
  description: 'An open-source cross-platform mobile and desktop UI toolkit and Web Component library for building iOS, Android, and Progressive Web Apps (PWAs) with React, Vue, Angular, or vanilla JavaScript.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'web-components', 'consumer'],
  frameworks: ['react', 'vue', 'angular', 'web-components', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@ionic/core', '@ionic/react', '@ionic/vue', '@ionic/angular', 'ionicons'],
  docsUrl: 'https://ionicframework.com/docs',
  repositoryUrl: 'https://github.com/ionic-team/ionic-framework',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to mobile accessibility standards across iOS Cupertino and Android Material Design themes.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Ionic CSS custom properties and theme variables (iOS mode vs MD mode)',
    packageName: '@ionic/core'
  },
  icons: {
    available: true,
    packageName: 'ionicons',
    name: 'Ionicons (1,300+ icons in outline, filled, and sharp styles)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Universal cross-platform mobile aesthetic: automatic iOS Cupertino / Android Material Design switching, frosted glass navbars, action sheets, modal bottom drawers, and ionicons.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Cross-platform mobile applications with Capacitor or Cordova in React, Vue, or Angular',
    'Mobile Progressive Web Apps (PWAs) wanting native look and feel',
    'Enterprises building universal apps that run on iOS, Android, and Web browsers'
  ],
  avoidFor: [
    'Traditional widescreen desktop data spreadsheets'
  ],
  strengths: [
    'One of the most widely adopted hybrid mobile frameworks in the world',
    'Official bindings for React (`@ionic/react`), Vue (`@ionic/vue`), and Angular (`@ionic/angular`)',
    'Includes Ionicons and Capacitor native device plugins'
  ],
  weaknesses: [
    'Mobile app paradigm focus'
  ],
  tags: [
    'ionic',
    'mobile',
    'cross-platform',
    'capacitor',
    'pwa',
    'ios',
    'android',
    'react',
    'vue',
    'angular',
    'mainstream'
  ],
  aliases: ['Ionic', 'Ionic Framework', 'Ionic React', 'Ionic Vue', 'Ionic Angular'],
  relatedSystems: ['framework7', 'onsen-ui', 'konsta-ui'],
  systemTypes: ['mobile', 'web-components', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @ionic/react @ionic/react-router ionicons',
      packages: ['@ionic/react', '@ionic/react-router', 'ionicons'],
      peerDependencies: ['react', 'react-dom', 'react-router-dom'],
      setupInstructions: 'Import `@ionic/react/css/core.css` and setup `<IonApp>`.'
    },
    vue: {
      command: 'npm install @ionic/vue @ionic/vue-router ionicons',
      packages: ['@ionic/vue', '@ionic/vue-router', 'ionicons'],
      peerDependencies: ['vue', 'vue-router']
    },
    angular: {
      command: 'ng add @ionic/angular',
      packages: ['@ionic/angular', 'ionicons'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ion-button>',
      description: 'Ionic cross-platform button with color="primary" | "secondary" | "danger" | "success".',
      importExample: '<IonButton color="primary">Start Order</IonButton>',
      docSubUrl: 'api/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<IonApp>` and import Ionic CSS core stylesheets.',
      'Use `<IonPage>`, `<IonHeader>`, `<IonContent>` for screen layouts.',
      'Use `ionicons` for cross-platform icons.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties (e.g. `--ion-color-primary`).',
    iconUsage: 'Use `<IonIcon icon={search} />` from `ionicons/icons`.',
    layoutConventions: 'Use Ionic mobile navigation and page containers.'
  }
};
