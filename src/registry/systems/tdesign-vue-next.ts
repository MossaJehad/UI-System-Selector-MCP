import { UISystem } from '../../schemas/uiSystem.js';

export const tdesignVueNext: UISystem = {
  id: 'tdesign-vue-next',
  name: 'Tencent TDesign Vue Next',
  organization: 'Tencent',
  description: 'Tencent’s official open-source design system and Vue 3 component library, engineered for enterprise enterprise software, cloud consoles, social developer tools, and high-density analytical applications.',
  category: 'company-design-system',
  secondaryCategories: ['component-library', 'enterprise', 'saas'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'less',
  packageNames: ['tdesign-vue-next', 'tdesign-icons-vue-next'],
  docsUrl: 'https://tdesign.tencent.com/vue-next/overview',
  repositoryUrl: 'https://github.com/Tencent/tdesign-vue-next',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across Tencent Cloud and enterprise business suites.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Less variables',
    packageName: 'tdesign-vue-next'
  },
  icons: {
    available: true,
    packageName: 'tdesign-icons-vue-next',
    name: 'TDesign Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Tencent enterprise cloud aesthetic: TDesign Brand Blue (#0052d9), dark mode switching, comprehensive data table filters, tree transfer selectors, and step wizards.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt applications wanting Tencent’s enterprise design language',
    'High-density back-office admin portals, cloud consoles, and SaaS analytics',
    'Polyglot enterprise teams sharing the TDesign design token ecosystem'
  ],
  avoidFor: [
    'React-only projects'
  ],
  strengths: [
    'Official Vue 3 component library of tech giant Tencent',
    'Comprehensive enterprise suite (Table, Tree, Transfer, Upload, DatePicker, Cascader, Drawer)',
    'Full dark mode support with automatic token switching'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'tdesign',
    'tencent',
    'vue',
    'vue3',
    'nuxt',
    'enterprise',
    'saas',
    'established'
  ],
  aliases: ['TDesign Vue Next', 'TDesign Vue', 'Tencent TDesign Vue'],
  relatedSystems: ['tdesign-react', 'element-plus', 'ant-design-vue'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install tdesign-vue-next tdesign-icons-vue-next',
      packages: ['tdesign-vue-next', 'tdesign-icons-vue-next'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `tdesign-vue-next/dist/tdesign.css` in `main.ts` and `app.use(TDesign)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 't-button',
      description: 'TDesign button with theme="primary" | "default" | "danger" | "warning" | "success".',
      importExample: '<t-button theme="primary">Save Configuration</t-button>',
      docSubUrl: 'vue-next/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<t-*>` component tags in Vue 3 templates.',
      'Import `tdesign-vue-next/dist/tdesign.css` at app root.',
      'Use `<t-icon>` or import from `tdesign-icons-vue-next`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root` or `html[theme-mode="dark"]`.',
    iconUsage: 'Use `<t-icon name="search" />`.',
    layoutConventions: 'Use `<t-layout>`, `<t-header>`, `<t-aside>`, `<t-content>`.'
  }
};
