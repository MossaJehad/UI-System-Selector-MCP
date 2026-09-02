import { UISystem } from '../../schemas/uiSystem.js';

export const odyssey: UISystem = {
  id: 'odyssey',
  name: 'Okta Odyssey',
  organization: 'Okta',
  description: 'Okta’s official open-source design system and React component suite, engineered for enterprise identity management, single sign-on (SSO), multi-factor authentication (MFA) prompts, role-based access control (RBAC), and security administration.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'developer-tool', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@okta/odyssey-react', '@okta/odyssey-tokens'],
  docsUrl: 'https://developer.okta.com/odyssey',
  repositoryUrl: 'https://github.com/okta/odyssey',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across Okta Admin and End-User Dashboard.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and JavaScript theme objects',
    packageName: '@okta/odyssey-tokens'
  },
  icons: {
    available: true,
    packageName: '@okta/odyssey-react',
    name: 'Odyssey Security Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'High-security enterprise identity style: Okta Blue (#00297a / #1662dd), clean authentication forms, passkey verification cards, and user directory tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Single Sign-On (SSO) login portals, MFA challenge dialogs, and passkey registration',
    'Enterprise user management, identity governance, and access control matrices',
    'Security administration consoles and audit logs'
  ],
  avoidFor: [
    'Casual social networking feeds'
  ],
  strengths: [
    'Purpose-built for enterprise identity and access management workflows',
    'Specialized security components (StatusIndicator, Toast, Modal, SearchBox)',
    'High accessibility and keyboard focus management essential for login screens'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'okta',
    'odyssey',
    'auth',
    'security',
    'identity',
    'sso',
    'enterprise',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Odyssey', 'Okta Design System', 'Odyssey React'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @okta/odyssey-react @okta/odyssey-tokens @emotion/react @emotion/styled',
      packages: ['@okta/odyssey-react', '@okta/odyssey-tokens', '@emotion/react', '@emotion/styled'],
      peerDependencies: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      setupInstructions: 'Wrap your app in `<OdysseyProvider>` from `@okta/odyssey-react`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Odyssey action button with variant="primary" | "secondary" | "danger".',
      importExample: "import { Button } from '@okta/odyssey-react';\n\n<Button variant=\"primary\">Verify MFA Token</Button>",
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<OdysseyProvider>`.',
      'Use Odyssey Form, TextInput, and PasswordInput for secure credentials handling.',
      'Provide clear, accessible status feedback on auth states.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure Odyssey theme provider options.',
    iconUsage: 'Import icons from @okta/odyssey-react.',
    layoutConventions: 'Use Box and Flex primitives with Odyssey spacing tokens.'
  }
};
