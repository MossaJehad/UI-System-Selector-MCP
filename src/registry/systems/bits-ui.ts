import { UISystem } from '../../schemas/uiSystem.js';

export const bitsUi: UISystem = {
  id: 'bits-ui',
  name: 'Bits UI',
  organization: 'Huntabyte / Bits UI Community',
  description: 'An open-source, headless, accessible component library for Svelte 5 and SvelteKit, providing compound component primitives (Dialog, DropdownMenu, Combobox, Popover, DatePicker) inspired by Radix Primitives and powering shadcn-svelte.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'unstyled',
  packageNames: ['bits-ui'],
  docsUrl: 'https://bits-ui.com',
  repositoryUrl: 'https://github.com/huntabyte/bits-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'WAI-ARIA compliant compound components for Svelte with automatic focus management and keyboard roving.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Headless compound primitives; apply your own Tailwind CSS classes.'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS Radix-style compound component primitives for Svelte: clean slot-based composition, data attributes, and seamless Tailwind integration.',
  noveltyLevel: 'established',
  bestFor: [
    'Building custom design systems and component suites in Svelte and SvelteKit',
    'Underlying foundation for shadcn-svelte copy-paste component architectures',
    'Svelte developers wanting Radix Primitives-like compound component DX'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'The official headless component layer powering shadcn-svelte',
    'Clean compound component syntax (`<Dialog.Root>`, `<Dialog.Trigger>`, `<Dialog.Content>`) in Svelte',
    'Full support for modern Svelte 5 Runes and SvelteKit'
  ],
  weaknesses: [
    'Svelte only'
  ],
  tags: [
    'bits-ui',
    'svelte',
    'sveltekit',
    'headless',
    'unstyled',
    'accessibility',
    'shadcn-svelte',
    'established'
  ],
  aliases: ['Bits UI', 'BitsUI', 'Bits Svelte'],
  relatedSystems: ['melt-ui', 'shadcn-svelte', 'radix-primitives'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install bits-ui',
      packages: ['bits-ui'],
      peerDependencies: ['svelte']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Headless modal dialog compound component for Svelte.',
      importExample: "<script>\n  import { Dialog } from 'bits-ui';\n</script>\n\n<Dialog.Root><Dialog.Trigger class=\"btn\">Open</Dialog.Trigger><Dialog.Portal><Dialog.Overlay class=\"fixed inset-0 bg-black/50\" /><Dialog.Content class=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded\"><Dialog.Title>Dialog Title</Dialog.Title></Dialog.Content></Dialog.Portal></Dialog.Root>",
      docSubUrl: 'docs/components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Bits UI compound components (`<Dialog.Root>`, `<Dialog.Content>`).',
      'Apply Tailwind CSS classes directly on Bits UI components.',
      'Use `asChild` snippet on triggers when replacing with custom elements.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Style using Tailwind CSS classes targeting `data-[state=open]`.',
    iconUsage: 'Use `lucide-svelte`.',
    layoutConventions: 'Use standard Svelte component composition.'
  }
};
