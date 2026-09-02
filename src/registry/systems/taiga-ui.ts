import { UISystem } from '../../schemas/uiSystem.js';

export const taigaUi: UISystem = {
  id: 'taiga-ui',
  name: 'Taiga UI',
  organization: 'Tinkoff / Taiga UI Community',
  description: 'An open-source, enterprise Angular UI component library developed by Tinkoff, built on top of Angular CDK and Web APIs with exceptional accessibility, mask inputs, financial charts, calendar sheets, and customizable design token themes.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'saas'],
  frameworks: ['angular'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@taiga-ui/core', '@taiga-ui/kit', '@taiga-ui/cdk', '@taiga-ui/icons'],
  docsUrl: 'https://taiga-ui.dev',
  repositoryUrl: 'https://github.com/taiga-family/taiga-ui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with specialized financial masking and keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties via Taiga UI root tokens',
    packageName: '@taiga-ui/core'
  },
  icons: {
    available: true,
    packageName: '@taiga-ui/icons',
    name: 'Taiga UI Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern European fintech aesthetic: clean high-contrast surfaces, smooth dialog animations, refined input masking (card numbers, phone, currency), and financial charts.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Angular fintech applications, digital banking portals, and payment checkout flows',
    'Complex form inputs with formatted masking (currency, credit card, phone, IBAN)',
    'Enterprise Angular applications prioritizing high performance and modular architecture'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'The premier fintech-focused component library for Angular',
    'Unbeatable input masking and date/time picker ergonomics',
    'Deeply modular architecture powered by Angular CDK and Web APIs'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'taiga-ui',
    'angular',
    'fintech',
    'banking',
    'masking',
    'enterprise',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Taiga UI', 'Taiga', 'Tinkoff Taiga'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add @taiga-ui/cdk',
      packages: ['@taiga-ui/core', '@taiga-ui/kit', '@taiga-ui/cdk'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'tuiButton',
      description: 'Taiga UI action button directive with appearance="primary" | "secondary" | "accent" | "flat".',
      importExample: '<button tuiButton type="button" appearance="primary">Transfer Funds</button>',
      docSubUrl: 'components/button'
    },
    input: {
      canonicalName: 'tui-input-card',
      description: 'Credit card number and expiry input with automatic bank brand detection.',
      importExample: '<tui-input-card [formControl]="cardControl">Card Number</tui-input-card>',
      docSubUrl: 'components/input-card'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root template with `<tui-root>`.',
      'Import required Taiga UI standalone directives/components.',
      'Use Taiga Mask and Format directives for financial inputs.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with CSS custom properties on `<tui-root>`.',
    iconUsage: 'Use `@taiga-ui/icons` (e.g. `<tui-icon icon="@tui.search" />`).',
    layoutConventions: 'Use standard Angular flex and grid layouts.'
  }
};
