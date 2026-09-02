import { UISystem } from '../../schemas/uiSystem.js';

export const cloudscape: UISystem = {
  id: 'cloudscape',
  name: 'AWS Cloudscape Design System',
  organization: 'Amazon Web Services (AWS)',
  description: 'AWS’s open-source design system purpose-built for complex cloud management, DevOps consoles, enterprise resource allocation, and massive data-dense administration interfaces.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'developer-tool', 'dashboard', 'data-heavy'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@cloudscape-design/components', '@cloudscape-design/global-styles', '@cloudscape-design/design-tokens'],
  docsUrl: 'https://cloudscape.design',
  repositoryUrl: 'https://github.com/cloudscape-design/components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed and tested specifically for high accessibility standards across AWS Management Console products.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / JS Tokens',
    packageName: '@cloudscape-design/design-tokens'
  },
  icons: {
    available: true,
    packageName: '@cloudscape-design/components',
    name: 'Built-in Cloudscape Icons via Icon component'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-density, professional AWS console look: split panels, breadcrumbs, app layout, side navigation, filtering tables.',
  noveltyLevel: 'established',
  bestFor: [
    'Cloud infrastructure and server management consoles',
    'DevOps, CI/CD, and Kubernetes administrative dashboards',
    'Data-heavy resource explorers with search, sort, pagination, and multi-filter',
    'Multi-step wizards and configuration flows'
  ],
  avoidFor: [
    'Casual mobile apps',
    'Consumer social media interfaces',
    'Landing pages or marketing websites'
  ],
  strengths: [
    'Complete AppLayout system out-of-the-box (Navigation drawer, Tools drawer, Notifications, Breadcrumbs)',
    'Best-in-class enterprise Table with column selector, text filter, and property filtering',
    'Built-in Wizard component for multi-step complex provisioning flows',
    'Extremely high component density and data compactness'
  ],
  weaknesses: [
    'Distinctive AWS look; difficult to heavily customize branding without overriding global tokens',
    'React-only support'
  ],
  tags: [
    'aws',
    'cloud',
    'devops',
    'enterprise',
    'dashboard',
    'dense',
    'data-tables',
    'app-layout',
    'wizard'
  ],
  installation: {
    react: {
      command: 'npm install @cloudscape-design/components @cloudscape-design/global-styles @cloudscape-design/design-tokens',
      packages: ['@cloudscape-design/components', '@cloudscape-design/global-styles', '@cloudscape-design/design-tokens'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@cloudscape-design/global-styles/index.css` at the root of your application.'
    }
  },
  componentGuidance: {
    applayout: {
      canonicalName: 'AppLayout',
      description: 'Full-page layout manager providing responsive side navigation, tool drawer, notifications banner, and breadcrumb slot.',
      importExample: "import AppLayout from '@cloudscape-design/components/app-layout';\n\n<AppLayout\n  navigation={<SideNavigation items={navItems} />}\n  tools={<HelpPanel header=\"Help\">Help content</HelpPanel>}\n  content={<MainContent />}\n/>",
      docSubUrl: 'components/app-layout'
    },
    table: {
      canonicalName: 'Table',
      description: 'Enterprise data table with column definitions, selection, filtering, and pagination.',
      importExample: "import Table from '@cloudscape-design/components/table';\nimport Header from '@cloudscape-design/components/header';\nimport Pagination from '@cloudscape-design/components/pagination';\n\n<Table\n  columnDefinitions={columnDefinitions}\n  items={items}\n  header={<Header counter=\"(10)\">Instances</Header>}\n  pagination={<Pagination currentPageIndex={1} pagesCount={2} />}\n/>",
      docSubUrl: 'components/table'
    },
    wizard: {
      canonicalName: 'Wizard',
      description: 'Multi-step guided setup with automatic step validation and summary review.',
      importExample: "import Wizard from '@cloudscape-design/components/wizard';\n\n<Wizard steps={steps} activeStepIndex={activeStep} onNavigate={({ detail }) => setActiveStep(detail.requestedStepIndex)} />",
      docSubUrl: 'components/wizard'
    }
  },
  aiInstructions: {
    principles: [
      'Always structure main application views with `<AppLayout>` rather than custom flex/grid shell wrappers.',
      'Use `<ContentLayout>` and `<Header>` for page headers and action button toolbars.',
      'Use Cloudscape Form, FormField, and Input for all inputs.',
      'Use `<SpaceBetween size="m">` or `<Grid>` for consistent spacing.',
      'Leverage `<PropertyFilter>` or `<TextFilter>` when building tables.'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      '@mui/material',
      'lucide-react (use Cloudscape <Icon name="..." />)',
      'tailwind raw wrappers for layouts'
    ],
    themingGuide: 'Use applyMode(Mode.Dark) or Mode.Light from @cloudscape-design/global-styles to toggle dark mode dynamically.',
    iconUsage: 'Use the `<Icon name="settings" />` component or built-in icon props on Button and Link.',
    layoutConventions: 'Structure views with AppLayout -> ContentLayout -> Container -> SpaceBetween.'
  }
};
