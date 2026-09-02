import { UISystem } from '../../schemas/uiSystem.js';

export const dripsy: UISystem = {
  id: 'dripsy',
  name: 'Dripsy (Responsive Design System for React Native & Web)',
  organization: 'Fernando Rojo',
  description: 'An open-source, responsive design tool and UI system for React Native and Next.js (Web), providing responsive arrays (`sx={{ padding: [2, 4, 8] }}`), theme-ui compatibility, TypeScript type safety, and seamless SSR.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'styled', 'minimalist'],
  frameworks: ['react-native', 'react', 'next'],
  stylingApproach: 'emotion',
  packageNames: ['dripsy'],
  docsUrl: 'https://dripsy.xyz',
  repositoryUrl: 'https://github.com/nandorojo/dripsy',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible mobile pressables and web semantic HTML mappings.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Theme-UI compatible design tokens and scales via `makeTheme`',
    packageName: 'dripsy'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Modern responsive cross-platform aesthetic: clean constraint-based typography, responsive `sx` arrays across mobile breakpoints, and theme-token powered surfaces.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'React Native + Next.js universal applications sharing 100% of their UI codebase',
    'Developers who love Theme UI’s `sx` prop and want it working seamlessly in React Native and Web',
    'Solito and Expo monorepos'
  ],
  avoidFor: [
    'Non-React Native web-only projects'
  ],
  strengths: [
    'The gold standard for Theme-UI styled universal React Native + Next.js applications',
    'Responsive array syntax (`sx={{ width: ["100%", "50%", "25%"] }}`) works identically on iOS, Android, and Web',
    'Type-safe design token scales and SSR compatible'
  ],
  weaknesses: [
    'Requires mental model of universal React Native + Web'
  ],
  tags: [
    'dripsy',
    'react-native',
    'nextjs',
    'solito',
    'universal',
    'sx-prop',
    'responsive',
    'hidden-gem'
  ],
  aliases: ['Dripsy', 'Dripsy UI', 'Fernando Rojo Dripsy'],
  relatedSystems: ['tamagui', 'theme-ui', 'rebass'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install dripsy',
      packages: ['dripsy'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap root component in `<DripsyProvider theme={theme}>`.'
    }
  },
  componentGuidance: {
    view: {
      canonicalName: 'View',
      description: 'Dripsy View with responsive sx prop.',
      importExample: "import { View, Text } from 'dripsy';\n\n<View sx={{ p: [2, 4], bg: '$background' }}><Text sx={{ color: '$primary' }}>Hello</Text></View>",
      docSubUrl: 'usage/the-sx-prop'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<DripsyProvider theme={theme}>`.',
      'Use `sx` prop with theme tokens (`$primary`, `$background`, `$space`) and responsive arrays.',
      'Import primitives (`View`, `Text`, `P`, `H1`) from `dripsy`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `makeTheme()` from `dripsy`.',
    iconUsage: 'Embed SVG or vector icons.',
    layoutConventions: 'Use Dripsy `View` with flexbox `sx` props.'
  }
};
