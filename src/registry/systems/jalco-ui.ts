import { UISystem } from '../../schemas/uiSystem.js';

export const jalcoUi: UISystem = {
  id: 'jalco-ui',
  name: 'Jalco UI',
  organization: 'Jalco UI Community',
  description: 'An open-source, source-owned component library designed for high-density SaaS applications, complex data tables, inline editing filters, and multi-tenant management dashboards in React and Tailwind CSS.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'data-heavy'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://jalcoui.com',
  repositoryUrl: 'https://github.com/jalco-ui/jalco-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with keyboard navigation support for dense tables.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-density spacing scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-density SaaS dashboard aesthetic: compact data row heights, column sort headers, badge chips, and multi-level filter bars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Data-dense SaaS dashboards, admin panels, and backend CRUD interfaces',
    'Developers needing compact data tables with copy-paste architecture',
    'Next.js applications'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Optimized for compact screen real-estate and high-volume data display',
    'Clean Tailwind CSS structure'
  ],
  weaknesses: [
    'High-density dashboard focus'
  ],
  tags: [
    'jalco-ui',
    'jalco',
    'data-table',
    'saas',
    'high-density',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Jalco UI', 'JalcoUI', 'Jalco'],
  relatedSystems: ['origin-ui', 'shadcn-ui', 'tremor'],
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
    table: {
      canonicalName: 'DenseDataTable',
      description: 'Compact data table with sticky column headers and filter bar.',
      importExample: "// Copy from components/jalco/dense-data-table.tsx\nimport { DenseDataTable } from '@/components/ui/dense-data-table';",
      docSubUrl: 'docs/components/table'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use compact padding for dense enterprise data views (`py-1.5`, `px-2.5`).',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
