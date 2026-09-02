import { UISystem } from '../../schemas/uiSystem.js';

export const webAwesome: UISystem = {
  id: 'web-awesome',
  name: 'Web Awesome',
  organization: 'Font Awesome',
  description: 'The Font Awesome team’s framework-agnostic library of accessible, customizable Web Components, evolved from Shoelace and built with Lit and modern web standards.',
  category: 'web-components',
  secondaryCategories: ['styled', 'accessibility-focused', 'developer-tool', 'saas'],
  frameworks: ['web-components', 'vanilla', 'react', 'vue', 'svelte', 'solid', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@awesome.me/webawesome'],
  docsUrl: "https://webawesome.com",
  repositoryUrl: 'https://github.com/shoelace-style/webawesome',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Web Awesome documents component-level accessibility behavior and is built with accessibility in mind, but does not claim a catalog-wide WCAG conformance level.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / Shadow Parts',
    packageName: '@awesome.me/webawesome'
  },
  icons: {
    available: true,
    packageName: '@awesome.me/webawesome',
    name: 'Built-in wa-icon component with Font Awesome integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, modern, highly polished cross-framework web components with smooth interactions and theme tokens.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Framework-independent applications (Vue, Svelte, Solid, React, or Vanilla HTML)',
    'Design systems needing complete immunity to framework migrations',
    'Modern web apps wanting rich custom elements (`<wa-button>`, `<wa-dialog>`, `<wa-drawer>`)'
  ],
  avoidFor: [
    'Pure Server-Side Rendered projects without web component hydration'
  ],
  strengths: [
    'Works seamlessly in React, Vue, Svelte, Solid, Angular, and plain HTML',
    'Customizable via CSS custom properties and CSS `::part` selectors',
    'Multiple built-in themes plus extensive CSS custom properties and utilities',
    'Backed and maintained by the Font Awesome team'
  ],
  weaknesses: [
    'Server rendering and React 18-or-older integration require the documented framework-specific setup'
  ],
  tags: [
    'web-components',
    'shoelace',
    'web-awesome',
    'framework-agnostic',
    'lit',
    'custom-elements',
    'dark-mode',
    'rtl',
    'hidden-gem'
  ],
  installation: {
    generic: {
      command: 'npm install @awesome.me/webawesome',
      packages: ['@awesome.me/webawesome'],
      setupInstructions: 'Import `@awesome.me/webawesome/dist/styles/webawesome.css` and then import the individual components you use.'
    },
    react: {
      command: 'npm install @awesome.me/webawesome',
      packages: ['@awesome.me/webawesome'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Use the React exports under `@awesome.me/webawesome/dist/react/*` or standard custom elements, following the version-specific React guide.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<wa-button>',
      description: 'Web Awesome button with semantic variants and independently configurable visual appearances.',
      importExample: 'import "@awesome.me/webawesome/dist/components/button/button.js";\n\n<wa-button variant="brand" appearance="accent">Launch App</wa-button>',
      docSubUrl: 'components/button'
    },
    dialog: {
      canonicalName: '<wa-dialog>',
      description: 'Modal dialog custom element with label and slots.',
      importExample: 'import "@awesome.me/webawesome/dist/components/dialog/dialog.js";\n\n<wa-dialog label="Dialog Header" open>\n  <p>Dialog body content</p>\n  <wa-button slot="footer" variant="brand">Close</wa-button>\n</wa-dialog>',
      docSubUrl: 'components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@awesome.me/webawesome/dist/styles/webawesome.css` or the specific theme and utility styles you need.',
      'Use `<wa-*>` custom elements directly in your HTML / templates.',
      'Use `<wa-icon name="..." />` for iconography.',
      'Style internal parts with `::part(name)` selectors.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Load a built-in theme and apply its `wa-theme-*` class to the root element; customize with Web Awesome CSS properties and tokens.',
    iconUsage: 'Use `<wa-icon name="gear" />` or another icon exposed through Web Awesome’s Font Awesome integration.',
    layoutConventions: 'Combine Web Awesome components with its CSS layout utilities or standard CSS Flexbox/Grid.'
  }
};
