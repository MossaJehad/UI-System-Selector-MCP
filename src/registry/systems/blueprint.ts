import { UISystem } from '../../schemas/uiSystem.js';

export const blueprint: UISystem = {
  id: 'blueprint',
  name: 'Palantir Blueprint',
  organization: 'Palantir',
  description: 'A React-based UI toolkit for the web, optimized for building complex, data-dense web interfaces for desktop applications, financial analytics, scientific tools, and massive data tables.',
  category: 'data-heavy',
  secondaryCategories: ['developer-tool', 'dashboard', 'enterprise'],
  frameworks: ['react'],
  stylingApproach: 'sass',
  packageNames: ['@blueprintjs/core', '@blueprintjs/table', '@blueprintjs/popover2', '@blueprintjs/icons'],
  docsUrl: 'https://blueprintjs.com',
  repositoryUrl: 'https://github.com/palantir/blueprint',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Robust keyboard navigation engineered for intense desktop workstation software.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'SCSS / CSS Custom Properties',
    packageName: '@blueprintjs/core'
  },
  icons: {
    available: true,
    packageName: '@blueprintjs/icons',
    name: 'Blueprint Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-density desktop analytical workstation, financial Bloomberg-terminal inspired, precision engineering feel.',
  noveltyLevel: 'established',
  bestFor: [
    'Scientific tools, financial trading terminals, and massive data analytics apps',
    'Complex desktop-first interfaces with keyboard power-user shortcuts',
    'Spreadsheet-like virtualized editable data tables (`@blueprintjs/table`)',
    'High-density forms, tree views, and multi-level context menus'
  ],
  avoidFor: [
    'Mobile-first consumer apps',
    'Casual lifestyle or marketing websites'
  ],
  strengths: [
    'Industry-leading `@blueprintjs/table` with cell selection, freeze columns, and Excel-like editing',
    'Unbeatable information density and precision layout styling',
    'Comprehensive ecosystem of tree views, suggest boxes, and hotkeys manager'
  ],
  weaknesses: [
    'Not optimized for mobile touch screens (strictly desktop-first)',
    'React-only'
  ],
  tags: [
    'palantir',
    'data-heavy',
    'dense',
    'data-tables',
    'desktop',
    'analytics',
    'financial',
    'dark-mode'
  ],
  installation: {
    react: {
      command: 'npm install @blueprintjs/core @blueprintjs/icons @blueprintjs/table normalize.css',
      packages: ['@blueprintjs/core', '@blueprintjs/icons', '@blueprintjs/table', 'normalize.css'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `normalize.css/normalize.css`, `@blueprintjs/core/lib/css/blueprint.css`, and `@blueprintjs/icons/lib/css/blueprint-icons.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Blueprint button with intent="primary" | "success" | "warning" | "danger" | "none".',
      importExample: "import { Button, Intent } from '@blueprintjs/core';\n\n<Button intent={Intent.PRIMARY} icon=\"database\">Query Dataset</Button>",
      docSubUrl: 'docs/#core/components/button'
    },
    table: {
      canonicalName: 'Table2',
      description: 'Spreadsheet-grade virtualized data table with column reordering and selection.',
      importExample: "import { Table2, Column, Cell } from '@blueprintjs/table';\n\n<Table2 numRows={rows.length}>\n  <Column name=\"Metric\" cellRenderer={i => <Cell>{rows[i].metric}</Cell>} />\n</Table2>",
      docSubUrl: 'docs/#table'
    }
  },
  aiInstructions: {
    principles: [
      'Import Blueprint CSS files and normalize.css.',
      'Use `Classes.DARK` class on body/container for dark mode.',
      'Use `Intent` enums (PRIMARY, SUCCESS, WARNING, DANGER) for color coding.',
      'Use `@blueprintjs/icons` for icons.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Add `bp5-dark` / `Classes.DARK` class to root container.',
    iconUsage: 'Use `<Icon icon="chart" />` or `icon="chart"` prop on Blueprint components.',
    layoutConventions: 'Use Card, ControlGroup, and HTMLTable for dense desktop layouts.'
  }
};
