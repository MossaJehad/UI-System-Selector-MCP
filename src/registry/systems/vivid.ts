import { UISystem } from '../../schemas/uiSystem.js';

export const vivid: UISystem = {
  id: 'vivid',
  name: 'Vonage Vivid',
  organization: 'Vonage (Ericsson)',
  description: 'Vonage’s official open-source Web Component design system, built with FAST and Web Components, engineered for telecommunication APIs, VoIP call dashboards, SMS gateway analytics, video meetings, and developer communications portals.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'dashboard', 'web-components'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@vonage/vivid', '@vonage/vwd-design-tokens'],
  docsUrl: 'https://vivid.vonage.com',
  repositoryUrl: 'https://github.com/Vonage/vivid-3',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across Vonage developer platform and API portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Style Dictionary',
    packageName: '@vonage/vwd-design-tokens'
  },
  icons: {
    available: true,
    packageName: '@vonage/vivid',
    name: 'Vivid Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern telecommunications developer style: Vonage Purple (#9013fe), Spearmint accents, dark audio wave bars, phone keypad dials, and API key generator cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Communications platform as a service (CPaaS), VoIP dashboards, and SMS analytics',
    'Video conferencing room controls, call recording managers, and SIP trunking portals',
    'Multi-framework Web Component developer portals'
  ],
  avoidFor: [
    'Fashion consumer shopping blogs'
  ],
  strengths: [
    'FAST-based W3C standard Web Components with shadow DOM encapsulation',
    'Specialized communications components: AudioPlayer, DialPad, VideoControls, Banner, Tag',
    'Seamless interoperability across React, Vue, Svelte, Angular, and vanilla HTML'
  ],
  weaknesses: [
    'Telecommunications API focus'
  ],
  tags: [
    'vonage',
    'vivid',
    'cpaas',
    'telecom',
    'voip',
    'sms',
    'web-components',
    'fast',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Vivid', 'Vonage Design System', 'Vivid 3'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @vonage/vivid @vonage/vwd-design-tokens',
      packages: ['@vonage/vivid', '@vonage/vwd-design-tokens'],
      setupInstructions: 'Import `@vonage/vivid/styles/core/all.css` and register web components (e.g. `import "@vonage/vivid/button"`).'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<vwc-button>',
      description: 'Vonage action button with appearance="filled" | "outlined" | "ghost".',
      importExample: '<vwc-button appearance="filled" connotation="accent">Initiate Call</vwc-button>',
      docSubUrl: 'components/button/'
    },
    audio: {
      canonicalName: '<vwc-audio-player>',
      description: 'VoIP call recording and voicemail audio player.',
      importExample: '<vwc-audio-player src="voicemail.mp3"></vwc-audio-player>',
      docSubUrl: 'components/audio-player/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<vwc-*>` custom elements in templates.',
      'Import Vonage Vivid design tokens for color and typography.',
      'Use Vivid call control and media components for communication workflows.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Vivid CSS variables (--vvd-color-canvas, --vvd-color-primary).',
    iconUsage: 'Use `<vwc-icon name="call-solid"></vwc-icon>`.',
    layoutConventions: 'Use standard Vivid grid and layout wrappers.'
  }
};
