import { z } from 'zod';
import {
  FrameworkSchema,
  UISystemCategorySchema,
  StylingApproachSchema,
  OpinionatedLevelSchema,
  NoveltyLevelSchema
} from './uiSystem.js';

export const ListUISystemsFilterSchema = z.object({
  framework: FrameworkSchema.optional(),
  category: UISystemCategorySchema.optional(),
  organization: z.string().optional(),
  tags: z.array(z.string()).optional(),
  stylingApproach: StylingApproachSchema.optional(),
  opinionatedLevel: OpinionatedLevelSchema.optional(),
  darkMode: z.boolean().optional(),
  rtlSupport: z.boolean().optional(),
  noveltyLevel: NoveltyLevelSchema.optional(),
  limit: z.number().int().min(1).max(500).optional()
});
export type ListUISystemsFilter = z.input<typeof ListUISystemsFilterSchema>;
export type ParsedListUISystemsFilter = z.output<typeof ListUISystemsFilterSchema>;

export const SearchUISystemsQuerySchema = z.object({
  query: z.string().min(1),
  framework: FrameworkSchema.optional(),
  category: UISystemCategorySchema.optional(),
  noveltyPreference: z.enum(['all', 'prefer-hidden-gems', 'established-only', 'niche-retro']).optional().default('all'),
  limit: z.number().int().min(1).max(50).optional().default(10)
});
export type SearchUISystemsQuery = z.input<typeof SearchUISystemsQuerySchema>;
export type ParsedSearchUISystemsQuery = z.output<typeof SearchUISystemsQuerySchema>;

export const CompareUISystemsQuerySchema = z.object({
  systems: z.array(z.string()).min(2).max(8)
});
export type CompareUISystemsQuery = z.input<typeof CompareUISystemsQuerySchema>;

export const RecommendUISystemsQuerySchema = z.object({
  projectType: z.string().min(1),
  framework: FrameworkSchema.optional().default('react'),
  preferences: z.array(z.string()).optional().default([]),
  noveltyPreference: z.enum(['all', 'prefer-hidden-gems', 'established-only', 'niche-retro']).optional().default('all'),
  limit: z.number().int().min(1).max(10).optional().default(5)
});
export type RecommendUISystemsQuery = z.input<typeof RecommendUISystemsQuerySchema>;
export type ParsedRecommendUISystemsQuery = z.output<typeof RecommendUISystemsQuerySchema>;

export const GetInstallationQuerySchema = z.object({
  id: z.string().min(1),
  framework: FrameworkSchema.optional().default('react')
});
export type GetInstallationQuery = z.input<typeof GetInstallationQuerySchema>;

export const GetComponentGuidanceQuerySchema = z.object({
  id: z.string().min(1),
  component: z.string().min(1)
});
export type GetComponentGuidanceQuery = z.input<typeof GetComponentGuidanceQuerySchema>;
