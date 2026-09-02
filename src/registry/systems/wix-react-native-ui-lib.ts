import { UISystem } from '../../schemas/uiSystem.js';

export const wixReactNativeUiLib: UISystem = {
  id: 'wix-react-native-ui-lib',
  name: 'Wix React Native UI Lib (react-native-ui-lib)',
  organization: 'Wix.com',
  description: 'Wix’s official open-source UI component library and design system for React Native, featuring 60+ customizable components, modifiers for rapid styling (`margin-20`, `red30`, `text40`), animated micro-interactions, dark mode, and design token integration.',
  category: 'company-design-system',
  secondaryCategories: ['mobile', 'component-library', 'consumer'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['react-native-ui-lib'],
  docsUrl: 'https://wix.github.io/react-native-ui-lib',
  repositoryUrl: 'https://github.com/wix/react-native-ui-lib',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Battle-tested at massive scale across Wix mobile apps for accessibility and smooth 60 FPS performance.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Wix Colors, Typography, Spacings, and BorderRadiuses design tokens via `Colors.loadColors`',
    packageName: 'react-native-ui-lib'
  },
  icons: {
    available: true,
    packageName: 'react-native-ui-lib',
    name: 'Wix Native Assets & Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern high-polish consumer mobile aesthetic: Wix Blue accents, animated drawers, floating buttons, swipeable list items, and modifier-based style props.',
  noveltyLevel: 'established',
  bestFor: [
    'React Native mobile applications wanting Wix’s battle-tested mobile component library',
    'Developers who love modifier-based styling (`<Text text40 red30 marginB-10>`) for ultra-fast JSX layout',
    'High-performance cross-platform iOS and Android apps'
  ],
  avoidFor: [
    'Desktop web-only applications'
  ],
  strengths: [
    'Official mobile UI library of Wix, powering millions of mobile user experiences',
    'Extremely ergonomic modifier-based API (`<View row center bg-white margin-10>`)',
    'Extensive component catalog: 60+ components with built-in animations and dark mode'
  ],
  weaknesses: [
    'React Native mobile focus'
  ],
  tags: [
    'wix',
    'react-native',
    'rn-ui-lib',
    'modifiers',
    'mobile',
    'expo',
    'established'
  ],
  aliases: ['Wix React Native UI Lib', 'react-native-ui-lib', 'RNUILib', 'Wix RN UI'],
  relatedSystems: ['wix-style-react', 'react-native-paper', 'nativebase'],
  systemTypes: ['company-design-system', 'mobile', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install react-native-ui-lib',
      packages: ['react-native-ui-lib'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Import components directly from `react-native-ui-lib`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Wix button with label, size="small" | "medium" | "large", fullWidth, outline.',
      importExample: "import { Button } from 'react-native-ui-lib';\n\n<Button label=\"Get Started\" primary onPress={handlePress} />",
      docSubUrl: 'docs/components/Button'
    }
  },
  aiInstructions: {
    principles: [
      'Use Wix modifier props on components (e.g. `<View row center margin-20 bg-dark10>`).',
      'Configure global tokens via `Colors.loadColors()` and `Typography.loadTypographies()`.',
      'Use `Incubator.TextField` for modern accessible inputs.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `Colors.loadColors()`.',
    iconUsage: 'Use `Assets.icons` or pass custom SVG components.',
    layoutConventions: 'Use `<View>` with modifier props (`row`, `spread`, `center`).'
  }
};
