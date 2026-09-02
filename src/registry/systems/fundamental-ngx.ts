import { UISystem } from '../../schemas/uiSystem.js';

export const fundamentalNgx: UISystem = {
  id: 'fundamental-ngx',
  name: 'SAP Fundamental NGX',
  organization: 'SAP SE',
  description: 'SAP’s official open-source Angular component library implementing the SAP Fundamental Styles and Fiori design guidelines, engineered for enterprise Angular business applications, micro-frontends, ERP transaction flows, and analytical data tables.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['@fundamental-ngx/core', '@fundamental-ngx/platform', 'fundamental-styles'],
  docsUrl: 'https://sap.github.io/fundamental-ngx',
  repositoryUrl: 'https://github.com/SAP/fundamental-ngx',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets SAP Accessibility Standards and WCAG 2.1 AA across global enterprise Angular deployments.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'SAP Fiori / Fundamental Styles CSS variables and Sass tokens (Horizon, Quartz)',
    packageName: 'fundamental-styles'
  },
  icons: {
    available: true,
    packageName: '@fundamental-ngx/core',
    name: 'SAP Fiori Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'SAP Fiori enterprise ERP style in Angular: Shellbar navigation headers, Horizon dark/light themes, dense analytical business tables, and multi-step procurement wizards.',
  noveltyLevel: 'established',
  bestFor: [
    'SAP Angular ecosystem extensions, SAP Business Technology Platform (BTP) apps, and ERP back-office consoles',
    'Enterprise Angular teams needing official SAP Fiori components and typography',
    'Complex business forms, multi-comboboxes, and data tables'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'Official SAP component library built specifically for Angular and SAP Fundamental Styles',
    'Complete enterprise ERP component suite (Shellbar, Table, Dynamic Page, Wizard, Combobox, DatePicker)',
    'Full dark mode and RTL localization support'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'sap',
    'fundamental-ngx',
    'fiori',
    'angular',
    'enterprise',
    'erp',
    'dark-mode',
    'rtl',
    'established'
  ],
  aliases: ['Fundamental NGX', 'SAP Fundamental Angular', 'Fundamental Styles Angular'],
  relatedSystems: ['ui5-webcomponents', 'carbon', 'patternfly'],
  systemTypes: ['company-design-system', 'component-library', 'design-system'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add @fundamental-ngx/core',
      packages: ['@fundamental-ngx/core', '@fundamental-ngx/platform', 'fundamental-styles'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'fd-button',
      description: 'SAP Fundamental button component with fdType="emphasized" | "standard" | "positive" | "negative".',
      importExample: '<button fd-button fdType="emphasized">Save Order</button>',
      docSubUrl: 'core/button'
    },
    table: {
      canonicalName: 'fd-table',
      description: 'SAP enterprise data table with sortable columns and pagination.',
      importExample: '<table fd-table [popover]="true"><thead fd-table-header><tr fd-table-row><th fd-table-cell>Item</th><th fd-table-cell>Price</th></tr></thead><tbody fd-table-body><tr fd-table-row><td fd-table-cell>Part A</td><td fd-table-cell>$120</td></tr></tbody></table>',
      docSubUrl: 'core/table'
    }
  },
  aiInstructions: {
    principles: [
      'Import required `@fundamental-ngx/core` modules in Angular standalone components.',
      'Use `<fd-shellbar>` for top-level enterprise navigation.',
      'Import `fundamental-styles/dist/theming/sap_horizon.css` for Fiori Horizon theme.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Fundamental Styles theme stylesheets (`sap_horizon`, `sap_horizon_dark`).',
    iconUsage: 'Use SAP icon names (`glyph="sap-icon--search"`).',
    layoutConventions: 'Use standard Angular flex and grid layout.'
  }
};
