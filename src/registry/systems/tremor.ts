import { UISystem } from '../../schemas/uiSystem.js';

export const tremor: UISystem = {
  id: 'tremor',
  name: 'Tremor (Tremor Raw)',
  organization: 'Tremor Community',
  description: 'An open-source React dashboard and data visualization component library built with Tailwind CSS, Recharts, and Radix Primitives, engineered for financial metric cards, KPI sparklines, bar/area charts, and modern analytics dashboards.',
  category: 'component-library',
  secondaryCategories: ['dashboard', 'data-heavy', 'saas', 'source-owned'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['@tremor/react', 'recharts', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://tremor.so',
  repositoryUrl: 'https://github.com/tremorlabs/tremor',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on top of Radix UI primitives and accessible SVG charts.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS color palettes and Tremor color extensions',
    packageName: '@tremor/react'
  },
  icons: {
    available: true,
    name: 'Remix Icons / Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Crisp financial analytics style: Tremor Blue (#3b82f6) and Emerald Green KPI cards, elegant Sparkline curves, DeltaBar badges (+14.2%), and clean metric grids.',
  noveltyLevel: 'established',
  bestFor: [
    'SaaS revenue dashboards, Stripe billing metrics, and KPI analytics screens',
    'Interactive time-series charts (AreaChart, BarChart, LineChart, DonutChart, ScatterChart)',
    'React and Next.js applications using Tailwind CSS'
  ],
  avoidFor: [
    'Mobile game interfaces'
  ],
  strengths: [
    'The premier dashboard and data visualization library for the Tailwind CSS ecosystem',
    'Exceptional charting components built on Recharts (AreaChart, BarChart, LineChart, Tracker, ProgressBar)',
    'Seamless copy-paste source-owned component options via Tremor Raw'
  ],
  weaknesses: [
    'Strict dependency on Tailwind CSS and React'
  ],
  tags: [
    'tremor',
    'dashboard',
    'charts',
    'analytics',
    'tailwind',
    'react',
    'next',
    'kpi',
    'fintech',
    'established'
  ],
  aliases: ['Tremor', 'Tremor Raw', 'Tremor UI'],
  systemTypes: ['component-library', 'source-owned'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @tremor/react recharts clsx tailwind-merge',
      packages: ['@tremor/react', 'recharts', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Add Tremor content paths and color tokens to `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'Card',
      description: 'Tremor KPI analytics metric card.',
      importExample: "import { Card, Metric, Text } from '@tremor/react';\n\n<Card className=\"max-w-xs\"><Text>Monthly Recurring Revenue</Text><Metric>$74,520</Metric></Card>",
      docSubUrl: 'components/card'
    },
    areachart: {
      canonicalName: 'AreaChart',
      description: 'Responsive time-series area chart with tooltip.',
      importExample: "import { AreaChart } from '@tremor/react';\n\n<AreaChart data={chartdata} index=\"date\" categories={['Revenue', 'Expenses']} colors={['blue', 'rose']} />",
      docSubUrl: 'components/area-chart'
    }
  },
  aiInstructions: {
    principles: [
      'Use Tremor `Card`, `Metric`, `Text`, and `BadgeDelta` for KPI metrics.',
      'Use Tremor `AreaChart`, `BarChart`, `DonutChart` for dashboard visualizations.',
      'Configure Tailwind config with Tremor content paths.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure Tremor colors in `tailwind.config.js`.',
    iconUsage: 'Use `@remixicon/react` or `lucide-react`.',
    layoutConventions: 'Use Grid and Flex utilities with Tailwind CSS.'
  }
};
