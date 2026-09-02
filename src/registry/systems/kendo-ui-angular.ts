import { UISystem } from '../../schemas/uiSystem.js';

export const kendoUiAngular: UISystem = {
  id: 'kendo-ui-angular',
  name: 'Kendo UI for Angular (Progress Kendo UI)',
  organization: 'Progress Software',
  description: 'A commercial enterprise UI component library for Angular, featuring 110+ components including high-performance DataGrids with virtual scrolling, Gantt charts, PivotGrids, financial charts, and accessible PDF/Excel export engines.',
  category: 'enterprise',
  secondaryCategories: ['data-heavy', 'saas', 'accessibility-focused'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['@progress/kendo-angular-grid', '@progress/kendo-theme-default'],
  docsUrl: 'https://www.telerik.com/kendo-angular-ui',
  repositoryUrl: 'https://github.com/telerik/kendo-angular',
  license: 'Commercial',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets Section 508 and WCAG 2.1 AAA standards with comprehensive screen reader support.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Kendo UI ThemeBuilder design tokens in Sass and CSS custom properties (Default, Material, Bootstrap, Fluent themes)',
    packageName: '@progress/kendo-theme-default'
  },
  icons: {
    available: true,
    packageName: '@progress/kendo-svg-icons',
    name: 'Kendo UI SVG Icons (500+ enterprise icons)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Enterprise BI data grid aesthetic: high-density spreadsheet grid cells, column grouping headers, interactive Gantt timelines, financial stock charts, and PDF export toolbars.',
  noveltyLevel: 'established',
  bestFor: [
    'Mission-critical enterprise Angular applications, financial trading desks, and ERP management systems',
    'Massive datasets needing high-performance virtualized DataGrids, PivotGrids, and Gantt charts',
    'Strict accessibility compliance (WCAG AAA / Section 508)'
  ],
  avoidFor: [
    'Zero-budget hobby open source projects requiring permissive licenses'
  ],
  strengths: [
    'Industry-leading enterprise DataGrid performance (virtual scrolling, grouping, filtering, column virtualization)',
    'Full theme parity across Material, Bootstrap, Fluent, and custom ThemeBuilder tokens',
    'Enterprise SLA support and comprehensive documentation'
  ],
  weaknesses: [
    'Commercial license fee required'
  ],
  tags: [
    'kendo-ui-angular',
    'kendo-ui',
    'progress',
    'telerik',
    'angular',
    'data-grid',
    'enterprise',
    'gantt',
    'charts',
    'established'
  ],
  aliases: ['Kendo UI for Angular', 'Kendo UI Angular', 'Kendo Angular', 'Progress Kendo UI'],
  relatedSystems: ['syncfusion-angular', 'ignite-ui-angular', 'carbon', 'ag-grid'],
  systemTypes: ['enterprise', 'component-library'],
  openSource: false,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    angular: {
      command: 'ng add @progress/kendo-angular-grid',
      packages: ['@progress/kendo-angular-grid', '@progress/kendo-theme-default'],
      peerDependencies: ['@angular/core', '@angular/common'],
      setupInstructions: 'Install Kendo license key and import `GridModule` in Angular module or standalone component.'
    }
  },
  componentGuidance: {
    grid: {
      canonicalName: '<kendo-grid>',
      description: 'Enterprise virtualized data grid with sorting, filtering, and paging.',
      importExample: '<kendo-grid [data]="gridData" [pageable]="true" [sortable]="true"><kendo-grid-column field="ProductID" title="ID" [width]="80"></kendo-grid-column><kendo-grid-column field="ProductName" title="Name"></kendo-grid-column></kendo-grid>',
      docSubUrl: 'components/grid'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@progress/kendo-angular-*` modules into Angular standalone components.',
      'Import Kendo theme stylesheet (`@progress/kendo-theme-default/dist/all.css`).',
      'Use `<kendo-*>` components for enterprise data-dense UI.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Progress ThemeBuilder.',
    iconUsage: 'Use `<kendo-svg-icon [icon]="svgIcon"></kendo-svg-icon>`.',
    layoutConventions: 'Use Kendo UI grid and layout components.'
  }
};
