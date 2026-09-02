import { UISystem } from '../../schemas/uiSystem.js';

export const angularMaterial: UISystem = {
  id: 'angular-material',
  name: 'Angular Material (& Angular CDK)',
  organization: 'Google / Angular Core Team',
  description: 'The official component library by the Angular team at Google, implementing Material Design 3 and providing the Angular Component Development Kit (CDK) for accessible headless overlays, drag-and-drop, virtual scrolling, and table behavior.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'saas', 'dashboard', 'accessibility-focused'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['@angular/material', '@angular/cdk'],
  docsUrl: 'https://material.angular.io',
  repositoryUrl: 'https://github.com/angular/components',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered by Google to satisfy strict WAI-ARIA and Section 508 accessibility requirements across Angular applications.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design 3 Sass tokens and CSS Custom Properties',
    packageName: '@angular/material'
  },
  icons: {
    available: true,
    packageName: '@angular/material',
    name: 'Material Icons via MatIcon'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Official Google Material Design 3 for Angular: ripple effects, floating action buttons, elevated cards, and structured form fields.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Angular enterprise applications requiring Google-backed component stability and accessibility',
    'Developers using Angular CDK for headless overlays, drag-and-drop, virtual scrolling, and table sorting',
    'Large-scale enterprise workflows with reactive forms'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'The official component library maintained directly by Google’s Angular team',
    'Angular CDK provides the most powerful headless primitives in the Angular ecosystem',
    'Seamless integration with Angular Signals, Reactive Forms, and Zoneless change detection'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'angular',
    'angular-material',
    'google',
    'cdk',
    'material-design',
    'enterprise',
    'dark-mode',
    'mainstream'
  ],
  aliases: ['Angular Material', 'Angular CDK', 'Mat Angular'],
  systemTypes: ['component-library', 'design-system', 'headless'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add @angular/material',
      packages: ['@angular/material', '@angular/cdk'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'MatButton',
      description: 'Angular Material button directive with mat-button, mat-raised-button, mat-flat-button.',
      importExample: '<button mat-flat-button color="primary">Submit Request</button>',
      docSubUrl: 'components/button/overview'
    },
    table: {
      canonicalName: 'MatTable',
      description: 'Material data table with sort, pagination, and data source.',
      importExample: '<table mat-table [dataSource]="dataSource"><ng-container matColumnDef="name"><th mat-header-cell *matHeaderCellDef>Name</th><td mat-cell *matCellDef="let element">{{element.name}}</td></ng-container><tr mat-header-row *matHeaderRowDef="columns"></tr><tr mat-row *matRowDef="let row; columns: columns;"></tr></table>',
      docSubUrl: 'components/table/overview'
    }
  },
  aiInstructions: {
    principles: [
      'Import required Material modules (e.g. `MatButtonModule`, `MatTableModule`) in standalone Angular components.',
      'Use Angular CDK primitives (`@angular/cdk/overlay`, `@angular/cdk/drag-drop`) for custom behaviors.',
      'Use Angular Reactive Forms (`FormGroup`, `FormControl`) with Material inputs.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Angular Material Sass mixins (`mat.define-theme()`).',
    iconUsage: 'Use `<mat-icon>search</mat-icon>`.',
    layoutConventions: 'Use standard Angular flex/grid layout.'
  }
};
