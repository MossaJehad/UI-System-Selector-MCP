import { UISystem } from '../../schemas/uiSystem.js';

export const oracleRedwood: UISystem = {
  id: 'oracle-redwood',
  name: 'Oracle Redwood (Oracle JET)',
  organization: 'Oracle',
  description: 'Oracle’s modern enterprise design system and JavaScript Extension Toolkit (JET) component suite, engineered for Oracle Cloud Applications, large enterprise ERPs, global supply chain tracking, and deep data density.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'web-components'],
  frameworks: ['web-components', 'react', 'vanilla', 'html-css'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@oracle/oraclejet', '@oracle/oraclejet-core-pack'],
  docsUrl: 'https://www.oracle.com/redwood',
  repositoryUrl: 'https://github.com/oracle/oracle-jet',
  license: 'UPL-1.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Oracle Accessibility Guidelines and WCAG 2.1 AA / Section 508.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties and Redwood design tokens',
    packageName: '@oracle/oraclejet'
  },
  icons: {
    available: true,
    packageName: '@oracle/oraclejet',
    name: 'Oracle Redwood Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Warm enterprise realism: Redwood clay red (#c74634), deep teak, warm canvas surfaces, Asian-inspired minimalism, and dense data grids.',
  noveltyLevel: 'established',
  bestFor: [
    'Oracle Cloud infrastructure applications and enterprise ERP extensions',
    'Complex supply chain logistics, inventory matrices, and financial ledgers',
    'High-density Web Component enterprise data dashboards'
  ],
  avoidFor: [
    'Lightweight indie blog sites'
  ],
  strengths: [
    'Unsurpassed enterprise data visualization: oj-data-grid, oj-chart, oj-gantt, oj-timeline',
    'True Web Component architecture via Oracle JET with Virtual DOM support',
    'Comprehensive global localization and full RTL bi-directional support'
  ],
  weaknesses: [
    'Large enterprise suite learning curve'
  ],
  tags: [
    'oracle',
    'redwood',
    'oracle-jet',
    'enterprise',
    'erp',
    'data-heavy',
    'web-components',
    'dense',
    'rtl'
  ],
  aliases: ['Redwood', 'Oracle JET', 'Oracle Design System'],
  systemTypes: ['company-design-system', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @oracle/oraclejet',
      packages: ['@oracle/oraclejet'],
      setupInstructions: 'Import `@oracle/oraclejet/dist/css/redwood/oj-redwood-min.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<oj-button>',
      description: 'Oracle JET accessible action button with chroming="solid" | "outlined" | "borderless".',
      importExample: '<oj-button chroming="solid">Approve Purchase Order</oj-button>',
      docSubUrl: 'jet-cookbook/coreComponents/buttons'
    },
    table: {
      canonicalName: '<oj-table>',
      description: 'High-performance virtualized enterprise table.',
      importExample: '<oj-table aria-label="Suppliers" data="[[dataProvider]]" columns="[[columns]]"></oj-table>',
      docSubUrl: 'jet-cookbook/coreComponents/table'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<oj-*>` custom elements or VDOM components.',
      'Apply Redwood theme variables for enterprise consistency.',
      'Ensure high data density with `<oj-table>` and `<oj-data-grid>`.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Redwood theme tokens (--oj-core-color-brand, --oj-core-bg-color).',
    iconUsage: 'Use Oracle Redwood icon font and SVG icons.',
    layoutConventions: 'Use oj-flex and oj-panel layout grids.'
  }
};
