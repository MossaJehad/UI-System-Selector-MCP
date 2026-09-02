import { UISystem } from '../../schemas/uiSystem.js';

export const shadcnSvelte: UISystem = {
  id: 'shadcn-svelte',
  name: 'shadcn-svelte',
  organization: 'Huntabyte / shadcn-svelte Community',
  description: 'The official community port of shadcn/ui to Svelte and SvelteKit, delivering source-owned, copy-paste accessible components built on Bits UI and Tailwind CSS with full support for Svelte 5.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'tailwind',
  packageNames: ['bits-ui', 'clsx', 'tailwind-merge', 'lucide-svelte'],
  docsUrl: 'https://shadcn-svelte.com',
  repositoryUrl: 'https://github.com/huntabyte/shadcn-svelte',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on Bits UI headless primitives with accessible focus trapping and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme variables matching shadcn/ui conventions',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-svelte',
    name: 'Lucide Svelte Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'The iconic shadcn/ui minimalist aesthetic brought to Svelte: subtle neutral borders, command palettes, accessible dialogs, and dark mode toggles.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Svelte and SvelteKit applications wanting source-owned copy-paste component architecture',
    'Modern SaaS dashboards built with Tailwind CSS in Svelte 5',
    'Developers wanting full code ownership over UI components in Svelte'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Direct parity with React shadcn/ui for Svelte and SvelteKit developers',
    '100% source-owned copy-paste architecture with official CLI (`npx shadcn-svelte@latest add ...`)',
    'Powered by Bits UI for rock-solid accessibility'
  ],
  weaknesses: [
    'Copy-paste component architecture requires maintaining component code in repo'
  ],
  tags: [
    'shadcn-svelte',
    'svelte',
    'sveltekit',
    'bits-ui',
    'source-owned',
    'tailwind',
    'mainstream'
  ],
  aliases: ['shadcn-svelte', 'shadcn svelte', 'shadcn/svelte'],
  relatedSystems: ['shadcn-ui', 'bits-ui', 'skeleton', 'shadcn-vue'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    svelte: {
      command: 'npx shadcn-svelte@latest init',
      packages: ['bits-ui', 'clsx', 'tailwind-merge', 'lucide-svelte'],
      peerDependencies: ['svelte', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'shadcn-svelte action button with variant and size props.',
      importExample: "<script>\n  import { Button } from '$lib/components/ui/button';\n</script>\n\n<Button variant=\"default\">Save</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Add components via `npx shadcn-svelte@latest add <component>`.',
      'Use `cn()` utility from `$lib/utils` for class merging.',
      'Use `lucide-svelte` for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors via Tailwind CSS CSS variables.',
    iconUsage: 'Use `lucide-svelte`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
