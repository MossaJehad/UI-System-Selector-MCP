import { UISystem } from '../../schemas/uiSystem.js';

export const icDesignSystem: UISystem = {
  id: 'ic-design-system',
  name: 'UK Intelligence Community Design System (ICDS)',
  organization: 'UK Intelligence Community (GCHQ / MI5 / MI6)',
  description: 'The open-source design system and Web Component / React component library developed by the UK Intelligence Community (GCHQ, MI5, SIS/MI6), engineered for high-security analytical intelligence, secret clearance classification banners, network link graphs, and high-density surveillance data analysis.',
  category: 'company-design-system',
  secondaryCategories: ['government', 'enterprise', 'data-heavy', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@ukic/canary-web-components', '@ukic/canary-react'],
  docsUrl: 'https://design.sis.gov.uk',
  repositoryUrl: 'https://github.com/mi6/ic-design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Exceeds WCAG 2.1 AA with specialized national security cognitive ergonomics and keyboard navigation auditing.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties',
    packageName: '@ukic/canary-web-components'
  },
  icons: {
    available: true,
    name: 'ICDS System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'High-security intelligence operations style: dark charcoal surfaces (#121212), UK security classification banners (OFFICIAL, SECRET, TOP SECRET), high-density target cards, and network topology charts.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Cybersecurity operations centers (SOC), threat intelligence, and digital forensics',
    'National security, law enforcement investigation, and case management portals',
    'High-security enterprise applications requiring mandatory data classification banners'
  ],
  avoidFor: [
    'Casual social shopping sites'
  ],
  strengths: [
    'Unique official security classification banner component (`ic-classification-banner`) for government and defense',
    'Standards-based Web Components using Lit with official React wrappers',
    'Rigorous accessibility and cognitive ergonomics engineered by national intelligence agencies'
  ],
  weaknesses: [
    'Defense and high-security domain specialization'
  ],
  tags: [
    'gchq',
    'mi5',
    'mi6',
    'intelligence',
    'security',
    'cybersecurity',
    'classification-banner',
    'web-components',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ["ICDS", "UK Intelligence Design System", "GCHQ Design System", "MI6 Design System", "IC UI Kit"],
  systemTypes: ['company-design-system', 'government', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ukic/canary-web-components',
      packages: ['@ukic/canary-web-components'],
      setupInstructions: 'Import `@ukic/canary-web-components/dist/core/core.css` and register web components.'
    },
    react: {
      command: 'npm install @ukic/canary-react @ukic/canary-web-components',
      packages: ['@ukic/canary-react', '@ukic/canary-web-components'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    classificationbanner: {
      canonicalName: '<ic-classification-banner>',
      description: 'Security classification banner (OFFICIAL, SECRET, TOP SECRET) fixed at top/bottom of screen.',
      importExample: '<ic-classification-banner classification="secret"></ic-classification-banner>',
      docSubUrl: 'components/classification-banner/'
    },
    button: {
      canonicalName: '<ic-button>',
      description: 'ICDS action button with variant="primary" | "secondary" | "destructive".',
      importExample: '<ic-button variant="primary">Analyze Threat Vector</ic-button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Include `<ic-classification-banner>` on high-security analytical interfaces.',
      'Use `<ic-*>` custom elements or `@ukic/canary-react` components.',
      'Default to dark theme for security operations centers.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use ICDS design tokens (--ic-theme-primary, --ic-color-status-error).',
    iconUsage: 'Use `<ic-hero-icon>` components.',
    layoutConventions: 'Use standard ICDS layout and page wrappers.'
  }
};
