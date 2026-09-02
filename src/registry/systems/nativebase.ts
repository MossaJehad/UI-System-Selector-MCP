import { UISystem } from '../../schemas/uiSystem.js';

export const nativebase: UISystem = {
  id: 'nativebase',
  name: 'NativeBase (Accessible Universal UI for React Native & Web)',
  organization: 'GeekyAnts',
  description: 'The pioneering open-source, accessible, and utility-first component library for React Native and Web (succeeded by gluestack-ui), featuring 40+ universal components, ARIA accessibility, responsive style props, and multi-theme support.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'accessibility-focused', 'saas'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['native-base'],
  docsUrl: 'https://nativebase.io',
  repositoryUrl: 'https://github.com/GeekyAnts/NativeBase',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides built-in ARIA roles and accessibility props across iOS, Android, and Web.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'NativeBase theme object via `NativeBaseProvider`',
    packageName: 'native-base'
  },
  icons: {
    available: true,
    packageName: '@expo/vector-icons',
    name: 'Expo Vector Icons / Material Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Universal React Native aesthetic: NativeBase Emerald/Cyan accents, accessible action sheets, responsive box/stack layouts, floating badges, and clean modal dialogs.',
  noveltyLevel: 'established',
  bestFor: [
    'React Native and Expo applications wanting universal components that run seamlessly on iOS, Android, and Web',
    'Developers maintaining established NativeBase applications',
    'Cross-platform mobile applications'
  ],
  avoidFor: [
    'Pure desktop web applications without React Native'
  ],
  strengths: [
    'One of the most famous and widely adopted React Native UI libraries in history',
    'Universal component architecture: single JSX code runs on iOS, Android, and Web',
    'Rich component suite (ActionSheet, AlertDialog, Box, Flex, HStack, VStack, Modal, Toast)'
  ],
  weaknesses: [
    'Maintenance transitioned to gluestack-ui for zero-runtime performance'
  ],
  tags: [
    'nativebase',
    'react-native',
    'mobile',
    'geekyants',
    'cross-platform',
    'expo',
    'accessibility',
    'established'
  ],
  aliases: ['NativeBase', 'Native Base', 'GeekyAnts NativeBase'],
  relatedSystems: ['gluestack-ui', 'react-native-paper', 'tamagui'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install native-base react-native-svg react-native-safe-area-context',
      packages: ['native-base', 'react-native-svg', 'react-native-safe-area-context'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap your root component in `<NativeBaseProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'NativeBase universal action button with colorScheme="primary" | "secondary" | "danger".',
      importExample: "import { Button } from 'native-base';\n\n<Button colorScheme=\"primary\" onPress={handlePress}>Submit</Button>",
      docSubUrl: 'button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<NativeBaseProvider>`.',
      'Use `Box`, `HStack`, `VStack`, `Center` for cross-platform layout.',
      'Use `useColorMode` for dark mode toggling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `extendTheme()` passed to `NativeBaseProvider`.',
    iconUsage: 'Use `<Icon as={MaterialIcons} name="search" />`.',
    layoutConventions: 'Use `HStack` and `VStack` layout primitives.'
  }
};
