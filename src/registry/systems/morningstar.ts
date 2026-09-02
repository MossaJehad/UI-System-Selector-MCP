import { UISystem } from '../../schemas/uiSystem.js';

export const morningstar: UISystem = {
  id: 'morningstar',
  name: 'Morningstar Design System (MDS)',
  organization: 'Morningstar',
  description: 'Morningstar’s official open-source design system and Web Component / Vue library, engineered for institutional investment research, portfolio analytics, financial star ratings, stock charts, and ESG metrics.',
  category: 'company-design-system',
  secondaryCategories: ['data-heavy', 'enterprise', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@morningstar-design/components', '@morningstar-design/tokens'],
  docsUrl: 'https://designsystem.morningstar.com',
  repositoryUrl: 'https://github.com/morningstar',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across financial investment platforms.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@morningstar-design/tokens'
  },
  icons: {
    available: true,
    name: 'Morningstar Financial Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Institutional finance aesthetic: Morningstar Red (#e01a22), financial star ratings (1 to 5 stars), asset allocation pie charts, and dense mutual fund performance tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Investment portfolio management, mutual fund research, and financial advisory portals',
    'Asset allocation charts, stock performance comparison, and ESG scoring',
    'Financial enterprise applications requiring dense tabular data and institutional credibility'
  ],
  avoidFor: [
    'Social photo sharing apps'
  ],
  strengths: [
    'World benchmark for mutual fund and investment rating UX',
    'Specialized investment components: StarRating, MedalistRating, SustainabilityGlobe, FinancialChart',
    'Multi-framework Web Component architecture'
  ],
  weaknesses: [
    'Investment finance domain specialization'
  ],
  tags: [
    'morningstar',
    'mds',
    'fintech',
    'investing',
    'finance',
    'ratings',
    'data-heavy',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['MDS', 'Morningstar Design System', 'Morningstar UI'],
  systemTypes: ['company-design-system', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @morningstar-design/components @morningstar-design/tokens',
      packages: ['@morningstar-design/components', '@morningstar-design/tokens'],
      setupInstructions: 'Import `@morningstar-design/tokens/dist/css/tokens.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'mds-button',
      description: 'Morningstar action button with variation="primary" | "secondary" | "flat".',
      importExample: '<button class="mds-button mds-button--primary">Analyze Portfolio</button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@morningstar-design/tokens/dist/css/tokens.css`.',
      'Use Morningstar rating badges (stars, medals, globes) for financial rankings.',
      'Ensure high data density in financial table layouts.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use MDS color tokens (--mds-color-brand-primary, --mds-color-feedback-positive).',
    iconUsage: 'Use MDS Financial and System icons.',
    layoutConventions: 'Use MDS container and grid structures.'
  }
};
