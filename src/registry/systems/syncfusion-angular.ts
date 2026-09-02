import { UISystem } from '../../schemas/uiSystem.js';

export const syncfusionAngular: UISystem = {
  id: 'syncfusion-angular',
  name: 'Syncfusion Essential JS 2 for Angular',
  organization: 'Syncfusion',
  description: 'A comprehensive commercial enterprise UI component suite for Angular, containing 80+ components including high-performance DataGrid, Scheduler / Calendar, Charting, Kanban board, Diagram, Rich Text Editor, and Document Editor.',
  category: 'enterprise',
  secondaryCategories: ['data-heavy', 'saas', 'accessibility-focused'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['@syncfusion/ej2-angular-grids', '@syncfusion/ej2-material-theme'],
  docsUrl: 'https://ej2.syncfusion.com/angular/documentation',
  repositoryUrl: 'https://github.com/syncfusion/ej2-angular-ui-components',
  license: 'Commercial',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA and Section 508 guidelines across all components.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Syncfusion ThemeStudio design tokens and theme packages (Material, Bootstrap 5, Fluent 2, Tailwind)',
    packageName: '@syncfusion/ej2-material-theme'
  },
  icons: {
    available: true,
    name: 'Syncfusion EJ2 Icon Font'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Comprehensive enterprise application aesthetic: Outlook-style schedulers, Excel-like grid calculation engines, Trello-style kanban boards, and Visio-style diagrams.',
  noveltyLevel: 'established',
  bestFor: [
    'Enterprise Angular applications requiring deep document editors, schedulers, kanban boards, and BI grids',
    'Complex scheduling, timeline management, and financial charting software',
    'Enterprises wanting single-vendor component coverage'
  ],
  avoidFor: [
    'Lightweight zero-cost open source projects'
  ],
  strengths: [
    'Huge component breath: Scheduler, Diagram, Word/PDF Document Editor, Spreadsheet, Kanban, Gantt, Chart',
    'Full theme customization via Syncfusion ThemeStudio (Material, Bootstrap, Fluent, Tailwind)',
    'Community License available for individual developers and small businesses'
  ],
  weaknesses: [
    'Commercial license required for large enterprises'
  ],
  tags: [
    'syncfusion-angular',
    'syncfusion',
    'ej2',
    'angular',
    'data-grid',
    'scheduler',
    'kanban',
    'enterprise',
    'established'
  ],
  aliases: ['Syncfusion Angular', 'Syncfusion EJ2 Angular', 'Essential JS 2 Angular', 'Syncfusion'],
  relatedSystems: ['kendo-ui-angular', 'ignite-ui-angular', 'carbon'],
  systemTypes: ['enterprise', 'component-library'],
  openSource: false,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    angular: {
      command: 'npm install @syncfusion/ej2-angular-grids @syncfusion/ej2-material-theme',
      packages: ['@syncfusion/ej2-angular-grids', '@syncfusion/ej2-material-theme'],
      peerDependencies: ['@angular/core', '@angular/common'],
      setupInstructions: 'Register Syncfusion license key and import `GridModule`.'
    }
  },
  componentGuidance: {
    grid: {
      canonicalName: '<ejs-grid>',
      description: 'Syncfusion data grid with paging, filtering, and sorting.',
      importExample: '<ejs-grid [dataSource]="data" [allowPaging]="true" [allowSorting]="true"><e-columns><e-column field="OrderID" headerText="Order ID" width="120"></e-column><e-column field="CustomerID" headerText="Customer Name"></e-column></e-columns></ejs-grid>',
      docSubUrl: 'grid/getting-started'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@syncfusion/ej2-angular-*` modules into Angular standalone components.',
      'Import theme CSS (`@syncfusion/ej2-material-theme/styles/material.css`).',
      'Use `<ejs-*>` components for enterprise business UI.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Syncfusion ThemeStudio.',
    iconUsage: 'Use Syncfusion built-in icon font classes.',
    layoutConventions: 'Use Syncfusion layout containers.'
  }
};
