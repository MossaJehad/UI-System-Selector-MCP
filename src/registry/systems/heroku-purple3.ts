import { UISystem } from '../../schemas/uiSystem.js';

export const herokuPurple3: UISystem = {
  id: 'heroku-purple3',
  name: 'Heroku Purple3 Design System',
  organization: 'Heroku (Salesforce)',
  description: 'Heroku’s historic open-source design system and CSS framework, engineered for PaaS developer dashboards, dyno metric charts, add-on provisioners, and terminal deployment status cards.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'saas', 'dashboard'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['@heroku/purple3'],
  docsUrl: 'https://github.com/heroku/purple3',
  repositoryUrl: 'https://github.com/heroku/purple3',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for accessible developer dashboards across Heroku Dashboard.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Heroku Purple color palettes and Sass variables',
    packageName: '@heroku/purple3'
  },
  icons: {
    available: true,
    name: 'Heroku Dev & Dyno Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Iconic PaaS developer dashboard aesthetic: Heroku Purple (#79589f) / Slate (#2c3e50), dyno resource gauges, pipeline stage cards, and build log status badges.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developer platforms, cloud deployment dashboards, and PaaS management tools',
    'Developers wanting nostalgic Heroku dashboard styling',
    'Server status and pipeline deployment interfaces'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'Iconic developer aesthetic that defined the classic cloud PaaS era',
    'Specialized cloud deployment, pipeline, and dyno resource components',
    'Clean modular Sass architecture'
  ],
  weaknesses: [
    'Archived; historical developer platform aesthetic'
  ],
  tags: [
    'heroku',
    'purple3',
    'cloud',
    'paas',
    'developer-tool',
    'dashboard',
    'archived',
    'hidden-gem'
  ],
  aliases: ['Heroku Purple3', 'Heroku Purple', 'Heroku Design System', 'Purple3'],
  relatedSystems: ['primer', 'pajamas', 'clever-components'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install @heroku/purple3',
      packages: ['@heroku/purple3'],
      setupInstructions: 'Import `@heroku/purple3/dist/purple3.css` into your project stylesheet.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'app-card',
      description: 'Heroku app pipeline status card.',
      importExample: '<div class="hk-card"><div class="hk-card-header">App Pipeline</div><div class="hk-card-body"><p>Dynos: 2x Web | Status: Healthy</p></div></div>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Use Heroku Purple `#79589f` for primary branding and action elements.',
      'Use Heroku card containers for app and pipeline views.',
      'Use status colors for build states (Success Green, Failed Red, Building Yellow).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Sass variables.',
    iconUsage: 'Use Heroku SVG iconography.',
    layoutConventions: 'Use standard responsive grid and container layout.'
  }
};
