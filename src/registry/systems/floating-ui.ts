import { UISystem } from '../../schemas/uiSystem.js';

export const floatingUi: UISystem = {
  id: 'floating-ui',
  name: 'Floating UI',
  organization: 'Floating UI Community',
  description: 'The industry-standard open-source positioning engine and headless interaction toolkit for floating elements (tooltips, popovers, dropdowns, select menus, hover cards, and modals) across React, Vue, and vanilla JavaScript.',
  category: 'headless',
  secondaryCategories: ['developer-tool', 'unstyled'],
  frameworks: ['react', 'vue', 'vanilla', 'html-css'],
  stylingApproach: 'unstyled',
  packageNames: ['@floating-ui/react', '@floating-ui/dom', '@floating-ui/vue'],
  docsUrl: 'https://floating-ui.com',
  repositoryUrl: 'https://github.com/floating-ui/floating-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides interaction hooks for accessible keyboard navigation, focus management, and ARIA roles.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Positioning and interaction library; bring your own styling.'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS headless positioning and interaction engine: dynamic flip, shift, collision detection, and arrow offsets.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Building custom popovers, tooltips, dropdowns, and combobox menus from scratch',
    'Precise anchor positioning with viewport collision detection, flip, and virtual element tracking',
    'Multi-framework positioning engine across React, Vue, and Vanilla JS'
  ],
  avoidFor: [
    'Developers wanting complete pre-styled UI kits with buttons, tables, and layouts'
  ],
  strengths: [
    'Successor to Popper.js: the world standard for floating element positioning',
    'Interaction hooks in `@floating-ui/react` (useHover, useFocus, useDismiss, useRole, useInteractions)',
    'Tiny bundle size and high performance with pure mathematical positioning'
  ],
  weaknesses: [
    'Positioning and interaction engine only, not a full component UI suite'
  ],
  tags: [
    'floating-ui',
    'popper',
    'headless',
    'positioning',
    'tooltip',
    'popover',
    'react',
    'vue',
    'mainstream'
  ],
  aliases: ['Floating UI', 'Popper.js', 'FloatingUI'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @floating-ui/react',
      packages: ['@floating-ui/react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    popover: {
      canonicalName: 'useFloating',
      description: 'Hook for positioning floating elements with interaction management.',
      importExample: "import { useFloating, useHover, useInteractions, FloatingPortal } from '@floating-ui/react';\n\nconst { refs, floatingStyles, context } = useFloating({ open, onOpenChange: setOpen });",
      docSubUrl: 'docs/react'
    }
  },
  aiInstructions: {
    principles: [
      'Use `useFloating({ middleware: [offset(8), flip(), shift()] })` for intelligent positioning.',
      'Wrap floating elements in `<FloatingPortal>` for robust z-index management.',
      'Use `useDismiss()`, `useFocus()`, and `useRole()` for accessible overlay behavior.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Apply custom CSS classes or Tailwind styles to the positioned floating element.',
    iconUsage: 'Use any icon library.',
    layoutConventions: 'Apply `style={floatingStyles}` to floating element container.'
  }
};
