import { UISystem } from '../../schemas/uiSystem.js';

export const materialWeb: UISystem = {
  id: 'material-web',
  name: 'Material Web (Google Material 3 Web Components)',
  organization: 'Google Material Design Team',
  description: 'Google’s official open-source Web Component implementation of Material Design 3 (Material You), built with Lit and W3C Custom Elements to deliver dynamic color theming, ripple interactions, and framework-agnostic Material 3 components.',
  category: 'company-design-system',
  secondaryCategories: ['web-components', 'consumer', 'mobile-inspired'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'svelte', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@material/web'],
  docsUrl: 'https://material-web.dev',
  repositoryUrl: 'https://github.com/material-components/material-web',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements official Google Material Design 3 accessibility guidelines.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design 3 tokens in CSS custom properties and Material Color Utilities',
    packageName: '@material/web'
  },
  icons: {
    available: true,
    packageName: '@material/web',
    name: 'Material Symbols integration'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Official Google Material 3 (Material You) aesthetic: dynamic color tone mapping, pill-shaped filled buttons, outlined text fields with floating labels, and elevation surface tints.',
  noveltyLevel: 'established',
  bestFor: [
    'Framework-agnostic web apps wanting official Google Material 3 (Material You) custom elements',
    'Multi-framework applications sharing a single web component layer across React, Vue, Svelte, and Angular',
    'Mobile-first web apps wanting Google Android-like visual polish'
  ],
  avoidFor: [
    'Retro pixel-art or brutalist websites'
  ],
  strengths: [
    'Maintained directly by Google’s Material Design team using modern Lit custom elements',
    'Dynamic tonal palette generation from a single seed color',
    'Zero framework lock-in: works natively in plain HTML and all JavaScript frameworks'
  ],
  weaknesses: [
    'Google Material You brand identity'
  ],
  tags: [
    'material-web',
    'material-design',
    'google',
    'material-you',
    'web-components',
    'lit',
    'dark-mode',
    'established'
  ],
  aliases: ["Material Web", "Material 3 Web", "M3 Web Components", "@material/web", "Material Design / Material 3", "Material Design", "Material 3"],
  relatedSystems: ['mui', 'fast', 'spectrum-web-components'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @material/web',
      packages: ['@material/web'],
      setupInstructions: 'Import custom elements (e.g. `import "@material/web/button/filled-button.js"; import "@material/web/textfield/outlined-text-field.js";`).'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<md-filled-button>',
      description: 'Material 3 filled action button with built-in ripple effect.',
      importExample: '<md-filled-button>Save Changes</md-filled-button>',
      docSubUrl: 'components/button/'
    },
    textfield: {
      canonicalName: '<md-outlined-text-field>',
      description: 'Material 3 outlined text field with floating label.',
      importExample: '<md-outlined-text-field label="Email" type="email"></md-outlined-text-field>',
      docSubUrl: 'components/text-field/'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@material/web/*` custom elements directly.',
      'Use Material 3 CSS custom properties (`--md-sys-color-primary`, `--md-sys-color-surface`).',
      'Use Material Symbols font for iconography.'
    ],
    forbiddenSubstitutions: ['bootstrap'],
    themingGuide: 'Configure theme via Material 3 CSS custom properties or Material Color Utilities.',
    iconUsage: 'Use `<md-icon>search</md-icon>` with Material Symbols.',
    layoutConventions: 'Use standard custom element composition and CSS Grid.'
  }
};
