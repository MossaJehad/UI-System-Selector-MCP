import { UISystem } from '../../schemas/uiSystem.js';

export const seeds: UISystem = {
  id: 'seeds',
  name: 'Sprout Social Seeds',
  organization: 'Sprout Social',
  description: 'Sprout Social’s official open-source design system and React component library, engineered for social media management, scheduled post calendars, cross-channel engagement inboxes, and social analytics reporting.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'dashboard', 'creative-tool'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@sproutsocial/seeds-theme', '@sproutsocial/seeds-icons'],
  docsUrl: 'https://seeds.sproutsocial.com',
  repositoryUrl: 'https://github.com/sproutsocial/seeds',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA across Sprout Social publishing and analytics suites.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JS constants',
    packageName: '@sproutsocial/seeds-theme'
  },
  icons: {
    available: true,
    packageName: '@sproutsocial/seeds-icons',
    name: 'Seeds Social & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, cheerful social media marketing aesthetic: Sprout Green (#00a843), social network color accents (X/Twitter, Facebook, LinkedIn, Instagram), and calendar timeline grid cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Social media scheduling, publishing calendars, and content approval pipelines',
    'Omnichannel customer engagement inboxes and reply threads',
    'Social listening, hashtag tracking, and influencer analytics dashboards'
  ],
  avoidFor: [
    'Healthcare clinical triage apps'
  ],
  strengths: [
    'Purpose-built for social media workflows and post scheduling',
    'Seeds Icons library with comprehensive social network logos and action icons',
    'Polished React components for message composing, media attachments, and engagement feeds'
  ],
  weaknesses: [
    'Social media marketing domain specialization'
  ],
  tags: [
    'sprout-social',
    'seeds',
    'social-media',
    'marketing',
    'publishing',
    'calendar',
    'saas',
    'hidden-gem'
  ],
  aliases: ['Seeds', 'Sprout Social Design System', 'Seeds UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @sproutsocial/seeds-theme @sproutsocial/seeds-icons',
      packages: ['@sproutsocial/seeds-theme', '@sproutsocial/seeds-icons'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Seeds action button with intent="primary" | "secondary" | "danger".',
      importExample: "import { Button } from '@sproutsocial/seeds-theme';\n\n<Button intent=\"primary\">Schedule Post</Button>",
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Seeds theme tokens for brand consistency.',
      'Use official Seeds social network color constants for cross-network post badges.',
      'Structure publishing calendars with clear schedule time slots.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Seeds design tokens for typography and spacing.',
    iconUsage: 'Use @sproutsocial/seeds-icons for social platforms and action glyphs.',
    layoutConventions: 'Use Flex and Stack with Seeds spacing tokens.'
  }
};
