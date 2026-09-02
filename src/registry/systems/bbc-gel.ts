import { UISystem } from '../../schemas/uiSystem.js';

export const bbcGel: UISystem = {
  id: 'bbc-gel',
  name: 'BBC GEL (Global Experience Language)',
  organization: 'British Broadcasting Corporation (BBC)',
  description: 'The BBC’s world-renowned design framework and guidelines powering BBC News, iPlayer, BBC Sport, and BBC Sounds, pioneering television, web, and mobile cross-platform responsive media design.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'creative-tool', 'accessibility-focused'],
  frameworks: ['html-css', 'react', 'vanilla'],
  stylingApproach: 'css-modules',
  packageNames: ['@bbc/psammead-brand-banner', '@bbc/psammead-typography'],
  docsUrl: 'https://www.bbc.co.uk/gel',
  repositoryUrl: 'https://github.com/bbc',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'The BBC Accessibility Standards (HTML/WCAG AAA) represent one of the world’s most comprehensive digital accessibility guidelines.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens with BBC Reith font typography scale',
    packageName: '@bbc/psammead-typography'
  },
  icons: {
    available: true,
    name: 'BBC GEL Iconography'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'High-impact public broadcasting aesthetic: BBC Reith typography, iconic BBC block headers, vivid sport/news color ribbons, and media video player controls.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Broadcasting, video streaming, podcast players, and live sports scoreboards',
    'High-readability international news publications in multiple scripts/languages',
    'Cross-device responsive web portals requiring AAA accessibility'
  ],
  avoidFor: [
    'B2B SaaS accounting dashboards'
  ],
  strengths: [
    'Gold standard for multimedia broadcasting and live stream interfaces',
    'Pioneering BBC Reith typography optimized for screens from mobile to 4K TVs',
    'Global localization supporting dozens of non-Latin languages and scripts'
  ],
  weaknesses: [
    'Distinctive BBC media branding'
  ],
  tags: [
    'bbc',
    'gel',
    'broadcasting',
    'media',
    'news',
    'video',
    'high-accessibility',
    'wcag-aaa',
    'hidden-gem'
  ],
  aliases: ['GEL', 'BBC GEL', 'BBC Design System', 'Psammead'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @bbc/psammead-brand-banner @bbc/psammead-typography',
      packages: ['@bbc/psammead-brand-banner', '@bbc/psammead-typography'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    banner: {
      canonicalName: 'BrandBanner',
      description: 'BBC Brand Banner header with service logo and navigation.',
      importExample: "import BrandBanner from '@bbc/psammead-brand-banner';\n\n<BrandBanner service=\"news\" />",
      docSubUrl: 'guidelines/'
    }
  },
  aiInstructions: {
    principles: [
      'Adhere to BBC Accessibility Standards (WCAG AAA contrast, focus visibility).',
      'Use BBC Reith Sans and Reith Serif typography scales.',
      'Optimize media playback controls for keyboard and screen reader accessibility.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use BBC service colors (News Red, Sport Yellow, iPlayer Orange).',
    iconUsage: 'Use BBC GEL iconography.',
    layoutConventions: 'Use BBC responsive media grid layout patterns.'
  }
};
