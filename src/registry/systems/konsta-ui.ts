import { UISystem } from '../../schemas/uiSystem.js';

export const konstaUi: UISystem = {
  id: 'konsta-ui',
  name: 'Konsta UI (Pixel-Perfect Mobile UI with Tailwind CSS)',
  organization: 'Vladimir Kharlampidi / Konsta UI Community',
  description: 'An open-source pixel-perfect mobile UI component library built with Tailwind CSS for React, Vue 3, and Svelte, providing authentic Apple iOS Cupertino and Google Android Material Design styling powered entirely by Tailwind utility classes.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer', 'styled'],
  frameworks: ['react', 'vue', 'svelte', 'html-css', 'react-native'],
  stylingApproach: 'tailwind',
  packageNames: ['konsta', 'tailwindcss'],
  docsUrl: 'https://konstaui.com',
  repositoryUrl: 'https://github.com/konstaui/konsta',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides pixel-perfect iOS Cupertino and Material Design touch targets, sheet modals, and action sheets.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Konsta UI Tailwind CSS config wrapper `konstaConfig()`',
    packageName: 'konsta'
  },
  icons: {
    available: true,
    name: 'Framework7 Icons / Material Icons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Pixel-perfect mobile iOS Cupertino & Material Design via Tailwind CSS: translucent blurred headers, iOS segmented controls, action sheets, list grouped insets, and dark mode.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Capacitor, Cordova, and mobile web applications built with Tailwind CSS in React, Vue 3, or Svelte',
    'Developers wanting authentic iOS Cupertino or Android Material UI with the power and flexibility of Tailwind CSS',
    'Mobile Progressive Web Apps (PWAs)'
  ],
  avoidFor: [
    'Desktop widescreen administration portals'
  ],
  strengths: [
    'The best of both worlds: pixel-perfect native mobile visual fidelity (Cupertino + Material) powered 100% by Tailwind CSS',
    'First-class support for React (`konsta/react`), Vue 3 (`konsta/vue`), and Svelte (`konsta/svelte`)',
    'Zero heavy runtime JS dependencies'
  ],
  weaknesses: [
    'Mobile application paradigm focus'
  ],
  tags: [
    'konsta-ui',
    'mobile',
    'ios',
    'cupertino',
    'android',
    'tailwind',
    'react',
    'vue',
    'svelte',
    'hidden-gem'
  ],
  aliases: ['Konsta UI', 'Konsta', 'Konsta Tailwind', 'KonstaUI'],
  relatedSystems: ['framework7', 'ionic', 'tamagui'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install konsta',
      packages: ['konsta', 'tailwindcss'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Wrap `tailwind.config.js` with `konstaConfig()` and wrap app in `<App theme="ios">`.'
    },
    vue: {
      command: 'npm install konsta',
      packages: ['konsta', 'tailwindcss'],
      peerDependencies: ['vue', 'tailwindcss']
    },
    svelte: {
      command: 'npm install konsta',
      packages: ['konsta', 'tailwindcss'],
      peerDependencies: ['svelte', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Konsta UI iOS / Material button component with rounded, large, outline, clear props.',
      importExample: "import { Button } from 'konsta/react';\n\n<Button rounded large>Get Started</Button>",
      docSubUrl: 'react/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap `tailwind.config.js` with `konstaConfig()`.',
      'Wrap app in `<App theme="ios">` or `<App theme="material">` from `konsta/react` / `konsta/vue` / `konsta/svelte`.',
      'Use Konsta mobile components (`Page`, `Navbar`, `Block`, `List`, `ListItem`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `konstaConfig()` in `tailwind.config.js`.',
    iconUsage: 'Use SVG or Framework7 / Material icons inside component slots.',
    layoutConventions: 'Use Konsta `Page`, `Navbar`, `Toolbar` layout components.'
  }
};
