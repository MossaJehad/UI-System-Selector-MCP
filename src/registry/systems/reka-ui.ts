import { UISystem } from '../../schemas/uiSystem.js';

export const rekaUi: UISystem = {
  id: 'reka-ui',
  name: 'Reka UI (formerly Radix Vue)',
  organization: 'Reka UI Community (Radix Vue)',
  description: 'An open-source, unstyled, accessible UI component library for Vue 3 and Nuxt, porting Radix Primitives to Vue with full TypeScript support, WAI-ARIA compliance, automated focus management, and powering shadcn-vue.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'unstyled',
  packageNames: ['reka-ui', 'radix-vue'],
  docsUrl: 'https://reka-ui.com',
  repositoryUrl: 'https://github.com/unovue/reka-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements full WAI-ARIA authoring practices in Vue 3 with keyboard focus trapping and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Completely unstyled; apply your own Tailwind CSS or CSS Modules.'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS headless compound primitives for Vue 3: clean template composition, data attributes, and seamless Tailwind integration.',
  noveltyLevel: 'established',
  bestFor: [
    'Building custom bespoke design systems and component libraries in Vue 3 and Nuxt',
    'Underlying foundation for shadcn-vue and unstyled Tailwind component kits',
    'Vue developers wanting Radix Primitives parity and WAI-ARIA accessibility'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'The premier headless component library for the Vue 3 and Nuxt ecosystem',
    'Full feature parity with Radix Primitives in Vue (Dialog, DropdownMenu, Popover, Select, Combobox, Tabs, Accordion, DatePicker)',
    'The official engine powering shadcn-vue'
  ],
  weaknesses: [
    'Vue 3 only'
  ],
  tags: [
    'reka-ui',
    'radix-vue',
    'vue',
    'nuxt',
    'headless',
    'unstyled',
    'accessibility',
    'shadcn-vue',
    'established'
  ],
  aliases: ['Reka UI', 'Radix Vue', 'RekaUI', 'Radix-Vue'],
  relatedSystems: ['radix-primitives', 'shadcn-vue', 'bits-ui'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install reka-ui',
      packages: ['reka-ui'],
      peerDependencies: ['vue']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'DialogRoot',
      description: 'Headless modal dialog compound component for Vue 3.',
      importExample: "<script setup>\n  import { DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle } from 'reka-ui';\n</script>\n\n<template>\n  <DialogRoot>\n    <DialogTrigger class=\"btn\">Open</DialogTrigger>\n    <DialogPortal>\n      <DialogOverlay class=\"fixed inset-0 bg-black/50\" />\n      <DialogContent class=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded\">\n        <DialogTitle>Dialog Title</DialogTitle>\n      </DialogContent>\n    </DialogPortal>\n  </DialogRoot>\n</template>",
      docSubUrl: 'docs/components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Reka UI compound components (`DialogRoot`, `DialogTrigger`, `DialogContent`).',
      'Use the `as-child` prop when attaching behavior to custom styled trigger elements.',
      'Style with Tailwind CSS using data attribute selectors (`data-[state=open]`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Style using Tailwind CSS or CSS classes targeting `data-state` and ARIA attributes.',
    iconUsage: 'Use `lucide-vue-next`.',
    layoutConventions: 'Use standard Vue 3 template composition.'
  }
};
