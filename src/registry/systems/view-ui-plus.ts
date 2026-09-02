import { UISystem } from '../../schemas/uiSystem.js';

export const viewUiPlus: UISystem = {
  id: 'view-ui-plus',
  name: 'View UI Plus (formerly iView)',
  organization: 'View Design Community',
  description: 'An open-source, enterprise-class UI component library for Vue 3 (formerly known as iView), featuring 80+ high-quality components, rich admin dashboard layouts, complex data tables, and comprehensive documentation.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'saas', 'dashboard', 'data-heavy'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'less',
  packageNames: ['view-ui-plus'],
  docsUrl: 'https://www.iviewui.com/view-ui-plus',
  repositoryUrl: 'https://github.com/view-design/ViewUIPlus',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides keyboard accessible forms, dropdowns, and modal dialogs.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Less variables and CSS custom properties via `@view-ui-plus` themes',
    packageName: 'view-ui-plus'
  },
  icons: {
    available: true,
    packageName: 'view-ui-plus',
    name: 'View UI Icons (ionicons bundle)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Enterprise administration aesthetic: View UI Primary Blue (#2d8cf0), structured multi-column data tables, side navigation tree menus, and compact form controls.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 enterprise admin dashboards, CRM platforms, and back-office management systems',
    'Developers migrating legacy iView (Vue 2) applications to Vue 3',
    'Complex data tables with sorting, filtering, and export'
  ],
  avoidFor: [
    'React or Angular projects'
  ],
  strengths: [
    'One of the original premier Vue enterprise component suites (80+ components)',
    'Full Vue 3 and TypeScript rewrite of the acclaimed iView framework',
    'Complete admin ecosystem with official admin templates and layout suites'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'view-ui-plus',
    'iview',
    'vue3',
    'enterprise',
    'admin',
    'dashboard',
    'saas',
    'established'
  ],
  aliases: ['View UI Plus', 'View UI', 'iView', 'iView 4', 'View Design'],
  relatedSystems: ['element-plus', 'ant-design-vue', 'arco-design-vue'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install view-ui-plus',
      packages: ['view-ui-plus'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `view-ui-plus/dist/styles/viewuiplus.css` in `main.ts` and `app.use(ViewUIPlus)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'View UI Plus button with type="primary" | "info" | "success" | "warning" | "error".',
      importExample: '<Button type="primary">Submit Data</Button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use View UI Plus components in Vue 3 templates.',
      'Import `view-ui-plus/dist/styles/viewuiplus.css` at app root.',
      'Use View UI layout primitives (`Layout`, `Header`, `Sider`, `Content`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Less variable overrides.',
    iconUsage: 'Use `<Icon type="ios-search" />`.',
    layoutConventions: 'Use `Layout`, `Header`, `Sider`, and `Content`.'
  }
};
