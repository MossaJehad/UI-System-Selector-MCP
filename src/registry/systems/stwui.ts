import { UISystem } from '../../schemas/uiSystem.js';

export const stwui: UISystem = {
  id: 'stwui',
  name: 'STWUI (Svelte Tailwind UI)',
  organization: 'STWUI Community',
  description: 'An open-source, customizable UI component library for Svelte and SvelteKit built with Tailwind CSS, offering 40+ components with dark mode, animations, and accessible keyboard navigation.',
  category: 'component-library',
  secondaryCategories: ['styled', 'saas'],
  frameworks: ['svelte'],
  stylingApproach: 'tailwind',
  packageNames: ['stwui', 'tailwindcss'],
  docsUrl: 'https://stwui.com',
  repositoryUrl: 'https://github.com/nikScript/stwui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus indicators in Svelte.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin configuration via `stwui/plugin`',
    packageName: 'stwui'
  },
  icons: {
    available: true,
    name: 'Heroicons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Svelte + Tailwind aesthetic: rounded action buttons, modal sheets, drawer menus, form inputs, and notification toasts in Svelte.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Historical reference and studying early pre-shadcn Svelte + Tailwind component packaging',
    'Maintaining existing STWUI applications in Svelte',
    'Svelte web applications'
  ],
  avoidFor: [
    'New Svelte 5 projects (use shadcn-svelte or Skeleton instead)'
  ],
  strengths: [
    'Complete component suite built directly for Svelte with Tailwind CSS',
    'Clean component syntax and built-in dark mode',
    '100% open source under MIT'
  ],
  weaknesses: [
    'Archived in favor of modern Bits UI / shadcn-svelte ecosystem'
  ],
  tags: [
    'stwui',
    'svelte',
    'tailwind',
    'components',
    'archived',
    'historical',
    'hidden-gem'
  ],
  aliases: ['STWUI', 'Svelte Tailwind UI', 'STW UI'],
  relatedSystems: ['shadcn-svelte', 'skeleton', 'smelte'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    svelte: {
      command: 'npm install stwui tailwindcss',
      packages: ['stwui', 'tailwindcss'],
      peerDependencies: ['svelte'],
      setupInstructions: 'Add `require("stwui/plugin")` to `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'STWUI button with type="primary" | "secondary" | "danger".',
      importExample: "import { Button } from 'stwui';\n\n<Button type=\"primary\" on:click={handleClick}>Action</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Historical Svelte library: import components from `stwui`.',
      'Add `stwui/plugin` to `tailwind.config.js`.',
      'Use Svelte event dispatching (`on:click`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG Heroicons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
