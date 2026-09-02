import { UISystem } from '../../schemas/uiSystem.js';

export const mozillaPhoton: UISystem = {
  id: 'mozilla-photon',
  name: 'Mozilla Photon Design System',
  organization: 'Mozilla',
  description: 'Mozilla’s historic, acclaimed browser design system and UI guideline suite engineered for Firefox Quantum, featuring photon animations, tab bar ergonomics, dark themes, and accessible browser chrome.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'accessibility-focused', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['photon-colors'],
  docsUrl: 'https://design.firefox.com/photon',
  repositoryUrl: 'https://github.com/FirefoxUX/photon',
  license: 'MPL-2.0',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for Mozilla Firefox Quantum browser chrome accessibility.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Photon design tokens and color variables',
    packageName: 'photon-colors'
  },
  icons: {
    available: true,
    name: 'Photon Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Firefox Quantum browser aesthetic: Photon Blue (#0a84ff) / Ink (#0c0c0d), crisp 1px borders, subtle tab elevation, accessible keyboard focus rings, and high contrast.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Browser extensions, developer tools, and Firefox add-on configuration interfaces',
    'Developers studying historic browser design systems and high-contrast accessibility',
    'Desktop web applications wanting classic Firefox Quantum polish'
  ],
  avoidFor: [
    'Mobile-first touchscreen applications'
  ],
  strengths: [
    'Historic design system that powered the acclaimed Firefox Quantum browser release',
    'Exemplary keyboard accessibility, high contrast, and dark mode design tokens',
    'Zero bloat: pure CSS design tokens'
  ],
  weaknesses: [
    'Archived in favor of modern Firefox Acorn / Protocol design language'
  ],
  tags: [
    'mozilla-photon',
    'firefox',
    'photon',
    'mozilla',
    'browser',
    'design-tokens',
    'archived',
    'hidden-gem'
  ],
  aliases: ['Mozilla Photon', 'Firefox Photon', 'Photon Design System', 'Photon UI'],
  relatedSystems: ['mozilla-protocol', 'primer', 'pajamas'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install photon-colors',
      packages: ['photon-colors'],
      setupInstructions: 'Import `photon-colors/photon-colors.css` into your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'photon-button',
      description: 'Photon browser action button with high-contrast active state.',
      importExample: '<button class="photon-button primary">Accept</button>',
      docSubUrl: 'components/buttons.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use Photon color tokens (`--photon-blue-60`, `--photon-ink-90`).',
      'Apply high-contrast accessible focus outlines (`--photon-blue-50`).',
      'Use compact density suited for desktop and browser extension tools.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties using Photon color variables.',
    iconUsage: 'Use Photon SVG icon glyphs.',
    layoutConventions: 'Use compact desktop layouts.'
  }
};
