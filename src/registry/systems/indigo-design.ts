import { UISystem } from '../../schemas/uiSystem.js';

export const indigoDesign: UISystem = {
  id: 'indigo-design',
  name: 'Infragistics Indigo.Design',
  organization: 'Infragistics',
  description: 'Infragistics’ unified design system and enterprise UI component ecosystem (Ignite UI for Angular, React, Web Components, Blazor), engineered for financial trading spreadsheets, real-time stock ticker grids, and corporate BI dashboards.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard'],
  frameworks: ['angular', 'react', 'web-components', 'html-css'],
  stylingApproach: 'sass',
  packageNames: ['igniteui-angular', 'igniteui-react', 'igniteui-webcomponents'],
  docsUrl: 'https://www.infragistics.com/products/indigo-design',
  repositoryUrl: 'https://github.com/IgniteUI',
  license: 'Apache-2.0 / Commercial Core',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across financial trading grids and enterprise charting consoles.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in Sass maps and CSS Custom Properties',
    packageName: 'igniteui-theming'
  },
  icons: {
    available: true,
    name: 'Ignite UI Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Financial trading and enterprise BI aesthetic: high-density Excel-like spreadsheet grids, live flashing price cells, candlestick stock charts, and multi-tier tree grids.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Financial trading desks, investment banking portals, and stock market telemetry',
    'High-performance data grids with real-time live data updates and Excel formula calculations',
    'Multi-framework enterprise teams across Angular, React, and Web Components'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'One of the fastest financial data grid engines in the industry (Ignite UI Grid)',
    'Full support for live flashing data cells, pivot tables, and hierarchical tree grids',
    'Comprehensive design-to-code workflow from Figma / Sketch to Angular and React'
  ],
  weaknesses: [
    'Enterprise finance and BI focus'
  ],
  tags: [
    'infragistics',
    'indigo',
    'igniteui',
    'finance',
    'trading',
    'datatable',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['Indigo.Design', 'Infragistics Indigo', 'Ignite UI', 'Indigo Design System'],
  systemTypes: ['company-design-system', 'component-library', 'design-system'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add igniteui-angular',
      packages: ['igniteui-angular'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    grid: {
      canonicalName: 'igx-grid',
      description: 'High-performance financial data grid with sorting, filtering, and Excel export.',
      importExample: '<igx-grid [data]="tradeData" [autoGenerate]="false"><igx-column field="symbol" header="Symbol"></igx-column><igx-column field="price" header="Price"></igx-column></igx-grid>',
      docSubUrl: 'products/ignite-ui-angular/angular/components/grid/grid'
    }
  },
  aiInstructions: {
    principles: [
      'Use Ignite UI data grid components for high-density financial data.',
      'Import Ignite UI theme stylesheets in root layout.',
      'Use Ignite UI dark theme for trading room monitors.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Ignite UI Sass theming engine.',
    iconUsage: 'Use Ignite UI icon components.',
    layoutConventions: 'Use standard Angular flex and grid layout.'
  }
};
