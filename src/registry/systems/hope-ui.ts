import { UISystem } from '../../schemas/uiSystem.js';

export const hopeUi: UISystem = {
  id: 'hope-ui',
  name: 'Hope UI',
  organization: 'Hope UI Community (Fabrice Kafando)',
  description: 'An open-source, accessible component library for SolidJS inspired by Chakra UI, delivering 30+ reactive components, styled-system style props, dark mode support, and seamless fine-grained reactivity.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['solid'],
  stylingApproach: 'css-in-js',
  packageNames: ['@hope-ui/solid'],
  docsUrl: 'https://hope-ui.com',
  repositoryUrl: 'https://github.com/fabworkz/hope-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements WAI-ARIA authoring practices in SolidJS with keyboard navigation and focus traps.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Hope UI theme object and Stitches-inspired style tokens',
    packageName: '@hope-ui/solid'
  },
  icons: {
    available: true,
    name: 'solid-icons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern Chakra-inspired SaaS style for SolidJS: cyan/blue accents, Box/Flex/Stack primitives, styled props (`p="$4"`, `bg="$primary9"`), and dark mode contrast.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SolidJS web applications wanting the familiar Chakra UI developer experience and style props',
    'High-performance reactive dashboards taking advantage of SolidJS fine-grained reactivity',
    'Modern SaaS apps built on SolidJS'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Brings the beloved Chakra UI style props and DX to the ultra-fast SolidJS ecosystem',
    'Fine-grained reactive state updates with zero unnecessary virtual DOM re-renders',
    'Built-in dark mode and comprehensive theme configuration'
  ],
  weaknesses: [
    'SolidJS only'
  ],
  tags: [
    'hope-ui',
    'solid',
    'solidjs',
    'chakra-like',
    'style-props',
    'fine-grained',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Hope UI', 'HopeUI', 'Hope Solid'],
  relatedSystems: ['chakra-ui', 'kobalte', 'ark-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    solid: {
      command: 'npm install @hope-ui/solid',
      packages: ['@hope-ui/solid'],
      peerDependencies: ['solid-js'],
      setupInstructions: 'Wrap your application in `<HopeProvider>` from `@hope-ui/solid`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Hope UI button with colorScheme="primary" | "neutral" | "success" | "danger" | "warning".',
      importExample: "import { Button } from '@hope-ui/solid';\n\n<Button colorScheme=\"primary\">Submit</Button>",
      docSubUrl: 'docs/components/button'
    },
    box: {
      canonicalName: 'Box',
      description: 'Core layout primitive with styled props.',
      importExample: "import { Box, Heading, Text } from '@hope-ui/solid';\n\n<Box p=\"$4\" bg=\"$neutral3\"><Heading>Title</Heading><Text>Content</Text></Box>",
      docSubUrl: 'docs/components/box'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<HopeProvider config={config}>`.',
      'Use `Box`, `Flex`, `HStack`, `VStack` layout primitives.',
      'Use Hope token style props (e.g. `p="$4"`, `bg="$primary9"`, `colorScheme="primary"`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes in `HopeProvider` config.',
    iconUsage: 'Use `solid-icons` (e.g. `npm i solid-icons`).',
    layoutConventions: 'Use Box, Flex, HStack, and VStack layout components.'
  }
};
