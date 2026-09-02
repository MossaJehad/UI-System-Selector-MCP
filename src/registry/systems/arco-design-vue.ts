import { UISystem } from '../../schemas/uiSystem.js';

export const arcoDesignVue: UISystem = {
  id: 'arco-design-vue',
  name: 'Arco Design Vue',
  organization: 'ByteDance',
  description: 'ByteDance’s official enterprise design system and Vue 3 component suite, engineered for large-scale enterprise SaaS applications, content creators, high-density data analytics tables, and multi-theme design tokens.',
  category: 'company-design-system',
  secondaryCategories: ['component-library', 'enterprise', 'data-heavy', 'saas'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'less',
  packageNames: ['@arco-design/web-vue'],
  docsUrl: 'https://arco.design/vue/docs/start',
  repositoryUrl: 'https://github.com/arco-design/arco-design-vue',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across ByteDance enterprise platforms and creator portals.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in Less variables and CSS custom properties via `@arco-themes`',
    packageName: '@arco-design/web-vue'
  },
  icons: {
    available: true,
    packageName: '@arco-design/web-vue',
    name: 'Arco Vue Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'ByteDance modern enterprise SaaS aesthetic: Arco Arc Blue (#165dff), ultra-dense data tables, multi-column filters, dark theme, and rich typography.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt enterprise web applications, admin portals, and data analytics dashboards',
    'Developers wanting ByteDance’s design language in Vue 3',
    'Complex data grid tables, tree selects, and form validation'
  ],
  avoidFor: [
    'React-only projects'
  ],
  strengths: [
    'Official Vue 3 implementation of ByteDance Arco Design System',
    'Comprehensive enterprise suite (60+ components with TypeScript and JSX support)',
    'Dynamic multi-theme switching engine and dark mode'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'arco-design',
    'bytedance',
    'vue',
    'vue3',
    'nuxt',
    'enterprise',
    'saas',
    'established'
  ],
  aliases: ['Arco Design Vue', 'Arco Vue', 'ByteDance Vue'],
  relatedSystems: ['arco-design', 'element-plus', 'ant-design-vue'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install @arco-design/web-vue',
      packages: ['@arco-design/web-vue'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@arco-design/web-vue/dist/arco.css` in `main.ts` and `app.use(ArcoVue)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'a-button',
      description: 'Arco Vue button with type="primary" | "secondary" | "dashed" | "outline" | "text".',
      importExample: '<a-button type="primary">Submit</a-button>',
      docSubUrl: 'vue/component/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<a-*>` component tags in Vue 3 templates.',
      'Import `@arco-design/web-vue/dist/arco.css` at app root.',
      'Import icons from `@arco-design/web-vue/es/icon`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Use CSS custom properties or `@arco-themes` packages for theming.',
    iconUsage: 'Use `<icon-search />` from `@arco-design/web-vue/es/icon`.',
    layoutConventions: 'Use `<a-row>` and `<a-col>` or standard flexbox.'
  }
};
