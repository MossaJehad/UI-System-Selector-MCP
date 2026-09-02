import { UISystem } from '../../schemas/uiSystem.js';

export const smelte: UISystem = {
  id: 'smelte',
  name: 'Smelte (Material Design with Tailwind CSS for Svelte)',
  organization: 'Maxim Krizhanovsky (matyunya)',
  description: 'An open-source UI framework for Svelte and SvelteKit implementing Google Material Design specifications using Tailwind CSS utility classes and rollup post-processing.',
  category: 'component-library',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['svelte'],
  stylingApproach: 'tailwind',
  packageNames: ['smelte'],
  docsUrl: 'https://smeltejs.com',
  repositoryUrl: 'https://github.com/matyunya/smelte',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Material Design focus indicators and ripple effects.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Smelte Tailwind plugin color configuration and elevation tokens',
    packageName: 'smelte'
  },
  icons: {
    available: true,
    name: 'Material Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Material Design meets Tailwind CSS: floating action buttons (FAB), ripple button clicks, elevation shadow tiers, and Material text fields in Svelte.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Historical reference and exploring early Material Design + Tailwind CSS experiments in Svelte',
    'Maintaining legacy Svelte 3 Material applications',
    'Studying Tailwind utility compilation pipelines in Svelte'
  ],
  avoidFor: [
    'New Svelte 5 / SvelteKit greenfield applications (use Skeleton or shadcn-svelte instead)'
  ],
  strengths: [
    'Pioneered combining Google Material Design components with Tailwind CSS in Svelte',
    'Built-in ripple animations, notification snackbars, and data tables',
    'Dynamic light/dark theme switcher'
  ],
  weaknesses: [
    'Archived; unmaintained for modern Svelte 4/5'
  ],
  tags: [
    'smelte',
    'svelte',
    'tailwind',
    'material-design',
    'archived',
    'historical',
    'hidden-gem'
  ],
  aliases: ['Smelte', 'SmelteJS', 'Smelte UI'],
  relatedSystems: ['svelte-material-ui', 'skeleton', 'shadcn-svelte'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    svelte: {
      command: 'npm install smelte',
      packages: ['smelte'],
      peerDependencies: ['svelte'],
      setupInstructions: 'Add `smelte/tailwind.config.js` to rollup/vite build pipeline and load Material Icons.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Smelte Material button with color="primary" | "accent".',
      importExample: "import Button from 'smelte/src/components/Button';\n\n<Button color=\"primary\">Action</Button>",
      docSubUrl: 'components/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Svelte 3 library: import components from `smelte/src/components/*`.',
      'Use Smelte Tailwind configuration.',
      'Use Material Icons font.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme via Smelte Tailwind plugin.',
    iconUsage: 'Use `<Icon>home</Icon>`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
