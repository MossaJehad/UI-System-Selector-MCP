import { UISystem } from '../../schemas/uiSystem.js';

export const skeleton: UISystem = {
  id: 'skeleton',
  name: 'Skeleton UI',
  organization: 'Skeleton Labs',
  description: 'An open-source UI component library and design system for Svelte, SvelteKit, and Tailwind CSS, providing accessible components, multi-theme generator presets, dynamic design tokens, and smooth reactive state stores.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'tailwind',
  packageNames: ['@skeletonlabs/skeleton', '@skeletonlabs/tw-plugin'],
  docsUrl: 'https://skeleton.dev',
  repositoryUrl: 'https://github.com/skeletonlabs/skeleton',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on top of Floating UI and accessible Svelte actions.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin tokens with Skeleton theme generator',
    packageName: '@skeletonlabs/tw-plugin'
  },
  icons: {
    available: true,
    name: 'Lucide Svelte integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Svelte + Tailwind aesthetic: rich vibrant theme palettes (Crimson, Gold, Hamlindigo, Vintage, Modern), smooth drawer slides, app rail navigation, and dark mode contrast.',
  noveltyLevel: 'established',
  bestFor: [
    'Svelte and SvelteKit applications built on Tailwind CSS wanting full UI component integration',
    'SaaS dashboards, content portals, and web apps with multi-theme switching',
    'Developers wanting AppShell, Drawer, Modal, and Toast systems built for Svelte'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'The most widely adopted complete UI component library built specifically for Svelte and SvelteKit',
    'Rich layout components (AppShell, AppRail, AppBar, Drawer, Toast, Modal)',
    'Powerful theme generator tool allowing custom theme token export in seconds'
  ],
  weaknesses: [
    'Svelte only'
  ],
  tags: [
    'skeleton',
    'svelte',
    'sveltekit',
    'tailwind',
    'component-library',
    'app-shell',
    'dark-mode',
    'established'
  ],
  aliases: ['Skeleton', 'Skeleton UI', 'Skeleton Svelte'],
  relatedSystems: ['shadcn-svelte', 'melt-ui', 'bits-ui'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install @skeletonlabs/skeleton @skeletonlabs/tw-plugin',
      packages: ['@skeletonlabs/skeleton', '@skeletonlabs/tw-plugin'],
      peerDependencies: ['svelte', 'tailwindcss'],
      setupInstructions: 'Add `skeleton()` plugin with your chosen theme to `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    appshell: {
      canonicalName: 'AppShell',
      description: 'SvelteKit responsive application shell with header, sidebar, and content slots.',
      importExample: "<script>\n  import { AppShell, AppBar } from '@skeletonlabs/skeleton';\n</script>\n\n<AppShell><svelte:fragment slot=\"header\"><AppBar>App Header</AppBar></svelte:fragment><slot /></AppShell>",
      docSubUrl: 'docs/components/app-shell'
    },
    button: {
      canonicalName: 'btn',
      description: 'Skeleton Tailwind utility classes for buttons (btn variant-filled-primary).',
      importExample: '<button type="button" class="btn variant-filled-primary">Launch Project</button>',
      docSubUrl: 'docs/elements/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<AppShell>` for top-level layout in `+layout.svelte`.',
      'Use Skeleton utility classes (`btn variant-filled-primary`, `card p-4`).',
      'Use `Toast` and `Modal` stores from `@skeletonlabs/skeleton`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes in `tailwind.config.js` using `skeleton({ themes: { preset: ["skeleton", "wintry"] } })`.',
    iconUsage: 'Use `lucide-svelte`.',
    layoutConventions: 'Wrap in `<AppShell>` with `<svelte:fragment slot="...">`.'
  }
};
