import { UISystem } from '../../schemas/uiSystem.js';

export const redHatDesignSystem: UISystem = {
  id: 'red-hat-design-system',
  name: 'Red Hat Design System (RHDS)',
  organization: 'Red Hat',
  description: 'Red Hat’s brand and digital experience design system built with Lit and W3C Web Components, providing open-source, framework-agnostic component architecture alongside PatternFly for public Red Hat digital properties.',
  category: 'company-design-system',
  secondaryCategories: ['web-components', 'developer-tool', 'styled'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'vue', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@rhds/elements', '@rhds/tokens'],
  docsUrl: 'https://ux.redhat.com',
  repositoryUrl: 'https://github.com/RedHat-UX/red-hat-design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across modern browser environments.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS Custom Properties',
    packageName: '@rhds/tokens'
  },
  icons: {
    available: true,
    packageName: '@rhds/elements',
    name: 'Red Hat Design System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Bold, technical, open-source brand aesthetic: Red Hat Red (#ee0000), Red Hat Text and Mono fonts, and dark surface layers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Red Hat public web applications, developer portals, and event platforms',
    'Open-source projects needing standards-based Lit Web Components with Red Hat styling',
    'Multi-framework web architectures'
  ],
  avoidFor: [
    'Internal OpenShift dense cluster tables (use PatternFly instead)'
  ],
  strengths: [
    'Lit-based W3C standard Web Components with encapsulated styles',
    'Official Red Hat typography and brand tokens',
    'Seamless interoperability with React, Vue, Svelte, and plain HTML'
  ],
  weaknesses: [
    'Distinct from PatternFly (RHDS is for public web properties, PatternFly is for enterprise app consoles)'
  ],
  tags: [
    'red-hat',
    'rhds',
    'web-components',
    'lit',
    'developer-tool',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['RHDS', 'Red Hat UX', 'Red Hat Elements'],
  relatedSystems: ['patternfly'],
  systemTypes: ['company-design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @rhds/elements @rhds/tokens',
      packages: ['@rhds/elements', '@rhds/tokens'],
      setupInstructions: 'Import `@rhds/tokens/css/global.css` and individual elements (e.g., `import "@rhds/elements/rh-cta/rh-cta.js"`).'
    }
  },
  componentGuidance: {
    cta: {
      canonicalName: '<rh-cta>',
      description: 'Red Hat call to action button/link with primary, secondary, and brick variants.',
      importExample: '<rh-cta variant="primary"><a href="#">Download Fedora CoreOS</a></rh-cta>',
      docSubUrl: 'elements/cta/'
    },
    card: {
      canonicalName: '<rh-card>',
      description: 'Red Hat content card with header, body, and footer slots.',
      importExample: '<rh-card><h2 slot="header">Open Source Software</h2><p>Body content</p></rh-card>',
      docSubUrl: 'elements/card/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<rh-*>` custom elements directly in HTML or framework templates.',
      'Import `@rhds/tokens/css/global.css` for typography and colors.',
      'For dense enterprise Kubernetes dashboards, prefer PatternFly; for web applications, prefer RHDS.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use RHDS CSS variables (--rh-color-brand-red-on-light, --rh-color-surface-dark).',
    iconUsage: 'Use `<rh-icon>` elements.',
    layoutConventions: 'Use CSS Flexbox/Grid alongside RHDS container wrappers.'
  }
};
