import { UISystem } from '../../schemas/uiSystem.js';

export const accessibleAstroComponents: UISystem = {
  id: 'accessible-astro-components',
  name: 'Accessible Astro Components',
  organization: 'Mark Teekman / Astro Community',
  description: 'An open-source collection of WCAG AA compliant, keyboard-accessible, and screen-reader tested `.astro` components for the Astro framework, providing Accordions, Modals, Pagination, Breadcrumbs, and SkipLinks with zero client JavaScript hydration overhead.',
  category: 'component-library',
  secondaryCategories: ['accessibility-focused', 'minimalist'],
  frameworks: ['astro', 'html-css'],
  stylingApproach: 'vanilla-css',
  packageNames: ['accessible-astro-components'],
  docsUrl: 'https://accessible-astro.markteekman.nl',
  repositoryUrl: 'https://github.com/markteekman/accessible-astro-components',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Rigorous accessibility conformance: meets WCAG 2.1 AAA across screen readers (NVDA, VoiceOver, JAWS) with automated focus management.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties and accessible contrast tokens',
    packageName: 'accessible-astro-components'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean accessible public web aesthetic: prominent focus outlines, accessible breadcrumbs, skip-to-content links, responsive accessible menus, and high-contrast typography in Astro.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Astro public sector, government, education, and institutional websites requiring strict WCAG AA / AAA accessibility',
    'Astro content blogs, documentation sites, and portals wanting battle-tested screen reader components',
    'Zero-overhead accessible web development'
  ],
  avoidFor: [
    'React SPAs'
  ],
  strengths: [
    'Benchmark-level accessibility in the Astro ecosystem: every component is screen reader tested',
    'Includes essential accessibility essentials: SkipLinks, AccessibleModal, Accordion, Breadcrumbs, Notification',
    'Zero heavy dependencies: native Astro components'
  ],
  weaknesses: [
    'Astro only'
  ],
  tags: [
    'accessible-astro-components',
    'astro',
    'accessibility',
    'aaa-compliance',
    'screen-reader',
    'wcag',
    'hidden-gem'
  ],
  aliases: ['Accessible Astro Components', 'Accessible Astro', 'Mark Teekman Astro'],
  relatedSystems: ['fulldev-ui', 'govuk-design-system'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    astro: {
      command: 'npm install accessible-astro-components',
      packages: ['accessible-astro-components'],
      peerDependencies: ['astro']
    }
  },
  componentGuidance: {
    modal: {
      canonicalName: 'Modal',
      description: 'Accessible Astro modal dialog with keyboard trapping and screen reader announcements.',
      importExample: "---\nimport { Modal } from 'accessible-astro-components';\n---\n\n<Modal triggerId=\"modal-trigger\" title=\"Important Update\"><p>Accessible modal content</p></Modal>",
      docSubUrl: 'components/modal'
    }
  },
  aiInstructions: {
    principles: [
      'Import components inside Astro frontmatter (`---`).',
      'Use `<SkipLinks />` on every page for keyboard accessibility.',
      'Ensure high-contrast color themes for WCAG AAA compliance.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties for color and typography.',
    iconUsage: 'Embed SVG icons inside component slots.',
    layoutConventions: 'Use standard Astro layout composition.'
  }
};
