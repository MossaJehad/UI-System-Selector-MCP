import { UISystem } from '../../schemas/uiSystem.js';

export const siemensIx: UISystem = {
  id: 'siemens-ix',
  name: 'Siemens Industrial Experience (Siemens iX)',
  organization: 'Siemens AG',
  description: 'Siemens’s official open-source industrial design system and Web Component / Angular / React component suite, engineered for Industry 4.0, smart factory automation, SCADA systems, power grid management, and high-reliability industrial IoT.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'web-components'],
  frameworks: ['web-components', 'angular', 'react', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@siemens/ix', '@siemens/ix-angular', '@siemens/ix-react', '@siemens/ix-icons'],
  docsUrl: 'https://ix.siemens.io',
  repositoryUrl: 'https://github.com/siemens/ix',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA and industrial touch-screen safety standards.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties via Siemens iX theme packages',
    packageName: '@siemens/ix'
  },
  icons: {
    available: true,
    packageName: '@siemens/ix-icons',
    name: 'Siemens iX Industrial Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-precision Industry 4.0 industrial aesthetic: Siemens Petrol / Cyan (#00646e / #00e1d9), dark factory floor displays, alarm severity badges (emergency, alarm, warning, info), and SCADA motor/pump statuses.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Smart factory automation, Industry 4.0 monitoring, and PLC/SCADA control screens',
    'Power generation, electrical grid monitoring, and building automation consoles',
    'Industrial touch panels (HMIs) and high-density telemetry dashboards'
  ],
  avoidFor: [
    'Social media lifestyle feeds'
  ],
  strengths: [
    'Unrivaled domain excellence for industrial automation and SCADA control panels',
    'Multi-framework support with first-class Angular and React wrappers',
    'Specialized industrial components: AlarmList, ECharts integration, KeyValue list, KPI card, TreeView'
  ],
  weaknesses: [
    'Industrial automation domain specialization'
  ],
  tags: [
    'siemens',
    'siemens-ix',
    'industrial',
    'iot',
    'scada',
    'factory',
    'industry-4-0',
    'web-components',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Siemens iX', 'Industrial Experience', 'Siemens Design System'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @siemens/ix @siemens/ix-icons',
      packages: ['@siemens/ix', '@siemens/ix-icons'],
      setupInstructions: 'Import `@siemens/ix/dist/siemens-ix/siemens-ix.css` and register web components via `import { defineCustomElements } from "@siemens/ix/loader"; defineCustomElements();`.'
    },
    react: {
      command: 'npm install @siemens/ix-react @siemens/ix @siemens/ix-icons',
      packages: ['@siemens/ix-react', '@siemens/ix', '@siemens/ix-icons'],
      peerDependencies: ['react', 'react-dom']
    },
    angular: {
      command: 'npm install @siemens/ix-angular @siemens/ix @siemens/ix-icons',
      packages: ['@siemens/ix-angular', '@siemens/ix', '@siemens/ix-icons'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ix-button>',
      description: 'Siemens iX action button with variant="primary" | "secondary" | "danger".',
      importExample: '<ix-button variant="primary">Start Production Batch</ix-button>',
      docSubUrl: 'components/button'
    },
    kpi: {
      canonicalName: '<ix-kpi>',
      description: 'Industrial KPI component showing live metric, unit, and status trend.',
      importExample: '<ix-kpi label="Spindle Temperature" value="48.2" unit="°C" status="alarm"></ix-kpi>',
      docSubUrl: 'components/kpi'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<ix-*>` custom elements or `@siemens/ix-react` / `@siemens/ix-angular` components.',
      'Use Siemens iX alarm and status indicators for machine health.',
      'Default to dark industrial theme for control room displays.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Siemens iX themes (`theme-classic-dark`, `theme-classic-light`).',
    iconUsage: 'Use `<ix-icon name="turbine"></ix-icon>`.',
    layoutConventions: 'Use `<ix-application-header>`, `<ix-menu>`, and `<ix-content>` for application anatomy.'
  }
};
