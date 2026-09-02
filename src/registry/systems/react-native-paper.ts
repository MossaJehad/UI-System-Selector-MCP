import { UISystem } from '../../schemas/uiSystem.js';

export const reactNativePaper: UISystem = {
  id: 'react-native-paper',
  name: 'React Native Paper',
  organization: 'Callstack',
  description: 'The premier open-source Material Design 3 component library for React Native and Expo, providing 30+ accessible cross-platform mobile components, dynamic Material You color schemes, smooth animations, and full dark theme support.',
  category: 'mobile',
  secondaryCategories: ['consumer', 'styled', 'component-library'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'css-in-js',
  packageNames: ['react-native-paper', 'react-native-vector-icons'],
  docsUrl: 'https://callstack.github.io/react-native-paper',
  repositoryUrl: 'https://github.com/callstack/react-native-paper',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements full React Native accessibility traits and Google Material Design guidelines.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design 3 Theme object supporting dynamic Material You color extraction',
    packageName: 'react-native-paper'
  },
  icons: {
    available: true,
    packageName: 'react-native-vector-icons',
    name: 'Material Community Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Official Google Material Design 3 for mobile: bottom app bars, floating action buttons (FAB), ripple touch feedback, card elevation tints, and segmented buttons.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'React Native and Expo mobile applications targeting iOS and Android',
    'Mobile apps wanting complete Material Design 3 (Material You) fidelity on mobile',
    'Universal React Native Web deployments'
  ],
  avoidFor: [
    'Desktop-only web applications not using React Native'
  ],
  strengths: [
    'The most widely adopted component library in the React Native and Expo ecosystem',
    'Full Material Design 3 support with dynamic color adaptation',
    'Smooth performance and comprehensive mobile primitives (Appbar, BottomNavigation, FAB, Snackbar, Chip, Card)'
  ],
  weaknesses: [
    'React Native specific ecosystem'
  ],
  tags: [
    'react-native',
    'expo',
    'mobile',
    'material-design',
    'material-3',
    'callstack',
    'dark-mode',
    'rtl',
    'mainstream'
  ],
  aliases: ['React Native Paper', 'RNP', 'Paper', 'Callstack Paper'],
  systemTypes: ['mobile', 'component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install react-native-paper react-native-safe-area-context react-native-vector-icons',
      packages: ['react-native-paper', 'react-native-safe-area-context', 'react-native-vector-icons'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap your app in `<PaperProvider>` from `react-native-paper`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Material 3 button with mode="elevated" | "contained" | "outlined" | "text".',
      importExample: "import { Button } from 'react-native-paper';\n\n<Button mode=\"contained\" onPress={() => console.log('Pressed')}>Press me</Button>",
      docSubUrl: 'docs/components/Button'
    },
    appbar: {
      canonicalName: 'Appbar',
      description: 'Mobile top/bottom application header with action icons and back navigation.',
      importExample: "import { Appbar } from 'react-native-paper';\n\n<Appbar.Header><Appbar.BackAction onPress={goBack} /><Appbar.Content title=\"My Profile\" /></Appbar.Header>",
      docSubUrl: 'docs/components/Appbar'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<PaperProvider theme={theme}>`.',
      'Use React Native Paper mobile primitives (`Appbar`, `FAB`, `BottomNavigation`, `Card`).',
      'Ensure proper `SafeAreaProvider` wrapping for iOS notch/island handling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `MD3LightTheme` or `MD3DarkTheme`.',
    iconUsage: 'Use `react-native-vector-icons/MaterialCommunityIcons`.',
    layoutConventions: 'Use standard React Native StyleSheet flex layouts.'
  }
};
