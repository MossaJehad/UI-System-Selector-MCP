import { UISystem } from '../../schemas/uiSystem.js';

export const gluestackUi: UISystem = {
  id: 'gluestack-ui',
  name: 'gluestack-ui (NativeBase Successor)',
  organization: 'GeekyAnts / gluestack',
  description: 'The official successor to NativeBase by GeekyAnts, delivering high-performance, universal, accessible UI components for React Native, Expo, and Next.js, powered by Tailwind CSS (NativeWind) or unstyled core primitives.',
  category: 'mobile',
  secondaryCategories: ['saas', 'source-owned', 'component-library'],
  frameworks: ['react-native', 'react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['@gluestack-ui/themed', '@gluestack-ui/config', 'lucide-react-native'],
  docsUrl: 'https://gluestack.io',
  repositoryUrl: 'https://github.com/gluestack/gluestack-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides full WAI-ARIA and React Native accessibility states across mobile and web.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in Tailwind / NativeWind theme configuration',
    packageName: '@gluestack-ui/config'
  },
  icons: {
    available: true,
    packageName: 'lucide-react-native',
    name: 'Lucide React Native'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern universal mobile & web aesthetic: smooth bottom sheets, action sheets, floating action buttons, badge counters, and crisp dark mode palettes.',
  noveltyLevel: 'established',
  bestFor: [
    'React Native and Expo mobile applications sharing code with Next.js web apps',
    'Developers migrating from legacy NativeBase to modern high-performance Tailwind/NativeWind architecture',
    'Modern mobile-first SaaS and consumer apps'
  ],
  avoidFor: [
    'Pure desktop web apps not targeting mobile'
  ],
  strengths: [
    'Direct official successor to NativeBase with massive performance improvements',
    'Full universal support across React Native, Expo, Next.js, and Web',
    'Tailwind CSS (NativeWind) compatibility for unified web and mobile styling'
  ],
  weaknesses: [
    'Evolving version 2 NativeWind architecture'
  ],
  tags: [
    'gluestack-ui',
    'nativebase',
    'react-native',
    'expo',
    'mobile',
    'universal',
    'tailwind',
    'nativewind',
    'established'
  ],
  aliases: ['gluestack-ui', 'gluestack', 'NativeBase v4', 'GlueStack'],
  relatedSystems: ['tamagui', 'react-native-paper', 'shadcn-ui'],
  systemTypes: ['mobile', 'component-library', 'source-owned'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx gluestack-ui@latest init',
      packages: ['@gluestack-ui/themed', '@gluestack-ui/config', 'lucide-react-native'],
      peerDependencies: ['react', 'react-native']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'gluestack universal action button with ButtonText and ButtonIcon.',
      importExample: "import { Button, ButtonText } from '@gluestack-ui/themed';\n\n<Button size=\"md\" variant=\"solid\" action=\"primary\"><ButtonText>Get Started</ButtonText></Button>",
      docSubUrl: 'ui/docs/components/forms/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<GluestackUIProvider config={config}>`.',
      'Use gluestack universal layout primitives (`Box`, `VStack`, `HStack`, `Center`).',
      'Use `lucide-react-native` for icons.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes in `gluestack-ui.config.ts`.',
    iconUsage: 'Use `lucide-react-native`.',
    layoutConventions: 'Use Box, HStack, and VStack layout components.'
  }
};
