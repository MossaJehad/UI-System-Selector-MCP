import { UISystem } from '../../schemas/uiSystem.js';

export const inforDesignSystem: UISystem = {
  id: 'infor-design-system',
  name: 'Infor Design System (IDS Web Components)',
  organization: 'Infor',
  description: 'Infor’s official open-source enterprise Web Component design system powering Infor CloudSuite, global enterprise ERPs, manufacturing supply chains, and hospital healthcare operations.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'web-components'],
  frameworks: ['web-components', 'angular', 'react', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['infor-upstream'],
  docsUrl: 'https://design.infor.com',
  repositoryUrl: 'https://github.com/infor-design/enterprise-wc',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA and Section 508 across Infor CloudSuite ERP systems.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: 'infor-upstream'
  },
  icons: {
    available: true,
    name: 'IDS Enterprise Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Heavy enterprise industrial ERP aesthetic: Infor Blue / Amethyst, high-density data grids, warehouse inventory lookup cards, and multi-tab operational records.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Enterprise resource planning (ERP), manufacturing supply chain, and warehouse logistics',
    'Hospital clinical administration and procurement inventory systems',
    'Multi-framework Web Component enterprise applications'
  ],
  avoidFor: [
    'Lightweight personal blogs'
  ],
  strengths: [
    'Engineered for deep data entry, warehouse barcodes, and ERP transaction volume',
    'Standards-compliant Web Component architecture with full Shadow DOM',
    'Comprehensive global enterprise localization and RTL support'
  ],
  weaknesses: [
    'Enterprise ERP domain focus'
  ],
  tags: [
    'infor',
    'ids',
    'erp',
    'enterprise',
    'supply-chain',
    'web-components',
    'data-heavy',
    'rtl',
    'hidden-gem'
  ],
  aliases: ["IDS", "Infor Design System", "Infor Enterprise UI", "Enterprise WC", "Infor components", "Infor Web Components"],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install infor-upstream',
      packages: ['infor-upstream'],
      setupInstructions: 'Import Infor enterprise stylesheet and register Web Components.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ids-button>',
      description: 'Infor action button with appearance="primary" | "secondary" | "tertiary".',
      importExample: '<ids-button appearance="primary">Process Batch Order</ids-button>',
      docSubUrl: 'components/button/'
    },
    datagrid: {
      canonicalName: '<ids-data-grid>',
      description: 'High-density enterprise data grid with inline editing and sorting.',
      importExample: '<ids-data-grid></ids-data-grid>',
      docSubUrl: 'components/data-grid/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<ids-*>` custom elements in HTML templates.',
      'Apply Infor theme variables for enterprise contrast and density.',
      'Ensure high data density with `<ids-data-grid>`.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Infor theme attributes (`color-variant="light"`, `color-variant="dark"`).',
    iconUsage: 'Use `<ids-icon icon="settings"></ids-icon>`.',
    layoutConventions: 'Use `<ids-layout-grid>` and `<ids-container>` for application layout.'
  }
};
