import { UISystem } from '../../schemas/uiSystem.js';

export const meltUi: UISystem = {
  id: 'melt-ui',
  name: 'Melt UI',
  organization: 'Melt UI Community',
  description: 'An open-source, headless, accessible component builder and state management library for Svelte and SvelteKit, providing builder-pattern action directives, WAI-ARIA compliance, focus management, and transition support.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'unstyled',
  packageNames: ['@melt-ui/svelte'],
  docsUrl: 'https://melt-ui.com',
  repositoryUrl: 'https://github.com/melt-ui/melt-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements full WAI-ARIA authoring practices in Svelte with keyboard focus trapping and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Completely unstyled builder pattern; pair with Tailwind CSS or CSS.'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS headless Svelte action builders: stores, directives (`use:melt`), and keyboard navigation ready for custom Tailwind CSS styling.',
  noveltyLevel: 'established',
  bestFor: [
    'Building custom bespoke design systems in Svelte and SvelteKit',
    'Developers wanting builder-pattern Svelte primitives with complete control over Tailwind CSS',
    'Underlying headless foundation for Svelte UI component libraries'
  ],
  avoidFor: [
    'React or Vue projects',
    'Developers wanting instant pre-styled Svelte components'
  ],
  strengths: [
    'The premier headless UI primitive library built specifically for Svelte and SvelteKit',
    'Svelte builder pattern (`const { elements: { trigger, content }, states: { open } } = createDialog()`) with `use:melt` directive',
    'Extensive component builders (Dialog, DropdownMenu, Combobox, Tabs, Tooltip, Popover, PinInput, Slider)'
  ],
  weaknesses: [
    'Svelte only'
  ],
  tags: [
    'melt-ui',
    'svelte',
    'sveltekit',
    'headless',
    'unstyled',
    'accessibility',
    'wai-aria',
    'established'
  ],
  aliases: ['Melt UI', 'MeltUI', 'Melt Svelte'],
  relatedSystems: ['bits-ui', 'skeleton', 'shadcn-svelte'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install @melt-ui/svelte',
      packages: ['@melt-ui/svelte'],
      peerDependencies: ['svelte'],
      setupInstructions: 'Install `@melt-ui/pp` preprocessor in `svelte.config.js` if using Melt action shortcuts.'
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'createDialog',
      description: 'Headless modal dialog builder with accessible portal and overlay.',
      importExample: "<script>\n  import { createDialog, melt } from '@melt-ui/svelte';\n  const { elements: { trigger, overlay, content, title, description, close }, states: { open } } = createDialog();\n</script>\n\n<button use:melt={$trigger}>Open Modal</button>\n{#if $open}\n  <div use:melt={$overlay} class=\"fixed inset-0 bg-black/50\" />\n  <div use:melt={$content} class=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded\">\n    <h2 use:melt={$title}>Title</h2>\n  </div>\n{/if}",
      docSubUrl: 'docs/builders/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Melt UI `create*()` builder functions in `<script>`.',
      'Apply builder element stores with the `use:melt={$element}` directive.',
      'Style elements using Tailwind CSS classes or custom Svelte scoped CSS.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Style using Tailwind CSS or CSS targeting `data-state` and ARIA attributes.',
    iconUsage: 'Use `lucide-svelte`.',
    layoutConventions: 'Use standard Svelte component composition.'
  }
};
