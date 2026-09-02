import { UISystem } from '../../schemas/uiSystem.js';

export const cmsDesignSystem: UISystem = {
  id: 'cms-design-system',
  name: 'CMS Design System (Healthcare.gov / Medicare)',
  organization: 'Centers for Medicare & Medicaid Services (CMS)',
  description: 'The official design system and React/HTML component library powering Healthcare.gov and Medicare.gov, built on top of USWDS to provide accessible, high-traffic health insurance enrollment and coverage workflows.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'consumer'],
  frameworks: ['react', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@cmsgov/design-system'],
  docsUrl: 'https://design.cms.gov',
  repositoryUrl: 'https://github.com/CMSgov/design-system',
  license: 'CC0-1.0 (Public Domain)',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms strictly to Section 508 and WCAG 2.1 AA with rigorous user testing across Healthcare.gov open enrollment.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and SCSS maps',
    packageName: '@cmsgov/design-system'
  },
  icons: {
    available: true,
    packageName: '@cmsgov/design-system',
    name: 'CMS Design System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, approachable, reassuring healthcare insurance aesthetic with high-contrast Medicare blue (#0071bc) and clear enrollment action cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Medicare, Medicaid, and Healthcare.gov digital portals',
    'Health insurance plan comparison, quote calculators, and eligibility wizards',
    'High-volume public sector benefits enrollment systems'
  ],
  avoidFor: [
    'Private SaaS developer dashboards'
  ],
  strengths: [
    'Battle-tested at massive scale during Healthcare.gov Open Enrollment',
    'Specialized insurance components (Plan Compare, Choice List, Date of Birth input)',
    'First-class official React components with TypeScript definitions'
  ],
  weaknesses: [
    'CMS and Medicare-specific branding themes'
  ],
  tags: [
    'government',
    'cms',
    'healthcare-gov',
    'medicare',
    'accessible',
    'high-accessibility',
    'react',
    'hidden-gem'
  ],
  aliases: ['CMS Design System', 'Healthcare.gov Design System', 'Medicare Design System'],
  systemTypes: ['government', 'design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @cmsgov/design-system',
      packages: ['@cmsgov/design-system'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@cmsgov/design-system/dist/css/index.css` and use React components from `@cmsgov/design-system`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'CMS accessible action button with variation="primary" | "secondary" | "transparent".',
      importExample: "import { Button } from '@cmsgov/design-system';\n\n<Button variation=\"solid\">Find Health Plans</Button>",
      docSubUrl: 'components/button/'
    },
    choice: {
      canonicalName: 'ChoiceList',
      description: 'Accessible radio and checkbox choice lists with error validation.',
      importExample: "import { ChoiceList } from '@cmsgov/design-system';\n\n<ChoiceList name=\"coverage\" type=\"radio\" label=\"Select your coverage year\" choices={[{ label: '2026', value: '2026' }]} />",
      docSubUrl: 'components/choice/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@cmsgov/design-system` React components.',
      'Always follow plain language guidelines and provide clear error messages on form fields.',
      'Ensure WCAG 2.1 AA contrast ratios across all plan comparison cards.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via CMS theme tokens (Healthcare, Medicare, Core).',
    iconUsage: 'Import icons from @cmsgov/design-system (e.g. CheckIcon, AlertIcon).',
    layoutConventions: 'Use CMS layout grid classes and utility containers.'
  }
};
