import { UISystem } from '../../schemas/uiSystem.js';

export const spectrumWc: UISystem = {
  id: 'spectrum-web-components',
  name: 'Adobe Spectrum Web Components',
  organization: 'Adobe',
  description: 'Adobe’s official implementation of the Spectrum design system built with Lit and modern Web Components, fully framework-agnostic with encapsulated shadow DOM styling.',
  category: 'web-components',
  secondaryCategories: ['company-design-system', 'creative-tool', 'accessibility-focused'],
  frameworks: ['web-components', 'vanilla', 'react', 'vue', 'svelte', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@spectrum-web-components/theme', '@spectrum-web-components/button', '@spectrum-web-components/dialog'],
  docsUrl: 'https://opensource.adobe.com/spectrum-web-components',
  repositoryUrl: 'https://github.com/adobe/spectrum-web-components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Encapsulated accessible shadow DOM primitives developed by Adobe.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties in Shadow DOM',
    packageName: '@spectrum-web-components/theme'
  },
  icons: {
    available: true,
    packageName: '@spectrum-web-components/icons-workflow',
    name: 'Spectrum WC Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'configurable',
  aesthetic: 'Modern Adobe desktop and creative cloud web application styling.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Micro-frontends combining multiple frameworks',
    'Vue / Svelte / Angular projects wanting first-class Spectrum components',
    'Creative tools and browser extension interfaces'
  ],
  avoidFor: [
    'Pure Server-Side Rendered (SSR) apps without hydration / polyfills'
  ],
  strengths: [
    'True framework interoperability via standard custom elements (`<sp-button>`, `<sp-dialog>`)',
    'Encapsulated styling avoids global CSS conflicts',
    'Full theme switching via `<sp-theme color="dark" scale="medium">`'
  ],
  weaknesses: [
    'Requires Shadow DOM understanding when doing deep visual overrides'
  ],
  tags: [
    'adobe',
    'web-components',
    'lit',
    'custom-elements',
    'multi-framework',
    'creative-tool',
    'dark-mode',
    'rtl'
  ],
  installation: {
    generic: {
      command: 'npm install @spectrum-web-components/theme @spectrum-web-components/button @spectrum-web-components/bundle',
      packages: ['@spectrum-web-components/theme', '@spectrum-web-components/button', '@spectrum-web-components/bundle'],
      setupInstructions: 'Wrap page in `<sp-theme theme="spectrum" color="dark" scale="medium">`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<sp-button>',
      description: 'Spectrum custom element button supporting variant="accent" | "primary" | "secondary".',
      importExample: 'import "@spectrum-web-components/button/sp-button.js";\n\n<sp-button variant="accent">Save Changes</sp-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<sp-*>` custom elements (e.g. `<sp-button>`, `<sp-textfield>`, `<sp-dialog>`).',
      'Wrap root in `<sp-theme theme="spectrum" color="dark" scale="medium">`.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure through `<sp-theme theme="spectrum" color="light|dark|darkest" scale="medium|large">`.',
    iconUsage: 'Import from @spectrum-web-components/icons-workflow.',
    layoutConventions: 'Use standard CSS flexbox/grid with custom elements.'
  }
};
