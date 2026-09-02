import { UISystem } from '../../schemas/uiSystem.js';

export const patternfly: UISystem = {
  id: 'patternfly',
  name: 'Red Hat PatternFly',
  organization: 'Red Hat',
  description: 'Red Hat’s open-source design system powering OpenShift, Ansible, and enterprise Linux administration portals, engineered for complex IT architectures, topology graphs, and system management.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'developer-tool', 'dashboard', 'data-heavy'],
  frameworks: ['react', 'css-only', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@patternfly/react-core', '@patternfly/react-icons', '@patternfly/react-table', '@patternfly/react-topology'],
  docsUrl: 'https://www.patternfly.org',
  repositoryUrl: 'https://github.com/patternfly/patternfly-react',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'PatternFly is rigorously audited for accessibility across Red Hat’s global open-source enterprise products.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / PatternFly Tokens',
    packageName: '@patternfly/react-tokens'
  },
  icons: {
    available: true,
    packageName: '@patternfly/react-icons',
    name: 'PatternFly Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'OpenShift / Linux enterprise portal style: Masthead bar, side navigation, card dashboards, server metrics, topology graphs.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Kubernetes, OpenShift, and container management consoles',
    'Linux server administration and telemetry tools',
    'Network topology diagrams and cluster node visualizations (@patternfly/react-topology)',
    'Enterprise IT infrastructure portals'
  ],
  avoidFor: [
    'Consumer photo sharing apps',
    'Casual mobile-first landing pages'
  ],
  strengths: [
    'Unique, dedicated topology visualization package (`@patternfly/react-topology`) for node/edge graphs',
    'Comprehensive Page layout, Masthead, Sidebar, and PageSection components',
    'High-density data tables and log viewer components',
    'Built-in dark theme class (`pf-v5-theme-dark`)'
  ],
  weaknesses: [
    'Strong enterprise IT aesthetic that is distinct from generic consumer apps'
  ],
  tags: [
    'redhat',
    'openshift',
    'kubernetes',
    'devops',
    'enterprise',
    'dense',
    'topology',
    'dark-mode',
    'data-heavy'
  ],
  installation: {
    react: {
      command: 'npm install @patternfly/react-core @patternfly/react-icons @patternfly/react-table',
      packages: ['@patternfly/react-core', '@patternfly/react-icons', '@patternfly/react-table'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@patternfly/react-core/dist/styles/base.css` at the top of your application entry point.'
    }
  },
  componentGuidance: {
    page: {
      canonicalName: 'Page',
      description: 'Full layout container with Masthead, Sidebar, and PageSection components.',
      importExample: "import { Page, Masthead, PageSidebar, PageSection } from '@patternfly/react-core';\n\n<Page masthead={<Masthead>OpenShift Console</Masthead>} sidebar={<PageSidebar>Nav</PageSidebar>}>\n  <PageSection>Dashboard Overview</PageSection>\n</Page>",
      docSubUrl: 'components/page'
    },
    button: {
      canonicalName: 'Button',
      description: 'PatternFly button with variant="primary" | "secondary" | "danger" | "link" | "plain".',
      importExample: "import { Button } from '@patternfly/react-core';\n\n<Button variant=\"primary\">Deploy Cluster</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@patternfly/react-core/dist/styles/base.css`.',
      'Use `<Page>`, `<Masthead>`, `<PageSidebar>`, and `<PageSection>` for structural layouts.',
      'Use `@patternfly/react-icons` for icons.',
      'Use `<Flex>`, `<Grid>`, and `<Stack>` for component layout.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Toggle dark mode by adding the class `pf-v5-theme-dark` to the `<html>` element.',
    iconUsage: 'Import icons from @patternfly/react-icons (e.g. CogIcon, ServerIcon, CheckCircleIcon).',
    layoutConventions: 'Structure views with Page -> Masthead + Sidebar -> PageSection -> Card / Table.'
  }
};
