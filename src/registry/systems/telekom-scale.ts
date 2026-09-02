import { UISystem } from '../../schemas/uiSystem.js';

export const telekomScale: UISystem = {
  id: 'telekom-scale',
  name: 'Deutsche Telekom Scale',
  organization: 'Deutsche Telekom AG (T-Mobile)',
  description: 'Deutsche Telekom’s official open-source design system and Web Component / React component suite, engineered for European telecommunications, T-Mobile subscriber self-care, 5G network roaming, IoT connectivity, and enterprise telecom management.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@telekom/scale-components', '@telekom/scale-components-react'],
  docsUrl: 'https://scale.telekom.com',
  repositoryUrl: 'https://github.com/telekom/scale',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA and European EN 301 549 across Deutsche Telekom.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Tele-Grotesk typography',
    packageName: '@telekom/scale-components'
  },
  icons: {
    available: true,
    packageName: '@telekom/scale-components',
    name: 'Scale Telekom Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Iconic European telecom aesthetic: Magenta (#e20074), Tele-Grotesk font, clean 5G network coverage maps, mobile contract tiles, and self-service top-up cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Telecommunications subscriber self-care, mobile plan configurators, and bill payment flows',
    'T-Mobile and Deutsche Telekom partner integrations',
    'Web Component consumer applications needing iconic Magenta branding'
  ],
  avoidFor: [
    'Subtle indie art portfolios'
  ],
  strengths: [
    'Instant brand authority for T-Mobile and Deutsche Telekom digital applications',
    'Lit-based W3C standard Web Components with official React wrappers',
    'Full dark and high-contrast telecom themes'
  ],
  weaknesses: [
    'Prominent Magenta branding'
  ],
  tags: [
    'telekom',
    'scale',
    't-mobile',
    'magenta',
    'telecom',
    'mobile',
    'web-components',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Scale', 'Deutsche Telekom Design System', 'Telekom Scale', 'T-Mobile Design System'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @telekom/scale-components',
      packages: ['@telekom/scale-components'],
      setupInstructions: 'Import `@telekom/scale-components/dist/scale-components/scale-components.css` and register custom elements via `import { defineCustomElements } from "@telekom/scale-components/loader"; defineCustomElements();`.'
    },
    react: {
      command: 'npm install @telekom/scale-components-react @telekom/scale-components',
      packages: ['@telekom/scale-components-react', '@telekom/scale-components'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<scale-button>',
      description: 'Telekom action button with variant="primary" | "secondary".',
      importExample: '<scale-button variant="primary">Activate 5G Roaming</scale-button>',
      docSubUrl: 'components/button/'
    },
    card: {
      canonicalName: '<scale-card>',
      description: 'Telekom subscription and tariff card.',
      importExample: '<scale-card heading="MagentaMobil M"></scale-card>',
      docSubUrl: 'components/card/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<scale-*>` custom elements or `@telekom/scale-components-react` components.',
      'Apply Telekom Magenta (#e20074) for primary brand accents.',
      'Ensure high contrast across mobile plan and invoice tables.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Scale design tokens (--telekom-color-primary-standard, --telekom-color-ui-freetext).',
    iconUsage: 'Use `<scale-icon-action-search></scale-icon-action-search>`.',
    layoutConventions: 'Use standard Telekom page grid and responsive containers.'
  }
};
