import { UISystem } from '../../schemas/uiSystem.js';

export const mui: UISystem = {
  id: 'mui',
  name: 'Material UI (MUI)',
  organization: 'MUI (Material-UI SAS)',
  description: 'The world’s most widely adopted React UI component library, implementing Google’s Material Design with Emotion/MUI styled engine, comprehensive theme customizability, data grid, and date pickers.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'enterprise', 'consumer'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material'],
  docsUrl: 'https://mui.com',
  repositoryUrl: 'https://github.com/mui/material-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Components are tested to satisfy WCAG 2.1 AA with extensive keyboard accessibility.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'MUI Theme object and CSS Theme Variables (CssVarsProvider)',
    packageName: '@mui/material'
  },
  icons: {
    available: true,
    packageName: '@mui/icons-material',
    name: 'Material Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Material Design 2/3 aesthetic: elevation drop-shadows, ripple button animations, floating label text fields, and refined rounded cards.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Feature-rich React SaaS web applications and startup MVP dashboards',
    'Enterprise applications needing vast ecosystem support and third-party templates',
    'Projects requiring complete data tables (`@mui/x-data-grid`) and date pickers (`@mui/x-date-pickers`)'
  ],
  avoidFor: [
    'Developers explicitly looking for lightweight unstyled headless primitives (use Base UI instead)',
    'Ultra-minimalist monochrome terminal or retro aesthetic projects'
  ],
  strengths: [
    'Largest component ecosystem, documentation, and Stack Overflow community in React',
    'Vast enterprise extensions available via MUI X (DataGrid Pro, DatePickers, Charts, TreeView)',
    'Full dark mode, CSS theme variables, and RTL bi-directional localization'
  ],
  weaknesses: [
    'Material Design default look requires customization if a non-Google visual identity is desired',
    'Emotion runtime CSS-in-JS overhead compared to zero-runtime solutions'
  ],
  tags: [
    'mui',
    'material-ui',
    'react',
    'material-design',
    'component-library',
    'saas',
    'dashboard',
    'dark-mode',
    'rtl',
    'mainstream'
  ],
  aliases: ['Material UI', 'Material-UI', 'MUI Core', 'MUI v5', 'MUI v6'],
  relatedSystems: ['base-ui', 'shadcn-ui', 'chakra-ui'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @mui/material @emotion/react @emotion/styled @mui/icons-material',
      packages: ['@mui/material', '@emotion/react', '@emotion/styled', '@mui/icons-material'],
      peerDependencies: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      setupInstructions: 'Wrap your app in `<ThemeProvider theme={theme}>` and `<CssBaseline />`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'MUI button with variant="contained" | "outlined" | "text".',
      importExample: "import Button from '@mui/material/Button';\n\n<Button variant=\"contained\" color=\"primary\">Click Me</Button>",
      docSubUrl: 'material-ui/react-button/'
    },
    textfield: {
      canonicalName: 'TextField',
      description: 'Material text field with floating label and error helper text.',
      importExample: "import TextField from '@mui/material/TextField';\n\n<TextField label=\"Email Address\" variant=\"outlined\" fullWidth />",
      docSubUrl: 'material-ui/react-text-field/'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider>` and `<CssBaseline />`.',
      'Use the `sx` prop for rapid inline theme-aware styling.',
      'Use MUI Grid, Stack, and Box for layout structure.'
    ],
    forbiddenSubstitutions: ['bootstrap'],
    themingGuide: 'Configure themes with `createTheme({ palette: { mode: "dark" } })`.',
    iconUsage: 'Import icons from @mui/icons-material (e.g. `import AddIcon from "@mui/icons-material/Add"`).',
    layoutConventions: 'Use Grid2 / Grid container/item or Stack with spacing multipliers.'
  }
};
