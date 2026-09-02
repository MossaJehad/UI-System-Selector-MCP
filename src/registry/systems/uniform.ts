import { UISystem } from '../../schemas/uiSystem.js';

export const uniform: UISystem = {
  id: 'uniform',
  name: 'Hudl Uniform Design System',
  organization: 'Hudl',
  description: 'Hudl’s official open-source design system and React component library, engineered for sports video breakdown, athletic performance analytics, playbook diagrams, and sports coaching portals.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'data-heavy', 'dashboard'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['@hudl/uniform', 'styled-components'],
  docsUrl: 'https://uniform.hudl.com',
  repositoryUrl: 'https://github.com/hudl/uniform',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across sports video review consoles and player performance portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Hudl Uniform design tokens in styled-components theme',
    packageName: '@hudl/uniform'
  },
  icons: {
    available: true,
    packageName: '@hudl/uniform',
    name: 'Uniform Sports & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Sports video analysis aesthetic: Hudl Orange (#ff6600) / Pitch Black accents, video player scrub bars, play-by-play event tags, roster grid tables, and dark video room viewing modes.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Sports analytics platforms, athletic coaching portals, and video playback breakdown tools',
    'Roster management, play-by-play event tagging, and sports telemetry dashboards',
    'React web applications wanting a high-energy athletic aesthetic'
  ],
  avoidFor: [
    'Traditional corporate accounting ledgers'
  ],
  strengths: [
    'Official design system of sports video analytics pioneer Hudl',
    'Specialized sports video tagging, timeline playback, and roster table components',
    'Dark-theme optimized for video breakdown in low-light coaching rooms'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'hudl',
    'uniform',
    'sports',
    'video',
    'analytics',
    'coaching',
    'dashboard',
    'hidden-gem'
  ],
  aliases: ['Hudl Uniform', 'Uniform Design System', 'Hudl Design System'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @hudl/uniform styled-components',
      packages: ['@hudl/uniform', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Uniform action button with variant="primary" | "secondary".',
      importExample: "import { Button } from '@hudl/uniform';\n\n<Button variant=\"primary\">Tag Play</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with Uniform `<ThemeProvider>`.',
      'Use Uniform dark mode tokens for video analysis screens.',
      'Use Uniform sports iconography for playback and tag controls.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Uniform theme provider.',
    iconUsage: 'Use `@hudl/uniform` icons.',
    layoutConventions: 'Use standard styled grid and flex layouts.'
  }
};
