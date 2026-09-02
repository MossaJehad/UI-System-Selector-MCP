import { UISystem } from '../../schemas/uiSystem.js';

export const panza: UISystem = {
  id: 'panza',
  name: 'Panza (Functional UI Component Library for React Native)',
  organization: 'Ben McMahen / Panza Community',
  description: 'An open-source, functional design-system component library for React Native and Web, inspired by Rebass and Basscss, providing composable mobile primitives (Nav, TouchRow, SectionHeader, InputRow, Button) with constraint-based style props.',
  category: 'mobile',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['react-native', 'react'],
  stylingApproach: 'styled-components',
  packageNames: ['panza'],
  docsUrl: 'https://github.com/mcmath/panza',
  repositoryUrl: 'https://github.com/mcmath/panza',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: false,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Mobile touch indicators with semantic accessibility traits.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Panza functional theme scales via `Base` config',
    packageName: 'panza'
  },
  icons: {
    available: false
  },
  maturity: 'deprecated',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Functional mobile aesthetic: clean iOS-style touch rows, section headers, segmented controls, and minimalist layout primitives in React Native.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Historical reference and studying functional / constraint-based design systems in early React Native',
    'Maintaining legacy React Native mobile apps',
    'Composable mobile primitive patterns'
  ],
  avoidFor: [
    'New Expo greenfield projects (use Dripsy, Restyle, or Tamagui instead)'
  ],
  strengths: [
    'Pioneered functional Rebass/Basscss style props in the React Native ecosystem',
    'Clean, unopinionated composable primitive components',
    'Zero heavy dependencies'
  ],
  weaknesses: [
    'Archived; historical React Native focus'
  ],
  tags: [
    'panza',
    'react-native',
    'functional',
    'rebass-like',
    'mobile',
    'archived',
    'historical',
    'hidden-gem'
  ],
  aliases: ['Panza', 'Panza UI', 'Panza React Native'],
  relatedSystems: ['rebass', 'dripsy', 'shopify-restyle', 'nativebase'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install panza',
      packages: ['panza'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Import primitives directly from `panza`.'
    }
  },
  componentGuidance: {
    touchRow: {
      canonicalName: 'TouchRow',
      description: 'iOS-style touchable list row with chevron and value label.',
      importExample: "import { TouchRow } from 'panza';\n\n<TouchRow primaryText=\"Account Settings\" value=\"Active\" onPress={handlePress} />",
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Historical React Native library: import primitives (`Box`, `Text`, `TouchRow`, `Button`) from `panza`.',
      'Use functional prop styles (`p={2}`, `m={1}`).',
      'Use standard React Native flexbox layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `panza.config`.',
    iconUsage: 'Embed vector icons inside rows.',
    layoutConventions: 'Use `Box` with flexbox props.'
  }
};
