import { UISystem } from '../../schemas/uiSystem.js';

export const pie: UISystem = {
  id: 'pie',
  name: 'Just Eat Takeaway PIE',
  organization: 'Just Eat Takeaway.com',
  description: 'Just Eat Takeaway’s official open-source design system and Web Component library, engineered for high-volume food delivery ordering, restaurant menus, delivery tracking maps, and multi-brand global markets.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'web-components', 'mobile-inspired'],
  frameworks: ['web-components', 'html-css', 'react', 'vue', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@justeattakeaway/pie-button', '@justeattakeaway/pie-design-tokens', '@justeattakeaway/pie-icons'],
  docsUrl: 'https://pie.design',
  repositoryUrl: 'https://github.com/justeattakeaway/pie',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across consumer food delivery apps.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and Style Dictionary',
    packageName: '@justeattakeaway/pie-design-tokens'
  },
  icons: {
    available: true,
    packageName: '@justeattakeaway/pie-icons',
    name: 'PIE Food & Delivery Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, appetizing, food delivery consumer aesthetic: JET Orange (#ff8000), rounded pill action buttons, clean restaurant menu cards, and live delivery timeline pins.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Food ordering, restaurant menus, and meal delivery platforms',
    'Local merchant ordering portals and checkout flows',
    'Cross-framework Web Component consumer applications'
  ],
  avoidFor: [
    'Enterprise Kubernetes consoles'
  ],
  strengths: [
    'Lit-based W3C standard Web Components with seamless React & Vue integration',
    'Specialized food and delivery icons (burger, pizza, bag, motorcycle, clock)',
    'Multi-brand token architecture designed for global food delivery platforms'
  ],
  weaknesses: [
    'Food delivery consumer focus'
  ],
  tags: [
    'just-eat',
    'takeaway',
    'pie',
    'food-delivery',
    'ecommerce',
    'consumer',
    'web-components',
    'lit',
    'hidden-gem'
  ],
  aliases: ['PIE', 'Just Eat Design System', 'Takeaway Design System'],
  systemTypes: ['company-design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @justeattakeaway/pie-button @justeattakeaway/pie-design-tokens @justeattakeaway/pie-icons',
      packages: ['@justeattakeaway/pie-button', '@justeattakeaway/pie-design-tokens', '@justeattakeaway/pie-icons'],
      setupInstructions: 'Import `@justeattakeaway/pie-design-tokens/dist/jet.css` and register web components.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<pie-button>',
      description: 'PIE action button with variant="primary" | "secondary" | "outline".',
      importExample: '<pie-button variant="primary">Add to Order</pie-button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<pie-*>` web components directly in templates.',
      'Import `@justeattakeaway/pie-design-tokens` for brand and semantic color variables.',
      'Use PIE Food and Delivery icons for meal ordering concepts.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use PIE design tokens (--dt-color-support-brand, --dt-color-surface).',
    iconUsage: 'Use icons from @justeattakeaway/pie-icons.',
    layoutConventions: 'Use standard consumer responsive grid with PIE spacing tokens.'
  }
};
