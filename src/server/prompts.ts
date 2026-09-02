import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { UISystemRegistry } from '../registry/index.js';
import { SelectionStore } from '../config/selectionStore.js';
import { formatSelectionRules } from '../utils/guidance.js';

export function registerPrompts(
  server: McpServer,
  registry: UISystemRegistry,
  selectionStore: SelectionStore
): void {
  // 1. build-with-selected-ui-system
  server.prompt(
    'build-with-selected-ui-system',
    {
      taskDescription: z.string().min(1).describe('Description of the UI feature, screen, or component to implement')
    },
    (args) => {
      const selection = selectionStore.getSelection();
      if (!selection) {
        return {
          messages: [
            {
              role: 'user',
              content: {
                type: 'text',
                text: `
I need you to implement the following UI feature:
"${args.taskDescription}"

IMPORTANT: No UI system has been selected yet for this project.
Before writing code or introducing a random component library (do NOT default to shadcn/ui or MUI without checking):
1. Use the "list_ui_systems" or "search_ui_systems" MCP tools to find suitable design systems for this project.
2. Ask the user or explicitly select a system using "select_ui_system".
3. Once selected, implement the UI strictly according to that system's official components and guidelines.
`.trim()
              }
            }
          ]
        };
      }

      const sys = registry.getById(selection.selectedSystem);
      if (!sys) {
        return {
          messages: [
            {
              role: 'user',
              content: {
                type: 'text',
                text: `Task: ${args.taskDescription}\nWarning: Selected system ID "${selection.selectedSystem}" is unknown.`
              }
            }
          ]
        };
      }

      const directives = formatSelectionRules(sys, selection);
      const substitutionRequirement = selection.strictMode
        ? `Do NOT import or generate components from unselected libraries (${sys.aiInstructions.forbiddenSubstitutions.join(', ')}).`
        : 'Prefer the selected system, and obtain explicit user approval before adding another UI library.';

      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `
Please implement the following UI feature:
"${args.taskDescription}"

${directives}

IMPLEMENTATION REQUIREMENTS:
1. Use official ${sys.name} components, primitives, design tokens, and icons.
2. ${substitutionRequirement}
3. Follow the official documentation at ${sys.docsUrl}.
4. Adhere to accessibility and theming conventions outlined above.
`.trim()
            }
          }
        ]
      };
    }
  );

  // 2. evaluate-ui-system-fit
  server.prompt(
    'evaluate-ui-system-fit',
    {
      projectRequirements: z.string().min(1).describe('Description of the project requirements, target audience, and UI needs')
    },
    (args) => {
      const all = registry.getAll();
      const categories = registry.getCategories().map(c => c.category).slice(0, 8).join(', ');

      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `
I am evaluating UI design systems for a new project with the following requirements:
"${args.projectRequirements}"

Available system catalog size: ${all.length} design systems across categories (${categories}).

Please:
1. Use the "recommend_ui_systems" or "search_ui_systems" MCP tools to discover top candidates.
2. Use "compare_ui_systems" to analyze the top 3-4 options side-by-side.
3. Present an objective comparison of strengths, tradeoffs, and architectural fit.
4. Do NOT simply default to the most mainstream library (shadcn/MUI); highlight company-backed and domain-specialized design systems (e.g. Primer, Carbon, Cloudscape, Polaris, Spectrum, EUI, Paste, Mantine) where they provide a superior fit.
`.trim()
            }
          }
        ]
      };
    }
  );
}
