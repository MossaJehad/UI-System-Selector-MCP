import { UISystem } from '../../schemas/uiSystem.js';

export const suid: UISystem = {
  id: 'suid',
  name: 'SUID (Material UI for SolidJS)',
  organization: 'SUID Community (SwordEv)',
  description: 'An open-source port of Material UI (MUI v5) to SolidJS, delivering Google Material Design components with SolidJS fine-grained reactivity, theme providers, and sx prop styling.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['solid'],
  stylingApproach: 'css-in-js',
  packageNames: ['@suid/material', '@suid/icons-material', '@suid/system'],
  docsUrl: 'https://suid.io',
  repositoryUrl: 'https://github.com/swordev/suid',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Material Design accessibility specifications with SolidJS reactive state.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'MUI Theme object in SolidJS via ThemeProvider',
    packageName: '@suid/material'
  },
  icons: {
    available: true,
    packageName: '@suid/icons-material',
    name: 'SUID Material Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Google Material Design in SolidJS: ripple effects, elevated cards, floating action buttons, and standard Material styling.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SolidJS developers wanting complete MUI component parity and the `sx` prop',
    'Porting React MUI applications over to SolidJS for superior performance',
    'Feature-rich dashboards in SolidJS'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Direct port of Material UI v5 to SolidJS with familiar API and `sx` prop support',
    'Takes advantage of SolidJS fine-grained reactivity with zero VDOM overhead',
    'Full theme customization and dark mode support'
  ],
  weaknesses: [
    'SolidJS only'
  ],
  tags: [
    'suid',
    'solid',
    'solidjs',
    'mui',
    'material-ui',
    'material-design',
    'fine-grained',
    'hidden-gem'
  ],
  aliases: ['SUID', 'Solid MUI', 'SolidJS Material UI'],
  relatedSystems: ['mui', 'hope-ui', 'kobalte'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    solid: {
      command: 'npm install @suid/material @suid/icons-material',
      packages: ['@suid/material', '@suid/icons-material'],
      peerDependencies: ['solid-js'],
      setupInstructions: 'Wrap your app in `<ThemeProvider theme={theme}>` and `<CssBaseline />`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'SUID button with variant="contained" | "outlined" | "text".',
      importExample: "import Button from '@suid/material/Button';\n\n<Button variant=\"contained\">Click Me</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider>` and `<CssBaseline />`.',
      'Use the `sx` prop for inline theme styling.',
      'Use SUID Grid, Stack, and Box for layout.'
    ],
    forbiddenSubstitutions: ['bootstrap'],
    themingGuide: 'Configure themes with `createTheme()`.',
    iconUsage: 'Import icons from `@suid/icons-material`.',
    layoutConventions: 'Use Grid and Stack with spacing props.'
  }
};
