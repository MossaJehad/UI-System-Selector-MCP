import { UISystem } from '../../schemas/uiSystem.js';

export const bolt: UISystem = {
  id: 'bolt',
  name: 'Bolt Design System',
  organization: 'Pegasystems',
  description: 'Pegasystems’ official open-source enterprise design system and Web Component library, engineered for low-code digital process automation (DPA), customer relationship management (CRM), and multi-framework enterprise web architectures.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'data-heavy'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@bolt/core-v3', '@bolt/elements'],
  docsUrl: 'https://boltdesignsystem.com',
  repositoryUrl: 'https://github.com/bolt-design-system/bolt',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Pegasystems CRM and enterprise automation portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@bolt/core-v3'
  },
  icons: {
    available: true,
    packageName: '@bolt/elements',
    name: 'Bolt System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Enterprise process automation aesthetic: Bolt Navy/Cobalt accents, structured card grids, collapsible case management drawers, and accessible data forms.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Enterprise CRM workflows, case management systems, and business process automation portals',
    'Multi-framework enterprise applications sharing Web Components',
    'Publishing websites and large corporate content portals'
  ],
  avoidFor: [
    'Mobile gaming apps'
  ],
  strengths: [
    'Official design system of Pegasystems with Web Components architecture',
    'Specialized case management, data table, and multi-step process components',
    'Framework agnostic: runs in plain HTML, React, Angular, Vue, and Drupal/Twig'
  ],
  weaknesses: [
    'Enterprise automation focus'
  ],
  tags: [
    'bolt',
    'pegasystems',
    'enterprise',
    'crm',
    'automation',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Bolt Design System', 'Bolt', 'Pegasystems Bolt'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @bolt/core-v3 @bolt/elements',
      packages: ['@bolt/core-v3', '@bolt/elements'],
      setupInstructions: 'Import custom elements directly from `@bolt/elements`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<bolt-button>',
      description: 'Bolt action button with hierarchy="primary" | "secondary" | "tertiary".',
      importExample: '<bolt-button hierarchy="primary">Submit Case</bolt-button>',
      docSubUrl: 'pattern-lab/?p=elements-button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<bolt-*>` custom elements.',
      'Apply Bolt design tokens for typography and color palette.',
      'Use Bolt layout containers for enterprise automation workflows.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use `<bolt-icon name="search"></bolt-icon>`.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
