import { UISystem } from '../../schemas/uiSystem.js';

export const rebass: UISystem = {
  id: 'rebass',
  name: 'Rebass',
  organization: 'Brent Jackson / Rebass Community',
  description: 'The pioneering open-source primitive component library for React built on Styled System, providing lightweight Box, Flex, Text, Heading, Button, and Card primitives with constraint-based style props.',
  category: 'component-library',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['rebass', '@rebass/forms', '@rebass/preset'],
  docsUrl: 'https://rebassjs.org',
  repositoryUrl: 'https://github.com/rebassjs/rebass',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides semantic HTML baseline primitives.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Styled System Theme Specification theme object via Emotion ThemeProvider',
    packageName: '@rebass/preset'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Pioneering constraint-based primitive design: minimal Box/Flex composition, concise style props (`p={3}`, `bg="primary"`, `fontSize={4}`), and typography-first layouts.',
  noveltyLevel: 'established',
  bestFor: [
    'Developers who love the original Styled System constraint-based layout philosophy',
    'Lightweight React component foundations where custom UI is built from fundamental primitives',
    'Content sites, blogs, and rapid prototypes'
  ],
  avoidFor: [
    'Complex high-density enterprise data grid tables'
  ],
  strengths: [
    'Pioneered the entire styled-system and style props movement that inspired Chakra UI and Theme UI',
    'Tiny bundle size (<1KB for core Box and Flex)',
    'Zero assumptions: complete freedom to style custom components'
  ],
  weaknesses: [
    'Ecosystem has shifted towards zero-runtime CSS / Tailwind'
  ],
  tags: [
    'rebass',
    'styled-system',
    'style-props',
    'primitives',
    'emotion',
    'react',
    'established'
  ],
  aliases: ['Rebass', 'RebassJS', 'Rebass UI'],
  relatedSystems: ['theme-ui', 'chakra-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install rebass @rebass/forms @rebass/preset @emotion/react',
      packages: ['rebass', '@rebass/forms', '@rebass/preset', '@emotion/react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<ThemeProvider theme={preset}>` from `@emotion/react`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Rebass primitive button with style props.',
      importExample: "import { Button } from 'rebass';\n\n<Button variant=\"primary\" mr={2}>Click Me</Button>",
      docSubUrl: 'button'
    },
    box: {
      canonicalName: 'Box',
      description: 'Core Box layout primitive with constraint-based style props.',
      importExample: "import { Box, Heading, Text } from 'rebass';\n\n<Box p={4} bg=\"muted\"><Heading>Title</Heading><Text>Body</Text></Box>",
      docSubUrl: 'box'
    }
  },
  aiInstructions: {
    principles: [
      'Use `Box` and `Flex` for layout composition.',
      'Use Styled System props (`p={...}`, `m={...}`, `bg={...}`, `color={...}`).',
      'Wrap root in Emotion `<ThemeProvider theme={preset}>`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes according to Styled System theme spec.',
    iconUsage: 'Embed SVG icons inside Box primitives.',
    layoutConventions: 'Use Flex and Box layout components.'
  }
};
