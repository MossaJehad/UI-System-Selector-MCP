import { UISystem } from '../../schemas/uiSystem.js';

export const duet: UISystem = {
  id: 'duet',
  name: 'Duet Design System',
  organization: 'LocalTapiola & Turva',
  description: 'An open-source, multi-framework design system and Web Component library developed for financial services, insurance policy management, claim filing workflows, and high-compliance customer portals.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@duetds/components', '@duetds/date-picker'],
  docsUrl: 'https://duetds.github.io',
  repositoryUrl: 'https://github.com/duetds/duet-date-picker',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered to achieve WCAG 2.1 AAA accessibility across Nordic financial and insurance portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@duetds/tokens'
  },
  icons: {
    available: true,
    packageName: '@duetds/components',
    name: 'Duet System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Nordic financial and insurance aesthetic: deep navy/emerald green accents, accessible multi-step claim wizards, WCAG AAA contrast, and one of the world’s best date pickers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Financial services, insurance policy managers, and public sector portals requiring WCAG AAA accessibility',
    'Standalone accessible date picker integration via `@duetds/date-picker` (zero dependencies, <10KB)',
    'Multi-framework applications sharing Web Components'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Benchmark-setting accessibility: built from the ground up for WCAG 2.1 AAA conformance',
    '`duet-date-picker` is widely considered one of the most accessible standalone date pickers on the web',
    'Framework-agnostic Web Components architecture'
  ],
  weaknesses: [
    'Nordic financial institution domain focus'
  ],
  tags: [
    'duet',
    'duetds',
    'date-picker',
    'insurance',
    'finance',
    'accessibility',
    'aaa-compliance',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Duet', 'Duet Design System', 'DuetDS', 'Duet Date Picker'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @duetds/date-picker',
      packages: ['@duetds/date-picker'],
      setupInstructions: 'Import `@duetds/date-picker/dist/duet/duet.esm.js` and CSS.'
    }
  },
  componentGuidance: {
    datepicker: {
      canonicalName: '<duet-date-picker>',
      description: 'Accessible WCAG AAA date picker custom element with keyboard navigation and localization.',
      importExample: '<duet-date-picker identifier="claim-date" value="2026-09-02"></duet-date-picker>',
      docSubUrl: 'components/date-picker'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<duet-date-picker>` for high-compliance accessible date inputs.',
      'Apply WCAG AAA contrast ratios for all text elements.',
      'Use Duet layout containers for multi-step insurance and financial claim flows.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties via Duet design tokens.',
    iconUsage: 'Use Duet system icons.',
    layoutConventions: 'Use standard custom element and flex/grid composition.'
  }
};
