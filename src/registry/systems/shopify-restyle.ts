import { UISystem } from '../../schemas/uiSystem.js';

export const shopifyRestyle: UISystem = {
  id: 'shopify-restyle',
  name: 'Shopify Restyle (Type-Enforced UI System for React Native)',
  organization: 'Shopify',
  description: 'Shopify’s official open-source type-enforced design system library for React Native, providing TypeScript-enforced style props (`backgroundColor`, `padding`, `margin`, `variant`), theme contracts, and constraint-based primitives.',
  category: 'company-design-system',
  secondaryCategories: ['mobile', 'component-library', 'styled'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['@shopify/restyle'],
  docsUrl: 'https://github.com/Shopify/restyle',
  repositoryUrl: 'https://github.com/Shopify/restyle',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Shopify mobile accessibility guidelines with clean semantic props.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Strict TypeScript theme interface via `createTheme` and `ThemeProvider`',
    packageName: '@shopify/restyle'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Strict type-enforced Shopify mobile aesthetic: constraint-based Box and Text primitives, strict theme tokens (colors, spacing, breakpoints, cardVariants), and pristine type safety.',
  noveltyLevel: 'established',
  bestFor: [
    'React Native and Expo mobile applications wanting strict TypeScript compile-time enforcement of design tokens',
    'Design system teams building enterprise mobile UI component libraries',
    'Shopify ecosystem mobile engineering'
  ],
  avoidFor: [
    'Web-only projects without React Native'
  ],
  strengths: [
    'Official design system library of Shopify for mobile engineering',
    'Strict compile-time TypeScript enforcement: prevents passing arbitrary hex codes or invalid spacing tokens',
    'Zero runtime CSS-in-JS overhead: transforms directly into native React Native StyleSheet objects'
  ],
  weaknesses: [
    'React Native mobile focus'
  ],
  tags: [
    'shopify',
    'restyle',
    'react-native',
    'type-safe',
    'theme',
    'mobile',
    'expo',
    'established'
  ],
  aliases: ['Shopify Restyle', 'Restyle', 'Shopify Mobile UI'],
  relatedSystems: ['polaris', 'tamagui', 'nativebase'],
  systemTypes: ['company-design-system', 'mobile'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @shopify/restyle',
      packages: ['@shopify/restyle'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Define theme with `createTheme` and wrap root in `<ThemeProvider theme={theme}>`.'
    }
  },
  componentGuidance: {
    box: {
      canonicalName: 'Box',
      description: 'Shopify Restyle type-enforced Box layout primitive.',
      importExample: "import { createBox, createText } from '@shopify/restyle';\nimport { Theme } from './theme';\n\nconst Box = createBox<Theme>();\nconst Text = createText<Theme>();\n\n<Box padding=\"m\" backgroundColor=\"mainBackground\"><Text color=\"primaryCardText\">Hello Shopify</Text></Box>",
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Use `createBox<Theme>()` and `createText<Theme>()` to create type-safe primitives.',
      'Wrap root in `<ThemeProvider theme={theme}>` from `@shopify/restyle`.',
      'Use theme token keys for all styling props (e.g. `padding="m"`, `backgroundColor="primary"`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `createTheme()` according to Shopify Restyle specs.',
    iconUsage: 'Embed SVG or vector icons inside Box primitives.',
    layoutConventions: 'Use `Box` with type-safe flexbox props.'
  }
};
