import { UISystem } from '../../schemas/uiSystem.js';

export const openUi: UISystem = {
  id: 'open-ui',
  name: 'OpenUI (W3C Community Group Component Research & Standards)',
  organization: 'OpenUI / W3C Community Group (Microsoft, Google, Adobe, Salesforce)',
  description: 'The open W3C standards research initiative and component specification project aimed at standardizing native browser UI components, HTML elements (`<selectmenu>`, `<popover>`, `<dialog>`), states, and design token anatomy across the web platform.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'web-components'],
  frameworks: ['framework-agnostic', 'html-css', 'web-components', 'vanilla'],
  stylingApproach: 'unstyled',
  packageNames: ['@open-ui/open-ui'],
  docsUrl: 'https://open-ui.org',
  repositoryUrl: 'https://github.com/openui/open-ui',
  license: 'W3C Software / BSD-3-Clause',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'The foundational W3C initiative defining native browser ARIA, keyboard interactions, and accessibility mappings for the future of the web.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'W3C Community Group Component Anatomy and Token Specifications',
    packageName: '@open-ui/open-ui'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Native browser web platform standards aesthetic: research specs, state diagrams, component anatomy, and reference polyfills for next-gen HTML.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Design system engineers designing forward-compatible component architecture aligned with future HTML standards',
    'Developers researching standardized component anatomies, states, and accessibility behaviors',
    'Polyfill implementations for `<popover>`, `<dialog>`, and customizable select'
  ],
  avoidFor: [
    'Developers wanting ready-to-use plug-and-play visual React widgets'
  ],
  strengths: [
    'The official industry-wide collaborative standards initiative backing modern web standards (Popover API, Dialog, Selectmenu)',
    'Comprehensive component research comparing Microsoft Fluent, Adobe Spectrum, Ant Design, Material, Fast, and Carbon',
    'Definitive reference for component states, keyboard behaviors, and ARIA roles'
  ],
  weaknesses: [
    'Standards and specification focused'
  ],
  tags: [
    'open-ui',
    'w3c',
    'standards',
    'web-standards',
    'popover',
    'selectmenu',
    'headless',
    'accessibility',
    'hidden-gem'
  ],
  aliases: ['OpenUI', 'Open UI', 'W3C OpenUI', 'OpenUI Standards'],
  relatedSystems: ['material-web', 'spectrum-web-components', 'ui5-webcomponents'],
  systemTypes: ['headless', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: '# Reference specifications and polyfills at open-ui.org',
      packages: [],
      setupInstructions: 'Consult component research and anatomy models at open-ui.org.'
    }
  },
  componentGuidance: {
    popover: {
      canonicalName: 'popover',
      description: 'Standardized native browser popover element specification and behavior model.',
      importExample: '<button popovertarget="my-popover">Toggle Popover</button><div id="my-popover" popover>Popover Content</div>',
      docSubUrl: 'components/popover.research'
    }
  },
  aiInstructions: {
    principles: [
      'Consult OpenUI component research for standard component naming and anatomy.',
      'Use native HTML Popover and Dialog APIs where browser support permits.',
      'Model custom design system component props on OpenUI consensus specifications.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Use native CSS custom properties.',
    iconUsage: 'Embed SVG icons inside triggers.',
    layoutConventions: 'Follow native HTML element semantics.'
  }
};
