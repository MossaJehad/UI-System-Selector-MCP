import { UISystem } from '../../schemas/uiSystem.js';

export const attractions: UISystem = {
  id: 'attractions',
  name: 'Attractions (A Pretty Cool UI Kit for Svelte)',
  organization: 'Attractions Team (illright)',
  description: 'An open-source, stylish and customizable UI kit for Svelte and SvelteKit, featuring cleanly designed form inputs, datepickers, star ratings, snackbars, and tabs with customizable SCSS themes.',
  category: 'component-library',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['svelte'],
  stylingApproach: 'sass',
  packageNames: ['attractions'],
  docsUrl: 'https://illright.github.io/attractions',
  repositoryUrl: 'https://github.com/illright/attractions',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus outlines.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Attractions SCSS theme variable override maps',
    packageName: 'attractions'
  },
  icons: {
    available: true,
    name: 'Feather Icons integration'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern friendly Svelte aesthetic: Attractions Coral (#ff5c5c) / Teal accents, rounded input outlines, star rating components, and smooth micro-interactions.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Historical reference and studying early full-featured Svelte UI kits',
    'Lightweight Svelte applications wanting pretty SCSS-styled components',
    'Date pickers, star rating inputs, and modal dialogs'
  ],
  avoidFor: [
    'New Svelte 5 greenfield projects'
  ],
  strengths: [
    'Clean, tasteful aesthetic with zero generic enterprise blandness',
    'Great component selection: DatePicker, StarRating, Modal, Tab, Dropdown, FormField',
    'Customizable SCSS variable theming'
  ],
  weaknesses: [
    'Archived; maintenance stopped during Svelte 3/4 transition'
  ],
  tags: [
    'attractions',
    'svelte',
    'ui-kit',
    'sass',
    'datepicker',
    'archived',
    'hidden-gem'
  ],
  aliases: ['Attractions', 'Attractions UI', 'Attractions Svelte'],
  relatedSystems: ['svelteui', 'skeleton', 'sveltestrap'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    svelte: {
      command: 'npm install attractions svelte-preprocess sass',
      packages: ['attractions', 'svelte-preprocess', 'sass'],
      peerDependencies: ['svelte'],
      setupInstructions: 'Configure `svelte-preprocess` to load Attractions SCSS variables.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Attractions button with filled, outline, and icon slots.',
      importExample: "import { Button } from 'attractions';\n\n<Button filled on:click={handleClick}>Action</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Svelte library: import components from `attractions`.',
      'Configure `svelte-preprocess` for SCSS compilation.',
      'Use Attractions components for forms and interactive elements.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Override SCSS variables in `theme.scss`.',
    iconUsage: 'Embed Feather icons.',
    layoutConventions: 'Use standard flex and grid.'
  }
};
