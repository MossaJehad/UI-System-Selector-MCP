import { UISystem } from '../../schemas/uiSystem.js';

export const nurUi: UISystem = {
  id: 'nur-ui',
  name: 'Nur UI',
  organization: 'Nur UI Community',
  description: 'An open-source, source-owned component library built for React and Tailwind CSS, featuring luminous glowing borders, ambient light reflections, radiant button effects, and modern dark-mode surfaces.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'],
  docsUrl: 'https://nurui.dev',
  repositoryUrl: 'https://github.com/nur-ui/nur-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus rings.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with radiant glow utilities',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Radiant luminescence aesthetic: deep obsidian backgrounds (`#0a0a0a`), warm radiant amber/gold edge glow (`#f59e0b`), ambient light dispersion, and sleek cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'AI tech startups, luxury brand showcases, creative portfolios, and dark-mode dashboards',
    'Radiant glow effects and ambient light borders',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'High-density spreadsheet ledgers'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Radiant ambient lighting and gold/amber luminescence',
    'Seamless drop-in compatibility with Tailwind CSS and Next.js'
  ],
  weaknesses: [
    'Luminous dark-mode aesthetic focus'
  ],
  tags: [
    'nur-ui',
    'nur',
    'luminous',
    'glow',
    'ambient-light',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Nur UI', 'NurUI', 'Nur'],
  relatedSystems: ['prism-ui', 'magic-ui', 'aceternity-ui'],
  systemTypes: ['source-owned', 'component-library'],
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
      canonicalName: 'RadiantButton',
      description: 'Button with ambient warm glow reflection on hover.',
      importExample: "// Copy from components/nur/radiant-button.tsx\nimport { RadiantButton } from '@/components/ui/radiant-button';",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use deep obsidian backgrounds and radiant amber/gold light accents.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with radiant glow tokens.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
