import { UISystem } from '../../schemas/uiSystem.js';

export const paste: UISystem = {
  id: 'paste',
  name: 'Twilio Paste',
  organization: 'Twilio',
  description: 'Twilio’s design system built with an obsession for radical inclusivity, accessibility, and robust component ergonomics for customer engagement and communication platforms.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'accessibility-focused', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['@twilio-paste/core', '@twilio-paste/icons'],
  docsUrl: 'https://paste.twilio.design',
  repositoryUrl: 'https://github.com/twilio-labs/paste',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Extremely rigorous accessibility engineering with dedicated accessibility docs for every single component.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'JSON / CSS Custom Properties',
    packageName: '@twilio-paste/design-tokens'
  },
  icons: {
    available: true,
    packageName: '@twilio-paste/icons',
    name: 'Paste Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, human, inclusive enterprise communications platform styling with vibrant Twilio red accents and clean typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Customer communication portals, SMS/voice dashboards, and call center UIs',
    'Enterprise applications requiring AAA accessibility guarantees',
    'Customer support and contact center agent consoles',
    'SaaS billing and messaging configurations'
  ],
  avoidFor: [
    'Ultra-compact low-level embedded hardware monitoring',
    'Retro gaming styles'
  ],
  strengths: [
    'World-class accessibility documentation and compliance',
    'Unified `@twilio-paste/core` package combining primitives and components',
    'Strong token foundation for theming (Twilio, Twilio Dark, Evernote themes)',
    'Comprehensive form validation and error state patterns'
  ],
  weaknesses: [
    'Focused strictly on React',
    'Heavier styling runtime via Emotion'
  ],
  tags: [
    'twilio',
    'communications',
    'accessibility-focused',
    'wcag-aaa',
    'inclusive',
    'enterprise',
    'saas',
    'dark-mode'
  ],
  installation: {
    react: {
      command: 'npm install @twilio-paste/core @twilio-paste/icons react react-dom',
      packages: ['@twilio-paste/core', '@twilio-paste/icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<Theme.Provider theme="default">`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Paste button with primary, secondary, destructive, and link variants.',
      importExample: "import { Button } from '@twilio-paste/core/button';\n\n<Button variant=\"primary\">Send Message</Button>",
      docSubUrl: 'components/button'
    },
    modal: {
      canonicalName: 'Modal',
      description: 'Fully accessible modal dialog with header, body, and footer.',
      importExample: "import { Modal, ModalHeader, ModalHeading, ModalBody, ModalFooter, ModalFooterActions } from '@twilio-paste/core/modal';\n\n<Modal ariaLabelledby=\"modal-id\" isOpen={isOpen} onDismiss={() => setIsOpen(false)} size=\"default\">\n  <ModalHeader><ModalHeading as=\"h3\" id=\"modal-id\">Configure Trunk</ModalHeading></ModalHeader>\n  <ModalBody>Content</ModalBody>\n  <ModalFooter><ModalFooterActions><Button variant=\"secondary\" onClick={() => setIsOpen(false)}>Cancel</Button></ModalFooterActions></ModalFooter>\n</Modal>",
      docSubUrl: 'components/modal'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap the application root with `<Theme.Provider theme="default" | "dark">`.',
      'Use `<Box>`, `<Stack>`, and `<Flex>` from `@twilio-paste/core` for all layouts.',
      'Import icons from `@twilio-paste/icons/esm/*`.',
      'Ensure every form control has an explicit `<Label>` with `htmlFor` matching the input `id`.'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      '@mui/material',
      'lucide-react'
    ],
    themingGuide: 'Use `<Theme.Provider theme="default" | "dark">`.',
    iconUsage: 'Import icons from @twilio-paste/icons/esm/ComponentName.',
    layoutConventions: 'Use Box with token props (e.g. padding="space60", backgroundColor="colorBackgroundBody").'
  }
};
