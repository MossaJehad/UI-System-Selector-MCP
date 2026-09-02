import { UISystem } from '../../schemas/uiSystem.js';

export const kiboUi: UISystem = {
  id: 'kibo-ui',
  name: 'Kibo UI',
  organization: 'Hayden Bleasel / Kibo UI Community',
  description: 'An open-source collection of copy-paste React components built on top of shadcn/ui and Radix Primitives, providing specialized SaaS components such as Kanban boards, credit balance pills, pricing calculators, and command palettes.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'dashboard', 'developer-tool'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['lucide-react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://kibo-ui.com',
  repositoryUrl: 'https://github.com/haydenbleasel/kibo',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on Radix UI primitives and Tailwind CSS with accessible keyboard focus.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens matching shadcn/ui CSS variables',
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
  aesthetic: 'Sleek, minimalist SaaS aesthetic: credit counters, drag-and-drop Kanban columns, organization switchers, and pricing calculators.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SaaS applications needing specialized workflow blocks (Kanban, Credit Balance, Org Switcher, Pricing Table)',
    'React & Next.js projects extending their shadcn/ui component library',
    'Developers wanting source-owned advanced SaaS patterns'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Provides complex SaaS components rarely included in standard component libraries (Kanban, Organization Switcher, Credit Balance)',
    '100% source-owned copy-paste architecture compatible with shadcn/ui',
    'High visual polish and minimal bundle overhead'
  ],
  weaknesses: [
    'Requires existing Tailwind / shadcn/ui setup'
  ],
  tags: [
    'kibo-ui',
    'shadcn',
    'source-owned',
    'copy-paste',
    'saas',
    'kanban',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Kibo UI', 'Kibo', 'Kibo Components'],
  relatedSystems: ['shadcn-ui', 'origin-ui', 'magic-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx shadcn@latest add ... # or copy from kibo-ui.com',
      packages: ['lucide-react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Copy component files from kibo-ui.com into your project.'
    }
  },
  componentGuidance: {
    kanban: {
      canonicalName: 'KanbanBoard',
      description: 'Interactive drag-and-drop Kanban board with column state management.',
      importExample: "// Copy from components/kibo/kanban.tsx\nimport { KanbanBoard } from '@/components/ui/kanban';",
      docSubUrl: 'components/kanban'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code into the user’s `components/` directory.',
      'Maintain compatibility with shadcn/ui `cn()` utility.',
      'Use Lucide icons for visual affordances.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme via standard Tailwind CSS variables.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
