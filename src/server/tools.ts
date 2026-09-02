import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { UISystemRegistry } from '../registry/index.js';
import { SelectionStore } from '../config/selectionStore.js';
import { SelectionState } from '../schemas/selection.js';
import {
  FrameworkSchema,
  UISystemCategorySchema,
  StylingApproachSchema,
  OpinionatedLevelSchema,
  NoveltyLevelSchema
} from '../schemas/uiSystem.js';
import {
  formatSelectionRules,
  formatComponentGuidance
} from '../utils/guidance.js';
import {
  formatSystemDetailMarkdown,
  formatSystemListMarkdown
} from '../utils/formatting.js';
import { resolveInstallation } from '../utils/framework.js';

export function registerTools(
  server: McpServer,
  registry: UISystemRegistry,
  selectionStore: SelectionStore
): void {
  // 1. list_ui_systems
  server.tool(
    'list_ui_systems',
    'List available UI design systems and component libraries with optional metadata filters (framework, category, organization, tags, styling, accessibility, novelty).',
    {
      framework: FrameworkSchema.optional().describe('Filter by supported framework (e.g. react, vue, svelte, solid, web-components, css-only)'),
      category: UISystemCategorySchema.optional().describe('Filter by category (e.g. company-design-system, enterprise, developer-tool, headless, styled, retro, etc.)'),
      organization: z.string().optional().describe('Filter by organization (e.g. GitHub, AWS, IBM, Shopify, Adobe, Microsoft)'),
      tags: z.array(z.string()).optional().describe('Filter by tags (e.g. ["dense", "dark-mode", "high-accessibility"])'),
      stylingApproach: StylingApproachSchema.optional().describe('Filter by styling approach (e.g. utility-classes, css-in-js, design-tokens-css, unstyled)'),
      opinionatedLevel: OpinionatedLevelSchema.optional().describe('Filter by opinionated level'),
      darkMode: z.boolean().optional().describe('Filter by dark mode support'),
      rtlSupport: z.boolean().optional().describe('Filter by RTL (right-to-left) support'),
      noveltyLevel: NoveltyLevelSchema.optional().describe('Filter by novelty level (mainstream, established, hidden-gem, niche-retro)'),
      limit: z.number().int().min(1).max(100).optional().default(50).describe('Maximum number of systems to return')
    },
    async (args) => {
      const { systems, totalCount } = registry.find(args);
      const markdown = formatSystemListMarkdown(systems, totalCount);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                totalCount,
                returnedCount: systems.length,
                systems: systems.map(s => ({
                  id: s.id,
                  name: s.name,
                  organization: s.organization,
                  category: s.category,
                  noveltyLevel: s.noveltyLevel,
                  frameworks: s.frameworks,
                  stylingApproach: s.stylingApproach,
                  density: s.density,
                  docsUrl: s.docsUrl,
                  usageRestrictions: s.usageRestrictions,
                  tags: s.tags,
                  bestFor: s.bestFor
                })),
                markdownSummary: markdown
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 2. search_ui_systems
  server.tool(
    'search_ui_systems',
    'Search UI systems using natural language queries, keywords, tags, or concepts (e.g. "developer tool dashboard", "GitHub like design systems", "unusual retro look", "accessible React components", "systems that don\'t look like shadcn").',
    {
      query: z.string().min(1).describe('Search query string'),
      framework: FrameworkSchema.optional().describe('Optional framework filter'),
      category: UISystemCategorySchema.optional().describe('Optional category filter'),
      noveltyPreference: z.enum(['all', 'prefer-hidden-gems', 'established-only', 'niche-retro']).optional().default('all').describe('Discovery preference (use prefer-hidden-gems or niche-retro to find less obvious alternatives)'),
      limit: z.number().int().min(1).max(50).optional().default(10).describe('Max results to return')
    },
    async (args) => {
      const searchRes = registry.search(args);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                query: searchRes.query,
                totalMatches: searchRes.totalMatches,
                results: searchRes.results.map(r => ({
                  id: r.system.id,
                  name: r.system.name,
                  organization: r.system.organization,
                  category: r.system.category,
                  noveltyLevel: r.system.noveltyLevel,
                  score: r.score,
                  matchReasons: r.matchReasons,
                  frameworks: r.system.frameworks,
                  stylingApproach: r.system.stylingApproach,
                  description: r.system.description,
                  docsUrl: r.system.docsUrl,
                  usageRestrictions: r.system.usageRestrictions
                }))
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 3. get_ui_system
  server.tool(
    'get_ui_system',
    'Get complete detailed metadata, design philosophy, accessibility details, component guidance, and AI rules for a specific UI system ID.',
    {
      id: z.string().min(1).describe('The unique ID of the UI system (e.g. primer, carbon, cloudscape, polaris, react-spectrum, eui, paste, gestalt, base-web, fluent-ui, mantine, heroui, radix-themes, ark-ui, 98-css, etc.)')
    },
    async (args) => {
      const sys = registry.getById(args.id);
      if (!sys) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Error: UI System "${args.id}" not found in registry. Call "list_ui_systems" or "search_ui_systems" to see available options.`
            }
          ]
        };
      }

      const markdown = formatSystemDetailMarkdown(sys);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                system: sys,
                markdown
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 4. compare_ui_systems
  server.tool(
    'compare_ui_systems',
    'Compare 2 to 8 UI systems side-by-side across styling, accessibility, density, opinionated level, strengths, weaknesses, and target domains.',
    {
      systems: z.array(z.string()).min(2).max(8).describe('Array of UI system IDs to compare (e.g. ["primer", "carbon", "cloudscape"])')
    },
    async (args) => {
      try {
        const comp = registry.compare(args);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  comparison: comp.systems,
                  markdownSummary: comp.summary
                },
                null,
                2
              )
            }
          ]
        };
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Comparison Error: ${msg}`
            }
          ]
        };
      }
    }
  );

  // 5. select_ui_system
  server.tool(
    'select_ui_system',
    'Select the UI design system to be used by the AI coding agent for this project/session. Strict mode locks the selection and prohibits unrequested library substitutions.',
    {
      id: z.string().min(1).describe('The unique ID of the UI system to select (e.g. "primer", "carbon", "cloudscape")'),
      framework: FrameworkSchema.optional().default('react').describe('Target framework (default: react)'),
      persist: z.boolean().optional().default(false).describe('If true, writes the selection preference to .ui-system.json in the project root'),
      projectPath: z.string().optional().describe('Optional project root path for persistence (defaults to current working directory)'),
      strictMode: z.boolean().optional().default(true).describe('If true, instructs the AI that substituting another library is strictly prohibited'),
      acknowledgeUsageRestrictions: z.boolean().optional().default(false).describe('Must be true to select a system whose license or terms restrict general use')
    },
    async (args) => {
      const sys = registry.getById(args.id);
      if (!sys) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Error: Cannot select unknown UI system "${args.id}". Please choose a valid system from the registry.`
            }
          ]
        };
      }

      if (!sys.frameworks.includes(args.framework)) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Error: ${sys.name} does not declare direct support for "${args.framework}". Supported integration targets: ${sys.frameworks.join(', ')}.`
            }
          ]
        };
      }

      if (sys.usageRestrictions && !args.acknowledgeUsageRestrictions) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Usage Restriction: ${sys.usageRestrictions} Re-run only after confirming authorization, with acknowledgeUsageRestrictions: true.`
            }
          ]
        };
      }

      let selection: SelectionState;
      try {
        selection = selectionStore.setSelection(sys.id, args.framework, {
          persist: args.persist,
          projectPath: args.projectPath,
          strictMode: args.strictMode
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          isError: true,
          content: [{ type: 'text', text: `Selection Error: ${message}` }]
        };
      }

      const rules = formatSelectionRules(sys, selection);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                status: 'selected',
                message: args.strictMode
                  ? `Successfully locked UI system to "${sys.name}" (${sys.organization}).`
                  : `Successfully selected "${sys.name}" (${sys.organization}) in advisory mode.`,
                selection,
                agentDirective: rules
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 6. get_selected_ui_system
  server.tool(
    'get_selected_ui_system',
    'Get the currently selected UI system for the active session/project, along with the mandatory implementation rules and constraints for the AI agent.',
    {
      projectPath: z.string().optional().describe('Optional project root path to inspect')
    },
    async (args) => {
      const selection = selectionStore.getSelection(args.projectPath);
      if (!selection) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  selected: false,
                  message: 'No UI system has been explicitly selected yet. The AI agent should ask the user or search the catalog (using list_ui_systems / search_ui_systems) before choosing a component library.'
                },
                null,
                2
              )
            }
          ]
        };
      }

      const sys = registry.getById(selection.selectedSystem);
      if (!sys) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  selected: true,
                  selection,
                  warning: `Selected system ID "${selection.selectedSystem}" is not in the active registry.`
                },
                null,
                2
              )
            }
          ]
        };
      }

      const rules = formatSelectionRules(sys, selection);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                selected: true,
                selection,
                system: sys,
                agentDirective: rules
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 7. clear_selected_ui_system
  server.tool(
    'clear_selected_ui_system',
    'Clear the currently active UI system selection and optionally remove the .ui-system.json configuration file.',
    {
      removePersisted: z.boolean().optional().default(false).describe('If true, also removes .ui-system.json if present in the project directory'),
      projectPath: z.string().optional().describe('Optional project path')
    },
    async (args) => {
      let cleared: boolean;
      try {
        cleared = selectionStore.clearSelection({
          removePersisted: args.removePersisted,
          projectPath: args.projectPath
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return {
          isError: true,
          content: [{ type: 'text', text: `Clear Selection Error: ${message}` }]
        };
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                cleared,
                message: cleared
                  ? args.removePersisted
                    ? 'UI system selection and persisted configuration have been successfully cleared.'
                    : 'Active UI system selection cleared for this server session. Any persisted configuration remains available to future server sessions.'
                  : 'No active selection was found to clear.'
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 8. get_installation
  server.tool(
    'get_installation',
    'Get official package names, installation commands, peer dependencies, and setup instructions for a UI system.',
    {
      id: z.string().min(1).describe('The UI system ID (e.g. primer, carbon, cloudscape)'),
      framework: FrameworkSchema.optional().default('react').describe('Target framework (default: react)')
    },
    async (args) => {
      const sys = registry.getById(args.id);
      if (!sys) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Error: UI System "${args.id}" not found.`
            }
          ]
        };
      }

      if (!sys.frameworks.includes(args.framework)) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Error: ${sys.name} does not declare direct support for "${args.framework}". Supported integration targets: ${sys.frameworks.join(', ')}.`
            }
          ]
        };
      }

      const resolution = resolveInstallation(sys, args.framework);
      const inst = resolution?.guidance;

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                systemId: sys.id,
                systemName: sys.name,
                framework: args.framework,
                integrationFramework: resolution?.integrationFramework || args.framework,
                hasCuratedGuidance: Boolean(inst),
                packages: inst?.packages || [],
                command: inst?.command || null,
                peerDependencies: inst?.peerDependencies || [],
                setupInstructions: inst?.setupInstructions || 'No curated installation instructions are available for this target. Consult the official documentation instead of guessing package names.',
                notes: inst?.notes,
                docsUrl: sys.docsUrl
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 9. get_component_guidance
  server.tool(
    'get_component_guidance',
    'Get guidance on canonical component names, import statements, props conventions, accessibility notes, and official documentation links for a specific UI element (e.g. Button, Dialog, Modal, Table, SearchBar, Lozenge).',
    {
      id: z.string().min(1).describe('UI system ID (e.g. primer, carbon, cloudscape)'),
      component: z.string().min(1).describe('The component name or category (e.g. button, dialog, modal, table, card, navigation)')
    },
    async (args) => {
      const sys = registry.getById(args.id);
      if (!sys) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Error: UI System "${args.id}" not found.`
            }
          ]
        };
      }

      const guidance = formatComponentGuidance(sys, args.component);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                systemId: sys.id,
                systemName: sys.name,
                requestedComponent: args.component,
                guidanceMarkdown: guidance
              },
              null,
              2
            )
          }
        ]
      };
    }
  );

  // 10. recommend_ui_systems
  server.tool(
    'recommend_ui_systems',
    'Recommend 3-7 suitable UI design systems based on project type, framework, and developer preferences, with discovery options to highlight hidden gems rather than defaulting to mainstream choices.',
    {
      projectType: z.string().min(1).describe('Type of project (e.g. "developer-tool", "saas-dashboard", "e-commerce", "cloud-console", "creative-tool", "healthcare", "retro-game", "fintech")'),
      framework: FrameworkSchema.optional().default('react').describe('Target frontend framework'),
      preferences: z.array(z.string()).optional().default([]).describe('Preferences such as ["dense", "dark-mode", "less-common", "high-accessibility", "headless", "styled"]. Use "allow-restricted" only when authorized to consider restricted-use systems.'),
      noveltyPreference: z.enum(['all', 'prefer-hidden-gems', 'established-only', 'niche-retro']).optional().default('all').describe('Discovery filter: use "prefer-hidden-gems" to discover lesser-known production systems instead of mainstream defaults'),
      limit: z.number().int().min(1).max(10).optional().default(5).describe('Number of recommendations to return')
    },
    async (args) => {
      const recs = registry.recommend(args);

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                projectType: recs.projectType,
                framework: recs.framework,
                recommendations: recs.recommendations.map(r => ({
                  id: r.system.id,
                  name: r.system.name,
                  organization: r.system.organization,
                  category: r.system.category,
                  noveltyTier: r.noveltyTier,
                  score: r.score,
                  fitSummary: r.fitSummary,
                  keyStrengthsForProject: r.keyStrengthsForProject,
                  potentialTradeoffs: r.potentialTradeoffs,
                  docsUrl: r.system.docsUrl
                }))
              },
              null,
              2
            )
          }
        ]
      };
    }
  );
}
