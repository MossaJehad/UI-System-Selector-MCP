import { UISystem } from '../../schemas/uiSystem.js';

export const semiDesign: UISystem = {
  id: 'semi-design',
  name: 'Semi Design',
  organization: 'ByteDance (TikTok)',
  description: 'ByteDance’s comprehensive enterprise design system and React component library powering Douyin and TikTok internal enterprise systems, creator studios, and internationalized SaaS applications.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'saas', 'dashboard', 'data-heavy'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@douyinfe/semi-ui', '@douyinfe/semi-icons'],
  docsUrl: 'https://semi.design',
  repositoryUrl: 'https://github.com/DouyinFE/semi-design',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for high usability and keyboard interaction across global enterprise apps.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Semi Design Token System (CSS Custom Properties)',
    packageName: '@douyinfe/semi-ui'
  },
  icons: {
    available: true,
    packageName: '@douyinfe/semi-icons',
    name: 'Semi Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'ByteDance modern enterprise polish: refined blues, compact tables, rich charts, crisp typography, and internationalized navigation.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Internationalized SaaS platforms, creator management tools, and ad consoles',
    'High-density dashboards and data management tables',
    'Apps requiring full multi-language and RTL support out-of-the-box',
    'Enterprise portals needing ready-made charts, navigation, and feedback components'
  ],
  avoidFor: [
    'Non-React codebases',
    'Ultra-minimal retro gaming themes'
  ],
  strengths: [
    'Massive library of 60+ production components with incredible polish',
    'First-class dark mode support with automatic OS sync',
    'Semi DSM (Design System Management) token engine for custom branding',
    'Outstanding typography and table performance'
  ],
  weaknesses: [
    'React-focused',
    'Lesser known in western AI benchmarks despite powering TikTok’s massive infrastructure'
  ],
  tags: [
    'bytedance',
    'tiktok',
    'semi-design',
    'enterprise',
    'dashboard',
    'saas',
    'dark-mode',
    'rtl',
    'dense',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @douyinfe/semi-ui @douyinfe/semi-icons',
      packages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@douyinfe/semi-ui/dist/css/semi.min.css` or wrap with `<LocaleProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Semi Design button with theme="solid" | "light" | "borderless" and type="primary" | "secondary" | "tertiary" | "warning" | "danger".',
      importExample: "import { Button } from '@douyinfe/semi-ui';\nimport { IconPlus } from '@douyinfe/semi-icons';\n\n<Button theme=\"solid\" type=\"primary\" icon={<IconPlus />}>Create Campaign</Button>",
      docSubUrl: 'en-US/basic/button'
    },
    table: {
      canonicalName: 'Table',
      description: 'Enterprise data table with pagination, sorting, filters, and row selection.',
      importExample: "import { Table } from '@douyinfe/semi-ui';\n\n<Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />",
      docSubUrl: 'en-US/show/table'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@douyinfe/semi-ui/dist/css/semi.min.css`.',
      'Use Semi UI layout components (`Layout`, `Nav`, `Card`, `Space`, `Row`, `Col`).',
      'Use `@douyinfe/semi-icons` for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Toggle dark mode by setting `theme-mode="dark"` attribute on `body` or using Semi DSM themes.',
    iconUsage: 'Import icons from @douyinfe/semi-icons (e.g. IconPlus, IconSetting, IconDelete).',
    layoutConventions: 'Structure with Layout -> Header + Sider + Content + Footer.'
  }
};
