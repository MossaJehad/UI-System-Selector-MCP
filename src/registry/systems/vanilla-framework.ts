import { UISystem } from '../../schemas/uiSystem.js';

export const vanillaFramework: UISystem = {
  id: 'vanilla-framework',
  name: 'Canonical Vanilla Framework (Ubuntu Design System)',
  organization: 'Canonical (Ubuntu)',
  description: 'Canonical’s official open-source CSS framework and design system powering Ubuntu.com, Canonical.com, MAAS (Metal as a Service), and Juju cloud orchestrators, engineered for cloud infrastructure, Linux server operations, and clean technical documentation.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'css-framework', 'accessibility-focused'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'react'],
  stylingApproach: 'sass',
  packageNames: ['vanilla-framework', '@canonical/react-components'],
  docsUrl: 'https://vanillaframework.io',
  repositoryUrl: 'https://github.com/canonical/vanilla-framework',
  license: 'LGPL-3.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Ubuntu digital services and cloud documentation.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in Sass maps and CSS Custom Properties with Ubuntu Font family',
    packageName: 'vanilla-framework'
  },
  icons: {
    available: true,
    name: 'Canonical System Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Authentic Ubuntu Linux aesthetic: Ubuntu Aubergine / Orange (#e95420), Ubuntu Font typography, terminal command boxes, server status chips, and structured documentation strips.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Linux server dashboards, cloud orchestration tools, and bare-metal server management (MAAS)',
    'Technical developer documentation and open-source project websites',
    'HTML/CSS applications wanting the official Ubuntu and Canonical aesthetic'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'The official design system of Ubuntu and Canonical cloud infrastructure',
    'Pure CSS with Sass mixins: zero runtime JavaScript framework lock-in',
    'Official React wrapper library available via `@canonical/react-components`'
  ],
  weaknesses: [
    'Distinct Ubuntu branding'
  ],
  tags: [
    'canonical',
    'ubuntu',
    'vanilla-framework',
    'linux',
    'developer-tool',
    'cloud',
    'css-framework',
    'hidden-gem'
  ],
  aliases: ['Vanilla Framework', 'Ubuntu Design System', 'Canonical Vanilla'],
  systemTypes: ['company-design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install vanilla-framework',
      packages: ['vanilla-framework'],
      setupInstructions: 'Import `vanilla-framework/build/css/build.css` in your project.'
    },
    react: {
      command: 'npm install @canonical/react-components vanilla-framework',
      packages: ['@canonical/react-components', 'vanilla-framework'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'p-button',
      description: 'Ubuntu button with p-button--positive, p-button--negative, p-button--brand modifiers.',
      importExample: '<button class="p-button--positive">Deploy Cluster</button>',
      docSubUrl: 'docs/patterns/buttons'
    },
    strip: {
      canonicalName: 'p-strip',
      description: 'Full-width layout strip for structured landing page rows.',
      importExample: '<div class="p-strip--light"><div class="row"><div class="col-8"><h3>Ubuntu Server</h3><p>Enterprise Linux.</p></div></div></div>',
      docSubUrl: 'docs/patterns/strip'
    }
  },
  aiInstructions: {
    principles: [
      'Use Vanilla Framework `.p-*` CSS classes for Ubuntu consistency.',
      'Use Ubuntu font family for headings and body text.',
      'Structure pages using `.p-strip` section containers and `.row` / `.col-*` grids.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Use Canonical color variables ($color-brand: #e95420, $color-mid-dark).',
    iconUsage: 'Use Canonical icon classes (`p-icon--search`, `p-icon--chevron`).',
    layoutConventions: 'Use `.p-strip` layout rows with `.row` and `.col-*`.'
  }
};
