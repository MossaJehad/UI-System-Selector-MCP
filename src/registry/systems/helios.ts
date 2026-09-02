import { UISystem } from '../../schemas/uiSystem.js';

export const helios: UISystem = {
  id: 'helios',
  name: 'HashiCorp Helios (Flight)',
  organization: 'HashiCorp',
  description: 'HashiCorp’s open-source design system and frontend ecosystem powering Terraform Cloud, Vault, Consul, and Nomad, engineered for cloud infrastructure provisioning, security key management, and developer operations.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'enterprise', 'dashboard'],
  frameworks: ['react', 'html-css'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@hashicorp/design-system-tokens', '@hashicorp/design-system-components'],
  docsUrl: 'https://helios.hashicorp.design',
  repositoryUrl: 'https://github.com/hashicorp/design-system',
  license: 'MPL-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built to ensure WCAG 2.1 AA accessibility across HashiCorp cloud products.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties and Style Dictionary tokens',
    packageName: '@hashicorp/design-system-tokens'
  },
  icons: {
    available: true,
    packageName: '@hashicorp/flight-icons',
    name: 'HashiCorp Flight Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Precision developer infrastructure aesthetic: dark theme, neon purple/cyan accents, clear status tags (healthy, active, warning), and code block inspectors.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Cloud infrastructure consoles, secret management, and provisioning dashboards',
    'DevOps, CI/CD, and Kubernetes orchestration interfaces',
    'Developer-focused HashiCorp integrations and Terraform UI tooling'
  ],
  avoidFor: [
    'Consumer mobile shopping apps'
  ],
  strengths: [
    'Purpose-built for infrastructure workflows and developer consoles',
    'Flight Icons library tailored for servers, clusters, clouds, and secrets',
    'First-class dark mode and high-density status badges'
  ],
  weaknesses: [
    'Strong HashiCorp visual identity'
  ],
  tags: [
    'hashicorp',
    'helios',
    'terraform',
    'vault',
    'devops',
    'cloud',
    'developer-tool',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Helios', 'HashiCorp Design System', 'Flight Design System'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @hashicorp/design-system-tokens @hashicorp/flight-icons',
      packages: ['@hashicorp/design-system-tokens', '@hashicorp/flight-icons'],
      setupInstructions: 'Import `@hashicorp/design-system-tokens/dist/css/tokens.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'HdsButton',
      description: 'HashiCorp action button with primary, secondary, and critical color variants.',
      importExample: '<button class="hds-button hds-button--primary">Deploy Workspace</button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@hashicorp/design-system-tokens` for color and spacing variables.',
      'Use HashiCorp Flight Icons for cloud and infrastructure concepts.',
      'Design with dark mode as a primary target.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Helios design tokens (e.g. `--token-color-surface-primary`, `--token-color-brand-primary`).',
    iconUsage: 'Use @hashicorp/flight-icons (e.g. ServerIcon, KeyIcon, CloudIcon).',
    layoutConventions: 'Use high-density card and table layouts with monospace metrics.'
  }
};
