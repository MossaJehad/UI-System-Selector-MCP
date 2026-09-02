import { UISystem } from '../../schemas/uiSystem.js';

export const primeng: UISystem = {
  id: 'primeng',
  name: 'PrimeNG',
  organization: 'PrimeTek Informatics',
  description: 'The most comprehensive UI component suite for Angular, featuring 90+ production-ready components, advanced data tables with virtual scroll and export, tree tables, theme presets (Aura, Lara, Nora), and unstyled Tailwind mode.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'saas'],
  frameworks: ['angular'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['primeng', 'primeicons', '@primeng/themes'],
  docsUrl: 'https://primeng.org',
  repositoryUrl: 'https://github.com/primefaces/primeng',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across complex Angular enterprise tables and menus.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'PrimeNG Theme Preset system and CSS custom properties',
    packageName: '@primeng/themes'
  },
  icons: {
    available: true,
    packageName: 'primeicons',
    name: 'PrimeIcons'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Enterprise data-dense computing aesthetic with PrimeNG Aura/Lara themes: rich tabular data, tree pickers, multi-select dropdowns, and Excel export buttons.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Angular enterprise applications requiring extensive component variety (90+ components)',
    'Complex data grid tables requiring sorting, filtering, row reordering, and CSV/Excel export (`p-table`)',
    'Angular projects wanting unstyled Tailwind CSS integration or pre-styled Aura/Lara themes'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'The most widely adopted third-party component suite in the Angular ecosystem',
    'Unrivaled Table capabilities (`p-table`) for enterprise data entry and virtualization',
    'PrimeNG 18+ theme presets (Aura, Lara, Nora) with full dark mode'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'primeng',
    'angular',
    'enterprise',
    'datatable',
    'dashboard',
    'data-heavy',
    'dark-mode',
    'mainstream'
  ],
  aliases: ['PrimeNG', 'Prime NG', 'PrimeFaces Angular'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    angular: {
      command: 'npm install primeng @primeng/themes primeicons',
      packages: ['primeng', '@primeng/themes', 'primeicons'],
      peerDependencies: ['@angular/core', '@angular/common'],
      setupInstructions: 'Provide PrimeNG theme in `app.config.ts` via `providePrimeNG({ theme: { preset: Aura } })`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'p-button',
      description: 'PrimeNG action button with label, icon, and severity="primary" | "secondary" | "success" | "danger".',
      importExample: '<p-button label="Save Data" icon="pi pi-check" severity="primary" />',
      docSubUrl: 'button'
    },
    table: {
      canonicalName: 'p-table',
      description: 'PrimeNG enterprise data table with sorting, filtering, and pagination.',
      importExample: '<p-table [value]="products" [paginator]="true" [rows]="10"><ng-template pTemplate="header"><tr><th>Name</th><th>Price</th></tr></ng-template><ng-template pTemplate="body" let-product><tr><td>{{product.name}}</td><td>{{product.price}}</td></tr></ng-template></p-table>',
      docSubUrl: 'table'
    }
  },
  aiInstructions: {
    principles: [
      'Import required PrimeNG standalone components in Angular component imports array.',
      'Configure `providePrimeNG()` in `app.config.ts`.',
      'Use `p-table` for data grid views.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure PrimeNG theme preset in `app.config.ts`.',
    iconUsage: 'Use PrimeIcons class names (`pi pi-*`).',
    layoutConventions: 'Use standard Angular flex and grid.'
  }
};
