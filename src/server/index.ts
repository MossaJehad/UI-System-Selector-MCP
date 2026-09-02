import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { defaultRegistry, UISystemRegistry } from '../registry/index.js';
import { defaultSelectionStore, SelectionStore } from '../config/selectionStore.js';
import { registerTools } from './tools.js';
import { registerResources } from './resources.js';
import { registerPrompts } from './prompts.js';

export interface CreateServerOptions {
  registry?: UISystemRegistry;
  selectionStore?: SelectionStore;
  name?: string;
  version?: string;
}

export function createServer(options: CreateServerOptions = {}): McpServer {
  const registry = options.registry || defaultRegistry;
  const selectionStore = options.selectionStore || defaultSelectionStore;
  const name = options.name || 'ui-system-selector';
  const version = options.version || '1.0.0';

  const server = new McpServer({
    name,
    version
  });

  registerTools(server, registry, selectionStore);
  registerResources(server, registry, selectionStore);
  registerPrompts(server, registry, selectionStore);

  return server;
}
