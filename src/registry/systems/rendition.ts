import { UISystem } from '../../schemas/uiSystem.js';

export const rendition: UISystem = {
  id: 'rendition',
  name: 'Balena Rendition',
  organization: 'Balena (balenaCloud / resin.io)',
  description: 'Balena’s official open-source design system and React component library, built for IoT edge devices, Raspberry Pi fleets, container telemetry, device terminal streaming, and embedded Linux device management.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'dashboard', 'data-heavy'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['rendition', 'rendition-chart'],
  docsUrl: 'https://balena-io-modules.github.io/rendition',
  repositoryUrl: 'https://github.com/balena-io-modules/rendition',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for IoT fleet management visibility and responsive device tables.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in styled-components theme object',
    packageName: 'rendition'
  },
  icons: {
    available: true,
    packageName: 'rendition',
    name: 'Rendition Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Edge IoT developer console aesthetic: Balena Cyan/Blue (#00adef), dark terminal inspectors, device status indicators (online, offline, updating), and live memory/CPU sparklines.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'IoT edge device dashboards, Raspberry Pi fleet managers, and hardware telemetry',
    'Container deployment logs, device reboot monitors, and sensor readings',
    'Hardware-focused developer tooling'
  ],
  avoidFor: [
    'Fashion consumer e-commerce'
  ],
  strengths: [
    'Specialized IoT components: DeviceStatus, Terminal, Table with instant search, JsonForm, Gauge',
    'Rich interactive charting via `rendition-chart` for sensor timelines',
    'Built-in styled-system responsive props'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'balena',
    'rendition',
    'iot',
    'edge',
    'hardware',
    'raspberry-pi',
    'embedded',
    'developer-tool',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Rendition', 'Balena Design System', 'Resin UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install rendition styled-components',
      packages: ['rendition', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your app in `<Provider>` from `rendition`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Rendition action button with primary, danger, and outline flags.',
      importExample: "import { Button } from 'rendition';\n\n<Button primary>Flash Device</Button>",
      docSubUrl: '#button'
    },
    table: {
      canonicalName: 'Table',
      description: 'Rendition data table with built-in search filter bar and row selection.',
      importExample: "import { Table } from 'rendition';\n\n<Table columns={columns} data={devices} />",
      docSubUrl: '#table'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<Provider>` from `rendition`.',
      'Use Rendition Table, Terminal, and StatusTag for device telemetry.',
      'Apply Balena colors (primary: #00adef, success: #28a745, danger: #dc3545).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme object in Rendition `<Provider>`.',
    iconUsage: 'Use built-in Rendition icons.',
    layoutConventions: 'Use Flex and Box layout components with styled-system props.'
  }
};
