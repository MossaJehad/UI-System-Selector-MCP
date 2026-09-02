import { UISystem } from '../../schemas/uiSystem.js';

export const reverseUi: UISystem = {
  id: 'reverse-ui',
  name: 'Reverse UI',
  organization: 'Reverse UI Community',
  description: 'An open-source, source-owned component library built with React and Tailwind CSS, featuring inverted color schemes, negative space cards, high-contrast monochrome layouts, and reversible theme states.',
  category: 'source-owned',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://reverseui.dev',
  repositoryUrl: 'https://github.com/reverse-ui/reverse-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'High-contrast monochrome elements with accessible keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-contrast inverted scales',
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
  aesthetic: 'Inverted monochrome aesthetic: stark white on pitch black (`#000000`), bold negative space framing, high-contrast action triggers, and inverted hover fills.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Editorial websites, architecture magazines, typography showcases, and modern developer portfolios',
    'Developers wanting high-contrast black-and-white visual tension',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Pastel children apps'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'High visual impact through disciplined monochrome contrast',
    'Clean Tailwind CSS structure'
  ],
  weaknesses: [
    'Monochrome inverted focus'
  ],
  tags: [
    'reverse-ui',
    'reverse',
    'inverted',
    'monochrome',
    'high-contrast',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Reverse UI', 'ReverseUI', 'Reverse'],
  relatedSystems: ['unlumen-ui', 'kibo-ui', 'origin-ui'],
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
      canonicalName: 'InvertedCard',
      description: 'High-contrast card with stark white border on deep black canvas.',
      importExample: "// Copy from components/reverse/inverted-card.tsx\nimport { InvertedCard } from '@/components/ui/inverted-card';",
      docSubUrl: 'docs/components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use pure black (`#000000`) and pure white (`#ffffff`) for maximum monochrome contrast.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with strict monochrome tokens.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
