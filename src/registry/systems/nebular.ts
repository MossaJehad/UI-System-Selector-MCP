import { UISystem } from '../../schemas/uiSystem.js';

export const nebular: UISystem = {
  id: 'nebular',
  name: 'Nebular (Eva Design System for Angular)',
  organization: 'Akveo',
  description: 'An open-source, customizable Angular UI library based on the Eva Design System, featuring 40+ UI components, 4 built-in visual themes (Default, Dark, Cosmic, Corporate), authentication modules, and security ACLs.',
  category: 'company-design-system',
  secondaryCategories: ['component-library', 'dashboard', 'saas'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['@nebular/theme', '@nebular/eva-icons', '@nebular/auth', '@nebular/security'],
  docsUrl: 'https://akveo.github.io/nebular',
  repositoryUrl: 'https://github.com/akveo/nebular',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Eva Design System accessibility specifications with keyboard navigation across all interactive widgets.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Eva Design System Sass token maps and CSS variables via `@nebular/theme`',
    packageName: '@nebular/theme'
  },
  icons: {
    available: true,
    packageName: '@nebular/eva-icons',
    name: 'Eva Icons (480+ icons in outline and fill styles)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern European design system aesthetic in Angular: vibrant Cosmic Violet/Neon Cyan and Corporate Blue themes, clean card widgets, and rich authentication screens.',
  noveltyLevel: 'established',
  bestFor: [
    'Angular SaaS applications, admin dashboards, IoT consoles, and back-office portals',
    'Developers wanting full authentication modules (Login, Register, Password Reset) and RBAC security in Angular',
    'Projects wanting instant theme switching between Light, Dark, Cosmic, and Corporate themes'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'Complete Angular architecture with built-in Auth (`@nebular/auth`) and Security ACLs (`@nebular/security`)',
    '4 stunning built-in visual themes (Default, Dark, Cosmic, Corporate)',
    'Official foundation for ngx-admin, one of the world’s most popular open-source Angular admin templates'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'nebular',
    'akveo',
    'eva-design',
    'angular',
    'admin',
    'dashboard',
    'auth',
    'cosmic-theme',
    'established'
  ],
  aliases: ['Nebular', 'Nebular Angular', 'Akveo Nebular', 'Eva Design Angular'],
  relatedSystems: ['taiga-ui', 'angular-material', 'primeng'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add @nebular/theme',
      packages: ['@nebular/theme', '@nebular/eva-icons'],
      peerDependencies: ['@angular/core', '@angular/common', '@angular/cdk']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button[nbButton]',
      description: 'Nebular button with status="primary" | "info" | "success" | "warning" | "danger".',
      importExample: '<button nbButton status="primary">Deploy Service</button>',
      docSubUrl: 'docs/components/button/overview'
    }
  },
  aiInstructions: {
    principles: [
      'Import `NbThemeModule.forRoot({ name: "dark" })` in `app.module.ts` or standalone providers.',
      'Use `nb-*` components and directives (e.g. `<nb-card>`, `button[nbButton]`, `<nb-sidebar>`).',
      'Use `@nebular/eva-icons` for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `NbThemeModule` (`default`, `dark`, `cosmic`, `corporate`).',
    iconUsage: 'Use `<nb-icon icon="star-outline"></nb-icon>`.',
    layoutConventions: 'Use `<nb-layout>`, `<nb-layout-header>`, `<nb-sidebar>`, `<nb-layout-column>`.'
  }
};
