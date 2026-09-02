import { z } from 'zod';
import { FrameworkSchema } from './uiSystem.js';

export const SelectUISystemInputSchema = z.object({
  id: z.string().min(1),
  framework: FrameworkSchema.optional().default('react'),
  persist: z.boolean().optional().default(false),
  projectPath: z.string().optional(),
  strictMode: z.boolean().optional().default(true),
  acknowledgeUsageRestrictions: z.boolean().optional().default(false)
});
export type SelectUISystemInput = z.infer<typeof SelectUISystemInputSchema>;

export const ClearSelectedUISystemInputSchema = z.object({
  removePersisted: z.boolean().optional().default(false),
  projectPath: z.string().optional()
});
export type ClearSelectedUISystemInput = z.infer<typeof ClearSelectedUISystemInputSchema>;

export const SelectionStateSchema = z.object({
  selectedSystem: z.string(),
  framework: FrameworkSchema,
  selectedAt: z.string().datetime(),
  strictMode: z.boolean(),
  source: z.enum(['session', 'file']),
  configPath: z.string().optional(),
  customRules: z.array(z.string()).optional()
});
export type SelectionState = z.infer<typeof SelectionStateSchema>;

export const ProjectConfigFileSchema = z.object({
  $schema: z.string().optional(),
  selectedSystem: z.string().regex(/^[a-z0-9-]+$/),
  framework: FrameworkSchema.optional().default('react'),
  selectedAt: z.string().datetime(),
  strictMode: z.boolean().optional().default(true),
  customRules: z.array(z.string().min(1)).refine(
    rules => new Set(rules).size === rules.length,
    'Custom rules must be unique'
  ).optional()
});
export type ProjectConfigFile = z.infer<typeof ProjectConfigFileSchema>;
