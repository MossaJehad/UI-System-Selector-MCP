import { UISystem } from '../../schemas/uiSystem.js';

export const jollyUi: UISystem = {
  id: 'jolly-ui',
  name: 'Jolly UI (React Aria + shadcn/ui)',
  organization: 'Jolty / Jolly UI Community',
  description: 'An open-source, source-owned component library that combines shadcn/ui’s visual aesthetic and Tailwind CSS styling with Adobe’s React Aria Components as the underlying headless engine for benchmark-setting accessibility, date ranges, number fields, and comboboxes.',
  category: 'source-owned',
  secondaryCategories: ['accessibility-focused', 'saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['react-aria-components', 'tailwindcss-react-aria-components', 'lucide-react', 'tailwind-merge'],
  docsUrl: 'https://jollyui.dev',
  repositoryUrl: 'https://github.com/jolty/jolly-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Powered by Adobe React Aria Components, offering the highest level of WAI-ARIA and screen reader compliance available in the React ecosystem.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens matching shadcn/ui conventions',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'shadcn/ui minimalist aesthetic powered by Adobe React Aria accessibility: sleek neutral borders, accessible DateRangePicker, NumberField with stepper arrows, and comboboxes.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers who love the shadcn/ui visual style but need Adobe React Aria’s superior accessibility and date/number components',
    'High-compliance enterprise SaaS portals needing both modern Tailwind aesthetics and AAA accessibility',
    'React & Next.js applications requiring robust date pickers, calendar grids, and multi-segment date inputs'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Bridges the best of both worlds: shadcn/ui visual beauty + Adobe React Aria rock-solid accessibility',
    'Exceptional DatePicker, DateRangePicker, NumberField, ColorPicker, and Meter components',
    '100% source-owned copy-paste code with full Tailwind CSS customization'
  ],
  weaknesses: [
    'Requires learning React Aria Components mental model instead of Radix'
  ],
  tags: [
    'jolly-ui',
    'react-aria',
    'shadcn',
    'source-owned',
    'copy-paste',
    'accessibility',
    'high-accessibility',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Jolly UI', 'JollyUI', 'Jolly'],
  relatedSystems: ['react-aria-components', 'react-spectrum', 'shadcn-ui', 'origin-ui'],
  systemTypes: ['source-owned', 'component-library', 'headless'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npm install react-aria-components tailwindcss-react-aria-components lucide-react tailwind-merge',
      packages: ['react-aria-components', 'tailwindcss-react-aria-components', 'lucide-react', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Add `tailwindcss-react-aria-components` plugin to your `tailwind.config.js` and copy components from jollyui.dev.'
    }
  },
  componentGuidance: {
    datepicker: {
      canonicalName: 'DatePicker',
      description: 'Fully accessible multi-segment date picker powered by React Aria.',
      importExample: "import { DatePicker, DateInput, DateSegment, Dialog, Popover, Button, Calendar, CalendarGrid, CalendarCell, Heading } from '@/components/ui/date-picker';\n\n<DatePicker><DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput></DatePicker>",
      docSubUrl: 'docs/components/date-picker'
    }
  },
  aiInstructions: {
    principles: [
      'Use Adobe React Aria Components as the component foundation.',
      'Apply Tailwind CSS with `tailwindcss-react-aria-components` plugin.',
      'Copy component files directly into `components/ui/`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme in Tailwind config.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
