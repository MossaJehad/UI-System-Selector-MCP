import { UISystem } from '../../schemas/uiSystem.js';

export const halfmoon: UISystem = {
  id: 'halfmoon',
  name: 'Halfmoon',
  organization: 'Halfmoon UI Community (Frontend Cookbook)',
  description: 'An open-source responsive front-end CSS framework engineered specifically for dark mode and dashboard interfaces, featuring built-in Bootstrap 5 compatibility, CSS custom properties, and seamless theme switching.',
  category: 'css-framework',
  secondaryCategories: ['dashboard', 'saas', 'developer-tool'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['halfmoon'],
  docsUrl: 'https://www.gethalfmoon.com',
  repositoryUrl: 'https://github.com/halfmoonui/halfmoon',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA with optimized dark mode contrast ratios and accessible keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties with built-in dark/light variables',
    packageName: 'halfmoon'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Dark-mode first dashboard aesthetic: rich slate backgrounds, high-contrast borders, sidebar layout containers, and clean modern cards.',
  noveltyLevel: 'established',
  bestFor: [
    'Developer admin dashboards and developer portals built with dark mode as a first-class priority',
    'HTML/CSS projects wanting Bootstrap 5 class compatibility combined with modern CSS variables',
    'Fast development of dark/light theme toggleable dashboards'
  ],
  avoidFor: [
    'Tailwind-only modern projects'
  ],
  strengths: [
    'First-class dark mode architecture built into the core CSS variables',
    'Seamless compatibility with Bootstrap 5 classes in Halfmoon v2',
    'Rich dashboard layout utilities (Sidebar, Top Navbar, Content wrapper)'
  ],
  weaknesses: [
    'Ecosystem transition between v1 custom JS and v2 Bootstrap core'
  ],
  tags: [
    'halfmoon',
    'dark-mode',
    'dashboard',
    'css-framework',
    'bootstrap-compatible',
    'saas',
    'established'
  ],
  aliases: ['Halfmoon', 'Halfmoon UI', 'Halfmoon CSS'],
  relatedSystems: ['bootstrap', 'pico-css', 'bulma'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install halfmoon',
      packages: ['halfmoon'],
      setupInstructions: 'Import `halfmoon/css/halfmoon.min.css` in your HTML or stylesheet.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Halfmoon button with btn-primary, btn-secondary, btn-danger.',
      importExample: '<button type="button" class="btn btn-primary">Dashboard Action</button>',
      docSubUrl: 'docs/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use Halfmoon layout classes (`page-wrapper`, `content-wrapper`, `sidebar`).',
      'Toggle dark mode using `data-bs-core="dark"` or `data-bs-theme="dark"` on `<html>`.',
      'Use standard Bootstrap/Halfmoon utility classes for grid and spacing.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables in custom stylesheet.',
    iconUsage: 'Use `bootstrap-icons` or `lucide`.',
    layoutConventions: 'Use `.page-wrapper` with `.sidebar` and `.content-wrapper`.'
  }
};
