import { UISystem } from '../../schemas/uiSystem.js';

export const themeUi: UISystem = {
  id: 'theme-ui',
  name: 'Theme UI',
  organization: 'System UI / Theme UI Community',
  description: 'An open-source library for building themeable user interfaces based on the System UI Theme Specification, Emotion, and MDX, providing the `sx` prop for constraint-based design token styling.',
  category: 'component-library',
  secondaryCategories: ['developer-tool', 'styled'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['theme-ui', '@theme-ui/presets'],
  docsUrl: 'https://theme-ui.com',
  repositoryUrl: 'https://github.com/system-ui/theme-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible baseline HTML elements and color contrast calculation utilities.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'System UI Theme Specification JSON / TypeScript object',
    packageName: '@theme-ui/presets'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Minimalist, typography-driven constraint-based design: MDX documentation layouts, clean Box/Flex primitives, and dynamic color mode switching.',
  noveltyLevel: 'established',
  bestFor: [
    'Documentation sites, MDX content publishing, and Gatsby/Next.js developer blogs',
    'Constraint-based design system development adhering to System UI specs',
    'Developers wanting ergonomic `sx` prop styling with Emotion'
  ],
  avoidFor: [
    'Enterprise high-density data grid tables with 100+ spreadsheet features'
  ],
  strengths: [
    'Pioneered the `sx` prop and System UI Theme Specification adopted across the React ecosystem',
    'Seamless MDX integration allowing components to be styled directly in markdown',
    'Built-in color modes with automatic dark mode switching'
  ],
  weaknesses: [
    'Ecosystem has shifted towards zero-runtime CSS / Tailwind'
  ],
  tags: [
    'theme-ui',
    'system-ui',
    'emotion',
    'mdx',
    'sx-prop',
    'react',
    'dark-mode',
    'established'
  ],
  aliases: ['Theme UI', 'System UI', 'ThemeUI'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install theme-ui @theme-ui/presets',
      packages: ['theme-ui', '@theme-ui/presets'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<ThemeProvider theme={preset}>` from `theme-ui`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Theme UI action button with sx prop styling.',
      importExample: "import { Button } from 'theme-ui';\n\n<Button sx={{ bg: 'primary', color: 'background' }}>Action</Button>",
      docSubUrl: 'components/button'
    },
    box: {
      canonicalName: 'Box',
      description: 'Core Box primitive for constraint-based layout.',
      importExample: "import { Box, Heading, Text } from 'theme-ui';\n\n<Box sx={{ p: 4, bg: 'muted' }}><Heading>Title</Heading><Text>Content</Text></Box>",
      docSubUrl: 'components/box'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider theme={...}>`.',
      'Use the `sx` prop for design-token-constrained styling.',
      'Use Box, Flex, and Grid primitives from `theme-ui`.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure theme object matching System UI Theme Specification.',
    iconUsage: 'Use react-icons or SVG icons with sx prop styling.',
    layoutConventions: 'Use Flex and Grid layout primitives.'
  }
};
