import { UISystem } from '../../schemas/uiSystem.js';

export const fulldevUi: UISystem = {
  id: 'fulldev-ui',
  name: 'fulldev/ui (Component Library for Astro)',
  organization: 'Fulldev / Astro Community',
  description: 'An open-source, highly customizable UI component library and design system built specifically for Astro and Tailwind CSS, providing server-rendered Astro components, typography, buttons, cards, and theme presets with zero client-side JavaScript.',
  category: 'component-library',
  secondaryCategories: ['saas', 'consumer', 'minimalist'],
  frameworks: ['astro', 'html-css'],
  stylingApproach: 'tailwind',
  packageNames: ['@fulldev/ui', 'astro', 'tailwindcss'],
  docsUrl: 'https://ui.full.dev',
  repositoryUrl: 'https://github.com/fulldevui/ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Pure semantic HTML elements rendered server-side with zero hydration overhead.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Astro integration theme tokens in CSS custom properties and Tailwind',
    packageName: '@fulldev/ui'
  },
  icons: {
    available: true,
    packageName: 'astro-icon',
    name: 'Astro Icon integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Zero-JS server-rendered Astro aesthetic: clean typography, minimal card surfaces, instant page loads, and dark theme toggles.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Astro content sites, marketing websites, blogs, and documentation hubs',
    'Developers prioritizing zero client-side JavaScript overhead and 100 Lighthouse scores',
    'Native Astro component workflows'
  ],
  avoidFor: [
    'Complex single-page application client state machines'
  ],
  strengths: [
    'Built specifically as native `.astro` components for the Astro ecosystem',
    'Zero client-side JS overhead by default (pure HTML/CSS server rendering)',
    'Seamless integration with Astro integrations and Tailwind CSS'
  ],
  weaknesses: [
    'Astro only'
  ],
  tags: [
    'fulldev-ui',
    'astro',
    'zero-js',
    'tailwind',
    'content-sites',
    'marketing',
    'hidden-gem'
  ],
  aliases: ['fulldev/ui', 'Fulldev UI', 'Astro UI', 'Fulldev'],
  relatedSystems: ['accessible-astro-components', 'hyperui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    astro: {
      command: 'npx astro add @fulldev/ui',
      packages: ['@fulldev/ui'],
      peerDependencies: ['astro', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Astro native server-rendered button component.',
      importExample: "---\nimport { Button } from '@fulldev/ui';\n---\n\n<Button href=\"/get-started\" variant=\"solid\">Get Started</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import components inside Astro frontmatter (`---`).',
      'Use native `.astro` components for zero-JS client delivery.',
      'Configure `@fulldev/ui` in `astro.config.mjs`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via `@fulldev/ui` integration in `astro.config.mjs`.',
    iconUsage: 'Use `astro-icon` or `@fulldev/ui` icon slot.',
    layoutConventions: 'Use standard Astro layout slots and Tailwind CSS.'
  }
};
