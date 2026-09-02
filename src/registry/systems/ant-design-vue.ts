import { UISystem } from '../../schemas/uiSystem.js';

export const antDesignVue: UISystem = {
  id: 'ant-design-vue',
  name: 'Ant Design Vue',
  organization: 'Ant Design Vue Community / Ant Financial Ecosystem',
  description: 'The official open-source Vue 3 implementation of Ant Design, delivering 60+ enterprise components, virtualized tables, cascading filters, drawer navigation, and design token theming matching the React Ant Design 5 specification.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'saas'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'css-in-js',
  packageNames: ['ant-design-vue', '@ant-design/icons-vue'],
  docsUrl: 'https://antdv.com',
  repositoryUrl: 'https://github.com/vueComponent/ant-design-vue',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Ant Design accessibility and keyboard interaction standards in Vue 3.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Ant Design 5 dynamic CSS-in-JS design tokens via `<a-config-provider>`',
    packageName: 'ant-design-vue'
  },
  icons: {
    available: true,
    packageName: '@ant-design/icons-vue',
    name: 'Ant Design Icons for Vue'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Asian enterprise computing style: Ant Design Blue (#1677ff), clean compact tables, tree menus, modal confirmations, and dense data input grids.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Vue 3 and Nuxt enterprise web applications wanting Ant Design 5 design tokens and components',
    'Complex data management portals with rich tables, cascading filters, and tree controls',
    'Teams sharing design assets and mental models between React and Vue Ant Design ecosystems'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'Complete Vue 3 parity with Ant Design 5 design tokens and component specifications',
    'High data density and extensive form validation capabilities',
    'CSS-in-JS style injection with zero build-time Less configuration required'
  ],
  weaknesses: [
    'Distinctive Ant Design corporate visual aesthetic'
  ],
  tags: [
    'ant-design-vue',
    'antdv',
    'vue',
    'vue3',
    'nuxt',
    'enterprise',
    'dashboard',
    'data-heavy',
    'dark-mode',
    'mainstream'
  ],
  aliases: ['Ant Design Vue', 'antdv', 'AntD Vue'],
  relatedSystems: ['ant-design', 'element-plus', 'naive-ui'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install ant-design-vue @ant-design/icons-vue',
      packages: ['ant-design-vue', '@ant-design/icons-vue'],
      peerDependencies: ['vue'],
      setupInstructions: 'Use `app.use(Antd)` and wrap application in `<a-config-provider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'a-button',
      description: 'Ant Design Vue button with type="primary" | "dashed" | "link" | "text".',
      importExample: '<a-button type="primary">Submit Data</a-button>',
      docSubUrl: 'components/button/'
    },
    table: {
      canonicalName: 'a-table',
      description: 'Enterprise data table with sorting, filtering, and pagination.',
      importExample: '<a-table :dataSource="dataSource" :columns="columns" />',
      docSubUrl: 'components/table/'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<a-config-provider :theme="{ algorithm: theme.darkAlgorithm }">`.',
      'Use `a-layout`, `a-layout-header`, `a-layout-sider`, and `a-layout-content` for application shell.',
      'Use `a-form` and `a-form-item` with reactive rules for form validation.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme tokens in `<a-config-provider :theme="{ token: { colorPrimary: "#1677ff" } }">`.',
    iconUsage: 'Import icons from `@ant-design/icons-vue` (e.g. `import { SearchOutlined } from "@ant-design/icons-vue"`).',
    layoutConventions: 'Use `a-row` and `a-col` with gutter for responsive grid layouts.'
  }
};
