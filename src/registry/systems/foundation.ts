import { UISystem } from '../../schemas/uiSystem.js';

export const foundation: UISystem = {
  id: 'foundation',
  name: 'Foundation (ZURB Foundation)',
  organization: 'ZURB / Foundation Community',
  description: 'An open-source, responsive front-end framework engineered for enterprise web applications and responsive email templates (Foundation for Emails), featuring the XY Grid, flexible Sass mixins, accessible ARIA plugins, and Motion UI animations.',
  category: 'css-framework',
  secondaryCategories: ['enterprise', 'consumer', 'component-library'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['foundation-sites', 'motion-ui', 'what-input'],
  docsUrl: 'https://get.foundation',
  repositoryUrl: 'https://github.com/foundation/foundation-sites',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements full WAI-ARIA keyboard navigation and focus management across JavaScript plugins.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Foundation Sass settings file (`_settings.scss`)',
    packageName: 'foundation-sites'
  },
  icons: {
    available: true,
    packageName: 'foundation-icon-fonts',
    name: 'Foundation Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Semantic, professional responsive layout aesthetic: powerful XY Grid (flexbox/CSS grid), off-canvas side drawers, accordion menus, callout boxes, and reveal modals.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Complex responsive layouts requiring the XY Grid (flexbox or CSS grid based layout engine)',
    'Responsive HTML email newsletters and transaction templates (Foundation for Emails)',
    'Full-stack enterprise applications wanting modular Sass mixins and accessible JS plugins'
  ],
  avoidFor: [
    'Tailwind utility-first workflows'
  ],
  strengths: [
    'The XY Grid is one of the most sophisticated 2D layout grid systems in CSS history',
    'Foundation for Emails / Inky is the industry benchmark for responsive HTML email rendering',
    'Motion UI library for smooth CSS transitions and animations'
  ],
  weaknesses: [
    'Less active development compared to modern zero-runtime CSS frameworks'
  ],
  tags: [
    'foundation',
    'zurb',
    'xy-grid',
    'css-framework',
    'emails',
    'sass',
    'responsive',
    'mainstream'
  ],
  aliases: ['Foundation', 'Foundation Sites', 'ZURB Foundation', 'Foundation 6'],
  relatedSystems: ['bootstrap', 'bulma', 'uikit'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install foundation-sites motion-ui what-input',
      packages: ['foundation-sites', 'motion-ui', 'what-input'],
      setupInstructions: 'Import `foundation-sites/dist/css/foundation.min.css` and initialize Foundation JS with `$(document).foundation()`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Foundation button with .primary, .secondary, .success, .alert, .hollow modifiers.',
      importExample: '<button type="button" class="button primary">Submit Form</button>',
      docSubUrl: 'docs/button.html'
    },
    grid: {
      canonicalName: 'grid-x',
      description: 'XY Grid horizontal row container with .cell columns.',
      importExample: '<div class="grid-x grid-margin-x"><div class="cell medium-6">Left</div><div class="cell medium-6">Right</div></div>',
      docSubUrl: 'docs/xy-grid.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use the XY Grid (`.grid-x`, `.grid-y`, `.cell`, `.grid-margin-x`) for responsive layout.',
      'Use Foundation data attributes (`data-reveal`, `data-accordion`, `data-dropdown`) for JS behavior.',
      'Use `.callout` containers for alert panels.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Configure themes in `_settings.scss`.',
    iconUsage: 'Use Foundation Icons or FontAwesome.',
    layoutConventions: 'Use `.grid-container`, `.grid-x`, and `.cell`.'
  }
};
