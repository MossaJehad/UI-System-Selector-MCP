import { UISystem } from '../../schemas/uiSystem.js';

export const svarUi: UISystem = {
  id: 'svar-ui',
  name: 'SVAR UI (SVAR Svelte Components)',
  organization: 'SVAR / SVAR Community',
  description: 'An open-source, high-performance UI component library for Svelte, featuring enterprise Gantt charts, DataGrids, File Trees, and core form controls designed with clean reactive Svelte architecture.',
  category: 'component-library',
  secondaryCategories: ['data-heavy', 'enterprise', 'saas'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'css-modules',
  packageNames: ['wx-svelte-core', 'wx-svelte-gantt', 'wx-svelte-grid'],
  docsUrl: 'https://svar.dev/svelte',
  repositoryUrl: 'https://github.com/svar-widgets/svar-svelte',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides keyboard accessible Gantt chart milestones and data grid row focus.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties via SVAR theme files',
    packageName: 'wx-svelte-core'
  },
  icons: {
    available: true,
    name: 'SVAR Built-in Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-density project management aesthetic: Gantt timeline bars, interactive task dependencies, spreadsheet grid cells, and clean sidebar trees in Svelte.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Svelte and SvelteKit project management apps, ERP planning tools, and Gantt charts',
    'Complex data grid tables and hierarchical file tree explorers in Svelte',
    'High-performance data-heavy Svelte web applications'
  ],
  avoidFor: [
    'React, Vue, or Angular projects'
  ],
  strengths: [
    'One of the only high-performance open-source Gantt and DataGrid component suites built specifically for Svelte',
    'Lightweight and reactive: compiles directly with Svelte with zero heavy dependencies',
    'Clean CSS variable theming with dark mode support'
  ],
  weaknesses: [
    'Svelte only'
  ],
  tags: [
    'svar-ui',
    'svar',
    'svelte',
    'sveltekit',
    'gantt',
    'datagrid',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['SVAR UI', 'SVAR Svelte', 'SVAR Widgets'],
  relatedSystems: ['svelteui', 'skeleton', 'bits-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install wx-svelte-core wx-svelte-gantt',
      packages: ['wx-svelte-core', 'wx-svelte-gantt'],
      peerDependencies: ['svelte']
    }
  },
  componentGuidance: {
    gantt: {
      canonicalName: 'Gantt',
      description: 'High-performance interactive Gantt chart component for Svelte.',
      importExample: "<script>\n  import { Gantt } from 'wx-svelte-gantt';\n  let tasks = [{ id: 1, text: 'Task 1', start: new Date(), duration: 5 }];\n</script>\n\n<Gantt {tasks} />",
      docSubUrl: 'gantt'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `wx-svelte-core` and `wx-svelte-gantt`.',
      'Use SVAR widgets for complex project management and timeline views in Svelte.',
      'Import SVAR theme CSS in root layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables for theme customization.',
    iconUsage: 'Use SVAR icon slots.',
    layoutConventions: 'Use standard Svelte flex and grid.'
  }
};
