import { UISystem } from '../../schemas/uiSystem.js';

export const mozillaProtocol: UISystem = {
  id: 'mozilla-protocol',
  name: 'Mozilla Protocol',
  organization: 'Mozilla',
  description: 'Mozilla’s official open-source design system and frontend framework powering mozilla.org and Firefox marketing sites, built for privacy-first web experiences, open-web advocacy, and responsive multi-device typography.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'css-framework', 'accessibility-focused'],
  frameworks: ['html-css', 'vanilla', 'css-only'],
  stylingApproach: 'sass',
  packageNames: ['@mozilla-protocol/core'],
  docsUrl: 'https://protocol.mozilla.org',
  repositoryUrl: 'https://github.com/mozilla/protocol',
  license: 'MPL-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA conformance across Mozilla websites.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in Sass and CSS custom properties with Zilla Slab typography',
    packageName: '@mozilla-protocol/core'
  },
  icons: {
    available: true,
    name: 'Mozilla Protocol Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'spacious',
  aesthetic: 'Bold, expressive open-web aesthetic: Mozilla black-and-white neon highlights, Zilla Slab and Metropolis typography, and editorial split-callout cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Privacy-focused web apps, open-source organization websites, and community advocacy portals',
    'Editorial storytelling, content publishing, and Firefox-style landing pages',
    'Framework-agnostic HTML/CSS websites'
  ],
  avoidFor: [
    'Ultra-dense enterprise spreadsheet dashboards'
  ],
  strengths: [
    'Iconic open-web typography with Zilla Slab and Metropolis font integration',
    'Progressive enhancement with pure CSS/Sass architecture',
    'Built-in bi-directional RTL support for global localization'
  ],
  weaknesses: [
    'CSS/HTML oriented rather than component-state-driven React library'
  ],
  tags: [
    'mozilla',
    'firefox',
    'protocol',
    'open-web',
    'privacy',
    'editorial',
    'rtl',
    'hidden-gem'
  ],
  aliases: ['Protocol', 'Mozilla Design System', 'Firefox Protocol'],
  systemTypes: ['company-design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @mozilla-protocol/core',
      packages: ['@mozilla-protocol/core'],
      setupInstructions: 'Import `@mozilla-protocol/core/protocol/css/protocol.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'mzp-c-button',
      description: 'Mozilla Protocol button with primary, secondary, and download variants.',
      importExample: '<button class="mzp-c-button mzp-t-product" type="button">Download Firefox</button>',
      docSubUrl: 'components/detail/button.html'
    },
    card: {
      canonicalName: 'mzp-c-card',
      description: 'Protocol content card with image, title, and body.',
      importExample: '<div class="mzp-c-card"><div class="mzp-c-card-content"><h3 class="mzp-c-card-title">Protect Your Privacy</h3><p>Content</p></div></div>',
      docSubUrl: 'components/detail/card.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use Protocol `.mzp-c-*` component classes.',
      'Use Zilla Slab font for bold editorial headings.',
      'Ensure high contrast and privacy-first messaging.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Protocol theme tokens and color palettes.',
    iconUsage: 'Use SVG icons from Mozilla Protocol icon bundle.',
    layoutConventions: 'Wrap in `.mzp-l-content` and use Protocol grid layouts.'
  }
};
