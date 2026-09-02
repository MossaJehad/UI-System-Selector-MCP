import { UISystem } from '../../schemas/uiSystem.js';

export const igniteUiAngular: UISystem = {
  id: 'ignite-ui-angular',
  name: 'Ignite UI for Angular (Infragistics)',
  organization: 'Infragistics',
  description: 'A commercial enterprise UI component library for Angular by Infragistics, featuring high-speed virtualized DataGrids, TreeGrids, financial stock charts, pivot tables, spreadsheet engines, and Material Design styling.',
  category: 'enterprise',
  secondaryCategories: ['data-heavy', 'saas', 'accessibility-focused'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['igniteui-angular', 'igniteui-angular-charts'],
  docsUrl: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started',
  repositoryUrl: 'https://github.com/IgniteUI/igniteui-angular',
  license: 'Commercial',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with complete keyboard roving navigation in data grids.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Ignite UI Design Tokens and Sass theming engine (Material, Fluent, Bootstrap, Indigo themes)',
    packageName: 'igniteui-angular'
  },
  icons: {
    available: true,
    name: 'Material Icons / Ignite UI SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-speed financial trading desk aesthetic: sub-millisecond cell rendering updates, sparkline indicators, dockable tool panels, and dense financial grids.',
  noveltyLevel: 'established',
  bestFor: [
    'Financial trading platforms, fintech analytics dashboards, and massive streaming data feeds in Angular',
    'High-speed virtualized TreeGrid, HierarchicalGrid, and PivotGrid requirements',
    'Enterprises using Infragistics App Builder'
  ],
  avoidFor: [
    'Zero-budget open source hobby tools'
  ],
  strengths: [
    'Unrivaled live streaming data grid performance and sub-millisecond cell rendering',
    'Open source core repository on GitHub with active maintenance',
    'Full integration with Infragistics App Builder and Indigo.Design'
  ],
  weaknesses: [
    'Commercial licensing for production enterprise deployments'
  ],
  tags: [
    'ignite-ui-angular',
    'ignite-ui',
    'infragistics',
    'angular',
    'data-grid',
    'finance',
    'fintech',
    'enterprise',
    'established'
  ],
  aliases: ['Ignite UI for Angular', 'Ignite UI Angular', 'IgniteUI Angular', 'Infragistics Ignite UI'],
  relatedSystems: ['indigo-design', 'kendo-ui-angular', 'syncfusion-angular', 'carbon'],
  systemTypes: ['enterprise', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    angular: {
      command: 'ng add igniteui-angular',
      packages: ['igniteui-angular', 'igniteui-angular-charts'],
      peerDependencies: ['@angular/core', '@angular/common'],
      setupInstructions: 'Import `IgxGridModule` and choose an Ignite UI theme in `angular.json`.'
    }
  },
  componentGuidance: {
    grid: {
      canonicalName: '<igx-grid>',
      description: 'High-speed virtualized data grid with live data updates.',
      importExample: '<igx-grid [data]="data" [autoGenerate]="false" [allowFiltering]="true"><igx-column field="ID" header="ID"></igx-column><igx-column field="Price" header="Price" dataType="number"></igx-column></igx-grid>',
      docSubUrl: 'components/grid/grid'
    }
  },
  aiInstructions: {
    principles: [
      'Import `Igx*Module` from `igniteui-angular` into standalone Angular components.',
      'Import theme SCSS in `styles.scss` (`@use "igniteui-angular/theming" as *;`).',
      'Use `<igx-*>` components for enterprise grid and chart UI.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Ignite UI Sass theming functions.',
    iconUsage: 'Use `<igx-icon>home</igx-icon>`.',
    layoutConventions: 'Use Ignite UI layout directives and grid containers.'
  }
};
