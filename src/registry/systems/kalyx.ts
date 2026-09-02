import { UISystem } from '../../schemas/uiSystem.js';

export const kalyx: UISystem = {
  id: 'kalyx',
  name: 'Kalyx UI',
  organization: 'Kalyx Community',
  description: 'An open-source, source-owned component library crafted with React and Tailwind CSS, featuring nature-inspired color palettes, organic soft corners, accessible forms, and harmonious micro-interactions.',
  category: 'source-owned',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://kalyx.dev',
  repositoryUrl: 'https://github.com/kalyx-ui/kalyx',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus rings and form labels.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with earth/botanical palettes',
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
  aesthetic: 'Organic botanical aesthetic: sage green (#87a96b) / warm earth tones, soft curved border-radii (`rounded-2xl`), gentle shadows, and natural typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Wellness platforms, environmental projects, lifestyle products, and mindful tech apps',
    'Developers who want a warm, organic visual alternative to sharp cold gray SaaS palettes',
    'Next.js applications using copy-paste component architecture'
  ],
  avoidFor: [
    'Aggressive cyberpunk gaming portals'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Warm, mindful, organic visual personality',
    'Clean Tailwind CSS structure'
  ],
  weaknesses: [
    'Botanical/organic aesthetic domain focus'
  ],
  tags: [
    'kalyx',
    'organic',
    'botanical',
    'warm-tones',
    'wellness',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Kalyx UI', 'Kalyx', 'KalyxUI'],
  relatedSystems: ['shadcn-ui', 'origin-ui', 'kibo-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install clsx tailwind-merge lucide-react',
      packages: ['clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'WarmCard',
      description: 'Soft-curved card with organic earth tone border and natural shadow.',
      importExample: "// Copy from components/kalyx/warm-card.tsx\nimport { WarmCard } from '@/components/ui/warm-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use warm earth tones (sage, stone, sand) rather than cold slate grays.',
      'Use `rounded-2xl` for soft organic corners.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with warm neutral tokens.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
