import { UISystem } from '../../schemas/uiSystem.js';

export const arcoDesign: UISystem = {
  id: 'arco-design',
  name: 'Arco Design',
  organization: 'ByteDance',
  description: 'ByteDance’s open-source enterprise design system with React and Vue implementations, providing rich tokens, atomic style generation, dark mode, and multi-framework flexibility.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'saas', 'dashboard', 'data-heavy'],
  frameworks: ['react', 'vue'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@arco-design/web-react', '@arco-design/web-vue'],
  docsUrl: 'https://arco.design',
  repositoryUrl: 'https://github.com/arco-design/arco-design',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for high enterprise usability and accessibility standards.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Arco Design Tokens / Less / CSS Variables',
    packageName: '@arco-design/web-react'
  },
  icons: {
    available: true,
    packageName: '@arco-design/web-react',
    name: 'Arco Icons (exported from framework package subpaths)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Modern, crisp, high-density enterprise computing aesthetic with deep token theming and Vue/React parity.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Enterprise SaaS applications in either React or Vue 3',
    'Complex data dashboards, management backends, and analytics portals',
    'Projects wanting comprehensive out-of-the-box components with rich token theming'
  ],
  avoidFor: [
    'Minimalist personal blogs'
  ],
  strengths: [
    'Available for both React (`@arco-design/web-react`) and Vue 3 (`@arco-design/web-vue`)',
    'Rich ecosystem of 60+ components with data tables, charts, trees, and cascader',
    'Built-in dark mode and CSS variable token customization'
  ],
  weaknesses: [
    'Less mainstream recognition in western developer tutorials'
  ],
  tags: [
    'bytedance',
    'arco-design',
    'enterprise',
    'react',
    'vue',
    'multi-framework',
    'dashboard',
    'dark-mode',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @arco-design/web-react',
      packages: ['@arco-design/web-react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@arco-design/web-react/dist/css/arco.css` at application entry point.'
    },
    vue: {
      command: 'npm install @arco-design/web-vue',
      packages: ['@arco-design/web-vue'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@arco-design/web-vue/dist/arco.css` at application entry point.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Arco button with type="primary" | "secondary" | "dashed" | "outline" | "text".',
      importExample: "import { Button } from '@arco-design/web-react';\nimport { IconPlus } from '@arco-design/web-react/icon';\n\n<Button type=\"primary\" icon={<IconPlus />}>Add Metric</Button>",
      docSubUrl: 'react/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import Arco CSS stylesheet.',
      'Use Arco layout primitives (`Layout`, `Card`, `Space`, `Grid`).',
      'Use `@arco-design/web-react/icon` (or Vue icon equivalent) for icons.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Toggle dark mode by setting `arco-theme="dark"` on `document.body`.',
    iconUsage: 'Import icons from @arco-design/web-react/icon.',
    layoutConventions: 'Structure with Layout -> Header + Sider + Content + Footer.'
  }
};
