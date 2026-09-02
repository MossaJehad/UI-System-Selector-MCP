import { UISystem } from '../../schemas/uiSystem.js';

export const liquidDesignSystem: UISystem = {
  id: 'liquid-design-system',
  name: 'Merck Liquid Design System',
  organization: 'Merck KGaA, Darmstadt, Germany',
  description: 'Merck KGaA’s official open-source design system and Web Component library, engineered for life sciences research platforms, biopharmaceutical clinical trial portals, chemical laboratory informatics (LIMS), and healthcare technology.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'web-components'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@merck-liquid/components', '@merck-liquid/elements'],
  docsUrl: 'https://liquid.merck.design',
  repositoryUrl: 'https://github.com/Merck-Liquid/liquid-design-system',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across clinical laboratory instruments and pharmaceutical portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@merck-liquid/components'
  },
  icons: {
    available: true,
    packageName: '@merck-liquid/components',
    name: 'Liquid Scientific & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Life sciences and clinical lab aesthetic: Merck Vibrant Magenta (#eb3c96) / Cyan accents, molecule sample tracking tables, scientific assay cards, and high-precision laboratory data inputs.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Biopharmaceutical portals, laboratory informatics (LIMS), and chemical assay dashboards',
    'Healthcare life sciences applications requiring strict regulatory accessibility and audit trails',
    'Multi-framework applications sharing scientific Web Components'
  ],
  avoidFor: [
    'Consumer mobile gaming apps'
  ],
  strengths: [
    'Official design system of global science and technology leader Merck KGaA',
    'Specialized laboratory informatics, sample tracking, and scientific data visualization patterns',
    'High accessibility rigor and framework-agnostic Web Component foundation'
  ],
  weaknesses: [
    'Life sciences domain focus'
  ],
  tags: [
    'merck',
    'liquid',
    'life-sciences',
    'pharmaceutical',
    'laboratory',
    'healthcare',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Merck Liquid', 'Liquid Design System', 'Merck Design System', 'LDS'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @merck-liquid/components',
      packages: ['@merck-liquid/components'],
      setupInstructions: 'Import custom elements and root Liquid stylesheet.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ld-button>',
      description: 'Merck Liquid action button with mode="primary" | "secondary" | "danger".',
      importExample: '<ld-button mode="primary">Analyze Assay Sample</ld-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<ld-*>` custom elements for clinical and laboratory interfaces.',
      'Apply Merck Liquid design tokens for scientific typography and color palettes.',
      'Ensure high data density and accessibility in assay results tables.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use `<ld-icon name="flask"></ld-icon>`.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
