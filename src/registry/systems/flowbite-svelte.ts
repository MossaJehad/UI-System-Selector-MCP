import { UISystem } from '../../schemas/uiSystem.js';

export const flowbiteSvelte: UISystem = {
  id: 'flowbite-svelte',
  name: 'Flowbite Svelte',
  organization: 'Themesberg / Flowbite Svelte Community',
  description: 'An open-source UI component library for Svelte and SvelteKit based on Tailwind CSS and Flowbite, delivering dozens of accessible interactive components (Navbar, Modal, Dropdown, Table, Sidebar, Carousel, Datepicker) with full dark mode support.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'consumer'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'tailwind',
  packageNames: ['flowbite-svelte', 'flowbite', 'tailwind-merge'],
  docsUrl: 'https://flowbite-svelte.com',
  repositoryUrl: 'https://github.com/themesberg/flowbite-svelte',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with accessible keyboard traps and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme configuration and Flowbite plugin tokens',
    packageName: 'flowbite-svelte'
  },
  icons: {
    available: true,
    packageName: 'flowbite-svelte-icons',
    name: 'Flowbite Svelte Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Tailwind CSS SaaS aesthetic for Svelte: clean rounded borders, primary blue/indigo action buttons, dark mode support, and interactive dashboard sidebars.',
  noveltyLevel: 'established',
  bestFor: [
    'Svelte and SvelteKit projects built on Tailwind CSS wanting pre-built components instead of copy-pasting',
    'SaaS dashboards and marketing pages needing fast development velocity with Tailwind classes in Svelte',
    'Developers wanting dark mode switcher and responsive navbar/sidebar components'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Seamless integration with SvelteKit and standard Tailwind CSS configurations',
    'Rich interactive components with zero manual state wiring needed (Modal, Dropdown, Sidebar, Tooltip)',
    'Official icon package (`flowbite-svelte-icons`) with hundreds of SVG icons'
  ],
  weaknesses: [
    'Strict dependency on Tailwind CSS'
  ],
  tags: [
    'flowbite',
    'flowbite-svelte',
    'svelte',
    'sveltekit',
    'tailwind',
    'dark-mode',
    'established'
  ],
  aliases: ['Flowbite Svelte', 'Flowbite UI Svelte'],
  relatedSystems: ['flowbite-react', 'skeleton', 'shadcn-svelte'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install flowbite-svelte flowbite-svelte-icons flowbite tailwind-merge',
      packages: ['flowbite-svelte', 'flowbite-svelte-icons', 'flowbite', 'tailwind-merge'],
      peerDependencies: ['svelte', 'tailwindcss'],
      setupInstructions: 'Add `flowbite/plugin` and content paths to `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Flowbite Svelte action button with color="primary" | "secondary" | "dark" | "light".',
      importExample: "<script>\n  import { Button } from 'flowbite-svelte';\n</script>\n\n<Button color=\"primary\">Submit Form</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Configure `flowbite/plugin` in `tailwind.config.js`.',
      'Use Flowbite Svelte components for interactive UI elements.',
      'Use `DarkMode` component for dark theme switching.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Import icons from `flowbite-svelte-icons`.',
    layoutConventions: 'Use Tailwind CSS flex and grid utilities.'
  }
};
