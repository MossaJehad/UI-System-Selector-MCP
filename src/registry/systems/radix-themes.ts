import { UISystem } from '../../schemas/uiSystem.js';

export const radixThemes: UISystem = {
  id: 'radix-themes',
  name: 'Radix Themes',
  organization: 'WorkOS',
  description: 'An open-source, pre-styled React component library built on top of Radix Primitives and Radix Colors, engineered for fast prototyping and high-quality typographic and layout consistency with CSS variables.',
  category: 'saas',
  secondaryCategories: ['developer-tool', 'styled', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@radix-ui/themes', '@radix-ui/react-icons'],
  docsUrl: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
  repositoryUrl: 'https://github.com/radix-ui/themes',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Inherits bulletproof accessibility and keyboard navigation from Radix Primitives.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Radix Colors CSS Custom Properties',
    packageName: '@radix-ui/colors'
  },
  icons: {
    available: true,
    packageName: '@radix-ui/react-icons',
    name: 'Radix Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'configurable',
  aesthetic: 'Refined, clean, typographic elegance with subtle neutral gray scales, accent tinting, and compact layout props.',
  noveltyLevel: 'established',
  bestFor: [
    'Developer dashboard and SaaS applications needing instant visual polish',
    'Apps wanting Radix accessibility without having to style everything from scratch with Tailwind',
    'Typographically driven web tools'
  ],
  avoidFor: [
    'Non-React frameworks',
    'Projects requiring heavy custom utility class systems'
  ],
  strengths: [
    'Combines Radix Primitives accessibility with ready-to-use polished styling',
    'Built-in layout primitives (`Flex`, `Grid`, `Box`, `Section`, `Container`) with responsive props',
    'Radix Colors palette with automatic accessible contrast calculation'
  ],
  weaknesses: [
    'React-only',
    'Less flexible than raw unstyled Radix Primitives if building a completely custom brand'
  ],
  tags: [
    'radix',
    'workos',
    'styled',
    'accessible',
    'saas',
    'developer-tool',
    'dark-mode',
    'typography'
  ],
  installation: {
    react: {
      command: 'npm install @radix-ui/themes @radix-ui/react-icons',
      packages: ['@radix-ui/themes', '@radix-ui/react-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@radix-ui/themes/styles.css` and wrap root in `<Theme accentColor="indigo" grayColor="slate" radius="medium" appearance="dark">`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Radix Themes button with variant="solid" | "soft" | "outline" | "surface" | "ghost".',
      importExample: "import { Button } from '@radix-ui/themes';\n\n<Button variant=\"solid\">Continue</Button>",
      docSubUrl: 'components/button'
    },
    dialog: {
      canonicalName: 'Dialog',
      description: 'Modal dialog with Dialog.Root, Dialog.Trigger, Dialog.Content, Dialog.Title, Dialog.Description.',
      importExample: "import { Dialog, Button, Flex } from '@radix-ui/themes';\n\n<Dialog.Root>\n  <Dialog.Trigger><Button>Edit Profile</Button></Dialog.Trigger>\n  <Dialog.Content><Dialog.Title>Profile</Dialog.Title><Flex gap=\"3\" mt=\"4\" justify=\"end\"><Dialog.Close><Button variant=\"soft\" color=\"gray\">Cancel</Button></Dialog.Close></Flex></Dialog.Content>\n</Dialog.Root>",
      docSubUrl: 'components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@radix-ui/themes/styles.css`.',
      'Wrap root with `<Theme accentColor="..." grayColor="..." appearance="inherit">`.',
      'Use Radix Themes layout components (`Flex`, `Grid`, `Box`, `Card`, `Container`) instead of custom Tailwind layout divs.',
      'Use `@radix-ui/react-icons` for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure Theme props: accentColor, grayColor, radius, scaling, appearance ("light" | "dark" | "inherit").',
    iconUsage: 'Import icons from @radix-ui/react-icons (e.g. MagnifyingGlassIcon, GearIcon).',
    layoutConventions: 'Use Flex and Grid with props like gap="3", direction="column", align="center".'
  }
};
