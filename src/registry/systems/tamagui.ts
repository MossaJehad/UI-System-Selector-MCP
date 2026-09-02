import { UISystem } from '../../schemas/uiSystem.js';

export const tamagui: UISystem = {
  id: 'tamagui',
  name: 'Tamagui',
  organization: 'Tamagui Community',
  description: 'An open-source, universal design system and optimizing compiler for React and React Native, generating zero-runtime atomic CSS for web while delivering 60 FPS native animations and unified cross-platform UI primitives.',
  category: 'component-library',
  secondaryCategories: ['mobile', 'creative-tool', 'saas', 'styled'],
  frameworks: ['react', 'next', 'react-native'],
  stylingApproach: 'css-in-js',
  packageNames: ['tamagui', '@tamagui/core', '@tamagui/lucide-icons', '@tamagui/theme-base'],
  docsUrl: 'https://tamagui.dev',
  repositoryUrl: 'https://github.com/tamagui/tamagui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible ARIA states on web and native accessibility traits on iOS/Android.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tamagui token engine supporting dynamic sub-themes and responsive media queries',
    packageName: '@tamagui/core'
  },
  icons: {
    available: true,
    packageName: '@tamagui/lucide-icons',
    name: 'Tamagui Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Ultra-fast, smooth, cross-platform universal aesthetic: glowing theme highlights, spring animations, sheet drawers, adaptive stack layouts, and high-performance native rendering.',
  noveltyLevel: 'established',
  bestFor: [
    'Universal cross-platform apps sharing 100% of UI code between Next.js Web and React Native (iOS/Android)',
    'High-performance web apps demanding optimizing compile-time CSS extraction',
    'Modern SaaS and consumer mobile applications'
  ],
  avoidFor: [
    'Simple static HTML blogs'
  ],
  strengths: [
    'The premier universal UI library for sharing code across Next.js and React Native / Expo',
    'Optimizing compiler turns React JSX into zero-runtime atomic CSS on web',
    'Full theme engine with dynamic sub-theming (light, dark, alt1, alt2, surface)'
  ],
  weaknesses: [
    'Requires build-time compiler plugin setup (Next.js / Vite / Metro)'
  ],
  tags: [
    'tamagui',
    'react-native',
    'universal',
    'next',
    'compiler',
    'mobile',
    'cross-platform',
    'dark-mode',
    'established'
  ],
  aliases: ['Tamagui', 'Tamagui UI', 'Tamagui Universal'],
  systemTypes: ['component-library', 'mobile', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install tamagui @tamagui/config @tamagui/lucide-icons',
      packages: ['tamagui', '@tamagui/config', '@tamagui/lucide-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<TamaguiProvider config={config}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Tamagui universal button with size="$4", theme="active", icon props.',
      importExample: "import { Button } from 'tamagui';\n\n<Button size=\"$4\" theme=\"active\">Launch App</Button>",
      docSubUrl: 'docs/components/button'
    },
    stack: {
      canonicalName: 'YStack',
      description: 'Vertical layout stack primitive with responsive token gap.',
      importExample: "import { YStack, XStack, H2, Paragraph } from 'tamagui';\n\n<YStack gap=\"$4\" p=\"$4\"><H2>Title</H2><Paragraph>Content</Paragraph></YStack>",
      docSubUrl: 'docs/components/stacks'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<TamaguiProvider config={config}>`.',
      'Use `YStack`, `XStack`, and `ZStack` layout primitives.',
      'Use Tamagui token props (e.g. `p="$4"`, `gap="$3"`, `br="$6"`).'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure themes in `tamagui.config.ts`.',
    iconUsage: 'Import icons from `@tamagui/lucide-icons`.',
    layoutConventions: 'Construct layouts with XStack and YStack.'
  }
};
