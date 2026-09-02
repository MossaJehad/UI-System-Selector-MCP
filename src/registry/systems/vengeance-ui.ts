import { UISystem } from '../../schemas/uiSystem.js';

export const vengeanceUi: UISystem = {
  id: 'vengeance-ui',
  name: 'VengeanceUI',
  organization: 'VengeanceUI Community',
  description: 'An open-source, source-owned component library inspired by dark brutalism, high-contrast cyberpunk accents, sharp beveled corners, and aggressive typography for cutting-edge developer tools and Web3 platforms.',
  category: 'source-owned',
  secondaryCategories: ['retro', 'styled', 'experimental'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://vengeanceui.com',
  repositoryUrl: 'https://github.com/vengeance-ui/vengeance-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'High contrast text and accessible keyboard focus states.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-contrast neon accents',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Dark brutalist cyberpunk aesthetic: high-contrast neon crimson (#ff003c) / electric lime (#00ff66) accents, sharp 0px border-radii, technical monospace badges, and bold glitch typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Web3 decentralized exchanges, cybersecurity dashboards, hacker CTF portals, and dark gaming interfaces',
    'Developers who love dark neo-brutalist and cyberpunk visual identities',
    'Next.js projects using source-owned copy-paste architecture'
  ],
  avoidFor: [
    'Corporate healthcare or legal portals'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Uncompromising dark brutalist and cyberpunk design language',
    'Sharp 0px corner geometry and high-contrast neon visibility'
  ],
  weaknesses: [
    'Aggressive cyberpunk visual style'
  ],
  tags: [
    'vengeance-ui',
    'cyberpunk',
    'dark-brutalism',
    'web3',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['VengeanceUI', 'Vengeance UI', 'Vengeance'],
  relatedSystems: ['arwes', 'terminal-css', 'cult-ui'],
  systemTypes: ['source-owned', 'component-library', 'retro'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install framer-motion clsx tailwind-merge lucide-react',
      packages: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'CyberButton',
      description: 'Sharp-cornered brutalist button with neon edge glow and technical corner cutouts.',
      importExample: "// Copy from components/vengeance/cyber-button.tsx\nimport { CyberButton } from '@/components/ui/cyber-button';",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use 0px border radius (`rounded-none`) and high-contrast neon accents (`#ff003c`, `#00ff66`).',
      'Use monospace typography for technical indicators and tags.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with sharp corners and neon color tokens.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
