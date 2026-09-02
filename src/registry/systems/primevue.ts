import { UISystem } from '../../schemas/uiSystem.js';

export const primevue: UISystem = {
  id: 'primevue',
  name: 'PrimeVue',
  organization: 'PrimeTek Informatics',
  description: 'PrimeTek’s open-source UI component suite for Vue 3 and Nuxt, featuring 90+ components, advanced virtualized DataTables with export, tree tables, theme presets (Aura, Lara, Nora, Material), and an unstyled PassThrough (PT) Tailwind CSS mode.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'saas'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['primevue', 'primeicons', '@primevue/themes'],
  docsUrl: 'https://primevue.org',
  repositoryUrl: 'https://github.com/primefaces/primevue',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with extensive keyboard accessibility across complex data tables and menus.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'PrimeVue Theme Preset system and CSS custom properties',
    packageName: '@primevue/themes'
  },
  icons: {
    available: true,
    packageName: 'primeicons',
    name: 'PrimeIcons'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Modern enterprise design with PrimeVue 4 theme presets (Aura, Lara, Nora): clean border radii, refined dark mode contrast, high-density data tables, and tree grids.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt applications needing 90+ production-ready UI components out of the box',
    'Complex data grid tables requiring sorting, filtering, row reordering, and CSV/Excel export',
    'Vue projects wanting unstyled Tailwind mode via PassThrough (PT) or styled Aura/Lara presets'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'PrimeVue 4 design token architecture with official Aura and Lara theme presets',
    'Unbeatable DataTable with virtual scrolling, row grouping, multi-sort, and filtering',
    'Unstyled mode (PassThrough / PT) allowing full Tailwind CSS customization'
  ],
  weaknesses: [
    'Large ecosystem that benefits from picking specific components'
  ],
  tags: [
    'primevue',
    'vue',
    'vue3',
    'nuxt',
    'datatable',
    'enterprise',
    'dashboard',
    'dark-mode',
    'tailwind',
    'established'
  ],
  aliases: ['PrimeVue', 'Prime Vue', 'PrimeFaces Vue'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install primevue @primevue/themes primeicons',
      packages: ['primevue', '@primevue/themes', 'primeicons'],
      peerDependencies: ['vue'],
      setupInstructions: 'Initialize PrimeVue with `app.use(PrimeVue, { theme: { preset: Aura } })`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'PrimeVue button with label, icon, and severity="secondary" | "success" | "info" | "warning" | "danger".',
      importExample: "<script setup>\nimport Button from 'primevue/button';\n</script>\n\n<template>\n  <Button label=\"Save Changes\" icon=\"pi pi-check\" severity=\"primary\" />\n</template>",
      docSubUrl: 'button/'
    },
    datatable: {
      canonicalName: 'DataTable',
      description: 'Advanced data table with Column subcomponents.',
      importExample: "<script setup>\nimport DataTable from 'primevue/datatable';\nimport Column from 'primevue/column';\n</script>\n\n<template>\n  <DataTable :value=\"products\" paginator :rows=\"10\"><Column field=\"name\" header=\"Product Name\" sortable /></DataTable>\n</template>",
      docSubUrl: 'datatable/'
    }
  },
  aiInstructions: {
    principles: [
      'Initialize PrimeVue in `main.ts` with a theme preset (e.g. `Aura`).',
      'Use PrimeVue DataTable and Column for data management.',
      'Use PrimeIcons (`pi pi-*`) for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme preset in `PrimeVue` plugin config or use unstyled mode with Tailwind.',
    iconUsage: 'Use `pi pi-*` icon classes.',
    layoutConventions: 'Use standard Vue 3 responsive flex and grid layouts.'
  }
};
