import { UISystem } from '../../schemas/uiSystem.js';

export const oruga: UISystem = {
  id: 'oruga',
  name: 'Oruga UI (Framework-Agnostic UI for Vue & React)',
  organization: 'Walter Tommasi / Oruga Community',
  description: 'An open-source, lightweight, and CSS-framework-agnostic UI component library for Vue 3 and React, providing headless functional components that can be styled with Tailwind CSS, Bulma, Bootstrap, or custom CSS.',
  category: 'headless',
  secondaryCategories: ['component-library', 'unstyled', 'saas'],
  frameworks: ['vue', 'react'],
  stylingApproach: 'unstyled',
  packageNames: ['@oruga-ui/oruga-next', '@oruga-ui/theme-bootstrap', '@oruga-ui/theme-bulma'],
  docsUrl: 'https://oruga.io',
  repositoryUrl: 'https://github.com/oruga-ui/oruga',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard navigation and ARIA attributes with zero styling lock-in.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'CSS framework agnostic: styles injected via config classes or theme packages.'
  },
  icons: {
    available: true,
    name: 'Material Design Icons / FontAwesome / Feather integration'
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'CSS framework agnostic: adapts completely to your chosen CSS system (Tailwind, Bulma, Bootstrap, or custom classes).',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue 3 and React developers wanting full control over styling without being locked into a specific CSS framework',
    'Projects combining Vue 3 with Bulma, Bootstrap, or Tailwind CSS',
    'Custom design system foundations in Vue 3'
  ],
  avoidFor: [
    'Developers wanting fully styled components out of the box with zero configuration'
  ],
  strengths: [
    'CSS framework agnostic: seamlessly works with Tailwind CSS, Bulma, Bootstrap, or vanilla CSS',
    'Lightweight with zero external runtime dependencies',
    'Successor to Buefy with Vue 3 and React support'
  ],
  weaknesses: [
    'Requires CSS classes or theme configuration'
  ],
  tags: [
    'oruga',
    'vue3',
    'react',
    'headless',
    'unstyled',
    'bulma',
    'tailwind',
    'bootstrap',
    'hidden-gem'
  ],
  aliases: ['Oruga UI', 'Oruga', 'Oruga Next'],
  relatedSystems: ['buefy', 'bulma', 'bootstrap'],
  systemTypes: ['headless', 'component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install @oruga-ui/oruga-next',
      packages: ['@oruga-ui/oruga-next'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `app.use(Oruga)` and configure CSS classes.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'o-button',
      description: 'Oruga button with variant="primary" | "success" | "danger".',
      importExample: '<o-button variant="primary">Submit</o-button>',
      docSubUrl: 'documentation/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<o-*>` component tags in Vue templates.',
      'Configure custom class mapping in Oruga global config.',
      'Pair with Tailwind CSS or Bulma for visual styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure class names via Oruga programmatic config.',
    iconUsage: 'Use `<o-icon icon="search" />`.',
    layoutConventions: 'Use host CSS framework layout classes.'
  }
};
