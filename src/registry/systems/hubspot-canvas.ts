import { UISystem } from '../../schemas/uiSystem.js';

export const hubspotCanvas: UISystem = {
  id: 'hubspot-canvas',
  name: 'HubSpot Canvas',
  organization: 'HubSpot',
  description: 'HubSpot’s design system and UI library powering HubSpot CRM, Marketing Hub, and Sales Hub, engineered for inbound marketing automation, sales deal pipelines, and CRM contact timelines.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'dashboard', 'consumer'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@hubspot/ui-extensions-react'],
  docsUrl: 'https://canvas.hubspot.com',
  repositoryUrl: 'https://github.com/HubSpot',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Audited for WCAG 2.1 AA conformance across HubSpot CRM.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'HubSpot Spoke and Canvas design tokens in CSS custom properties',
    packageName: '@hubspot/ui-extensions-react'
  },
  icons: {
    available: true,
    name: 'HubSpot Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, approachable, inbound marketing style: Lorax orange (#ff7a59), Calypso teal, contact timeline cards, and deal stage pipelines.',
  noveltyLevel: 'established',
  bestFor: [
    'HubSpot CRM custom extensions and UI cards',
    'Marketing automation and email campaign builder interfaces',
    'Sales CRM pipelines, lead scoring, and customer contact histories'
  ],
  avoidFor: [
    'Dark-theme cybersecurity SOC rooms'
  ],
  strengths: [
    'The standard for HubSpot CRM UI Extensions',
    'Rich CRM contact card and deal stage components',
    'High user recognition in the marketing and sales community'
  ],
  weaknesses: [
    'Tailored strongly to HubSpot CRM extensions ecosystem'
  ],
  tags: [
    'hubspot',
    'crm',
    'marketing',
    'sales',
    'saas',
    'canvas',
    'inbound'
  ],
  aliases: ['HubSpot Canvas', 'HubSpot UI Extensions', 'HubSpot Design System'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @hubspot/ui-extensions-react',
      packages: ['@hubspot/ui-extensions-react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'HubSpot UI action button with variant="primary" | "secondary" | "destructive".',
      importExample: "import { Button } from '@hubspot/ui-extensions-react';\n\n<Button variant=\"primary\">Send Email</Button>",
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@hubspot/ui-extensions-react` components for HubSpot custom CRM cards.',
      'Use Lorax orange and Calypso teal theme accents.',
      'Structure timeline events and deal records cleanly.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use HubSpot Spoke design tokens.',
    iconUsage: 'Use HubSpot icon components.',
    layoutConventions: 'Use Flex and Stack primitives.'
  }
};
