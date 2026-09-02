import { UISystem } from '../../schemas/uiSystem.js';

export const uiKitten: UISystem = {
  id: 'ui-kitten',
  name: 'UI Kitten (Eva Design System for React Native)',
  organization: 'Akveo',
  description: 'An open-source, customizable React Native UI framework implementing the Eva Design System, featuring 30+ UI components, dark and light theme switching at runtime with zero reload, mapping styles to design tokens, and Eva Icons.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer', 'styled'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['@ui-kitten/components', '@ui-kitten/eva-icons', '@eva-design/eva'],
  docsUrl: 'https://akveo.github.io/react-native-ui-kitten',
  repositoryUrl: 'https://github.com/akveo/react-native-ui-kitten',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Eva Design System accessibility specifications for iOS and Android.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Eva Design System mapping and theme JSON via `@eva-design/eva`',
    packageName: '@eva-design/eva'
  },
  icons: {
    available: true,
    packageName: '@ui-kitten/eva-icons',
    name: 'Eva Icons (480+ icons in outline and fill)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Eva Design System mobile aesthetic: vibrant Eva Primary (#3366ff) / Amber accents, smooth card surfaces, runtime dark theme transitions, and consistent cross-platform widgets.',
  noveltyLevel: 'established',
  bestFor: [
    'React Native and Expo mobile applications wanting dynamic runtime theme switching (Light/Dark)',
    'Teams using the Eva Design System across Angular (Nebular) and mobile (UI Kitten)',
    'Clean cross-platform mobile apps'
  ],
  avoidFor: [
    'Desktop web-only applications'
  ],
  strengths: [
    'Dynamic runtime theme switching without application reload or re-rendering delay',
    'Deep design token architecture powered by the Eva Design System',
    'Rich mobile component suite: BottomNavigation, TopNavigation, ViewPager, Datepicker, Modal'
  ],
  weaknesses: [
    'React Native mobile focus'
  ],
  tags: [
    'ui-kitten',
    'react-native',
    'akveo',
    'eva-design',
    'mobile',
    'expo',
    'dark-mode',
    'established'
  ],
  aliases: ['UI Kitten', 'React Native UI Kitten', 'Kitten UI', 'Eva React Native'],
  relatedSystems: ['nebular', 'react-native-paper', 'nativebase'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ui-kitten/components @ui-kitten/eva-icons @eva-design/eva react-native-svg',
      packages: ['@ui-kitten/components', '@ui-kitten/eva-icons', '@eva-design/eva', 'react-native-svg'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap root component in `<ApplicationProvider {...eva} theme={eva.light}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'UI Kitten button with status="primary" | "success" | "info" | "warning" | "danger" | "basic", appearance="filled" | "outline" | "ghost".',
      importExample: "import { Button } from '@ui-kitten/components';\n\n<Button status=\"primary\">Get Started</Button>",
      docSubUrl: 'docs/components/button/overview'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ApplicationProvider {...eva} theme={eva.light}>`.',
      'Use `<Layout>` and `<Card>` for screen layouts.',
      'Use `useTheme()` hook for programmatic color access.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Eva Design System JSON maps.',
    iconUsage: 'Use `<Icon name="star" />` from `@ui-kitten/eva-icons`.',
    layoutConventions: 'Use `<Layout>` and standard React Native flexbox.'
  }
};
