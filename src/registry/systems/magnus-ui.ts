import { UISystem } from '../../schemas/uiSystem.js';

export const magnusUi: UISystem = {
  id: 'magnus-ui',
  name: 'Magnus UI (Utility-First UI for React Native)',
  organization: 'Magnus UI Community',
  description: 'An open-source, utility-first UI framework for React Native and Expo, providing expressive utility props (`p="xl"`, `bg="indigo700"`, `rounded="circle"`), theme providers, customizable icons, and dark mode.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'styled', 'consumer'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['react-native-magnus'],
  docsUrl: 'https://magnus-ui.com',
  repositoryUrl: 'https://github.com/jsartisan/react-native-magnus',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible touchable highlights and focus feedback across mobile components.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Magnus Theme object with color scales, spacing scales, and typography presets',
    packageName: 'react-native-magnus'
  },
  icons: {
    available: true,
    packageName: 'react-native-vector-icons',
    name: 'Built-in Icon component with Vector Icons support'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern utility-first mobile aesthetic: expressive utility props (`bg="red500"`, `p="lg"`, `rounded="2xl"`), clean modal sheets, snackbars, and fab buttons in React Native.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'React Native and Expo applications wanting a Tailwind-like utility props mental model in JSX',
    'Developers who want fast styling directly on components without creating StyleSheet objects',
    'Modern consumer mobile applications'
  ],
  avoidFor: [
    'Desktop web-only applications'
  ],
  strengths: [
    'Intuitive utility props: write `bg="blue600"` and `m="md"` directly on JSX components',
    'Rich component suite (Button, Div, Text, Image, Avatar, Badge, Card, Checkbox, Drawer, Modal, Snackbar, Tooltip)',
    'Easy custom theming with `<ThemeProvider theme={customTheme}>`'
  ],
  weaknesses: [
    'React Native mobile focus'
  ],
  tags: [
    'magnus-ui',
    'react-native',
    'utility-first',
    'mobile',
    'expo',
    'tailwind-like',
    'hidden-gem'
  ],
  aliases: ['Magnus UI', 'Magnus', 'React Native Magnus'],
  relatedSystems: ['tamagui', 'nativebase', 'gluestack-ui'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install react-native-magnus react-native-vector-icons react-native-modal',
      packages: ['react-native-magnus', 'react-native-vector-icons', 'react-native-modal'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap root component in `<ThemeProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Magnus button with utility props.',
      importExample: "import { Button } from 'react-native-magnus';\n\n<Button bg=\"indigo600\" p=\"lg\" rounded=\"circle\">Get Started</Button>",
      docSubUrl: 'button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider>` from `react-native-magnus`.',
      'Use `Div`, `Text`, `Button` with utility props for layout and styling.',
      'Use `Drawer` and `Modal` for mobile sheets.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `createTheme()` passed to `ThemeProvider`.',
    iconUsage: 'Use `<Icon name="search" fontFamily="Feather" fontSize="xl" />`.',
    layoutConventions: 'Use `Div` with flexbox utility props (`row`, `justifyContent`, `alignItems`).'
  }
};
