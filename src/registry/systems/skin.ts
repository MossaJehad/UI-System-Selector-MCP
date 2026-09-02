import { UISystem } from '../../schemas/uiSystem.js';

export const skin: UISystem = {
  id: 'skin',
  name: 'eBay Skin (Evo / Marko UI)',
  organization: 'eBay',
  description: 'eBay’s official open-source design system, HTML/CSS framework, and Marko/Evo component library, engineered for high-throughput global e-commerce, auction bids, listing carousels, and search result filters.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'accessibility-focused'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@ebay/skin', '@ebay/ebayui-core-react'],
  docsUrl: 'https://ebay.github.io/skin',
  repositoryUrl: 'https://github.com/eBay/skin',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA with extensive keyboard accessibility across complex auction grids and filters.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and LESS variables',
    packageName: '@ebay/skin'
  },
  icons: {
    available: true,
    packageName: '@ebay/skin',
    name: 'eBay SVG Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'E-commerce marketplace style: eBay Blue, Yellow, Green accents, bold pricing typography, countdown bid badges, and multi-select filter sidebars.',
  noveltyLevel: 'established',
  bestFor: [
    'Online marketplaces, e-commerce storefronts, and auction platforms',
    'Product listing pages with search filter facets and pagination',
    'High-traffic consumer retail web applications'
  ],
  avoidFor: [
    'Developer IDE plugins'
  ],
  strengths: [
    'Proven at eBay’s scale of millions of concurrent global shoppers',
    'Specialized e-commerce components: item tiles, bid inputs, countdown timers, star ratings',
    'Lightweight CSS-first core with zero JavaScript framework lock-in'
  ],
  weaknesses: [
    'E-commerce specific domain specialization'
  ],
  tags: [
    'ebay',
    'skin',
    'ecommerce',
    'marketplace',
    'auction',
    'retail',
    'accessible',
    'rtl',
    'dark-mode'
  ],
  aliases: ['Skin', 'eBay Skin', 'eBay Design System', 'Evo Design System'],
  systemTypes: ['company-design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ebay/skin',
      packages: ['@ebay/skin'],
      setupInstructions: 'Import `@ebay/skin/dist/skin.css` and `@ebay/skin/dist/tokens.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'eBay accessible action button (primary, secondary, tertiary, delete).',
      importExample: '<button class="btn btn--primary" type="button">Place Bid</button>',
      docSubUrl: 'button/'
    },
    itemtile: {
      canonicalName: 'item-tile',
      description: 'E-commerce product tile with price, image, shipping info, and watch button.',
      importExample: '<div class="item-tile"><div class="item-tile__image"></div><div class="item-tile__title">Vintage Camera</div><div class="item-tile__price">$129.99</div></div>',
      docSubUrl: 'item-tile/'
    }
  },
  aiInstructions: {
    principles: [
      'Use official `.btn`, `.textbox`, and `.item-tile` classes from eBay Skin.',
      'Apply eBay design tokens for pricing and promotional tags.',
      'Ensure clear visual distinction between auction bids and buy-it-now pricing.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use eBay Skin tokens (`--color-foreground-primary`, `--color-background-primary`).',
    iconUsage: 'Use eBay SVG icons (e.g. `<svg class="icon icon--cart"><use href="#icon-cart"></use></svg>`).',
    layoutConventions: 'Use standard e-commerce grid and filter sidebar layouts.'
  }
};
