import { UISystem } from '../../schemas/uiSystem.js';

export const spectrumCss: UISystem = {
  id: 'spectrum-css',
  name: 'Adobe Spectrum CSS',
  organization: 'Adobe',
  description: 'Adobe’s open-source CSS implementation of the Spectrum design system, providing framework-agnostic CSS components and design tokens for custom web stacks.',
  category: 'company-design-system',
  secondaryCategories: ['creative-tool', 'styled', 'web-components'],
  frameworks: ['css-only', 'vanilla', 'react', 'vue', 'svelte', 'angular'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@spectrum-css/tokens', '@spectrum-css/button', '@spectrum-css/page'],
  docsUrl: 'https://opensource.adobe.com/spectrum-css',
  repositoryUrl: 'https://github.com/adobe/spectrum-css',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides foundational CSS classes conforming to Adobe accessibility guidelines.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties',
    packageName: '@spectrum-css/tokens'
  },
  icons: {
    available: true,
    packageName: '@spectrum-css/icon',
    name: 'Spectrum CSS Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'configurable',
  aesthetic: 'Precision creative tooling, framework-agnostic CSS-first Adobe Spectrum styling.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Non-React web projects needing Adobe Spectrum visual design',
    'Custom web component implementations',
    'Static HTML or server-rendered sites'
  ],
  avoidFor: [
    'Projects wanting out-of-the-box React state machines with zero CSS wiring'
  ],
  strengths: [
    'Framework agnostic: works with any web tech',
    'Pure CSS with zero JS runtime overhead',
    'Full token support with light, dark, and darkest themes'
  ],
  weaknesses: [
    'Requires manual management of ARIA attributes and focus management in JS'
  ],
  tags: [
    'adobe',
    'css-only',
    'framework-agnostic',
    'design-tokens',
    'creative-tool',
    'dark-mode',
    'rtl'
  ],
  installation: {
    generic: {
      command: 'npm install @spectrum-css/tokens @spectrum-css/button @spectrum-css/typography',
      packages: ['@spectrum-css/tokens', '@spectrum-css/button', '@spectrum-css/typography']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'spectrum-Button',
      description: 'Spectrum CSS button classes (spectrum-Button spectrum-Button--accent, etc.).',
      importExample: '<button class="spectrum-Button spectrum-Button--accent spectrum-Button--sizeM"><span class="spectrum-Button-label">Save</span></button>',
      docSubUrl: 'button'
    }
  },
  aiInstructions: {
    principles: [
      'Apply Spectrum CSS class names (.spectrum-Button, .spectrum-Heading, etc.).',
      'Load @spectrum-css/tokens theme variables on the root container.'
    ],
    forbiddenSubstitutions: ['tailwind raw classes for standard UI elements', 'bootstrap'],
    themingGuide: 'Add spectrum spectrum--light or spectrum--darkest class names to the html or body element.',
    iconUsage: 'Use SVG icons with .spectrum-Icon classes.',
    layoutConventions: 'Use CSS grid / flex along with spectrum spacing variables.'
  }
};
