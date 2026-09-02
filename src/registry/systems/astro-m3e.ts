import { UISystem } from '../../schemas/uiSystem.js';

export const astroM3e: UISystem = {
  id: 'astro-m3e',
  name: 'Astro M3E (Material 3 Elements for Astro)',
  organization: 'Astro M3E Community',
  description: 'An open-source UI component library implementing Google Material Design 3 (Material You) natively as Astro components, featuring dynamic color generation, ripple effects, elevation tokens, and server-side rendering.',
  category: 'component-library',
  secondaryCategories: ['styled', 'consumer'],
  frameworks: ['astro', 'html-css'],
  stylingApproach: 'vanilla-css',
  packageNames: ['astro-m3e'],
  docsUrl: 'https://github.com/astro-m3e/astro-m3e',
  repositoryUrl: 'https://github.com/astro-m3e/astro-m3e',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Google Material 3 accessibility guidelines in server-rendered Astro.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design 3 CSS custom properties and color tokens',
    packageName: 'astro-m3e'
  },
  icons: {
    available: true,
    name: 'Material Symbols'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Google Material Design 3 (Material You) in Astro: pill-shaped filled action buttons, tonal elevation cards, floating labels, and dynamic seed color palettes.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Astro websites and documentation portals wanting authentic Google Material 3 (Material You) styling',
    'Developers who appreciate Material Design with native Astro component ergonomics',
    'Fast content websites'
  ],
  avoidFor: [
    'Retro pixel-art or brutalist websites'
  ],
  strengths: [
    'Native Astro `.astro` component implementation of Material 3',
    'Server-side rendered with minimal client JavaScript',
    'Full dark mode and dynamic tonal palettes'
  ],
  weaknesses: [
    'Astro framework focus'
  ],
  tags: [
    'astro-m3e',
    'astro',
    'material-design',
    'material-3',
    'material-you',
    'google',
    'hidden-gem'
  ],
  aliases: ['Astro M3E', 'Astro Material 3', 'M3E Astro'],
  relatedSystems: ['material-web', 'varlet', 'fulldev-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install astro-m3e',
      packages: ['astro-m3e'],
      setupInstructions: 'Import components directly into `.astro` files and load Material Symbols font.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Material 3 button in Astro with variant="filled" | "outlined" | "tonal" | "text".',
      importExample: "--- \nimport { Button } from 'astro-m3e';\n---\n\n<Button variant=\"filled\">Get Started</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `astro-m3e` into `.astro` files.',
      'Use Material 3 CSS custom properties for theming.',
      'Use Material Symbols for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Material 3 CSS variables on `:root`.',
    iconUsage: 'Use Material Symbols font glyphs.',
    layoutConventions: 'Use standard Astro layout composition.'
  }
};
