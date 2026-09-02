import { UISystem } from '../../schemas/uiSystem.js';

export const nutui: UISystem = {
  id: 'nutui',
  name: 'NutUI (JD.com Mobile UI)',
  organization: 'JD.com (Jingdong)',
  description: 'JD.com’s official open-source mobile UI component library built for Vue 3, Taro cross-platform mini-programs, and mobile web applications, engineered for high-volume retail e-commerce, address selectors, SKU selectors, and flash sales.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'ecommerce', 'consumer'],
  frameworks: ['vue'],
  stylingApproach: 'sass',
  packageNames: ['@nutui/nutui', '@nutui/icons-vue'],
  docsUrl: 'https://nutui.jd.com',
  repositoryUrl: 'https://github.com/jdf2e/nutui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible mobile touch targets and ARIA states across mobile shopping components.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and SCSS variables',
    packageName: '@nutui/nutui'
  },
  icons: {
    available: true,
    packageName: '@nutui/icons-vue',
    name: 'NutUI Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Mobile retail e-commerce aesthetic: JD Red (#fa2c19) accents, mobile SKU option pickers, address cascaders, countdown timers, price tags, and swipeable product cards.',
  noveltyLevel: 'established',
  bestFor: [
    'Mobile e-commerce web applications, WeChat/Taro mini-programs, and mobile shopping carts in Vue 3',
    'Apps needing specialized retail components (Sku, Address, Price, Countdown, Barcode, Elevator)',
    'High-performance mobile web experiences'
  ],
  avoidFor: [
    'Desktop widescreen analytics consoles'
  ],
  strengths: [
    'Official mobile UI library of e-commerce giant JD.com',
    'Battle-tested at massive scale during global shopping festivals (618, Double 11)',
    'Seamless cross-platform compilation to Taro mini-programs and Web'
  ],
  weaknesses: [
    'Mobile / mini-program focus'
  ],
  tags: [
    'nutui',
    'jd',
    'mobile',
    'ecommerce',
    'vue3',
    'taro',
    'mini-program',
    'retail',
    'established'
  ],
  aliases: ['NutUI', 'Nut UI', 'JD NutUI', 'Jingdong UI'],
  relatedSystems: ['vant', 'react-native-paper'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install @nutui/nutui @nutui/icons-vue',
      packages: ['@nutui/nutui', '@nutui/icons-vue'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@nutui/nutui/dist/style.css` in `main.ts` and `app.use(NutUI)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'nut-button',
      description: 'NutUI mobile button with type="primary" | "info" | "warning" | "danger" | "success".',
      importExample: '<nut-button type="primary">Buy Now</nut-button>',
      docSubUrl: '#/zh-CN/component/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<nut-*>` component tags in Vue 3 templates.',
      'Import `@nutui/nutui/dist/style.css` in main entry file.',
      'Use specialized e-commerce components (`<nut-sku>`, `<nut-price>`, `<nut-address>`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables on `:root` (e.g. `--nut-primary-color`).',
    iconUsage: 'Import icons from `@nutui/icons-vue`.',
    layoutConventions: 'Use standard mobile responsive flex containers.'
  }
};
