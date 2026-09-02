import { UISystem } from '../../schemas/uiSystem.js';

export const intergalactic: UISystem = {
  id: 'intergalactic',
  name: 'Semrush Intergalactic',
  organization: 'Semrush',
  description: 'Semrush’s official open-source design system and React component suite, engineered for large-scale SEO analytics, keyword matrices, backlink explorers, competitive rank tracking, and dense search data visualization.',
  category: 'company-design-system',
  secondaryCategories: ['data-heavy', 'dashboard', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['@semcore/ui', '@semcore/d3-chart', '@semcore/icon'],
  docsUrl: 'https://developer.semrush.com/intergalactic',
  repositoryUrl: 'https://github.com/semrush/intergalactic',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA across Semrush analytics suites.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JS constants',
    packageName: '@semcore/ui'
  },
  icons: {
    available: true,
    packageName: '@semcore/icon',
    name: 'Intergalactic Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Space-age SEO analytics style: Semrush Orange (#ff642d), deep obsidian night surfaces, dense data tables, interactive D3 charts, and rank position delta badges (+3, -1).',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SEO keyword ranking, search volume, and backlink explorer tools',
    'High-density competitive intelligence and web analytics dashboards',
    'SaaS applications needing powerful interactive D3 chart components out of the box'
  ],
  avoidFor: [
    'Simple landing page brochures'
  ],
  strengths: [
    'First-class built-in D3.js chart integration (`@semcore/d3-chart`) for line, bar, area, scatter, and radar plots',
    'Massive component library with virtualized data tables, filters, and query toolbars',
    'Optimized for high-density information display'
  ],
  weaknesses: [
    'React only',
    'Large bundle footprint if not tree-shaken'
  ],
  tags: [
    'semrush',
    'intergalactic',
    'seo',
    'analytics',
    'charts',
    'd3',
    'dense',
    'data-heavy',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Intergalactic', 'Semrush Design System', 'Semcore'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @semcore/ui @semcore/d3-chart @semcore/icon',
      packages: ['@semcore/ui', '@semcore/d3-chart', '@semcore/icon'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Intergalactic action button with use="primary" | "secondary" | "tertiary".',
      importExample: "import Button from '@semcore/ui/button';\n\n<Button use=\"primary\">Analyze Keywords</Button>",
      docSubUrl: 'components/button/'
    },
    chart: {
      canonicalName: 'Plot',
      description: 'Interactive D3-powered charting wrapper.',
      importExample: "import { Plot, Line } from '@semcore/d3-chart';\n\n<Plot data={data}><Line x=\"date\" y=\"rank\" /></Plot>",
      docSubUrl: 'data-display/d3-chart/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@semcore/ui` components for search and analytics dashboards.',
      'Use `@semcore/d3-chart` for interactive data visualizations.',
      'Use Semrush Badge and Tag components with positive/negative indicators for rank deltas.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Semcore theme variables for light and dark palettes.',
    iconUsage: 'Import icons from @semcore/icon (e.g. SearchM, ChartBarM).',
    layoutConventions: 'Use Flex and Box layout components with compact spacing.'
  }
};
