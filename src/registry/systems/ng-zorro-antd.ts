import { UISystem } from '../../schemas/uiSystem.js';

export const ngZorroAntd: UISystem = {
  id: 'ng-zorro-antd',
  name: 'NG-ZORRO (Ant Design of Angular)',
  organization: 'Alibaba / NG-ZORRO Community',
  description: 'An enterprise-class UI component library for Angular implementing the Ant Design system, featuring 60+ components with full TypeScript support, internationalization, high-density data tables, tree selects, and complex form builders.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'data-heavy', 'saas', 'dashboard'],
  frameworks: ['angular'],
  stylingApproach: 'less',
  packageNames: ['ng-zorro-antd'],
  docsUrl: 'https://ng.ant.design',
  repositoryUrl: 'https://github.com/NG-ZORRO/ng-zorro-antd',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Ant Design enterprise accessibility guidelines and Angular keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Ant Design Less variables and CSS custom properties via `ng-zorro-antd/style`',
    packageName: 'ng-zorro-antd'
  },
  icons: {
    available: true,
    packageName: '@ant-design/icons-angular',
    name: 'Ant Design Icons for Angular'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Ant Design enterprise computing aesthetic in Angular: Daybreak Blue (#1890ff), dense multi-level tables, cascader pickers, tree transfer modals, and dark mode theme switching.',
  noveltyLevel: 'established',
  bestFor: [
    'Angular enterprise applications, ERP systems, internal admin portals, and data-dense dashboards',
    'Developers who love Ant Design specifications and need an official, first-class Angular implementation',
    'Complex multi-step forms and internationalized applications'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'The premier Ant Design implementation for Angular in the world',
    'Extremely comprehensive enterprise component suite (60+ components)',
    'First-class TypeScript, Angular CLI schematics (`ng add ng-zorro-antd`), dark mode, and RTL support'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'ng-zorro',
    'ant-design',
    'angular',
    'enterprise',
    'erp',
    'dashboard',
    'data-heavy',
    'established'
  ],
  aliases: ['NG-ZORRO', 'NG ZORRO', 'Ant Design Angular', 'NG-ZORRO-Antd'],
  relatedSystems: ['ant-design', 'ant-design-vue', 'primeng', 'angular-material'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add ng-zorro-antd',
      packages: ['ng-zorro-antd', '@ant-design/icons-angular'],
      peerDependencies: ['@angular/core', '@angular/common', '@angular/cdk']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button[nz-button]',
      description: 'NG-ZORRO button with nzType="primary" | "default" | "dashed" | "link" | "text".',
      importExample: '<button nz-button nzType="primary">Save Configuration</button>',
      docSubUrl: 'components/button/en'
    },
    table: {
      canonicalName: 'nz-table',
      description: 'NG-ZORRO enterprise data table with sortable columns and pagination.',
      importExample: '<nz-table #basicTable [nzData]="listOfData"><thead><tr><th>Name</th><th>Age</th></tr></thead><tbody><tr *ngFor="let data of basicTable.data"><td>{{data.name}}</td><td>{{data.age}}</td></tr></tbody></nz-table>',
      docSubUrl: 'components/table/en'
    }
  },
  aiInstructions: {
    principles: [
      'Import required `Nz*Module` in Angular components/modules.',
      'Use `nz-*` directives and components (e.g. `button[nz-button]`, `<nz-table>`).',
      'Import `ng-zorro-antd/ng-zorro-antd.min.css` in `angular.json`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Ant Design Less variable overrides in `angular.json`.',
    iconUsage: 'Use `<span nz-icon nzType="search"></span>`.',
    layoutConventions: 'Use `<nz-layout>`, `<nz-header>`, `<nz-sider>`, `<nz-content>`.'
  }
};
