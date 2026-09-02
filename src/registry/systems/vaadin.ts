import { UISystem } from '../../schemas/uiSystem.js';

export const vaadin: UISystem = {
  id: 'vaadin',
  name: 'Vaadin Web Components (Lumo)',
  organization: 'Vaadin Ltd',
  description: 'Vaadin’s official open-source suite of 45+ enterprise Web Components built with Lit, featuring high-performance virtualized grids, date pickers, combo boxes, notification systems, and the customizable Lumo design system.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'web-components'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@vaadin/button', '@vaadin/grid', '@vaadin/combo-box', '@vaadin/vaadin-lumo-styles', '@vaadin/react-components'],
  docsUrl: 'https://vaadin.com/docs/latest/components',
  repositoryUrl: 'https://github.com/vaadin/web-components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA and Section 508 with extensive keyboard accessibility across complex data grids.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Lumo Design Tokens in CSS custom properties',
    packageName: '@vaadin/vaadin-lumo-styles'
  },
  icons: {
    available: true,
    packageName: '@vaadin/icon',
    name: 'Vaadin Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Modern enterprise computing with Lumo theme: clean compact grid borders, refined dropdowns, high-contrast dark mode, and smooth data virtualization.',
  noveltyLevel: 'established',
  bestFor: [
    'Enterprise web applications requiring high-performance virtualized data grids (`vaadin-grid`) in any framework',
    'Full-stack Java/Spring Boot applications using Vaadin Flow alongside modern React/Vue/Angular frontends',
    'Multi-framework enterprise teams seeking rock-solid W3C Web Components'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'One of the oldest, most battle-tested enterprise Web Component suites in the industry',
    '`<vaadin-grid>` is one of the fastest virtualized table implementations in the world (renders 100,000+ items smoothly)',
    'Official React wrapper package (`@vaadin/react-components`) for seamless React JSX typing'
  ],
  weaknesses: [
    'Enterprise data-centric look'
  ],
  tags: [
    'vaadin',
    'lumo',
    'web-components',
    'grid',
    'datatable',
    'enterprise',
    'spring-boot',
    'dark-mode',
    'established'
  ],
  aliases: ['Vaadin', 'Vaadin Web Components', 'Lumo Design System', 'Vaadin Flow'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @vaadin/button @vaadin/grid @vaadin/combo-box @vaadin/vaadin-lumo-styles',
      packages: ['@vaadin/button', '@vaadin/grid', '@vaadin/combo-box', '@vaadin/vaadin-lumo-styles'],
      setupInstructions: 'Import custom elements directly (e.g. `import "@vaadin/button"; import "@vaadin/grid";`).'
    },
    react: {
      command: 'npm install @vaadin/react-components',
      packages: ['@vaadin/react-components'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<vaadin-button>',
      description: 'Vaadin action button with theme="primary" | "secondary" | "tertiary" | "error" | "success".',
      importExample: '<vaadin-button theme="primary">Save Record</vaadin-button>',
      docSubUrl: 'components/button'
    },
    grid: {
      canonicalName: '<vaadin-grid>',
      description: 'High-performance virtualized enterprise data grid.',
      importExample: '<vaadin-grid><vaadin-grid-column path="firstName" header="First Name"></vaadin-grid-column><vaadin-grid-column path="lastName" header="Last Name"></vaadin-grid-column></vaadin-grid>',
      docSubUrl: 'components/grid'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<vaadin-*>` custom elements or `@vaadin/react-components` in React.',
      'Import `@vaadin/vaadin-lumo-styles/all-imports.js` for Lumo design tokens.',
      'Use `<vaadin-grid>` for high-density enterprise datasets.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Toggle dark mode using `theme="dark"` attribute on `<html>`.',
    iconUsage: 'Use `<vaadin-icon icon="vaadin:search"></vaadin-icon>`.',
    layoutConventions: 'Use Vaadin HorizontalLayout and VerticalLayout containers.'
  }
};
