import { UISystem } from '../../schemas/uiSystem.js';

export const elix: UISystem = {
  id: 'elix',
  name: 'Elix (Headless Web Components)',
  organization: 'Component Kitchen / Elix Community',
  description: 'An open-source library of unstyled, accessible, framework-agnostic W3C Custom Elements and mixins, engineered for standard web components with keyboard navigation, ARIA attributes, and touch gestures.',
  category: 'headless',
  secondaryCategories: ['web-components', 'unstyled', 'accessibility-focused'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'vue', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['elix'],
  docsUrl: 'https://component.kitchen/elix',
  repositoryUrl: 'https://github.com/fovea/elix',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements full W3C ARIA practices with built-in keyboard navigation mixins.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Unstyled web components; style via CSS Shadow Parts (`::part()`) or custom element templates.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS headless Web Components: carousel gestures, listbox selection, overlay modals, and drawer primitives styled via CSS `::part()`.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Building custom Web Component design systems across multiple frameworks',
    'Touch carousels, expandable drawers, listboxes, and dialogs in vanilla JS or Custom Elements',
    'Projects wanting W3C standards-based headless primitives'
  ],
  avoidFor: [
    'Developers wanting instant pre-styled React UI packages'
  ],
  strengths: [
    'Pioneer of headless Web Components with mixin-based architecture (KeyboardMixin, AriaRoleMixin, TouchSwipeMixin)',
    'Zero framework dependency: works natively in plain HTML, React, Vue, Angular, and Svelte',
    'Extensive components (Carousel, Drawer, Dialog, ListBox, Menu, Tabs, TransitionEffect)'
  ],
  weaknesses: [
    'Uses Shadow DOM which requires styling via CSS `::part()`'
  ],
  tags: [
    'elix',
    'web-components',
    'custom-elements',
    'headless',
    'unstyled',
    'accessibility',
    'hidden-gem'
  ],
  aliases: ['Elix', 'Elix Web Components', 'Component Kitchen Elix'],
  systemTypes: ['headless', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install elix',
      packages: ['elix'],
      setupInstructions: 'Import Elix custom elements: `import "elix/define/Carousel.js";`'
    }
  },
  componentGuidance: {
    carousel: {
      canonicalName: '<elix-carousel>',
      description: 'Headless touch-swipe and keyboard-accessible carousel web component.',
      importExample: '<elix-carousel><img src="1.jpg"><img src="2.jpg"></elix-carousel>',
      docSubUrl: 'elements/elix-carousel'
    }
  },
  aiInstructions: {
    principles: [
      'Import Elix custom elements via `import "elix/define/<Component>.js"`.',
      'Style internal elements using the CSS `::part()` pseudo-element selector.',
      'Use Elix mixins when building custom custom elements.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Style using CSS `::part(button)`, `::part(overlay)`, etc.',
    iconUsage: 'Embed SVG icons inside element slots.',
    layoutConventions: 'Use standard custom element container composition.'
  }
};
