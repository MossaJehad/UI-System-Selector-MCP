import { UISystem } from '../../schemas/uiSystem.js';

export const eui: UISystem = {
  id: 'eui',
  name: 'Elastic UI (EUI)',
  organization: 'Elastic',
  description: 'Elastic’s design system and React component library for building data-dense search, observability, log analysis, Kibana-like dashboards, and security analytics interfaces.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'data-heavy', 'dashboard', 'enterprise'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['@elastic/eui'],
  docsUrl: 'https://eui.elastic.co',
  repositoryUrl: 'https://github.com/elastic/eui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Elastic audits EUI for high-contrast accessibility and screen reader navigation across Kibana.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Emotion Theme / CSS variables',
    packageName: '@elastic/eui'
  },
  icons: {
    available: true,
    packageName: '@elastic/eui',
    name: 'Built-in EuiIcon component'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-density observability, log search, cyber-security, and metrics analytics dashboard aesthetic.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Log analytics, SIEM, and security monitoring consoles',
    'Search query interfaces and filter bars',
    'High-throughput data tables and virtualized data grids',
    'DevOps metrics dashboards and telemetry visualization'
  ],
  avoidFor: [
    'Consumer mobile-first apps',
    'Minimalist portfolio websites'
  ],
  strengths: [
    'Unbeatable specialized components: EuiDataGrid, EuiSearchBar, EuiFacetButton, EuiCodeEditor',
    'Extremely dense and data-rich layout primitives',
    'Dark mode & Amsterdam theme out-of-the-box',
    'Built-in search bar with structured token filters and syntax highlighting'
  ],
  weaknesses: [
    'React-specific',
    'Large bundle size if importing the complete monolithic suite'
  ],
  tags: [
    'elastic',
    'kibana',
    'observability',
    'search',
    'data-heavy',
    'dashboard',
    'dense',
    'data-tables',
    'security'
  ],
  installation: {
    react: {
      command: 'npm install @elastic/eui @emotion/react @emotion/css',
      packages: ['@elastic/eui', '@emotion/react', '@emotion/css'],
      peerDependencies: ['react', 'react-dom', '@emotion/react'],
      setupInstructions: 'Wrap your app with `<EuiProvider colorMode="dark">`.'
    }
  },
  componentGuidance: {
    searchbar: {
      canonicalName: 'EuiSearchBar',
      description: 'Advanced search bar with query parsing, autocomplete filters, and box syntax.',
      importExample: "import { EuiSearchBar } from '@elastic/eui';\n\n<EuiSearchBar onChange={({ query, error }) => handleSearch(query)} />",
      docSubUrl: 'forms/search-bar'
    },
    datagrid: {
      canonicalName: 'EuiDataGrid',
      description: 'Virtualized, high-performance data grid with column sorting, reordering, visibility, and fullscreen view.',
      importExample: "import { EuiDataGrid } from '@elastic/eui';\n\n<EuiDataGrid aria-label=\"Log Data\" columns={columns} columnVisibility={{ visibleColumns, setVisibleColumns }} rowCount={rows.length} renderCellValue={renderCellValue} />",
      docSubUrl: 'tabular-content/data-grid'
    },
    page: {
      canonicalName: 'EuiPageTemplate',
      description: 'Standard EUI page layout with templateHeader, pageHeader, and sideBar.',
      importExample: "import { EuiPageTemplate } from '@elastic/eui';\n\n<EuiPageTemplate pageHeader={{ pageTitle: 'Cluster Overview' }}>\n  Main content\n</EuiPageTemplate>",
      docSubUrl: 'layout/page-template'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap your root component in `<EuiProvider colorMode="dark" | "light">`.',
      'Use `<EuiPageTemplate>` for page layout composition.',
      'Use `<EuiFlexGroup>` and `<EuiFlexItem>` for responsive layouts.',
      'Use `<EuiIcon type="..." />` for all iconography.'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      '@mui/material',
      'lucide-react'
    ],
    themingGuide: 'Configure colorMode on `<EuiProvider colorMode="dark">`.',
    iconUsage: 'Use `<EuiIcon type="search" />` or any built-in Elastic icon names.',
    layoutConventions: 'Use EuiPageTemplate with EuiFlexGroup and EuiPanel.'
  }
};
