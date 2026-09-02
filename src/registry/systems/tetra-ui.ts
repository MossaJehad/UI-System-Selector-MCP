import { UISystem } from '../../schemas/uiSystem.js';

export const tetraUi: UISystem = {
  id: 'tetra-ui',
  name: 'Tetra UI',
  organization: 'Tetra UI Community',
  description: 'An open-source, source-owned component library built for React and Tailwind CSS, featuring geometric layout grids, multi-step wizards, modular card containers, and clean SaaS navigation.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://tetraui.com',
  repositoryUrl: 'https://github.com/tetra-ui/tetra-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus indicators.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with 4-point geometric grid scale',
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
  aesthetic: 'Geometric grid aesthetic: 4-point spacing precision, cleanly nested card tiles, geometric icons, and crisp typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SaaS dashboards, multi-step wizards, and modern developer platforms',
    'Developers who appreciate structured geometric alignment and modular tiles',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Loose freeform artistic layouts'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Structured geometric alignment system',
    'Clean Tailwind CSS structure'
  ],
  weaknesses: [
    'Structured geometric focus'
  ],
  tags: [
    'tetra-ui',
    'tetra',
    'geometric',
    'grid',
    'saas',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Tetra UI', 'TetraUI', 'Tetra'],
  relatedSystems: ['origin-ui', 'kibo-ui', 'shadcn-ui'],
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
    wizard: {
      canonicalName: 'StepWizard',
      description: 'Multi-step geometric wizard with progress pills and validation.',
      importExample: "// Copy from components/tetra/step-wizard.tsx\nimport { StepWizard } from '@/components/ui/step-wizard';",
      docSubUrl: 'docs/components/wizard'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Maintain 4-point geometric spacing discipline.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
