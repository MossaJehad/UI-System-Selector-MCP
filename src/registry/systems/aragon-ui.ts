import { UISystem } from '../../schemas/uiSystem.js';

export const aragonUi: UISystem = {
  id: 'aragon-ui',
  name: 'Aragon UI (Web3 / DAO Design System)',
  organization: 'Aragon Association',
  description: 'Aragon’s official open-source design system and React component library, engineered for decentralized governance (DAOs), smart contract voting proposals, cryptocurrency treasury vaults, and Web3 blockchain dashboards.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'dashboard', 'data-heavy'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['@aragon/ui', 'styled-components'],
  docsUrl: 'https://ui.aragon.org',
  repositoryUrl: 'https://github.com/aragon/aragon-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across DAO voting interfaces, proposal feeds, and token distribution dashboards.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Aragon Theme object in styled-components via `<Main theme={...}>`',
    packageName: '@aragon/ui'
  },
  icons: {
    available: true,
    packageName: '@aragon/ui',
    name: 'Aragon Web3 & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Web3 decentralized governance aesthetic: Aragon Teal (#08bee5) / Dark Obsidian theme, token balance badges, voting proposal status bars (Support / Min Quorum), transaction hash chips, and identity avatars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Decentralized autonomous organizations (DAOs), Web3 governance portals, and token voting platforms',
    'Crypto treasury dashboards, smart contract transaction visualizers, and decentralized finance (DeFi) tools',
    'React applications wanting an authentic Web3 governance design language'
  ],
  avoidFor: [
    'Traditional corporate payroll accounting'
  ],
  strengths: [
    'The premier open-source design system built specifically for Web3 DAOs and decentralized governance',
    'Specialized blockchain voting components (ProgressBar for token quorum, EthAddress, IdentityBadge, TokenBadge, CardLayout)',
    'First-class dark mode and clean card layout architecture'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'aragon',
    'web3',
    'dao',
    'crypto',
    'blockchain',
    'governance',
    'voting',
    'dashboard',
    'hidden-gem'
  ],
  aliases: ['Aragon UI', 'Aragon Design System', 'Aragon'],
  systemTypes: ['company-design-system', 'component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @aragon/ui styled-components',
      packages: ['@aragon/ui', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your application in `<Main theme="dark">` from `@aragon/ui`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Aragon action button with mode="strong" | "normal" | "positive" | "negative".',
      importExample: "import { Button } from '@aragon/ui';\n\n<Button mode=\"strong\">Vote on Proposal</Button>",
      docSubUrl: 'button'
    },
    badge: {
      canonicalName: 'IdentityBadge',
      description: 'Web3 address and ENS identity badge with blockie avatar and copy toggle.',
      importExample: "import { IdentityBadge } from '@aragon/ui';\n\n<IdentityBadge entity=\"0xcafe...\" />",
      docSubUrl: 'identitybadge'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<Main theme="dark">` from `@aragon/ui`.',
      'Use `IdentityBadge` and `TokenBadge` for blockchain addresses and tokens.',
      'Use `ProgressBar` with support/quorum thresholds for voting proposal cards.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `<Main theme="dark">` or custom theme objects.',
    iconUsage: 'Import icons directly from `@aragon/ui` (e.g. `IconCheck`, `IconVote`).',
    layoutConventions: 'Use Aragon Card, Split, and Bar layout primitives.'
  }
};
