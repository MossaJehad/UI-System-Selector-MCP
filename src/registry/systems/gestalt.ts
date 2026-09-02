import { UISystem } from '../../schemas/uiSystem.js';

export const gestalt: UISystem = {
  id: 'gestalt',
  name: 'Pinterest Gestalt',
  organization: 'Pinterest',
  description: 'Pinterest’s design system focused on visual-heavy discovery, masonry grids, image curation, creator tools, and consumer-grade responsiveness.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'creative-tool', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['gestalt', 'gestalt-datepicker'],
  docsUrl: 'https://gestalt.pinterest.systems',
  repositoryUrl: 'https://github.com/pinterest/gestalt',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Pinterest enforces accessible focus indicators and screen reader attributes across all Gestalt primitives.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / JS Tokens',
    packageName: 'gestalt-design-tokens'
  },
  icons: {
    available: true,
    packageName: 'gestalt',
    name: 'Built-in Gestalt Icon component'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Visual-first, fluid, rounded, consumer discovery and media curation polish.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Image/video curation and media gallery platforms',
    'Masonry-based feeds and visual discovery apps',
    'Creator studios and consumer content creation tools',
    'Social and community web applications'
  ],
  avoidFor: [
    'Dense tabular database management tools',
    'Low-level CLI terminal emulators'
  ],
  strengths: [
    'World-class Masonry grid component built for infinite media streams',
    'Beautiful visual polish with pill buttons, avatar groups, and card overlays',
    'Built-in color scheme provider for dark/light themes'
  ],
  weaknesses: [
    'React-specific',
    'Less suited for multi-column dense data tables'
  ],
  tags: [
    'pinterest',
    'visual',
    'masonry',
    'consumer',
    'media',
    'creative-tool',
    'dark-mode',
    'rtl'
  ],
  installation: {
    react: {
      command: 'npm install gestalt',
      packages: ['gestalt'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `gestalt/dist/gestalt.css` and wrap root in `<ColorSchemeProvider colorScheme="dark">`.'
    }
  },
  componentGuidance: {
    masonry: {
      canonicalName: 'Masonry',
      description: 'Virtualized, performant masonry grid layout for dynamic height items.',
      importExample: "import { Masonry } from 'gestalt';\n\n<Masonry items={pins} renderItem={({ data }) => <PinCard data={data} />} />",
      docSubUrl: 'web/masonry'
    },
    button: {
      canonicalName: 'Button',
      description: 'Gestalt pill-shaped button with red, gray, transparent, and semi-transparent variants.',
      importExample: "import { Button } from 'gestalt';\n\n<Button text=\"Save Pin\" color=\"red\" size=\"lg\" />",
      docSubUrl: 'web/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import styles from `gestalt/dist/gestalt.css`.',
      'Use `<Box>` and `<Flex>` from `gestalt` for all layouts.',
      'Use `<Icon icon="..." />` for icons.',
      'Wrap root with `<ColorSchemeProvider colorScheme="userPreference">`.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'lucide-react'],
    themingGuide: 'Configure theme via `<ColorSchemeProvider colorScheme="light|dark|userPreference">`.',
    iconUsage: 'Use `<Icon icon="heart" accessibilityLabel="Like" />` from gestalt.',
    layoutConventions: 'Use Flex with gap, alignContent, and direction props.'
  }
};
