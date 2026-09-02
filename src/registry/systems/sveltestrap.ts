import { UISystem } from '../../schemas/uiSystem.js';

export const sveltestrap: UISystem = {
  id: 'sveltestrap',
  name: 'Sveltestrap (Bootstrap 5 Components for Svelte)',
  organization: 'BestVendor / Sveltestrap Community',
  description: 'An open-source, full-featured Bootstrap 5 component library for Svelte and SvelteKit, providing 40+ reactive Bootstrap components without requiring jQuery or Bootstrap JavaScript.',
  category: 'component-library',
  secondaryCategories: ['styled', 'consumer'],
  frameworks: ['svelte'],
  stylingApproach: 'vanilla-css',
  packageNames: ['sveltestrap', 'bootstrap'],
  docsUrl: 'https://sveltestrap.js.org',
  repositoryUrl: 'https://github.com/bestvendor/sveltestrap',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Implements standard Bootstrap 5 ARIA patterns in pure Svelte.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Bootstrap 5 SCSS and CSS custom properties',
    packageName: 'bootstrap'
  },
  icons: {
    available: true,
    name: 'Bootstrap Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Familiar Bootstrap 5 modern aesthetic: clean rounded buttons, responsive grid containers, card decks, modal overlays, and toast notifications in Svelte.',
  noveltyLevel: 'established',
  bestFor: [
    'Svelte and SvelteKit applications wanting reliable Bootstrap 5 components without external JS dependencies',
    'Developers migrating existing Bootstrap layouts to Svelte',
    'Fast web dashboards and prototypes'
  ],
  avoidFor: [
    'Tailwind-only design architectures'
  ],
  strengths: [
    'Pure Svelte components with zero Bootstrap JS or jQuery dependencies',
    'Familiar, battle-tested Bootstrap 5 API and class conventions',
    'First-class support for Svelte 4 and Svelte 5'
  ],
  weaknesses: [
    'Bootstrap visual identity'
  ],
  tags: [
    'sveltestrap',
    'svelte',
    'sveltekit',
    'bootstrap',
    'bootstrap5',
    'components',
    'established'
  ],
  aliases: ['Sveltestrap', 'Svelte Bootstrap', 'Sveltestrap UI'],
  relatedSystems: ['react-bootstrap', 'bootstrap-vue-next', 'solid-bootstrap', 'bootstrap'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    svelte: {
      command: 'npm install sveltestrap bootstrap',
      packages: ['sveltestrap', 'bootstrap'],
      peerDependencies: ['svelte'],
      setupInstructions: 'Import Bootstrap CSS in `+layout.svelte`: `<Styles />` or `import "bootstrap/dist/css/bootstrap.min.css";`'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Sveltestrap button with color="primary" | "secondary" | "danger" | "outline-primary".',
      importExample: "import { Button } from 'sveltestrap';\n\n<Button color=\"primary\" on:click={handleClick}>Get Started</Button>",
      docSubUrl: '?path=/docs/components-button--default'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `sveltestrap`.',
      'Add `<Styles />` in `+layout.svelte` or link Bootstrap CSS.',
      'Use Svelte event dispatching (`on:click`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Bootstrap 5 Sass variables.',
    iconUsage: 'Use `<Icon name="star" />` with Bootstrap Icons.',
    layoutConventions: 'Use `<Container>`, `<Row>`, and `<Col>`.'
  }
};
