import { UISystem } from '../../schemas/uiSystem.js';

export const vant: UISystem = {
  id: 'vant',
  name: 'Vant (Youzan Mobile UI)',
  organization: 'Youzan',
  description: 'The world’s most popular open-source mobile UI component library for Vue 3 and Nuxt, delivering 65+ lightweight mobile components (Swipe, ActionSheet, Tabbar, Stepper, GoodsAction, AddressList, Coupon) for mobile web apps, e-commerce, and mini-programs.',
  category: 'mobile',
  secondaryCategories: ['ecommerce', 'consumer', 'component-library'],
  frameworks: ['vue', 'nuxt'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['vant', '@vant/icons'],
  docsUrl: 'https://vant-ui.github.io/vant',
  repositoryUrl: 'https://github.com/youzan/vant',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Optimized for mobile touch targets, gestures, and screen reader labels.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties via `<van-config-provider>`',
    packageName: 'vant'
  },
  icons: {
    available: true,
    packageName: '@vant/icons',
    name: 'Vant Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Mobile e-commerce and app style: Vant Red / Blue accents, bottom action bars, pull-to-refresh pullers, swipeable product cards, and address selectors.',
  noveltyLevel: 'established',
  bestFor: [
    'Mobile web applications, H5 mobile pages, and WeChat mini-programs in Vue 3',
    'Mobile e-commerce storefronts (goods navigation, address selectors, coupon pickers)',
    'Fast development of iOS and Android web-view hybrid apps'
  ],
  avoidFor: [
    'Desktop widescreen administration consoles'
  ],
  strengths: [
    'The undisputed king of mobile UI component libraries in the Vue ecosystem (over 65+ mobile-optimized components)',
    'Ultra-lightweight: average component size under 1KB with tree-shaking',
    'Specialized mobile retail components (GoodsAction, SubmitBar, AddressEdit, CouponList, Area, ContactCard)'
  ],
  weaknesses: [
    'Designed specifically for mobile viewports'
  ],
  tags: [
    'vant',
    'youzan',
    'mobile',
    'vue',
    'vue3',
    'ecommerce',
    'h5',
    'touch',
    'established'
  ],
  aliases: ['Vant', 'Vant UI', 'Vant 4', 'Youzan Vant'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install vant',
      packages: ['vant'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `vant/lib/index.css` and use `app.use(Vant)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'van-button',
      description: 'Vant mobile button with type="primary" | "success" | "warning" | "danger" | "default".',
      importExample: '<van-button type="primary" block>Buy Now</van-button>',
      docSubUrl: '#/en-US/button'
    },
    goodsaction: {
      canonicalName: 'van-goods-action',
      description: 'Mobile e-commerce bottom shopping action bar.',
      importExample: '<van-goods-action><van-goods-action-icon icon="chat-o" text="Chat" /><van-goods-action-button type="danger" text="Add to Cart" /></van-goods-action>',
      docSubUrl: '#/en-US/goods-action'
    }
  },
  aiInstructions: {
    principles: [
      'Import `vant/lib/index.css` at root.',
      'Wrap root with `<van-config-provider :theme="theme">`.',
      'Use Vant mobile layout primitives (Swipe, Tabbar, NavBar, GoodsAction).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure theme via `<van-config-provider :theme-vars="themeVars">`.',
    iconUsage: 'Use `<van-icon name="cart-o" />`.',
    layoutConventions: 'Use standard mobile viewport structures with `<van-nav-bar>` and `<van-tabbar>`.'
  }
};
