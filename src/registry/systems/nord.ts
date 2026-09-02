import { UISystem } from '../../schemas/uiSystem.js';

export const nord: UISystem = {
  id: 'nord',
  name: 'Nord Design System',
  organization: 'Nordhealth',
  description: 'Nordhealth’s production design system for its veterinary and healthcare products, published as Web Components and framework wrappers but licensed solely for work performed for Nordhealth.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'accessibility-focused', 'web-components', 'saas'],
  frameworks: ['web-components', 'react', 'vue', 'svelte', 'angular', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@nordhealth/components', '@nordhealth/tokens', '@nordhealth/icons'],
  docsUrl: 'https://nordhealth.design',
  license: 'Proprietary — Nordhealth internal use only',
  usageRestrictions: 'The published package license permits use solely when performing duties for and on behalf of Nordhealth. Do not select it for unrelated third-party projects.',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed for high-reliability medical/clinical workflows with strict accessibility requirements.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / Design Tokens',
    packageName: '@nordhealth/tokens'
  },
  icons: {
    available: true,
    packageName: '@nordhealth/icons',
    name: 'Nord Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Calm, trust-inspiring, Nordic clarity with soft slate colors, crisp borders, and refined medical-grade typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Nordhealth-owned veterinary and healthcare products',
    'Internal Nordhealth clinical workflows and scheduling interfaces'
  ],
  avoidFor: [
    'Any project not built for and on behalf of Nordhealth',
    'General-purpose healthcare, commercial, or open-source projects'
  ],
  strengths: [
    'One of the most beautifully documented and designed modern open-source systems',
    'Framework-agnostic Web Components with official React wrapper support',
    'Comprehensive design token architecture with automatic dark mode support',
    'Flawless form ergonomics, field validation, and navigation components'
  ],
  weaknesses: [
    'License prohibits general third-party use',
    'Not an open-source or generally reusable design-system dependency'
  ],
  tags: [
    'nordhealth',
    'healthcare',
    'web-components',
    'nordic',
    'high-accessibility',
    'multi-framework',
    'dark-mode',
    'saas',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @nordhealth/components @nordhealth/react @nordhealth/tokens',
      packages: ['@nordhealth/components', '@nordhealth/react', '@nordhealth/tokens'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@nordhealth/tokens/build/nord.css` and use React wrapped `<NordButton>` or custom elements.'
    },
    generic: {
      command: 'npm install @nordhealth/components @nordhealth/tokens',
      packages: ['@nordhealth/components', '@nordhealth/tokens'],
      setupInstructions: 'Import `@nordhealth/tokens/build/nord.css` and `@nordhealth/components`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<nord-button>',
      description: 'Nord button with variant="primary" | "default" | "danger" | "plain".',
      importExample: '<nord-button variant="primary">Schedule Appointment</nord-button>',
      docSubUrl: 'components/button'
    },
    card: {
      canonicalName: '<nord-card>',
      description: 'Clean card surface with header, body, and padding tokens.',
      importExample: '<nord-card><h3 slot="header">Patient Summary</h3><p>Content</p></nord-card>',
      docSubUrl: 'components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@nordhealth/tokens/build/nord.css`.',
      'Use `<nord-*>` custom elements (or `<Nord*>` React components).',
      'Use `<nord-layout>` and `<nord-stack>` for spacing and page structure.',
      'Use `<nord-icon name="..." />` for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `theme="dark"` attribute or CSS custom properties from @nordhealth/tokens.',
    iconUsage: 'Use `<nord-icon name="calendar" />` or `<nord-icon name="user" />`.',
    layoutConventions: 'Use nord-layout with nord-navigation and nord-header.'
  }
};
