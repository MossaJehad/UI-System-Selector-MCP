import { UISystem } from '../../schemas/uiSystem.js';

export const svelteui: UISystem = {
  id: 'svelteui',
  name: 'SvelteUI (Mantine for Svelte)',
  organization: 'SvelteUI Community',
  description: 'An open-source, all-in-one UI component library and hook ecosystem for Svelte and SvelteKit inspired by Mantine, featuring 50+ components, dark mode, transition actions, motion hooks, and type-safe styling.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'css-modules',
  packageNames: ['@svelteuidev/core', '@svelteuidev/composables', '@svelteuidev/motion'],
  docsUrl: 'https://svelteui.org',
  repositoryUrl: 'https://github.com/svelteuidev/svelteui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible focus rings, keyboard navigation, and ARIA roles across interactive components.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens via SvelteUIProvider theme object',
    packageName: '@svelteuidev/core'
  },
  icons: {
    available: true,
    packageName: 'radix-icons-svelte',
    name: 'Radix Icons for Svelte'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Mantine-inspired Svelte aesthetic: SvelteUI Blue (#228be6) accents, rounded cards, dark mode switcher, interactive notifications, and clean form inputs.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Svelte and SvelteKit applications wanting an all-in-one component suite with Mantine’s design philosophy',
    'Developers wanting rich composable hooks (`use-click-outside`, `use-clipboard`, `use-debounce`) in Svelte',
    'Fast SaaS dashboard prototyping in Svelte'
  ],
  avoidFor: [
    'React, Vue, or Angular projects'
  ],
  strengths: [
    'All-in-one ecosystem for Svelte (Core components, Composables, Motion, Prism code blocks)',
    'First-class dark mode with `<SvelteUIProvider>`',
    'Type-safe props and comprehensive TypeScript definitions'
  ],
  weaknesses: [
    'Svelte only'
  ],
  tags: [
    'svelteui',
    'svelte',
    'sveltekit',
    'mantine-inspired',
    'composables',
    'dark-mode',
    'saas',
    'hidden-gem'
  ],
  aliases: ['SvelteUI', 'Svelte UI', 'SvelteUIdav'],
  relatedSystems: ['skeleton', 'shadcn-svelte', 'mantine'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install @svelteuidev/core @svelteuidev/composables radix-icons-svelte',
      packages: ['@svelteuidev/core', '@svelteuidev/composables', 'radix-icons-svelte'],
      peerDependencies: ['svelte'],
      setupInstructions: 'Wrap root layout in `<SvelteUIProvider withNormalizeCSS withGlobalStyles>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'SvelteUI button with color="blue" | "red" | "green" | "grape" | "orange", variant="filled" | "light" | "outline".',
      importExample: "<script>\n  import { Button } from '@svelteuidev/core';\n</script>\n\n<Button variant=\"filled\" color=\"blue\">Save Changes</Button>",
      docSubUrl: 'docs/core/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<SvelteUIProvider withNormalizeCSS withGlobalStyles>`.',
      'Import components from `@svelteuidev/core`.',
      'Use SvelteUI actions and composables from `@svelteuidev/composables`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `theme` prop on `<SvelteUIProvider>`.',
    iconUsage: 'Use `radix-icons-svelte` icons.',
    layoutConventions: 'Use `Container`, `Grid`, `Group`, `Stack` primitives.'
  }
};
