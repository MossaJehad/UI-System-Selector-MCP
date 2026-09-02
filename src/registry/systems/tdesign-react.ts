import { UISystem } from '../../schemas/uiSystem.js';

export const tdesignReact: UISystem = {
  id: 'tdesign-react',
  name: 'Tencent TDesign (React)',
  organization: 'Tencent',
  description: 'Tencent’s official enterprise design system and multi-framework component library (React, Vue 3, Vue 2, Angular, Miniprogram, Flutter), engineered for large enterprise SaaS, gaming platforms, WeChat ecosystems, and cloud operations.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'dashboard', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['tdesign-react', 'tdesign-icons-react'],
  docsUrl: 'https://tdesign.tencent.com/react',
  repositoryUrl: 'https://github.com/Tencent/tdesign-react',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Tencent Cloud and enterprise business tools.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: 'tdesign-react'
  },
  icons: {
    available: true,
    packageName: 'tdesign-icons-react',
    name: 'TDesign Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Modern Asian enterprise aesthetic: Tencent Blue (#0052d9), clean compact tables, watermark security overlays, and multi-tier tree menus.',
  noveltyLevel: 'established',
  bestFor: [
    'Tencent Cloud extensions, gaming platform dashboards, and WeChat mini-program backends',
    'High-density enterprise SaaS portals and financial monitoring hubs',
    'Multi-framework enterprise teams sharing design tokens across React, Vue, and Mobile'
  ],
  avoidFor: [
    'Retro pixel-art games'
  ],
  strengths: [
    'Complete enterprise ecosystem spanning React, Vue 3, Vue 2, Angular, Mobile, and Miniprograms',
    'High-density data tables with virtual scroll, tree data, and drag reordering',
    'Built-in security watermark and sensitive data masking components'
  ],
  weaknesses: [
    'Primary documentation origin in Chinese (with English translation available)'
  ],
  tags: [
    'tencent',
    'tdesign',
    'enterprise',
    'dashboard',
    'saas',
    'dark-mode',
    'dense',
    'established'
  ],
  aliases: ['TDesign', 'Tencent Design System', 'TDesign React'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install tdesign-react tdesign-icons-react',
      packages: ['tdesign-react', 'tdesign-icons-react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `tdesign-react/dist/tdesign.css` at your application root.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'TDesign button with theme="primary" | "default" | "danger" | "warning" | "success".',
      importExample: "import { Button } from 'tdesign-react';\n\n<Button theme=\"primary\">Submit</Button>",
      docSubUrl: 'components/button'
    },
    table: {
      canonicalName: 'Table',
      description: 'TDesign enterprise table with column sorting, filters, and pagination.',
      importExample: "import { Table } from 'tdesign-react';\n\n<Table data={data} columns={columns} rowKey=\"id\" />",
      docSubUrl: 'components/table'
    }
  },
  aiInstructions: {
    principles: [
      'Import `tdesign-react/dist/tdesign.css` at root.',
      'Use TDesign Layout, Header, Aside, and Content for application shell.',
      'Apply Tencent theme tokens for dark/light theme switching.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Switch themes using `document.documentElement.setAttribute("theme-mode", "dark")`.',
    iconUsage: 'Import icons from `tdesign-icons-react` (e.g. `import { SearchIcon } from "tdesign-icons-react"`).',
    layoutConventions: 'Use Layout, Row, and Col layout components.'
  }
};
