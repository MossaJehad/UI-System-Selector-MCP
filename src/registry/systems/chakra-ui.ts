import { UISystem } from '../../schemas/uiSystem.js';

export const chakraUi: UISystem = {
  id: 'chakra-ui',
  name: 'Chakra UI',
  organization: 'Chakra Systems',
  description: 'A modular, accessible React component library providing styled-system primitives, dark mode, composition ergonomics, and v3 architecture built on Ark UI and Zag state machines with Panda CSS styling.',
  category: 'saas',
  secondaryCategories: ['developer-tool', 'styled', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@chakra-ui/react', '@emotion/react'],
  docsUrl: 'https://chakra-ui.com',
  repositoryUrl: 'https://github.com/chakra-ui/chakra-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'WAI-ARIA compliant with full keyboard navigation and accessible state management.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Chakra Design System Tokens / Panda Tokens',
    packageName: '@chakra-ui/react'
  },
  icons: {
    available: false,
    name: 'Compatible with React Icons / Lucide'
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern, friendly, composable component styling with smooth rounded edges and intuitive style props.',
  noveltyLevel: 'established',
  bestFor: [
    'Fast-moving React SaaS apps and prototypes',
    'Developers who love style props (`px={4}`, `bg="blue.500"`)',
    'Component composition and custom design system building'
  ],
  avoidFor: [
    'Non-React codebases',
    'Ultra-compact low-latency data terminal emulators'
  ],
  strengths: [
    'Enormously popular developer ergonomics and composition model',
    'Full theme customization and semantic token system',
    'Chakra v3 leverages Zag state machines for rock-solid accessibility'
  ],
  weaknesses: [
    'React-focused (Ark UI is used for multi-framework)'
  ],
  tags: [
    'chakra',
    'react',
    'saas',
    'style-props',
    'dark-mode',
    'accessible',
    'composable'
  ],
  installation: {
    react: {
      command: 'npm install @chakra-ui/react @emotion/react',
      packages: ['@chakra-ui/react', '@emotion/react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your application in `<Provider>` from Chakra UI snippet or `<ChakraProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Chakra button with colorScheme, variant, and size.',
      importExample: "import { Button } from '@chakra-ui/react';\n\n<Button colorPalette=\"blue\" variant=\"solid\">Save Changes</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap application in Chakra Provider.',
      'Use `<Stack>`, `<HStack>`, `<VStack>`, `<Box>`, and `<Flex>` for layout.',
      'Use semantic tokens for colors (`colorPalette="teal"`).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure custom themes using `createSystem` or default system.',
    iconUsage: 'Use Lucide React or React Icons alongside Chakra components.',
    layoutConventions: 'Use Stack and HStack with gap={4}.'
  }
};
