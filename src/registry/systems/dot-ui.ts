import { UISystem } from '../../schemas/uiSystem.js';

export const dotUi: UISystem = {
  id: 'dot-ui',
  name: 'dotUI',
  organization: 'dotUI Community',
  description: 'An open-source, source-owned component library built for React and Tailwind CSS, featuring subtle dotted grid patterns, matrix background textures, clean badges, and structured technical documentation layouts.',
  category: 'source-owned',
  secondaryCategories: ['developer-tool', 'minimalist'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://dotui.org',
  repositoryUrl: 'https://github.com/dotui/dotui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with dotted background pattern utilities',
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
  aesthetic: 'Technical matrix aesthetic: SVG dotted background grids, subtle crosshair accents, cleanly separated documentation blocks, and monospace parameter tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'API documentation portals, developer blogs, SDK reference pages, and technical tools',
    'Dotted background grid and crosshair layout patterns',
    'Next.js projects using source-owned copy-paste architecture'
  ],
  avoidFor: [
    'Mainstream consumer e-commerce storefronts'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Clean dotted background and architectural grid utilities',
    'Lightweight footprint: pure Tailwind CSS'
  ],
  weaknesses: [
    'Developer documentation niche focus'
  ],
  tags: [
    'dot-ui',
    'dotui',
    'dotted-grid',
    'matrix',
    'developer-tool',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['dotUI', 'dot-ui', 'Dot UI', 'DotUI'],
  relatedSystems: ['kibo-ui', 'origin-ui', 'shadcn-ui'],
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
    pattern: {
      canonicalName: 'DotGrid',
      description: 'Responsive SVG dotted matrix background pattern wrapper.',
      importExample: "// Copy from components/dot/dot-grid.tsx\nimport { DotGrid } from '@/components/ui/dot-grid';",
      docSubUrl: 'docs/components/dot-grid'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use DotGrid background patterns behind feature cards and hero sections.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
