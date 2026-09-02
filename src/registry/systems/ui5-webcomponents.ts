import { UISystem } from '../../schemas/uiSystem.js';

export const ui5Webcomponents: UISystem = {
  id: 'ui5-webcomponents',
  name: 'SAP UI5 Web Components',
  organization: 'SAP SE',
  description: 'SAP’s official open-source Web Component library implementing SAP Fiori design principles, engineered for enterprise ERPs, global business transactions, high-density analytical tables, and multi-framework enterprise interoperability (React, Angular, Vue, plain HTML).',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@ui5/webcomponents', '@ui5/webcomponents-react', '@ui5/webcomponents-icons', '@ui5/webcomponents-fiori'],
  docsUrl: 'https://sap.github.io/ui5-webcomponents',
  repositoryUrl: 'https://github.com/SAP/ui5-webcomponents',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets SAP Product Standard Accessibility and WCAG 2.1 AA across global enterprise deployments.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'SAP Fiori design tokens in CSS custom properties (Horizon, Quartz themes)',
    packageName: '@ui5/webcomponents-theming'
  },
  icons: {
    available: true,
    packageName: '@ui5/webcomponents-icons',
    name: 'SAP Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'SAP Fiori enterprise ERP style: Morning Horizon / Evening Horizon themes, SAP Gold/Blue accents, analytical cards, shell bars, and dense business tables.',
  noveltyLevel: 'established',
  bestFor: [
    'SAP S/4HANA extensions, SAP BTP business applications, and enterprise ERP dashboards',
    'High-density corporate finance, supply chain, and procurement interfaces',
    'Multi-framework enterprise applications (React via `@ui5/webcomponents-react`, Angular, Vue, plain HTML)'
  ],
  avoidFor: [
    'Consumer mobile gaming apps'
  ],
  strengths: [
    'The premier open-source Web Component implementation of the SAP Fiori design language',
    'Full official React wrapper package (`@ui5/webcomponents-react`) with comprehensive TypeScript types',
    'Unbeatable enterprise data grid and shell bar capabilities'
  ],
  weaknesses: [
    'Enterprise SAP ERP domain aesthetic'
  ],
  tags: [
    'sap',
    'ui5',
    'fiori',
    'enterprise',
    'erp',
    'web-components',
    'data-heavy',
    'rtl',
    'dark-mode',
    'established'
  ],
  aliases: ['UI5 Web Components', 'SAP UI5', 'UI5 React', 'SAP Fiori Web Components'],
  relatedSystems: ['carbon', 'cloudscape', 'patternfly'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ui5/webcomponents @ui5/webcomponents-fiori @ui5/webcomponents-icons',
      packages: ['@ui5/webcomponents', '@ui5/webcomponents-fiori', '@ui5/webcomponents-icons'],
      setupInstructions: 'Import custom elements directly (e.g. `import "@ui5/webcomponents/dist/Button.js";`).'
    },
    react: {
      command: 'npm install @ui5/webcomponents-react @ui5/webcomponents @ui5/webcomponents-icons',
      packages: ['@ui5/webcomponents-react', '@ui5/webcomponents', '@ui5/webcomponents-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<ThemeProvider>` from `@ui5/webcomponents-react`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ui5-button>',
      description: 'SAP UI5 action button with design="Emphasized" | "Default" | "Positive" | "Negative" | "Transparent".',
      importExample: '<ui5-button design="Emphasized">Approve Purchase Requisition</ui5-button>',
      docSubUrl: 'components/Button/'
    },
    table: {
      canonicalName: '<ui5-table>',
      description: 'SAP enterprise data table with columns and cells.',
      importExample: '<ui5-table><ui5-table-column slot="columns"><span>Product</span></ui5-table-column><ui5-table-row><ui5-table-cell><span>Notebook Basic 15</span></ui5-table-cell></ui5-table-row></ui5-table>',
      docSubUrl: 'components/Table/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<ui5-*>` custom elements or `@ui5/webcomponents-react` components.',
      'Use `<ui5-shellbar>` for top-level enterprise navigation.',
      'Use SAP Fiori Horizon themes (`sap_horizon`, `sap_horizon_dark`).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure SAP themes using `setTheme("sap_horizon_dark")`.',
    iconUsage: 'Use SAP icons (e.g. `import "@ui5/webcomponents-icons/dist/action-settings.js"`).',
    layoutConventions: 'Use standard SAP Fiori layout patterns and flexible column layouts.'
  }
};
