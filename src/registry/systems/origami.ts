import { UISystem } from '../../schemas/uiSystem.js';

export const origami: UISystem = {
  id: 'origami',
  name: 'Financial Times Origami',
  organization: 'Financial Times (FT)',
  description: 'The Financial Times’s open-source design system and frontend component library, engineered for world-class financial journalism, live market ticker tickers, editorial paywalls, and high-readability typography.',
  category: 'company-design-system',
  secondaryCategories: ['data-heavy', 'consumer', 'accessibility-focused'],
  frameworks: ['html-css', 'vanilla', 'css-only'],
  stylingApproach: 'sass',
  packageNames: ['@financial-times/o-buttons', '@financial-times/o-typography', '@financial-times/o-header'],
  docsUrl: 'https://origami.ft.com',
  repositoryUrl: 'https://github.com/Financial-Times/origami',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with rigorous contrast and focus testing for financial news readers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in Sass and CSS custom properties with FT Clanger / Financier typography',
    packageName: '@financial-times/o-typography'
  },
  icons: {
    available: true,
    packageName: '@financial-times/o-icons',
    name: 'Origami FT Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Iconic financial newspaper editorial aesthetic: FT Pink / Claret background (#fff1e5), deep navy text, serif Financier Display headlines, and market status chips.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Financial journalism, business news portals, and editorial publications',
    'Market data dashboards, stock tickers, and economic research reports',
    'Subscription paywalls and reader account management'
  ],
  avoidFor: [
    'Casual mobile gaming'
  ],
  strengths: [
    'Unsurpassed editorial prestige and typography craftsmanship',
    'Specialized financial news components: Teaser cards, Market tickers, Live news banners, Paywall cards',
    'Progressive enhancement with robust Sass architecture'
  ],
  weaknesses: [
    'Strong Financial Times newspaper brand aesthetic'
  ],
  tags: [
    'financial-times',
    'origami',
    'editorial',
    'finance',
    'journalism',
    'news',
    'typography',
    'hidden-gem'
  ],
  aliases: ['Origami', 'FT Origami', 'Financial Times Design System'],
  systemTypes: ['company-design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @financial-times/o-typography @financial-times/o-buttons @financial-times/o-header',
      packages: ['@financial-times/o-typography', '@financial-times/o-buttons', '@financial-times/o-header'],
      setupInstructions: 'Import Origami Sass modules in your build pipeline.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'o-buttons',
      description: 'Origami action button with primary, secondary, and mono variants.',
      importExample: '<button class="o-buttons o-buttons--primary">Subscribe to FT</button>',
      docSubUrl: 'components/o-buttons/'
    },
    teaser: {
      canonicalName: 'o-teaser',
      description: 'FT news article teaser card with headline, standfirst, timestamp, and tag.',
      importExample: '<div class="o-teaser"><div class="o-teaser__heading"><a href="#">Global Markets Rally on Rate Cut</a></div></div>',
      docSubUrl: 'components/o-teaser/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Origami `.o-*` CSS classes for editorial integrity.',
      'Use FT Financier Display and Metric fonts.',
      'Honor FT editorial layout grids and teaser hierarchy.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use FT color tokens (Paper: #fff1e5, Claret, Wheat).',
    iconUsage: 'Use icons from @financial-times/o-icons.',
    layoutConventions: 'Wrap in `.o-grid-container` and use FT multi-column editorial grids.'
  }
};
