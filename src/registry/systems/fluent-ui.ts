import { UISystem } from '../../schemas/uiSystem.js';

export const fluentUi: UISystem = {
  id: 'fluent-ui',
  name: 'Microsoft Fluent UI',
  organization: 'Microsoft',
  description: 'Microsoft’s official design system for web applications, delivering the contemporary Windows 11 and Microsoft 365 look with Griffl (Fluent UI v9), Griffel CSS-in-JS, and robust enterprise ergonomics.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['@fluentui/react-components', '@fluentui/react-icons'],
  docsUrl: 'https://react.fluentui.dev',
  repositoryUrl: 'https://github.com/microsoft/fluentui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets strict Microsoft Accessibility Standards and WCAG 2.1 AA across Office/M365 products.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Fluent v9 Design Tokens',
    packageName: '@fluentui/react-components'
  },
  icons: {
    available: true,
    packageName: '@fluentui/react-icons',
    name: 'Fluent UI System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Contemporary Microsoft Windows 11 & Office 365 styling with rounded surfaces, soft elevation, and refined type hierarchy.',
  noveltyLevel: 'established',
  bestFor: [
    'Microsoft 365, Teams, and Azure extensions or integrations',
    'Enterprise productivity tools, email, calendar, and task management apps',
    'Windows desktop-like web applications'
  ],
  avoidFor: [
    'Ultra-minimal brutalist design concepts',
    'Retro arcade games'
  ],
  strengths: [
    'Fluent UI v9 utilizes Griffel for ahead-of-time CSS-in-JS compilation with zero runtime overhead',
    'Massive library of high-quality Fluent system icons (over 4,000 icons)',
    'Seamless light and dark mode switching with `webLightTheme` and `webDarkTheme`',
    'Full RTL and internationalization support'
  ],
  weaknesses: [
    'Strong Microsoft brand identity',
    'v8 to v9 API transition history to keep in mind (v9 is the modern standard)'
  ],
  tags: [
    'microsoft',
    'windows-like',
    'enterprise',
    'office365',
    'saas',
    'dark-mode',
    'rtl',
    'griffel'
  ],
  installation: {
    react: {
      command: 'npm install @fluentui/react-components @fluentui/react-icons',
      packages: ['@fluentui/react-components', '@fluentui/react-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your application in `<FluentProvider theme={webDarkTheme}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Fluent v9 button with primary, subtle, outline, and transparent appearances.',
      importExample: "import { Button } from '@fluentui/react-components';\nimport { Dismiss24Regular } from '@fluentui/react-icons';\n\n<Button appearance=\"primary\" icon={<Dismiss24Regular />}>Save</Button>",
      docSubUrl: '?path=/docs/components-button-button--default'
    },
    dialog: {
      canonicalName: 'Dialog',
      description: 'Modal dialog with DialogTrigger, DialogSurface, DialogTitle, DialogBody, DialogActions.',
      importExample: "import { Dialog, DialogTrigger, DialogSurface, DialogTitle, DialogBody, DialogActions, DialogContent, Button } from '@fluentui/react-components';\n\n<Dialog>\n  <DialogTrigger><Button>Open Dialog</Button></DialogTrigger>\n  <DialogSurface>\n    <DialogBody><DialogTitle>Dialog Title</DialogTitle><DialogContent>Content</DialogContent><DialogActions><Button appearance=\"primary\">OK</Button></DialogActions></DialogBody>\n  </DialogSurface>\n</Dialog>",
      docSubUrl: '?path=/docs/components-dialog--default'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap root with `<FluentProvider theme={webLightTheme | webDarkTheme}>`.',
      'Use `makeStyles` from `@fluentui/react-components` for custom styling using Griffel tokens.',
      'Import icons from `@fluentui/react-icons` using specific size suffixes (e.g. `Folder20Regular`).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `<FluentProvider theme={webDarkTheme}>` or custom theme with `createDarkTheme`.',
    iconUsage: 'Import icons from @fluentui/react-icons with Name + Size + Weight (e.g. Add24Filled).',
    layoutConventions: 'Combine FluentProvider tokens with makeStyles hook.'
  }
};
