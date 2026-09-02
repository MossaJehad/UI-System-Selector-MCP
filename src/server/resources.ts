import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { UISystemRegistry } from '../registry/index.js';
import { SelectionStore } from '../config/selectionStore.js';
import { formatSelectionRules } from '../utils/guidance.js';

export function registerResources(
  server: McpServer,
  registry: UISystemRegistry,
  selectionStore: SelectionStore
): void {
  // 1. Catalog resource
  server.resource(
    'catalog',
    'ui-systems://catalog',
    async (uri) => {
      const all = registry.getAll();
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
            text: JSON.stringify(
              {
                count: all.length,
                systems: all.map(s => ({
                  id: s.id,
                  name: s.name,
                  organization: s.organization,
                  category: s.category,
                  noveltyLevel: s.noveltyLevel,
                  frameworks: s.frameworks,
                  stylingApproach: s.stylingApproach,
                  density: s.density,
                  docsUrl: s.docsUrl,
                  tags: s.tags
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

  // 2. Selected UI system resource
  server.resource(
    'selected',
    'ui-systems://selected',
    async (uri) => {
      const selection = selectionStore.getSelection();
      if (!selection) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'application/json',
              text: JSON.stringify(
                {
                  selected: false,
                  message: 'No UI system is currently selected.'
                },
                null,
                2
              )
            }
          ]
        };
      }

      const sys = registry.getById(selection.selectedSystem);
      const rules = sys ? formatSelectionRules(sys, selection) : undefined;

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
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

  // 3. Categories resource
  server.resource(
    'categories',
    'ui-systems://categories',
    async (uri) => {
      const categories = registry.getCategories();
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
            text: JSON.stringify(categories, null, 2)
          }
        ]
      };
    }
  );

  // 4. Tags resource
  server.resource(
    'tags',
    'ui-systems://tags',
    async (uri) => {
      const tags = registry.getTags();
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
            text: JSON.stringify(tags, null, 2)
          }
        ]
      };
    }
  );

  // 5. Dynamic per-system resource template
  server.resource(
    'system-detail',
    new ResourceTemplate('ui-systems://systems/{id}', { list: undefined }),
    async (uri, params) => {
      const id = typeof params.id === 'string' ? params.id : '';
      const sys = registry.getById(id);

      if (!sys) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'application/json',
              text: JSON.stringify({ error: `System "${id}" not found.` }, null, 2)
            }
          ]
        };
      }

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'application/json',
            text: JSON.stringify(sys, null, 2)
          }
        ]
      };
    }
  );
}
