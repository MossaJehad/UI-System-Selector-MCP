import { UISystem } from '../../schemas/uiSystem.js';

export const primereact: UISystem = {
  id: 'primereact',
  name: 'PrimeReact',
  organization: 'PrimeTek Informatics',
  description: 'PrimeTek’s comprehensive open-source React UI component suite featuring 90+ components, advanced data tables with Excel export, tree tables, multi-select picklists, and theme switchers (Tailwind, Material, Bootstrap).',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['primereact', 'primeicons', 'primeflex'],
  docsUrl: 'https://primereact.org',
  repositoryUrl: 'https://github.com/primefaces/primereact',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with extensive keyboard accessibility across complex data grids and menus.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and PrimeReact PassThrough (PT) system',
    packageName: 'primereact'
  },
  icons: {
    available: true,
    packageName: 'primeicons',
    name: 'PrimeIcons'
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Feature-dense enterprise computing style: customizable themes (Lara, Saga, Vela, Arya, Material, Bootstrap, Tailwind), rich data tables, charts, and picklists.',
  noveltyLevel: 'established',
  bestFor: [
    'Data-heavy enterprise back-office management systems',
    'Complex data grid tables with column filtering, multi-sort, row reordering, and CSV/Excel export',
    'React applications needing unstyled pass-through (PT) Tailwind mode or pre-built classic themes'
  ],
  avoidFor: [
    'Lightweight indie static sites'
  ],
  strengths: [
    'One of the most extensive component sets in the entire React ecosystem (90+ components)',
    'Unmatched DataTable capabilities (lazy loading, virtual scroll, cell editing, column grouping, export)',
    'Unstyled mode (PassThrough / PT) allowing full Tailwind CSS customization'
  ],
  weaknesses: [
    'Classic theme styling requires override adjustments for modern minimalist aesthetics'
  ],
  tags: [
    'primereact',
    'primetek',
    'data-heavy',
    'datatable',
    'enterprise',
    'dashboard',
    'dark-mode',
    'tailwind',
    'established'
  ],
  aliases: ['PrimeReact', 'Prime React', 'PrimeFaces React'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install primereact primeicons primeflex',
      packages: ['primereact', 'primeicons', 'primeflex'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import theme and core CSS: `import "primereact/resources/themes/lara-light-cyan/theme.css"; import "primereact/resources/primereact.min.css"; import "primeicons/primeicons.css";`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'PrimeReact button with label, icon, and severity="secondary" | "success" | "info" | "warning" | "danger".',
      importExample: "import { Button } from 'primereact/button';\n\n<Button label=\"Export to Excel\" icon=\"pi pi-file-excel\" severity=\"success\" />",
      docSubUrl: 'button/'
    },
    datatable: {
      canonicalName: 'DataTable',
      description: 'Full-featured enterprise data table with Column subcomponents.',
      importExample: "import { DataTable } from 'primereact/datatable';\nimport { Column } from 'primereact/column';\n\n<DataTable value={products} paginator rows={10}><Column field=\"code\" header=\"Code\" /><Column field=\"name\" header=\"Name\" sortable /></DataTable>",
      docSubUrl: 'datatable/'
    }
  },
  aiInstructions: {
    principles: [
      'Import PrimeReact theme stylesheet at root.',
      'Use PrimeReact DataTable and Column for complex enterprise data grids.',
      'Use PrimeIcons (`pi pi-*`) for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Switch themes by swapping theme CSS or using PrimeReact PassThrough (PT) Tailwind mode.',
    iconUsage: 'Use PrimeIcons class names (e.g. `pi pi-check`, `pi pi-search`).',
    layoutConventions: 'Use PrimeFlex utility classes or CSS grid.'
  }
};
