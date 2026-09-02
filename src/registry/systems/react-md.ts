import { UISystem } from '../../schemas/uiSystem.js';

export const reactMd: UISystem = {
  id: 'react-md',
  name: 'react-md (Accessible Material Design for React)',
  organization: 'Mikkel Laursen / react-md Community',
  description: 'An open-source, highly accessible React component library implementing Google Material Design using Sass and CSS custom properties, featuring robust tree-shaking, WAI-ARIA compliance, layout builders, and zero CSS-in-JS runtime overhead.',
  category: 'component-library',
  secondaryCategories: ['accessibility-focused', 'saas', 'dashboard'],
  frameworks: ['react'],
  stylingApproach: 'sass',
  packageNames: ['@react-md/core', '@react-md/button', '@react-md/layout', '@react-md/theme'],
  docsUrl: 'https://react-md.dev',
  repositoryUrl: 'https://github.com/mlaursen/react-md',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'One of the most rigorously accessible Material Design implementations in React, featuring AAA color contrast modes and comprehensive ARIA roles.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design Sass modules and CSS custom properties',
    packageName: '@react-md/theme'
  },
  icons: {
    available: true,
    packageName: '@react-md/material-icons',
    name: 'react-md Material Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Accessible Google Material Design: clean ripple effects, elevated cards, structured layout trees, and high-contrast accessibility focus indicators.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'React applications wanting authentic Material Design styling with superior accessibility over MUI',
    'Projects wanting pure Sass/CSS custom properties with zero runtime CSS-in-JS overhead',
    'Modular npm architectures where individual component packages are imported on demand'
  ],
  avoidFor: [
    'Tailwind-only modern projects'
  ],
  strengths: [
    'Exceptional accessibility: built specifically for WAI-ARIA and screen reader navigation',
    'Modular scoped packages (`@react-md/button`, `@react-md/layout`, `@react-md/table`)',
    'Zero runtime CSS-in-JS overhead: styled entirely with modern Sass and CSS custom properties'
  ],
  weaknesses: [
    'React only; requires Sass compilation or prebuilt CSS'
  ],
  tags: [
    'react-md',
    'material-design',
    'accessibility',
    'aaa-compliance',
    'sass',
    'react',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['react-md', 'React-MD', 'React MD'],
  relatedSystems: ['mui', 'material-web', 'svelte-material-ui'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @react-md/core @react-md/layout @react-md/button @react-md/theme',
      packages: ['@react-md/core', '@react-md/layout', '@react-md/button', '@react-md/theme'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<Configuration>` from `@react-md/core`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'react-md Material button with theme="primary" | "secondary" | "warning" | "error".',
      importExample: "import { Button } from '@react-md/button';\n\n<Button theme=\"primary\" themeType=\"contained\">Submit</Button>",
      docSubUrl: 'packages/button/demos'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<Configuration>` from `@react-md/core`.',
      'Use `@react-md/layout` for responsive Layout and Tree navigation.',
      'Import scoped SCSS packages for minimal CSS bundle size.'
    ],
    forbiddenSubstitutions: ['bootstrap'],
    themingGuide: 'Configure themes with `@react-md/theme` Sass mixins or CSS custom properties.',
    iconUsage: 'Use `@react-md/material-icons`.',
    layoutConventions: 'Use `@react-md/layout` Layout component.'
  }
};
