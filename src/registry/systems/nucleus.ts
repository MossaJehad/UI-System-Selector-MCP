import { UISystem } from '../../schemas/uiSystem.js';

export const nucleus: UISystem = {
  id: 'nucleus',
  name: 'Nucleus Design System (British Gas / Centrica)',
  organization: 'Centrica / British Gas',
  description: 'The official open-source design system and Web Component library built for British Gas, Hive, and Centrica utilities, engineered for accessible smart meter portals, energy billing workflows, and home IoT applications.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'consumer'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'angular', 'vue'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@citizensadvice/design-system'],
  docsUrl: 'https://www.britishgas.co.uk/nucleus',
  repositoryUrl: 'https://github.com/Centrica/nucleus',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across millions of UK energy utility consumers.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@centrica/nucleus-tokens'
  },
  icons: {
    available: true,
    name: 'Nucleus Energy & IoT Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'British utilities consumer aesthetic: British Gas Blue (#003366) / Cyan accents, energy usage bar charts, smart thermostat cards, and step-by-step tariff switchers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Utilities, energy billing portals, smart home IoT dashboards, and public consumer services',
    'Multi-framework applications sharing custom Web Components across Angular, React, and Vue',
    'High-accessibility consumer web portals'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Official design system of UK energy giant Centrica / British Gas',
    'Built as standard W3C Web Components for multi-framework integration',
    'Specialized utilities, energy breakdown, and tariff calculator component patterns'
  ],
  weaknesses: [
    'Energy utilities domain focus'
  ],
  tags: [
    'nucleus',
    'centrica',
    'british-gas',
    'utilities',
    'energy',
    'iot',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Nucleus Design System', 'Nucleus', 'British Gas Nucleus', 'Centrica Nucleus'],
  relatedSystems: ['fluid', 'govuk-design-system'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install @centrica/nucleus-core # or load custom elements',
      packages: ['@centrica/nucleus-core'],
      setupInstructions: 'Import custom element definitions and base stylesheet.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ns-button>',
      description: 'Nucleus action button with primary and secondary variants.',
      importExample: '<ns-button type="primary">Submit Meter Reading</ns-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<ns-*>` custom elements for energy and billing flows.',
      'Apply British Gas / Centrica color tokens for energy consumption data.',
      'Follow accessible step-by-step wizard patterns.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use Nucleus custom icon components.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
