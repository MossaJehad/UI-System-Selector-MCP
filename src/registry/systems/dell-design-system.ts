import { UISystem } from '../../schemas/uiSystem.js';

export const dellDesignSystem: UISystem = {
  id: 'dell-design-system',
  name: 'Dell Design System (DDS)',
  organization: 'Dell Technologies',
  description: 'Dell Technologies’ official enterprise design system and multi-framework component library (Web Components, React, Angular, Vanilla), engineered for global e-commerce portals, enterprise server infrastructure, data center telemetry, and developer tools.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'ecommerce', 'web-components', 'data-heavy'],
  frameworks: ['web-components', 'react', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@dds/components', '@dds/angular', '@dds/react'],
  docsUrl: 'https://www.delldesignsystem.com',
  repositoryUrl: 'https://github.com/dell/dell-design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Dell global commerce and server telemetry consoles.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@dds/components'
  },
  icons: {
    available: true,
    packageName: '@dds/components',
    name: 'Dell Design System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Dell corporate computing aesthetic: Dell Blue (#0076ce), structured product specification tables, hardware configuration drawers, and enterprise commerce checkout flows.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Dell IT ecosystem integrations, server hardware configurators, and enterprise hardware management',
    'Global B2B e-commerce stores with multi-language and RTL requirements',
    'Multi-framework enterprise teams sharing Web Components'
  ],
  avoidFor: [
    'Retro indie games'
  ],
  strengths: [
    'Official design system of Dell Technologies with multi-framework bindings (Web Components, React, Angular)',
    'Specialized hardware configuration, spec sheet, and global checkout components',
    'High accessibility rigor and RTL localization'
  ],
  weaknesses: [
    'Corporate IT branding'
  ],
  tags: [
    'dell',
    'dds',
    'enterprise',
    'ecommerce',
    'hardware',
    'web-components',
    'hidden-gem'
  ],
  aliases: ["Dell Design System", "DDS", "Dell UI", "Dell Technologies Design System", "Dell components"],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @dds/components',
      packages: ['@dds/components'],
      setupInstructions: 'Import `@dds/components/dist/dds/dds.min.css` and `@dds/components/dist/dds/dds.min.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<dds-button>',
      description: 'Dell action button with kind="primary" | "secondary" | "tertiary" | "danger".',
      importExample: '<dds-button kind="primary">Configure Server</dds-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<dds-*>` custom elements or `@dds/react` components.',
      'Import Dell stylesheet at root.',
      'Use Dell design tokens for consistent typography and spacing.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties for Dell theme variants.',
    iconUsage: 'Use `<dds-icon name="server"></dds-icon>`.',
    layoutConventions: 'Use standard Dell grid and container components.'
  }
};
