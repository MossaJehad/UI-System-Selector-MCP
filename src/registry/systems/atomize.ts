import { UISystem } from '../../schemas/uiSystem.js';

export const atomize: UISystem = {
  id: 'atomize',
  name: 'Atomize React',
  organization: 'Atomize Community (Prototypr)',
  description: 'An open-source React design system and UI library powered by styled-components, providing responsive style props, atomic grid layout, dark mode, and seamless Figma-to-code design system parity.',
  category: 'component-library',
  secondaryCategories: ['saas', 'creative-tool', 'styled'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['atomize', 'styled-components'],
  docsUrl: 'https://atomizecode.com',
  repositoryUrl: 'https://github.com/produle/atomize',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible buttons, modals, and dropdown components with focus management.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Atomize theme object via `<StyleReset />` and `<ThemeProvider>`',
    packageName: 'atomize'
  },
  icons: {
    available: true,
    packageName: 'atomize',
    name: 'Atomize Built-in SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Modern clean startup design: Atomize Indigo accents, responsive style props (`p={{ xs: "1rem", md: "2rem" }}`), smooth shadows, and polished modal overlays.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'React startups and SaaS landing pages wanting ergonomic responsive style props with styled-components',
    'Designers and developers following the official Atomize Figma design system',
    'Rapid UI prototyping'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Ergonomic responsive props (`d="flex"`, `p={{ xs: "1rem", md: "2rem" }}`) directly in JSX',
    'Close alignment with Atomize Figma UI Kit',
    'Built-in Icon, Modal, Dropdown, and Grid primitives'
  ],
  weaknesses: [
    'React only; uses runtime styled-components'
  ],
  tags: [
    'atomize',
    'react',
    'styled-components',
    'style-props',
    'figma',
    'saas',
    'hidden-gem'
  ],
  aliases: ['Atomize React', 'Atomize', 'Atomize UI'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install atomize styled-components',
      packages: ['atomize', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your application in `<StyleReset />` and `<ThemeProvider theme={theme}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Atomize button with bg="info700" | "brand600" | "danger700".',
      importExample: "import { Button } from 'atomize';\n\n<Button bg=\"info700\" hoverBg=\"info800\" shadow=\"3\" hoverShadow=\"4\">Get Started</Button>",
      docSubUrl: 'docs/react/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<StyleReset />` and `<ThemeProvider theme={theme}>`.',
      'Use Atomize style props (e.g. `p="1rem"`, `d="flex"`, `bg="brand600"`).',
      'Use `Div`, `Row`, `Col` for atomic grid layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with custom Atomize theme object.',
    iconUsage: 'Use `<Icon name="Search" size="20px" />` from `atomize`.',
    layoutConventions: 'Use `Row` and `Col` with `Div` primitives.'
  }
};
