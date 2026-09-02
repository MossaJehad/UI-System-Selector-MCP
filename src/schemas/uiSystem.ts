import { z } from 'zod';

export const NpmPackageNameSchema = z.string().regex(
  /^(?:@[a-z0-9][a-z0-9._~-]*\/)?[a-z0-9][a-z0-9._~-]*$/,
  'Expected an installable npm package name, not an import subpath'
);

export const FrameworkSchema = z.enum([
  'react',
  'next',
  'vue',
  'nuxt',
  'svelte',
  'sveltekit',
  'solid',
  'astro',
  'angular',
  'react-native',
  'web-components',
  'css-only',
  'vanilla',
  'html-css',
  'framework-agnostic'
]);
export type Framework = z.infer<typeof FrameworkSchema>;

export const UISystemCategorySchema = z.enum([
  'company-design-system',
  'government',
  'enterprise',
  'developer-tool',
  'dashboard',
  'consumer',
  'ecommerce',
  'creative-tool',
  'data-heavy',
  'headless',
  'unstyled',
  'styled',
  'web-components',
  'css-framework',
  'component-library',
  'source-owned',
  'mobile',
  'retro',
  'experimental',
  'mobile-inspired',
  'saas',
  'accessibility-focused',
  'minimalist'
]);
export type UISystemCategory = z.infer<typeof UISystemCategorySchema>;

export const StylingApproachSchema = z.enum([
  'css-in-js',
  'utility-classes',
  'tailwind',
  'css-modules',
  'design-tokens-css',
  'sass',
  'less',
  'styled-components',
  'emotion',
  'panda-css',
  'vanilla-extract',
  'shadow-dom',
  'unstyled',
  'vanilla-css'
]);
export type StylingApproach = z.infer<typeof StylingApproachSchema>;

export const OpinionatedLevelSchema = z.enum([
  'highly-opinionated',
  'moderately-opinionated',
  'flexible',
  'unstyled-headless'
]);
export type OpinionatedLevel = z.infer<typeof OpinionatedLevelSchema>;

export const DensitySchema = z.enum([
  'compact/dense',
  'comfortable',
  'spacious',
  'configurable'
]);
export type Density = z.infer<typeof DensitySchema>;

export const NoveltyLevelSchema = z.enum([
  'mainstream',
  'established',
  'hidden-gem',
  'niche-retro'
]);
export type NoveltyLevel = z.infer<typeof NoveltyLevelSchema>;

export const MaturitySchema = z.enum([
  'production',
  'mature',
  'experimental',
  'legacy',
  'deprecated'
]);
export type Maturity = z.infer<typeof MaturitySchema>;

export const AccessibilityProfileSchema = z.object({
  wcagLevel: z.enum(['AAA', 'AA', 'A', 'Not Specified']),
  keyboardNav: z.boolean(),
  screenReaderTested: z.boolean(),
  ariaCompliant: z.boolean(),
  notes: z.string().optional()
});
export type AccessibilityProfile = z.infer<typeof AccessibilityProfileSchema>;

export const DesignTokensInfoSchema = z.object({
  available: z.boolean(),
  format: z.string().optional(),
  packageName: NpmPackageNameSchema.optional(),
  description: z.string().optional()
});
export type DesignTokensInfo = z.infer<typeof DesignTokensInfoSchema>;

export const IconsInfoSchema = z.object({
  available: z.boolean(),
  packageName: NpmPackageNameSchema.optional(),
  name: z.string().optional(),
  description: z.string().optional()
});
export type IconsInfo = z.infer<typeof IconsInfoSchema>;

export const FrameworkInstallGuidanceSchema = z.object({
  command: z.string(),
  packages: z.array(NpmPackageNameSchema),
  peerDependencies: z.array(NpmPackageNameSchema).optional(),
  setupInstructions: z.string().optional(),
  notes: z.string().optional()
});
export type FrameworkInstallGuidance = z.infer<typeof FrameworkInstallGuidanceSchema>;

export const ComponentInfoSchema = z.object({
  canonicalName: z.string(),
  description: z.string(),
  importExample: z.string().optional(),
  propsPattern: z.string().optional(),
  accessibilityNotes: z.string().optional(),
  docSubUrl: z.string().optional()
});
export type ComponentInfo = z.infer<typeof ComponentInfoSchema>;

export const AIInstructionsSchema = z.object({
  principles: z.array(z.string()),
  forbiddenSubstitutions: z.array(z.string()),
  themingGuide: z.string(),
  iconUsage: z.string(),
  layoutConventions: z.string(),
  componentSelectionRules: z.array(z.string()).optional()
});
export type AIInstructions = z.infer<typeof AIInstructionsSchema>;

export const UISystemSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  organization: z.string().min(1),
  description: z.string().min(10),
  category: UISystemCategorySchema,
  secondaryCategories: z.array(UISystemCategorySchema).optional(),
  frameworks: z.array(FrameworkSchema).min(1),
  stylingApproach: StylingApproachSchema,
  packageNames: z.array(NpmPackageNameSchema).min(1),
  docsUrl: z.string().url(),
  repositoryUrl: z.string().url().optional(),
  license: z.string(),
  usageRestrictions: z.string().optional(),
  accessibility: AccessibilityProfileSchema,
  darkMode: z.boolean(),
  rtlSupport: z.boolean(),
  designTokens: DesignTokensInfoSchema,
  icons: IconsInfoSchema,
  maturity: MaturitySchema,
  opinionatedLevel: OpinionatedLevelSchema,
  density: DensitySchema,
  aesthetic: z.string(),
  noveltyLevel: NoveltyLevelSchema,
  bestFor: z.array(z.string()).min(1),
  avoidFor: z.array(z.string()).min(1),
  strengths: z.array(z.string()).min(1),
  weaknesses: z.array(z.string()).min(1),
  tags: z.array(z.string()).min(1),
  installation: z.record(z.string(), FrameworkInstallGuidanceSchema).optional(),
  componentGuidance: z.record(z.string(), ComponentInfoSchema).optional(),
  aiInstructions: AIInstructionsSchema,
  aliases: z.array(z.string()).optional(),
  relatedSystems: z.array(z.string()).optional(),
  systemTypes: z.array(z.string()).optional(),
  sourceOwned: z.boolean().optional(),
  openSource: z.boolean().optional(),
  githubStars: z.number().optional(),
  status: z.enum(['active', 'maintenance', 'deprecated', 'archived', 'unknown']).optional(),
  verificationStatus: z.enum(['verified', 'unverified', 'unavailable']).optional()
});

export type UISystem = z.infer<typeof UISystemSchema>;
