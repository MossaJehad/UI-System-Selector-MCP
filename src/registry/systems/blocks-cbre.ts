import { UISystem } from '../../schemas/uiSystem.js';

export const blocksCbre: UISystem = {
  id: 'blocks-cbre',
  name: 'CBRE Blocks Design System',
  organization: 'CBRE Group',
  description: 'CBRE’s official enterprise design system and React component library, engineered for commercial real estate leasing portals, property investment portfolios, spatial analytics mapping, and building management consoles.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['@cbre/blocks', 'styled-components'],
  docsUrl: 'https://blocks.cbre.com',
  repositoryUrl: 'https://github.com/cbre-blocks/blocks',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across commercial real estate leasing and investment dashboards.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in styled-components theme and CSS variables',
    packageName: '@cbre/blocks'
  },
  icons: {
    available: true,
    packageName: '@cbre/blocks',
    name: 'CBRE Blocks Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Corporate commercial real estate aesthetic: CBRE Forest Green (#003f2d) / Gold accents, architectural floor plan card overlays, property valuation tables, and spatial map layers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Commercial real estate platforms, property management portals, and tenant portals',
    'Real estate investment trust (REIT) dashboards and spatial leasing tools',
    'Enterprise B2B applications wanting sophisticated corporate polish'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Official design system of global commercial real estate firm CBRE',
    'Specialized property listing, floor plan card, and leasing workflow patterns',
    'High typographic elegance and robust accessibility'
  ],
  weaknesses: [
    'Real estate domain branding'
  ],
  tags: [
    'cbre',
    'blocks',
    'real-estate',
    'proptech',
    'property',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['CBRE Blocks', 'Blocks Design System', 'CBRE Design System'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @cbre/blocks styled-components',
      packages: ['@cbre/blocks', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'CBRE action button with variant="primary" | "secondary".',
      importExample: "import { Button } from '@cbre/blocks';\n\n<Button variant=\"primary\">Schedule Property Tour</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with CBRE Blocks `<ThemeProvider>`.',
      'Use CBRE card containers for property asset presentations.',
      'Use CBRE design tokens for corporate spacing and typography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via CBRE styled-components theme provider.',
    iconUsage: 'Use `@cbre/blocks` icons.',
    layoutConventions: 'Use standard styled grid and flex layouts.'
  }
};
