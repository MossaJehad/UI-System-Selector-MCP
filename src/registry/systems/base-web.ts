import { UISystem } from '../../schemas/uiSystem.js';

export const baseWeb: UISystem = {
  id: 'base-web',
  name: 'Uber Base Web',
  organization: 'Uber',
  description: 'Uber’s open-source design system built on Styletron, engineered for high reliability, extreme performance, comprehensive overrides, and real-time transportation/dispatch/logistics dashboards.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'mobile-inspired'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['baseui', 'styletron-engine-atomic', 'styletron-react'],
  docsUrl: 'https://baseweb.design',
  repositoryUrl: 'https://github.com/uber/baseweb',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Base Web complies with WCAG AA guidelines with keyboard navigation across complex data tables and inputs.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Styletron theme object',
    packageName: 'baseui'
  },
  icons: {
    available: true,
    packageName: 'baseui',
    name: 'Base Web Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'compact/dense',
  aesthetic: 'Crisp, high-contrast monochrome with sharp borders, geometric precision, and Uber black-and-white accents.',
  noveltyLevel: 'established',
  bestFor: [
    'Real-time delivery, ride-sharing, and logistics dispatch dashboards',
    'Financial transaction tables and payment processing interfaces',
    'High-performance React web apps needing fine-grained component overrides',
    'Fleet tracking and geolocation interfaces'
  ],
  avoidFor: [
    'Playful illustrative marketing pages',
    'Simple static documents'
  ],
  strengths: [
    'Deep component override system (`overrides={{ Root: { style: ... } }}`) for 100% granular customization',
    'Exceptional performance with Styletron atomic CSS generation',
    'Full dark theme (`DarkTheme`) and light theme (`LightTheme`) support',
    'Rich data table and table-grid components'
  ],
  weaknesses: [
    'Requires Styletron CSS engine setup',
    'React-only'
  ],
  tags: [
    'uber',
    'logistics',
    'enterprise',
    'styletron',
    'dense',
    'data-tables',
    'overrides',
    'dark-mode'
  ],
  installation: {
    react: {
      command: 'npm install baseui styletron-engine-atomic styletron-react',
      packages: ['baseui', 'styletron-engine-atomic', 'styletron-react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap app in `<StyletronProvider value={engine}>` and `<BaseProvider theme={DarkTheme}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Base Web button with primary, secondary, tertiary, and minimal kinds.',
      importExample: "import { Button, KIND, SIZE } from 'baseui/button';\n\n<Button kind={KIND.primary} size={SIZE.default}>Confirm Trip</Button>",
      docSubUrl: 'components/button'
    },
    table: {
      canonicalName: 'TableBuilder',
      description: 'Configurable data table with sortable columns and custom cell rendering.',
      importExample: "import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic';\n\n<TableBuilder data={trips}>\n  <TableBuilderColumn header=\"Trip ID\">{row => row.id}</TableBuilderColumn>\n  <TableBuilderColumn header=\"Status\">{row => row.status}</TableBuilderColumn>\n</TableBuilder>",
      docSubUrl: 'components/table-semantic'
    }
  },
  aiInstructions: {
    principles: [
      'Initialize Styletron client engine and wrap app in `<StyletronProvider>` and `<BaseProvider theme={DarkTheme | LightTheme}>`.',
      'Use the `overrides` prop when modifying internal sub-component styles instead of raw CSS classes.',
      'Import icons from `baseui/icon`.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `BaseProvider` with `LightTheme`, `DarkTheme`, or `createTheme`.',
    iconUsage: 'Import icons from baseui/icon (e.g. Check, Search, Delete, ArrowRight).',
    layoutConventions: 'Use FlexGrid, Block, and styled primitives.'
  }
};
