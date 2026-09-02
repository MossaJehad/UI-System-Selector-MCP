import { UISystem } from '../../schemas/uiSystem.js';

export const chameleon: UISystem = {
  id: 'chameleon',
  name: 'Pusher Chameleon Design System',
  organization: 'Pusher (MessageBird)',
  description: 'Pusher’s official open-source design system and React component library, engineered for real-time WebSocket stream monitors, API key management consoles, channel debuggers, and developer webhook telemetry.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'saas', 'dashboard'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['@pusher/chameleon', 'styled-components'],
  docsUrl: 'https://pusher.github.io/chameleon',
  repositoryUrl: 'https://github.com/pusher/chameleon',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for developer console accessibility across Pusher Channels and Beams.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Pusher Theme object in styled-components',
    packageName: '@pusher/chameleon'
  },
  icons: {
    available: true,
    packageName: '@pusher/chameleon',
    name: 'Chameleon Developer Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Modern real-time developer tool aesthetic: Pusher Purple (#6a0dad) / Neon Cyan accents, WebSocket channel stream log cards, API key secret revealers, and webhook latency sparklines.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developer portal consoles, WebSocket channel monitors, and real-time event loggers',
    'API key managers, webhook debuggers, and developer documentation playgrounds',
    'React SaaS applications wanting Pusher’s developer-first polish'
  ],
  avoidFor: [
    'Consumer fashion or e-commerce apps'
  ],
  strengths: [
    'Tailored specifically for real-time developer platforms and WebSocket streaming consoles',
    'Specialized API key, code block snippet, and channel log components',
    'High data density and dark theme clarity'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'pusher',
    'chameleon',
    'real-time',
    'websocket',
    'developer-tool',
    'api',
    'dashboard',
    'hidden-gem'
  ],
  aliases: ['Pusher Chameleon', 'Chameleon Design System', 'Pusher UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @pusher/chameleon styled-components',
      packages: ['@pusher/chameleon', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Chameleon developer action button with variant="primary" | "secondary" | "danger".',
      importExample: "import { Button } from '@pusher/chameleon';\n\n<Button variant=\"primary\">Send Test Event</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap application in Chameleon `<ThemeProvider>`.',
      'Use Chameleon layout containers for real-time event logs.',
      'Use Chameleon API key inputs with masked copy-to-clipboard affordances.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Chameleon styled-components theme object.',
    iconUsage: 'Use Chameleon icons from `@pusher/chameleon`.',
    layoutConventions: 'Use standard styled flex and grid components.'
  }
};
