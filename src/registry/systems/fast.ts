import { UISystem } from '../../schemas/uiSystem.js';

export const fast: UISystem = {
  id: 'fast',
  name: 'Microsoft FAST / Fluent Web Components',
  organization: 'Microsoft',
  description: 'Microsoft’s open-source, standards-based Web Component platform and Fluent design system implementation, built on top of native Custom Elements with zero framework lock-in.',
  category: 'web-components',
  secondaryCategories: ['company-design-system', 'enterprise', 'accessibility-focused'],
  frameworks: ['web-components', 'vanilla', 'react', 'vue', 'svelte', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@fluentui/web-components'],
  docsUrl: 'https://web-components.fluentui.dev/',
  repositoryUrl: 'https://github.com/microsoft/fluentui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Native Custom Elements implementing W3C WAI-ARIA authoring practices in Shadow DOM.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Adaptive Design Tokens',
    packageName: '@fluentui/web-components'
  },
  icons: {
    available: true,
    packageName: '@fluentui/web-components',
    name: 'Fluent Web Component Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern Fluent Design implemented via native web components for any frontend framework.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Cross-framework micro-frontends and multi-team enterprise apps',
    'Vue, Svelte, or Angular apps needing official Microsoft Fluent UI',
    'Framework-independent component libraries and design systems'
  ],
  avoidFor: [
    'Pure React codebases wanting hooks-first ergonomics'
  ],
  strengths: [
    'Zero framework lock-in: works seamlessly with React, Vue, Svelte, Angular, or Vanilla JS',
    'High performance with native browser Custom Elements',
    'Adaptive dynamic design tokens that calculate contrast ratios at runtime'
  ],
  weaknesses: [
    'Event handling and prop bindings require standard web element syntax in some frameworks'
  ],
  tags: [
    'microsoft',
    'fast',
    'web-components',
    'custom-elements',
    'multi-framework',
    'enterprise',
    'dark-mode'
  ],
  installation: {
    generic: {
      command: 'npm install @fluentui/web-components',
      packages: ['@fluentui/web-components'],
      setupInstructions: 'Register all components via `import { provideFluentDesignSystem, fluentButton } from "@fluentui/web-components"; provideFluentDesignSystem().register(fluentButton());`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<fluent-button>',
      description: 'Fluent web component button with appearance="accent" | "neutral" | "stealth" | "outline".',
      importExample: '<fluent-button appearance="accent">Save Document</fluent-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Initialize component registry using `provideFluentDesignSystem()`.',
      'Use `<fluent-*>` custom elements directly in templates.',
      'Control theme via `baseLayerLuminance` token.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Adjust design tokens like `baseLayerLuminance.setValueFor(element, StandardLuminance.DarkMode)`.',
    iconUsage: 'Use SVG icons inside fluent-button or slot="start".',
    layoutConventions: 'Use CSS Grid/Flexbox containers around custom elements.'
  }
};
