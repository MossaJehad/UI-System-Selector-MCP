import { UISystem } from '../../schemas/uiSystem.js';

export const carbon: UISystem = {
  id: 'carbon',
  name: 'IBM Carbon Design System',
  organization: 'IBM',
  description: 'IBM’s open-source design system for enterprise products and digital experiences, with a focus on data visualization, accessibility, and multi-framework support.',
  category: 'enterprise',
  secondaryCategories: ['company-design-system', 'data-heavy', 'dashboard', 'accessibility-focused'],
  frameworks: ['react', 'web-components', 'vue', 'svelte', 'angular', 'css-only'],
  stylingApproach: 'sass',
  packageNames: ['@carbon/react', '@carbon/styles', '@carbon/icons-react'],
  docsUrl: 'https://carbondesignsystem.com',
  repositoryUrl: 'https://github.com/carbon-design-system/carbon',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'IBM strictly mandates Section 508 and WCAG 2.1 AA conformance across all Carbon core components.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / SCSS Tokens',
    packageName: '@carbon/styles'
  },
  icons: {
    available: true,
    packageName: '@carbon/icons-react',
    name: 'Carbon Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Industrial, structured, grid-aligned, high-density enterprise computing feel.',
  noveltyLevel: 'established',
  bestFor: [
    'Enterprise data analytics and dashboards',
    'Complex multi-step workflow interfaces',
    'Cloud infrastructure and security consoles',
    'High-density data tables and visualization portals'
  ],
  avoidFor: [
    'Ultra-minimalist personal blogs',
    'Playful consumer apps',
    'Casual mobile-first landing pages'
  ],
  strengths: [
    'Multi-framework (React, Web Components, Svelte, Vue, Angular)',
    'Unmatched enterprise data table, pagination, and multi-select filtering capabilities',
    'Rigorous WCAG AA and Section 508 compliance',
    'Full dark mode (White, g10, g90, g100 themes) and full RTL support'
  ],
  weaknesses: [
    'Steep initial learning curve due to 2x Grid and SCSS integration',
    'Strong IBM brand aesthetic can feel utilitarian for consumer apps'
  ],
  tags: [
    'ibm',
    'enterprise',
    'data-heavy',
    'dense',
    'data-tables',
    'high-accessibility',
    'multi-framework',
    'rtl',
    'dark-mode'
  ],
  installation: {
    react: {
      command: 'npm install @carbon/react @carbon/icons-react @carbon/styles sass',
      packages: ['@carbon/react', '@carbon/icons-react', '@carbon/styles', 'sass'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@carbon/styles/css/styles.css` or `@use "@carbon/styles";` in your main stylesheet.'
    },
    'web-components': {
      command: 'npm install @carbon/web-components @carbon/styles',
      packages: ['@carbon/web-components', '@carbon/styles'],
      setupInstructions: 'Import specific component modules e.g. `import "@carbon/web-components/es/components/button/index.js";`'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Carbon primary, secondary, tertiary, danger, and ghost buttons.',
      importExample: "import { Button } from '@carbon/react';\nimport { Add } from '@carbon/icons-react';\n\n<Button renderIcon={Add} kind=\"primary\">Add Resource</Button>",
      propsPattern: 'kind: "primary" | "secondary" | "tertiary" | "danger" | "ghost", size: "sm" | "md" | "lg" | "xl" | "2xl"',
      docSubUrl: 'components/button/usage'
    },
    datatable: {
      canonicalName: 'DataTable',
      description: 'Stateful enterprise data table with sorting, batch actions, expandability, and pagination.',
      importExample: "import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';\n\n<DataTable rows={rows} headers={headers}>\n  {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (\n    <Table {...getTableProps()}>\n      <TableHead>\n        <TableRow>\n          {headers.map(h => <TableHeader {...getHeaderProps({ header: h })}>{h.header}</TableHeader>)}\n        </TableRow>\n      </TableHead>\n      <TableBody>\n        {rows.map(r => <TableRow {...getRowProps({ row: r })}>{r.cells.map(c => <TableCell key={c.id}>{c.value}</TableCell>)}</TableRow>)}\n      </TableBody>\n    </Table>\n  )}\n</DataTable>",
      docSubUrl: 'components/data-table/usage'
    },
    modal: {
      canonicalName: 'Modal',
      description: 'Standard accessible dialog modal with primary and secondary action buttons.',
      importExample: "import { Modal } from '@carbon/react';\n\n<Modal open={isOpen} onRequestClose={() => setIsOpen(false)} modalHeading=\"Edit Resource\" primaryButtonText=\"Save\" secondaryButtonText=\"Cancel\">\n  <p>Modal body content</p>\n</Modal>",
      docSubUrl: 'components/modal/usage'
    }
  },
  aiInstructions: {
    principles: [
      'Structure page layouts strictly using the Carbon 2x Grid system (`<Grid>`, `<Column>`).',
      'Import icons exclusively from `@carbon/icons-react`.',
      'Use Theme component (`<Theme theme="g90">`) for dark or light theme nesting.',
      'Use Carbon spacing tokens (`$spacing-01` to `$spacing-13`) and type scales.'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      'lucide-react (use @carbon/icons-react)',
      '@mui/material',
      'tailwind prebuilt components'
    ],
    themingGuide: 'Carbon offers 4 official themes: "white" (default light), "g10" (light gray), "g90" (dark gray), and "g100" (pure black dark).',
    iconUsage: 'Use @carbon/icons-react (e.g. Add, TrashCan, Settings, ArrowRight).',
    layoutConventions: 'Wrap screens with `<Grid narrow>` or `<Grid condensed>` and specify column spans using `<Column sm={4} md={8} lg={16}>`.'
  }
};
