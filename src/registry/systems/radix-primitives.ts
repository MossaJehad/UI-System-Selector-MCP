import { UISystem } from '../../schemas/uiSystem.js';

export const radixPrimitives: UISystem = {
  id: 'radix-primitives',
  name: 'Radix Primitives',
  organization: 'WorkOS',
  description: 'An open-source, unstyled, accessible UI component library for React, serving as the foundational headless primitive layer for shadcn/ui, Radix Themes, and hundreds of custom design systems with robust WAI-ARIA compliance, focus trapping, and portal rendering.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-popover', '@radix-ui/react-tooltip', '@radix-ui/react-tabs'],
  docsUrl: 'https://www.radix-ui.com/primitives',
  repositoryUrl: 'https://github.com/radix-ui/primitives',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'WAI-ARIA compliant out of the box with automated focus management, keyboard navigation, and screen reader announcements.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Completely unstyled; bring your own design tokens, Tailwind CSS, or CSS modules.'
  },
  icons: {
    available: true,
    packageName: '@radix-ui/react-icons',
    name: 'Radix Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Completely unstyled zero-CSS headless primitives: full behavioral state, keyboard listeners, portal mounting, and WAI-ARIA roles ready for custom Tailwind or CSS styling.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Building custom bespoke design systems in React with complete control over CSS/Tailwind styling',
    'Underlying foundation for copy-paste component architectures (like shadcn/ui)',
    'Applications requiring uncompromising WAI-ARIA accessibility compliance and keyboard navigation'
  ],
  avoidFor: [
    'Developers wanting instant pre-styled components without writing CSS or Tailwind classes (use Radix Themes or Mantine instead)'
  ],
  strengths: [
    'The most widely adopted headless component primitives in the modern React ecosystem',
    'Flawless accessibility: focus trap management, keyboard roving tabindex, escape handling, and ARIA attributes',
    'Modular npm packages with zero styling assumptions (`asChild` pattern for clean JSX composition)'
  ],
  weaknesses: [
    'Requires writing all visual styling from scratch (or pairing with Tailwind/shadcn)'
  ],
  tags: [
    'radix',
    'radix-primitives',
    'headless',
    'unstyled',
    'accessibility',
    'wai-aria',
    'react',
    'mainstream'
  ],
  aliases: ['Radix Primitives', 'Radix UI', 'Radix Headless'],
  relatedSystems: ['radix-themes', 'shadcn-ui', 'base-ui', 'ariakit', 'ark-ui', 'react-aria-components'],
  systemTypes: ['headless', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-popover',
      packages: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-popover'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Accessible modal dialog primitive with Portal, Overlay, Content, Title, and Description.',
      importExample: "import * as Dialog from '@radix-ui/react-dialog';\n\n<Dialog.Root><Dialog.Trigger>Open</Dialog.Trigger><Dialog.Portal><Dialog.Overlay className=\"fixed inset-0 bg-black/50\" /><Dialog.Content className=\"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded\"><Dialog.Title>Edit Profile</Dialog.Title><Dialog.Description>Make changes here</Dialog.Description></Dialog.Content></Dialog.Portal></Dialog.Root>",
      docSubUrl: 'docs/primitives/components/dialog'
    },
    dropdown: {
      canonicalName: 'DropdownMenu',
      description: 'Accessible dropdown menu primitive with Item, Sub, CheckboxItem, and RadioGroup.',
      importExample: "import * as DropdownMenu from '@radix-ui/react-dropdown-menu';\n\n<DropdownMenu.Root><DropdownMenu.Trigger>Options</DropdownMenu.Trigger><DropdownMenu.Content><DropdownMenu.Item>Profile</DropdownMenu.Item></DropdownMenu.Content></DropdownMenu.Root>",
      docSubUrl: 'docs/primitives/components/dropdown-menu'
    }
  },
  aiInstructions: {
    principles: [
      'Use the `asChild` prop on Radix triggers/buttons to merge props onto custom styled elements.',
      'Always include accessible `<Dialog.Title>` and `<Dialog.Description>` (or `aria-describedby={undefined}`) inside Dialog content.',
      'Pair with Tailwind CSS data attributes (`data-[state=open]`, `data-[side=bottom]`) for animation states.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Style using CSS classes, CSS modules, or Tailwind CSS targeting `data-state` attributes.',
    iconUsage: 'Use `@radix-ui/react-icons` or `lucide-react`.',
    layoutConventions: 'Style compound subcomponents using Tailwind CSS or CSS Modules.'
  }
};
