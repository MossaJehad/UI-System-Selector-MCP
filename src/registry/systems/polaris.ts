import { UISystem } from '../../schemas/uiSystem.js';

export const polaris: UISystem = {
  id: 'polaris',
  name: 'Shopify Polaris',
  organization: 'Shopify',
  description: 'Shopify’s design system crafted to help developers build merchant admin experiences, commerce dashboards, and e-commerce applications with outstanding usability and visual polish.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'dashboard', 'saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@shopify/polaris', '@shopify/polaris-icons'],
  docsUrl: 'https://polaris.shopify.com',
  repositoryUrl: 'https://github.com/Shopify/polaris',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Rigorous accessibility standards ensuring merchant accessibility across global store admins.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS & JS',
    packageName: '@shopify/polaris-tokens'
  },
  icons: {
    available: true,
    packageName: '@shopify/polaris-icons',
    name: 'Polaris Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, trustworthy, approachable, merchant-first commerce polish with crisp typography and subtle borders.',
  noveltyLevel: 'established',
  bestFor: [
    'Shopify Apps and merchant extensions',
    'E-commerce back-offices, order management, and inventory portals',
    'Billing, subscription, and customer management dashboards',
    'Product catalog and checkout management interfaces'
  ],
  avoidFor: [
    'Ultra-dark cyberpunk interfaces',
    'Raw technical IDE/code-diff tooling',
    'Gaming or entertainment web applications'
  ],
  strengths: [
    'The global standard for e-commerce and merchant administration UI',
    'Extremely high usability, clear form ergonomics, and standard Page / Card / IndexTable layouts',
    'Rich ecosystem of commerce-specific icons and patterns',
    'Full multi-language and RTL localization support'
  ],
  weaknesses: [
    'Primarily React-focused for Shopify admin app ecosystem',
    'Default styling is distinctly Shopify merchant aesthetics'
  ],
  tags: [
    'shopify',
    'ecommerce',
    'merchant',
    'saas',
    'admin',
    'dashboard',
    'high-accessibility',
    'rtl'
  ],
  installation: {
    react: {
      command: 'npm install @shopify/polaris @shopify/polaris-icons @shopify/polaris-tokens',
      packages: ['@shopify/polaris', '@shopify/polaris-icons', '@shopify/polaris-tokens'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@shopify/polaris/build/esm/styles.css` and wrap your app in `<AppProvider i18n={enTranslations}>`.'
    }
  },
  componentGuidance: {
    page: {
      canonicalName: 'Page',
      description: 'Standard page container with title, subtitle, primary/secondary action buttons, and back action.',
      importExample: "import { Page, Card, Button } from '@shopify/polaris';\n\n<Page title=\"Products\" primaryAction={{ content: 'Add product', onAction: () => {} }}>\n  <Card>Product details content</Card>\n</Page>",
      docSubUrl: 'components/page'
    },
    indextable: {
      canonicalName: 'IndexTable',
      description: 'High-density index table designed for browsing collections of resources with bulk actions and sorting.',
      importExample: "import { IndexTable, useIndexResourceState } from '@shopify/polaris';\n\n<IndexTable resourceName={{ singular: 'order', plural: 'orders' }} itemCount={orders.length} selectedItemsCount={allResourcesSelected ? 'All' : selectedResources.length} onSelectionChange={handleSelectionChange} headings={[{ title: 'Order' }, { title: 'Date' }]}>\n  {rowMarkup}\n</IndexTable>",
      docSubUrl: 'components/index-table'
    },
    banner: {
      canonicalName: 'Banner',
      description: 'Callout notification banner with informational, success, warning, or critical statuses.',
      importExample: "import { Banner } from '@shopify/polaris';\n\n<Banner title=\"Order fulfilled\" tone=\"success\"><p>Tracking number has been sent to customer.</p></Banner>",
      docSubUrl: 'components/banner'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap the application root with `<AppProvider i18n={...}>`.',
      'Use `<Page>` and `<Layout>` for structuring screens.',
      'Use `<BlockStack>` and `<InlineStack>` for layout spacing instead of ad-hoc flex divs.',
      'Use `@shopify/polaris-icons` for iconography.',
      'Use `<Text>` and `<Card>` primitives for cohesive content presentation.'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      '@mui/material',
      'lucide-react (use @shopify/polaris-icons)'
    ],
    themingGuide: 'Polaris themes are managed via the `<AppProvider>` theme prop and tokens.',
    iconUsage: 'Import icons as React components from @shopify/polaris-icons (e.g. PlusIcon, DeleteIcon, SettingsIcon).',
    layoutConventions: 'Structure views with Page -> Layout -> Layout.Section -> Card -> BlockStack.'
  }
};
