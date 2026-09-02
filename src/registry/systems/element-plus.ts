import { UISystem } from '../../schemas/uiSystem.js';

export const elementPlus: UISystem = {
  id: 'element-plus',
  name: 'Element Plus',
  organization: 'Element Plus Community (Eleme / Alibaba Ecosystem)',
  description: 'An open-source, enterprise-grade Vue 3 component library and design system, delivering comprehensive desktop administrative UI components, virtualized tables, cascading selectors, tree data views, and extensive internationalization.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'dashboard', 'data-heavy', 'saas'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'sass',
  packageNames: ['element-plus', '@element-plus/icons-vue'],
  docsUrl: 'https://element-plus.org',
  repositoryUrl: 'https://github.com/element-plus/element-plus',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across desktop enterprise administration interfaces.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and SCSS variables',
    packageName: 'element-plus'
  },
  icons: {
    available: true,
    packageName: '@element-plus/icons-vue',
    name: 'Element Plus Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Asian enterprise desktop computing aesthetic: Element Blue (#409eff), clean compact tables, tree menus, drawer filters, and high-density administration panels.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Vue 3 and Nuxt enterprise back-office management systems and CRM portals',
    'Complex data tables with virtual scrolling, column filtering, and row expansion (`el-table-v2`)',
    'High-volume desktop enterprise workflows with deep cascading selectors and date pickers'
  ],
  avoidFor: [
    'Consumer mobile-only shopping feeds'
  ],
  strengths: [
    'The most widely adopted enterprise component library for Vue 3 worldwide',
    'High performance with `el-table-v2` virtualized data table rendering 100,000+ rows',
    'Extensive internationalization (i18n) supporting 50+ languages out of the box'
  ],
  weaknesses: [
    'Tailored primarily for desktop web applications'
  ],
  tags: [
    'element-plus',
    'vue',
    'vue3',
    'nuxt',
    'enterprise',
    'dashboard',
    'data-heavy',
    'dark-mode',
    'mainstream'
  ],
  aliases: ['Element Plus', 'Element UI', 'Element+', 'Element 3'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install element-plus @element-plus/icons-vue',
      packages: ['element-plus', '@element-plus/icons-vue'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `element-plus/dist/index.css` and use `app.use(ElementPlus)` in `main.ts`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'el-button',
      description: 'Element Plus button with type="primary" | "success" | "warning" | "danger" | "info".',
      importExample: '<el-button type="primary">Query Records</el-button>',
      docSubUrl: 'en-US/component/button.html'
    },
    table: {
      canonicalName: 'el-table',
      description: 'Full-featured enterprise table with el-table-column.',
      importExample: '<el-table :data="tableData" stripe><el-table-column prop="date" label="Date" /><el-table-column prop="name" label="Name" /></el-table>',
      docSubUrl: 'en-US/component/table.html'
    }
  },
  aiInstructions: {
    principles: [
      'Import `element-plus/dist/index.css` at root.',
      'Use `el-container`, `el-header`, `el-aside`, `el-main` for layout hierarchy.',
      'Use `el-form` with `rules` for reactive validation.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Toggle dark mode using class `dark` on `<html>` and importing `element-plus/theme-chalk/dark/css-vars.css`.',
    iconUsage: 'Import icons from `@element-plus/icons-vue` (e.g. `Search`, `Edit`, `Check`).',
    layoutConventions: 'Use `el-row` and `el-col` for grid layouts.'
  }
};
