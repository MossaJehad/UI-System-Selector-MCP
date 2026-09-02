import { UISystem } from '../../schemas/uiSystem.js';

export const intuitHarmony: UISystem = {
  id: 'intuit-harmony',
  name: 'Intuit Harmony Design System',
  organization: 'Intuit',
  description: 'Intuit’s design system and component architecture powering TurboTax, QuickBooks, and Credit Karma, engineered for financial calculations, multi-step tax filing wizards, and small business accounting workflows.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'consumer', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@intuit/harmony-react', '@intuit/harmony-tokens'],
  docsUrl: 'https://designsystem.intuit.com',
  repositoryUrl: 'https://github.com/intuit',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Rigorously audited for financial accuracy and WCAG 2.1 AA accessibility.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and JSON token files',
    packageName: '@intuit/harmony-tokens'
  },
  icons: {
    available: true,
    name: 'Harmony Financial & System Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'High-trust, friendly financial style: QuickBooks green (#2ca01c), TurboTax blue, step-by-step tax wizard cards, and clear currency inputs.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Tax preparation wizards, tax calculators, and IRS reporting tools',
    'Small business bookkeeping, invoicing, and payroll software',
    'Personal finance, credit score monitoring, and banking dashboards'
  ],
  avoidFor: [
    'Dark-theme gaming apps'
  ],
  strengths: [
    'World standard for consumer tax and small business accounting UX',
    'Specialized currency inputs, balance sheets, and deduction wizard components',
    'Extensive user testing across non-technical tax filers'
  ],
  weaknesses: [
    'Commercial financial focus'
  ],
  tags: [
    'intuit',
    'harmony',
    'fintech',
    'tax',
    'accounting',
    'quickbooks',
    'turbotax',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Harmony', 'Intuit Design System', 'QuickBooks Design System', 'TurboTax UI'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @intuit/harmony-react @intuit/harmony-tokens',
      packages: ['@intuit/harmony-react', '@intuit/harmony-tokens'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Harmony action button with primary, secondary, and financial action variants.',
      importExample: "import { Button } from '@intuit/harmony-react';\n\n<Button variant=\"primary\">File Tax Return</Button>",
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Prioritize financial clarity and plain-language labels.',
      'Use Harmony currency inputs with automatic decimal formatting.',
      'Structure multi-step forms with step indicator breadcrumbs.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Harmony theme tokens for QuickBooks Green or TurboTax Blue.',
    iconUsage: 'Use Harmony financial and status icons.',
    layoutConventions: 'Use Wizard and Card layout containers with Harmony spacing.'
  }
};
