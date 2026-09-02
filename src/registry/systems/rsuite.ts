import { UISystem } from '../../schemas/uiSystem.js';

export const rsuite: UISystem = {
  id: 'rsuite',
  name: 'React Suite (RSuite)',
  organization: 'HYPERS',
  description: 'An open-source, enterprise-ready React component library with 50+ components, built-in dark/high-contrast themes, date range pickers, virtualized tables, cascading trees, and comprehensive internationalization.',
  category: 'component-library',
  secondaryCategories: ['enterprise', 'dashboard', 'data-heavy', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'less',
  packageNames: ['rsuite', '@rsuite/icons'],
  docsUrl: 'https://rsuitejs.com',
  repositoryUrl: 'https://github.com/rsuite/rsuite',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across enterprise administration interfaces.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Less variables',
    packageName: 'rsuite'
  },
  icons: {
    available: true,
    packageName: '@rsuite/icons',
    name: 'RSuite Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Structured enterprise management style: clean cyan/blue primary accents, high-contrast dark theme, crisp date range pickers, and virtualized tables.',
  noveltyLevel: 'established',
  bestFor: [
    'Enterprise web applications needing out-of-the-box dark/high-contrast themes',
    'Analytics dashboards with complex DateRangePicker, TreePicker, and CheckTreePicker filters',
    'High-performance virtualized table interfaces'
  ],
  avoidFor: [
    'Retro pixel-art games'
  ],
  strengths: [
    'One of the best DateRangePicker and TreePicker implementations in the React ecosystem',
    'First-class built-in dark mode and high-contrast theme (`CustomProvider theme="dark"`)',
    'Comprehensive multi-language i18n support and RTL layout mirroring'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'rsuite',
    'react-suite',
    'enterprise',
    'dashboard',
    'datepicker',
    'dark-mode',
    'rtl',
    'established'
  ],
  aliases: ['RSuite', 'React Suite', 'rsuitejs'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install rsuite @rsuite/icons',
      packages: ['rsuite', '@rsuite/icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `rsuite/dist/rsuite.min.css` and wrap your app in `<CustomProvider theme="dark">`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'RSuite button with appearance="primary" | "default" | "subtle" | "ghost" | "link".',
      importExample: "import { Button } from 'rsuite';\n\n<Button appearance=\"primary\">Run Report</Button>",
      docSubUrl: 'components/button'
    },
    daterangepicker: {
      canonicalName: 'DateRangePicker',
      description: 'Advanced date range picker with predefined shortcut presets.',
      importExample: "import { DateRangePicker } from 'rsuite';\n\n<DateRangePicker placeholder=\"Select Date Range\" />",
      docSubUrl: 'components/date-range-picker'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<CustomProvider theme={...} locale={...}>`.',
      'Use RSuite Container, Header, Sidebar, and Content for layout hierarchy.',
      'Use RSuite DateRangePicker and CheckTreePicker for complex data filtering.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via `<CustomProvider theme="dark">` or Less theme variables.',
    iconUsage: 'Import icons from `@rsuite/icons` (e.g. `import SearchIcon from "@rsuite/icons/Search"`).',
    layoutConventions: 'Use Container, Header, Sidebar, Content, and Footer layout components.'
  }
};
