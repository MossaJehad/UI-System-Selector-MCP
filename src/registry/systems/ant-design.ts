import { UISystem } from '../../schemas/uiSystem.js';

export const antDesign: UISystem = {
  id: 'ant-design',
  name: 'Ant Design',
  organization: 'Ant Group (Alibaba)',
  description: 'An enterprise-class UI design language and React component library with an enormous ecosystem of components, dynamic design tokens via CSS-in-JS (v5), and comprehensive enterprise capabilities.',
  category: 'enterprise',
  secondaryCategories: ['saas', 'dashboard', 'data-heavy'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['antd', '@ant-design/icons'],
  docsUrl: 'https://ant.design',
  repositoryUrl: 'https://github.com/ant-design/ant-design',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'A',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides standard keyboard and ARIA navigation; some advanced components require careful configuration for full WCAG AA.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Ant Design Token System (ConfigProvider theme)',
    packageName: 'antd'
  },
  icons: {
    available: true,
    packageName: '@ant-design/icons',
    name: 'Ant Design Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Classic enterprise administration layout: deep blues, dense table grids, multi-level dropdown menus, modal workflows.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Massive enterprise back-offices and operations management systems',
    'Complex nested data tables, tree selects, and form builders',
    'Internal administration tooling'
  ],
  avoidFor: [
    'Lightweight consumer mobile sites',
    'Minimalist creative portfolios'
  ],
  strengths: [
    'One of the largest, most battle-tested component ecosystems in web development history',
    'Rich data display (Table, Tree, Transfer, Cascader, DatePicker)',
    'Dynamic runtime theming via `<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>`'
  ],
  weaknesses: [
    'Heavy bundle size and distinct Ant Design enterprise look',
    'Can be difficult to override styling without using the token algorithm'
  ],
  tags: [
    'ant-design',
    'alibaba',
    'enterprise',
    'dashboard',
    'data-tables',
    'forms',
    'dark-mode',
    'rtl'
  ],
  installation: {
    react: {
      command: 'npm install antd @ant-design/icons',
      packages: ['antd', '@ant-design/icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap root in `<ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Ant Design button with type="primary" | "default" | "dashed" | "link" | "text".',
      importExample: "import { Button } from 'antd';\nimport { PlusOutlined } from '@ant-design/icons';\n\n<Button type=\"primary\" icon={<PlusOutlined />}>New Entry</Button>",
      docSubUrl: 'components/button'
    },
    table: {
      canonicalName: 'Table',
      description: 'Comprehensive enterprise table with pagination, sorting, filtering, and row expansion.',
      importExample: "import { Table } from 'antd';\n\n<Table columns={columns} dataSource={data} rowKey=\"id\" />",
      docSubUrl: 'components/table'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ConfigProvider>`.',
      'Use Ant Design layout primitives (`Layout`, `Menu`, `Card`, `Space`, `Row`, `Col`).',
      'Use `@ant-design/icons` for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>` for dark mode.',
    iconUsage: 'Import icons from @ant-design/icons (e.g. SettingOutlined, UserOutlined).',
    layoutConventions: 'Structure with Layout -> Header + Sider + Content + Footer.'
  }
};
