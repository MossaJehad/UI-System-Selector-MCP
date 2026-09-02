import { UISystem } from '../../schemas/uiSystem.js';

export const headlessUi: UISystem = {
  id: 'headless-ui',
  name: 'Headless UI',
  organization: 'Tailwind Labs',
  description: 'Unstyled, fully accessible UI components by the makers of Tailwind CSS, designed to integrate seamlessly with Tailwind CSS classes across React and Vue.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused'],
  frameworks: ['react', 'vue'],
  stylingApproach: 'utility-classes',
  packageNames: ['@headlessui/react', '@headlessui/vue'],
  docsUrl: 'https://headlessui.com',
  repositoryUrl: 'https://github.com/tailwindlabs/headlessui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Handles ARIA attributes and keyboard focus management out of the box.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: false,
    format: 'Unstyled / Styled with Tailwind CSS'
  },
  icons: {
    available: false,
    name: 'Heroicons'
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Unstyled accessible components styled using Tailwind CSS utility classes.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Tailwind CSS projects in React or Vue needing clean accessible dropdowns, dialogs, transitions, and popovers',
    'Custom lightweight design systems without heavy external styling runtimes'
  ],
  avoidFor: [
    'Developers wanting complete pre-styled UI without writing Tailwind classes'
  ],
  strengths: [
    'Official Tailwind Labs headless companion',
    'Supports both React and Vue 3',
    'Includes `<Transition>` for smooth CSS/Tailwind animations'
  ],
  weaknesses: [
    'Relatively small component catalog (focused on dialogs, menus, listboxes, comboboxes, disclosure, tabs, transitions)'
  ],
  tags: [
    'tailwind',
    'headless',
    'unstyled',
    'react',
    'vue',
    'accessibility'
  ],
  installation: {
    react: {
      command: 'npm install @headlessui/react @heroicons/react',
      packages: ['@headlessui/react', '@heroicons/react'],
      peerDependencies: ['react', 'react-dom']
    },
    vue: {
      command: 'npm install @headlessui/vue @heroicons/vue',
      packages: ['@headlessui/vue', '@heroicons/vue'],
      peerDependencies: ['vue']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Headless UI accessible modal dialog with backdrop and panel.',
      importExample: "import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';\n\n<Dialog open={isOpen} onClose={() => setIsOpen(false)} className=\"relative z-50\">\n  <DialogPanel className=\"bg-white p-6 rounded-lg\">\n    <DialogTitle className=\"font-bold\">Title</DialogTitle>\n  </DialogPanel>\n</Dialog>",
      docSubUrl: 'react/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Headless UI compound components (`Dialog`, `DialogPanel`, `Menu`, `MenuItem`, `Listbox`, `TabGroup`).',
      'Apply Tailwind CSS classes directly for styling.',
      'Use `@heroicons/react` for icons.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style using Tailwind CSS classes.',
    iconUsage: 'Use @heroicons/react/24/outline or @heroicons/react/24/solid.',
    layoutConventions: 'Tailwind CSS Grid/Flexbox.'
  }
};
