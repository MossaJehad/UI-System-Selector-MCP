import { UISystem } from '../../schemas/uiSystem.js';

export const mistica: UISystem = {
  id: 'mistica',
  name: 'Telefónica Mística',
  organization: 'Telefónica (Movistar / O2 / Vivo)',
  description: 'Telefónica’s official open-source design system and React/React Native component suite, engineered for global telecom operations, mobile subscriber accounts, 5G data plan management, billing, and multi-brand telco portals.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'ecommerce', 'mobile'],
  frameworks: ['react', 'react-native'],
  stylingApproach: 'css-modules',
  packageNames: ['@telefonica/mistica'],
  docsUrl: 'https://mistica-web.vercel.app',
  repositoryUrl: 'https://github.com/Telefonica/mistica-web',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Telefónica, Movistar, O2, and Vivo consumer web and mobile apps.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and TypeScript constants',
    packageName: '@telefonica/mistica'
  },
  icons: {
    available: true,
    packageName: '@telefonica/mistica',
    name: 'Mística Telco Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern global telecom aesthetic: Movistar Blue (#019df4), O2 Blue, Vivo Purple, clean data consumption meters, bill breakdown cards, and eSIM activation steppers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Telecommunications, mobile data usage monitors, and eSIM activation portals',
    'Broadband subscription management, fiber setup wizards, and phone invoice breakdowns',
    'Multi-brand consumer portals (Movistar, O2, Vivo, Blau, Tu)'
  ],
  avoidFor: [
    'Developer terminal CLI utilities'
  ],
  strengths: [
    'Multi-brand theming out of the box (Movistar, O2, Vivo, Telefónica)',
    'Unified React Web and React Native components',
    'Specialized telco components (DataMeter, Stepper, CreditCardForm, HighlightedCard)'
  ],
  weaknesses: [
    'Telecommunications domain focus'
  ],
  tags: [
    'telefonica',
    'mistica',
    'movistar',
    'o2',
    'telecom',
    'mobile',
    'multi-brand',
    'react-native',
    'hidden-gem'
  ],
  aliases: ['Mística', 'Mistica', 'Telefónica Design System', 'Movistar Design System', 'O2 Design System'],
  systemTypes: ['company-design-system', 'component-library', 'mobile'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @telefonica/mistica',
      packages: ['@telefonica/mistica'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<ThemeContextProvider theme={getMovistarSkin()}>` from `@telefonica/mistica`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'ButtonPrimary',
      description: 'Mística primary action button.',
      importExample: "import { ButtonPrimary } from '@telefonica/mistica';\n\n<ButtonPrimary>Top Up Mobile Data</ButtonPrimary>",
      docSubUrl: '?path=/docs/components-buttons--button-primary'
    },
    meter: {
      canonicalName: 'DataMeter',
      description: 'Circular or linear mobile data gigabyte usage gauge.',
      importExample: "import { DataMeter } from '@telefonica/mistica';\n\n<DataMeter value={35} max={50} unit=\"GB remaining\" />",
      docSubUrl: '?path=/docs/components-meters--data-meter'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeContextProvider theme={...}>`.',
      'Select active telco brand skin (`getMovistarSkin()`, `getO2Skin()`, `getVivoSkin()`).',
      'Use Mística layout primitives (Box, Stack, Inline).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure brand skin in ThemeContextProvider.',
    iconUsage: 'Import icons from @telefonica/mistica (e.g. IconSimCardRegular).',
    layoutConventions: 'Use ResponsiveLayout, MainLayout, and Stack layout primitives.'
  }
};
