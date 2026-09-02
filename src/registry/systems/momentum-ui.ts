import { UISystem } from '../../schemas/uiSystem.js';

export const momentumUi: UISystem = {
  id: 'momentum-ui',
  name: 'Cisco Momentum UI (Webex)',
  organization: 'Cisco Systems (Webex)',
  description: 'Cisco’s official open-source design system and Web Component / React / Core CSS suite powering Cisco Webex, enterprise video conferencing, hardware room kits, network telepresence, and VoIP collaboration.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'creative-tool', 'web-components'],
  frameworks: ['web-components', 'react', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@momentum-ui/react', '@momentum-ui/web-components', '@momentum-ui/core', '@momentum-ui/icons'],
  docsUrl: 'https://momentum.design',
  repositoryUrl: 'https://github.com/momentum-design/momentum-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA and Cisco enterprise accessibility standards across Webex meetings.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Momentum tokens',
    packageName: '@momentum-ui/core'
  },
  icons: {
    available: true,
    packageName: '@momentum-ui/icons',
    name: 'Momentum Webex Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Collaboration and telepresence aesthetic: Webex Indigo / Teal (#07c1e4), rounded video call control pills, microphone mute toggles, participant grid thumbnails, and whiteboard toolbars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Video conferencing, enterprise meeting room controls, and audio call docks',
    'Enterprise collaboration chat, channels, and screen sharing docks',
    'Cisco Webex embedded apps and hardware room integrations'
  ],
  avoidFor: [
    'Consumer fashion shopping sites'
  ],
  strengths: [
    'Unbeatable domain specialization for video meetings and enterprise collaboration',
    'Specialized call controls: CallControl, MeetingRoster, VideoGrid, WhiteboardDock, AudioMute',
    'Multi-tier implementation available in Web Components, React, and Core CSS'
  ],
  weaknesses: [
    'Video collaboration domain focus'
  ],
  tags: [
    'cisco',
    'momentum-ui',
    'webex',
    'video-conferencing',
    'collaboration',
    'enterprise',
    'web-components',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Momentum UI', 'Cisco Webex Design System', 'Momentum Design'],
  systemTypes: ['company-design-system', 'component-library', 'web-components'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @momentum-ui/react @momentum-ui/core @momentum-ui/icons',
      packages: ['@momentum-ui/react', '@momentum-ui/core', '@momentum-ui/icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@momentum-ui/core/css/momentum-ui.min.css` and `@momentum-ui/icons/css/momentum-ui-icons.min.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Momentum action button with color="blue" | "green" | "red" | "darkgray".',
      importExample: "import { Button } from '@momentum-ui/react';\n\n<Button color=\"green\">Join Webex Meeting</Button>",
      docSubUrl: 'components/button/'
    },
    callcontrol: {
      canonicalName: 'CallControl',
      description: 'Circular meeting control button (mute, camera, share screen, leave).',
      importExample: "import { CallControl } from '@momentum-ui/react';\n\n<CallControl type=\"cancel\" active={false} onClick={leaveMeeting} />",
      docSubUrl: 'components/call-control/'
    }
  },
  aiInstructions: {
    principles: [
      'Import Momentum Core CSS and icon stylesheets.',
      'Use Momentum CallControl and Meeting components for video rooms.',
      'Default to dark theme for video meeting interfaces.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Momentum theme classes (`md-theme--dark`, `md-theme--light`).',
    iconUsage: 'Use `<Icon name="camera_24" />` or Momentum icon font.',
    layoutConventions: 'Use standard Webex stage and sidebar layout patterns.'
  }
};
