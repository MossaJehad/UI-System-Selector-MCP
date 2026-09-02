import { UISystem } from '../../schemas/uiSystem.js';

export const flowbiteVue: UISystem = {
  id: 'flowbite-vue',
  name: 'Flowbite Vue',
  organization: 'Themesberg / Flowbite',
  description: 'The official Flowbite component library for Vue 3 and Tailwind CSS, providing accessible UI components (Navbar, Dropdown, Modal, Tabs, Table, Accordion, Toast) designed with Tailwind CSS utility classes.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'consumer'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'tailwind',
  packageNames: ['flowbite-vue', 'flowbite', 'tailwindcss'],
  docsUrl: 'https://flowbite-vue.com',
  repositoryUrl: 'https://github.com/themesberg/flowbite-vue',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard navigation and ARIA attributes via Tailwind utility classes.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Flowbite Tailwind CSS plugin tokens',
    packageName: 'flowbite'
  },
  icons: {
    available: true,
    name: 'Flowbite Icons / Heroicons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Tailwind SaaS aesthetic in Vue 3: Flowbite Blue (#1a56db), clean responsive navbars, interactive modals, dark mode toggles, and data tables.',
  noveltyLevel: 'established',
  bestFor: [
    'Vue 3 and Nuxt applications using Tailwind CSS wanting pre-built components',
    'Developers familiar with Flowbite’s component architecture in React/Svelte wanting Vue 3 parity',
    'Fast SaaS dashboard and marketing website development'
  ],
  avoidFor: [
    'Non-Tailwind projects'
  ],
  strengths: [
    'Official Flowbite implementation for Vue 3',
    'Seamless integration with Tailwind CSS utility classes and Flowbite plugin',
    'Rich interactive components (Navbar, Modal, Dropdown, Accordion, Toast, Pagination)'
  ],
  weaknesses: [
    'Requires Tailwind CSS and Flowbite plugin'
  ],
  tags: [
    'flowbite-vue',
    'flowbite',
    'tailwind',
    'vue3',
    'nuxt',
    'saas',
    'dashboard',
    'established'
  ],
  aliases: ['Flowbite Vue', 'FlowbiteVue', 'Themesberg Flowbite Vue'],
  relatedSystems: ['flowbite-react', 'flowbite-svelte', 'preline'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install flowbite-vue flowbite',
      packages: ['flowbite-vue', 'flowbite'],
      peerDependencies: ['vue', 'tailwindcss'],
      setupInstructions: 'Add `require("flowbite/plugin")` to plugins and include flowbite-vue in `tailwind.config.js` content array.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'FwbButton',
      description: 'Flowbite Vue button with color="default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple".',
      importExample: '<fwb-button color="default">Save</fwb-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import components with `Fwb*` prefix from `flowbite-vue`.',
      'Configure Flowbite plugin in `tailwind.config.js`.',
      'Use Tailwind CSS utility classes for layout and customization.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors via Flowbite Tailwind theme in `tailwind.config.js`.',
    iconUsage: 'Use Heroicons or Flowbite SVG icons.',
    layoutConventions: 'Use standard Tailwind CSS flex and grid.'
  }
};
