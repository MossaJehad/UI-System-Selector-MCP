import { UISystem } from '../../schemas/uiSystem.js';

export const shadcnVue: UISystem = {
  id: 'shadcn-vue',
  name: 'shadcn-vue',
  organization: 'Radix Vue / unovue Community',
  description: 'The official community port of shadcn/ui to Vue 3 and Nuxt, delivering source-owned, copy-paste accessible components built with Reka UI (Radix Vue) and Tailwind CSS.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'tailwind',
  packageNames: ['reka-ui', 'clsx', 'tailwind-merge', 'lucide-vue-next'],
  docsUrl: 'https://www.shadcn-vue.com',
  repositoryUrl: 'https://github.com/unovue/shadcn-vue',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on Reka UI (Radix Vue) headless primitives with accessible focus management and WAI-ARIA roles.'
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
    packageName: 'lucide-vue-next',
    name: 'Lucide Vue Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'The iconic shadcn/ui minimalist aesthetic ported to Vue: subtle neutral borders, accessible dialogs, command palettes, and dark mode toggles.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Vue 3 and Nuxt applications wanting the source-owned copy-paste shadcn/ui developer experience',
    'Modern SaaS dashboards built with Tailwind CSS in Vue 3',
    'Developers wanting full code ownership over UI components'
  ],
  avoidFor: [
    'React or Svelte projects'
  ],
  strengths: [
    'Direct parity with React shadcn/ui for Vue 3 and Nuxt developers',
    '100% source-owned copy-paste architecture with official CLI (`npx shadcn-vue@latest add ...`)',
    'Powered by Reka UI for rock-solid accessibility'
  ],
  weaknesses: [
    'Copy-paste component architecture requires maintaining component code in repo'
  ],
  tags: [
    'shadcn-vue',
    'vue',
    'vue3',
    'nuxt',
    'reka-ui',
    'radix-vue',
    'source-owned',
    'tailwind',
    'mainstream'
  ],
  aliases: ['shadcn-vue', 'shadcn vue', 'shadcn/vue'],
  relatedSystems: ['shadcn-ui', 'reka-ui', 'shadcn-svelte'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    vue: {
      command: 'npx shadcn-vue@latest init',
      packages: ['reka-ui', 'clsx', 'tailwind-merge', 'lucide-vue-next'],
      peerDependencies: ['vue', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'shadcn-vue action button with variant and size props.',
      importExample: "<script setup>\nimport { Button } from '@/components/ui/button';\n</script>\n\n<template>\n  <Button variant=\"default\">Save</Button>\n</template>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Add components via `npx shadcn-vue@latest add <component>`.',
      'Use `cn()` utility for combining Tailwind classes.',
      'Use `lucide-vue-next` for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors via Tailwind CSS CSS variables.',
    iconUsage: 'Use `lucide-vue-next`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
