import { UISystem } from '../../schemas/uiSystem.js';

export const radius: UISystem = {
  id: 'radius',
  name: 'NationBuilder Radius',
  organization: 'NationBuilder',
  description: 'NationBuilder’s official open-source design system and component architecture, built for civic campaigns, grassroots fundraising, volunteer mobilization, donor databases, and community organizing.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'consumer', 'accessibility-focused'],
  frameworks: ['react', 'html-css'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@nationbuilder/radius-tokens'],
  docsUrl: 'https://radius.nationbuilder.com',
  repositoryUrl: 'https://github.com/nationbuilder/radius',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across civic campaign action pages.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS Custom Properties and Style Dictionary tokens',
    packageName: '@nationbuilder/radius-tokens'
  },
  icons: {
    available: true,
    name: 'Radius Civic & Action Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Civic empowerment aesthetic: bold primary actions, volunteer sign-up cards, donation progress thermometers, and petition action counters.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Grassroots advocacy, political campaigns, and non-profit donation pages',
    'Volunteer shift scheduling, petition signers, and community event rsvps',
    'Civic tech applications needing action-oriented UI'
  ],
  avoidFor: [
    'Enterprise ERP supply chain screens'
  ],
  strengths: [
    'Optimized for civic mobilization, political donations, and volunteer engagement',
    'Multi-tier design token system with strong theme flexibility',
    'High-conversion action page components'
  ],
  weaknesses: [
    'Civic campaigning focus'
  ],
  tags: [
    'nationbuilder',
    'radius',
    'civic',
    'campaign',
    'advocacy',
    'non-profit',
    'donations',
    'hidden-gem'
  ],
  aliases: ['Radius', 'NationBuilder Design System', 'Radius Design System'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @nationbuilder/radius-tokens',
      packages: ['@nationbuilder/radius-tokens'],
      setupInstructions: 'Import `@nationbuilder/radius-tokens/dist/css/variables.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Radius action button with intent="action" | "support" | "neutral".',
      importExample: '<button class="rad-btn rad-btn--action">Donate Now</button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Radius tokens for campaign styling.',
      'Make donation and petition calls to action visually dominant.',
      'Ensure accessible contrast for public advocacy pages.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Radius CSS variables for customizable campaign colorways.',
    iconUsage: 'Use Radius action icons.',
    layoutConventions: 'Use standard campaign action layout containers.'
  }
};
