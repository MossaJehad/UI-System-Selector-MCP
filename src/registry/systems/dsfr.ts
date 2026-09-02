import { UISystem } from '../../schemas/uiSystem.js';

export const dsfr: UISystem = {
  id: 'dsfr',
  name: 'Système de Design de l’État (DSFR)',
  organization: 'Gouvernement Français (DINUM)',
  description: 'The official design system of the French Government, created by DINUM to deliver cohesive, accessible (RGAA / WCAG 2.1 AA), and modern digital public services across all ministries and public agencies.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'css-framework', 'saas'],
  frameworks: ['html-css', 'vanilla', 'react', 'vue', 'angular'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@gouvfr/dsfr', '@codegouvfr/react-dsfr'],
  docsUrl: 'https://www.systeme-de-design.gouv.fr',
  repositoryUrl: 'https://github.com/GouvernementFR/dsfr',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms strictly to RGAA 4 (Référentiel Général d’Amélioration de l’Accessibilité) and WCAG 2.1 AA.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties and Marianne typography scale',
    packageName: '@gouvfr/dsfr'
  },
  icons: {
    available: true,
    packageName: '@gouvfr/dsfr',
    name: 'Remix Icon integration via DSFR'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Refined, elegant French civic style featuring Marianne typography, official tricolor Marianne logo headers, and dark mode support.',
  noveltyLevel: 'established',
  bestFor: [
    'French state administrative websites and ministerial digital portals',
    'European public sector civic applications needing RGAA / WCAG conformance',
    'French-speaking municipal and regional digital administration tools'
  ],
  avoidFor: [
    'Non-French commercial startups',
    'Gaming websites'
  ],
  strengths: [
    'Complete RGAA 4 accessibility conformance out of the box',
    'First-class official React integration via `@codegouvfr/react-dsfr` with Next.js App Router support',
    'Dark theme with automatic system preference detection'
  ],
  weaknesses: [
    'Distinct French public branding that requires customization for third-party use'
  ],
  tags: [
    'government',
    'french',
    'france',
    'dinum',
    'rgaa',
    'high-accessibility',
    'dark-mode',
    'public-sector'
  ],
  aliases: ['DSFR', 'Design System France', 'Systeme de Design de l Etat'],
  systemTypes: ['government', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @gouvfr/dsfr',
      packages: ['@gouvfr/dsfr'],
      setupInstructions: 'Import `@gouvfr/dsfr/dist/dsfr.min.css` and `@gouvfr/dsfr/dist/dsfr.module.min.js`.'
    },
    react: {
      command: 'npm install @codegouvfr/react-dsfr',
      packages: ['@codegouvfr/react-dsfr'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Initialize DSFR in Next.js or React using `startReactDsfr({ defaultColorScheme: "system" });`.'
    }
  },
  componentGuidance: {
    header: {
      canonicalName: 'fr-header',
      description: 'Official Marianne French Government header component.',
      importExample: '<header role="banner" class="fr-header"><div class="fr-header__body"><div class="fr-container"><div class="fr-header__body-row"><div class="fr-header__brand fr-enlarge-link"><div class="fr-header__brand-top"><div class="fr-header__logo"><p class="fr-logo">République<br>Française</p></div></div></div></div></div></div></header>',
      docSubUrl: 'elements-d-interface/composants/en-tete'
    },
    button: {
      canonicalName: 'fr-btn',
      description: 'DSFR button with primary, secondary, and tertiary variants.',
      importExample: '<button class="fr-btn" type="submit">Valider</button>',
      docSubUrl: 'elements-d-interface/composants/bouton'
    }
  },
  aiInstructions: {
    principles: [
      'Use official `.fr-*` CSS classes or `@codegouvfr/react-dsfr` components.',
      'Always follow RGAA 4 accessibility requirements (color contrast, skip links, ARIA landmarks).',
      'Use Marianne font family for all typography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `data-fr-theme="dark"` or `data-fr-theme="light"` on `<html>`.',
    iconUsage: 'Use Remix Icon CSS classes like `fr-icon-arrow-right-line`.',
    layoutConventions: 'Wrap in `.fr-container` with `.fr-grid-row` and `.fr-col-*`.'
  }
};
