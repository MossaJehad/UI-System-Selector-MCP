import { UISystem } from '../../schemas/uiSystem.js';

export const stacks: UISystem = {
  id: 'stacks',
  name: 'Stack Overflow Stacks',
  organization: 'Stack Overflow (Prosus)',
  description: 'Stack Overflow’s official open-source design system and CSS/Stimulus component library powering Stack Overflow, Stack Exchange network sites, and Stack Overflow for Teams, built for technical Q&A, markdown posts, code blocks, and developer community voting.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'css-framework', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@stackoverflow/stacks'],
  docsUrl: 'https://stackoverflow.design',
  repositoryUrl: 'https://github.com/StackExchange/Stacks',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Stack Overflow community and enterprise products.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Less variables',
    packageName: '@stackoverflow/stacks'
  },
  icons: {
    available: true,
    packageName: '@stackoverflow/stacks',
    name: 'Stacks System Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Iconic developer Q&A style: Stack Overflow Orange (#f48024), tag badges (`[react]`, `[typescript]`), upvote/downvote counters, accepted answer checkmarks, and syntax-highlighted code snippets.',
  noveltyLevel: 'established',
  bestFor: [
    'Developer community forums, technical Q&A boards, and help communities',
    'Markdown-driven documentation and code explanation portals',
    'Lightweight CSS-first web apps wanting the recognizable Stack Overflow aesthetic'
  ],
  avoidFor: [
    'E-commerce luxury apparel shops'
  ],
  strengths: [
    'Instantly recognizable to tens of millions of software developers worldwide',
    'Specialized Q&A components: Post summaries, Tag chips, Vote controls, User reputation cards, Notice banners',
    'Lightweight CSS/Stimulus architecture requiring zero heavy JS framework'
  ],
  weaknesses: [
    'Strong Stack Overflow community identity'
  ],
  tags: [
    'stack-overflow',
    'stacks',
    'q-and-a',
    'forum',
    'developer-tool',
    'community',
    'dark-mode',
    'css-framework'
  ],
  aliases: ['Stacks', 'Stack Overflow Design System', 'Stacks UI'],
  systemTypes: ['company-design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @stackoverflow/stacks',
      packages: ['@stackoverflow/stacks'],
      setupInstructions: 'Import `@stackoverflow/stacks/dist/css/stacks.min.css` and `@stackoverflow/stacks/dist/js/stacks.min.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 's-btn',
      description: 'Stacks action button with s-btn__primary, s-btn__danger, s-btn__outlined variants.',
      importExample: '<button class="s-btn s-btn__primary" type="button">Post Your Answer</button>',
      docSubUrl: 'product/components/buttons/'
    },
    tag: {
      canonicalName: 's-tag',
      description: 'Stack Overflow question tag badge.',
      importExample: '<a href="#" class="s-tag">typescript</a>',
      docSubUrl: 'product/components/tags/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Stacks `.s-*` CSS classes and Atomic CSS utilities.',
      'Use `.s-tag` for technical taxonomy and keyword tags.',
      'Include Stacks vote controls and question summary cards for forum layouts.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Stacks CSS variables (`--theme-primary`, `--theme-body-font-color`).',
    iconUsage: 'Use Stacks SVG icons (e.g. `<svg class="svg-icon iconArrowUp">...`).',
    layoutConventions: 'Use `.grid` and `.grid--cell` alongside Stacks responsive wrappers.'
  }
};
