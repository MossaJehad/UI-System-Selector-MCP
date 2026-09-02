import { UISystem } from '../../schemas/uiSystem.js';

export const reactNativeElements: UISystem = {
  id: 'react-native-elements',
  name: 'React Native Elements (RNEUI)',
  organization: 'React Native Elements Community',
  description: 'An open-source, community-driven cross-platform UI toolkit for React Native and Web, providing 30+ consistent components (Button, Avatar, Card, ListItem, Rating, SearchBar, Slider, SpeedDial) with full TypeScript definitions and customizable themes.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['@rneui/themed', '@rneui/base'],
  docsUrl: 'https://reactnativeelements.com',
  repositoryUrl: 'https://github.com/react-native-elements/react-native-elements',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible mobile touch targets and screen reader accessibility labels.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'RNEUI theme object via `ThemeProvider` and `createTheme`',
    packageName: '@rneui/themed'
  },
  icons: {
    available: true,
    packageName: 'react-native-vector-icons',
    name: 'React Native Vector Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Cross-platform mobile aesthetic: clean avatars, card list items, search bars with clear buttons, rating stars, and speed-dial action buttons.',
  noveltyLevel: 'established',
  bestFor: [
    'React Native and Expo mobile applications wanting an all-in-one component toolkit',
    'Apps needing ListItems, SearchBars, Rating Stars, and Pricing Cards out of the box',
    'Cross-platform iOS, Android, and Web applications'
  ],
  avoidFor: [
    'Pure desktop web applications'
  ],
  strengths: [
    'One of the oldest, most battle-tested component libraries in the React Native ecosystem',
    'Consistent look and feel across iOS, Android, and Web',
    'Comprehensive TypeScript definitions and simple `createTheme` configuration'
  ],
  weaknesses: [
    'Mobile-first focus'
  ],
  tags: [
    'react-native-elements',
    'rneui',
    'react-native',
    'mobile',
    'expo',
    'cross-platform',
    'established'
  ],
  aliases: ['React Native Elements', 'RNEUI', 'RNE', 'ReactNativeElements'],
  relatedSystems: ['react-native-paper', 'nativebase', 'tamagui'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @rneui/themed @rneui/base react-native-vector-icons',
      packages: ['@rneui/themed', '@rneui/base', 'react-native-vector-icons'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap root component in `<ThemeProvider theme={theme}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'RNEUI button with type="solid" | "outline" | "clear", color="primary" | "secondary" | "success" | "warning" | "error".',
      importExample: "import { Button } from '@rneui/themed';\n\n<Button title=\"Get Started\" type=\"solid\" />",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider theme={theme}>` from `@rneui/themed`.',
      'Use `ListItem`, `Avatar`, and `SearchBar` for list feeds.',
      'Use `createTheme` for custom colors.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `createTheme()` passed to `ThemeProvider`.',
    iconUsage: 'Use `<Icon name="search" type="material" />`.',
    layoutConventions: 'Use standard React Native StyleSheet and Flexbox.'
  }
};
