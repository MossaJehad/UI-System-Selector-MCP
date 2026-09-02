import { UISystem } from '../../schemas/uiSystem.js';

export const hanaUi: UISystem = {
  id: 'hana-ui',
  name: 'Hana UI (Anime & Pastel Creative UI)',
  organization: 'Hana UI Community',
  description: 'An open-source, expressive React component library designed with soft pastel aesthetics, anime-inspired themes, glowing gradient cards, floating dialogs, and playful micro-interactions for creative portfolios and community sites.',
  category: 'retro',
  secondaryCategories: ['creative-tool', 'styled', 'experimental'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['hana-ui'],
  docsUrl: 'https://hana-ui.github.io',
  repositoryUrl: 'https://github.com/hana-ui/hana-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard triggers with custom pastel focus rings.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Hana UI pastel theme provider and color palettes',
    packageName: 'hana-ui'
  },
  icons: {
    available: true,
    name: 'Hana Cute & Creative Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'Playful pastel & anime aesthetic: Sakura Pink (#ffb6c1) / Lavender Purple accents, pill-shaped glowing buttons, playful animated avatars, and soft floating card overlays.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Anime, gaming, creative portfolios, VTuber community sites, and artist showcase pages',
    'Interactive web applications wanting a soft, pastel, and playful emotional tone',
    'Novelty developer toys'
  ],
  avoidFor: [
    'Corporate financial or enterprise ERP software'
  ],
  strengths: [
    'One-of-a-kind expressive pastel anime visual identity',
    'Rich creative components: AvatarGroup, FloatingCard, GlowingButton, BadgePills',
    'Built-in theme switcher with sweet pastel presets'
  ],
  weaknesses: [
    'Specialized pastel visual design language'
  ],
  tags: [
    'hana-ui',
    'pastel',
    'anime',
    'creative',
    'playful',
    'react',
    'hidden-gem'
  ],
  aliases: ['Hana UI', 'Hana', 'HanaUI'],
  relatedSystems: ['paper-css', 'react95', 'nes-css'],
  systemTypes: ['retro', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install hana-ui',
      packages: ['hana-ui'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Hana UI pastel glowing button with type="primary" | "pastel" | "gradient".',
      importExample: "import { Button } from 'hana-ui';\n\n<Button type=\"primary\">Explore World</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use Hana UI pastel theme tokens for creative styling.',
      'Use rounded pill buttons and floating cards.',
      'Wrap root in Hana `<ThemeProvider>`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Hana UI theme provider.',
    iconUsage: 'Use Hana icons or SVG icons.',
    layoutConventions: 'Use playful spacious flex and grid layouts.'
  }
};
