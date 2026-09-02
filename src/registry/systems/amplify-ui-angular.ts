import { UISystem } from '../../schemas/uiSystem.js';

export const amplifyUiAngular: UISystem = {
  id: 'amplify-ui-angular',
  name: 'Amplify UI for Angular (AWS Amplify)',
  organization: 'Amazon Web Services (AWS)',
  description: 'AWS’s official open-source UI component library for Angular, providing connected cloud components (Authenticator, StorageManager, In-App Messaging, Theme Provider) and 30+ accessible UI primitives for cloud applications.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'saas', 'accessibility-focused'],
  frameworks: ['angular'],
  stylingApproach: 'vanilla-css',
  packageNames: ['@aws-amplify/ui-angular', '@aws-amplify/ui'],
  docsUrl: 'https://ui.docs.amplify.aws/angular',
  repositoryUrl: 'https://github.com/aws-amplify/amplify-ui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across AWS Cognito authentication and cloud storage workflows.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Amplify UI CSS custom properties and theme objects via `@aws-amplify/ui`',
    packageName: '@aws-amplify/ui'
  },
  icons: {
    available: true,
    name: 'AWS Cloud Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'AWS Cloud application aesthetic: AWS Orange (#ff9900) / Teal (#00a1c9) accents, structured Cognito login/signup forms, multi-factor auth (MFA) prompts, and S3 file uploaders in Angular.',
  noveltyLevel: 'established',
  bestFor: [
    'Angular web applications integrated with AWS Cognito, S3, DynamoDB, and AWS cloud backend services',
    'Drop-in accessible multi-factor authentication (`amplify-authenticator`) and S3 uploaders',
    'Enterprise AWS cloud portals'
  ],
  avoidFor: [
    'Pure offline non-cloud static sites'
  ],
  strengths: [
    'Official AWS cloud-connected component library for Angular',
    'Drop-in zero-boilerplate Cognito Auth (`amplify-authenticator`) with MFA and password reset',
    'Design token customization via CSS custom properties'
  ],
  weaknesses: [
    'AWS cloud backend focus'
  ],
  tags: [
    'amplify-ui-angular',
    'amplify',
    'aws',
    'cognito',
    'auth',
    'angular',
    'cloud',
    'established'
  ],
  aliases: ['Amplify UI for Angular', 'Amplify UI Angular', 'AWS Amplify Angular', 'Amplify Angular'],
  relatedSystems: ['cloudscape', 'angular-material'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    angular: {
      command: 'npm install @aws-amplify/ui-angular aws-amplify',
      packages: ['@aws-amplify/ui-angular', 'aws-amplify'],
      peerDependencies: ['@angular/core', '@angular/common'],
      setupInstructions: 'Import `AmplifyAuthenticatorModule` and load `@aws-amplify/ui/styles.css` in `styles.scss`.'
    }
  },
  componentGuidance: {
    auth: {
      canonicalName: '<amplify-authenticator>',
      description: 'Connected AWS Cognito authentication form with MFA, password reset, and social sign-in.',
      importExample: '<amplify-authenticator><ng-template amplifySlot="authenticated" let-user="user" let-signOut="signOut"><h1>Welcome {{ user.username }}</h1><button (click)="signOut()">Sign Out</button></ng-template></amplify-authenticator>',
      docSubUrl: 'connected-components/authenticator'
    }
  },
  aiInstructions: {
    principles: [
      'Import `AmplifyAuthenticatorModule` into Angular standalone components.',
      'Import `@aws-amplify/ui/styles.css` in `styles.scss`.',
      'Use `<amplify-authenticator>` for user authentication.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables (e.g. `--amplify-colors-brand-primary-80`).',
    iconUsage: 'Use AWS SVG icons.',
    layoutConventions: 'Use standard Angular flexbox layout.'
  }
};
