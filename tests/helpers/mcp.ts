import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { SelectionStore } from '../../src/config/selectionStore.js';
import { defaultRegistry } from '../../src/registry/index.js';
import { createServer } from '../../src/server/index.js';

export async function createTestClient(selectionStore = new SelectionStore()): Promise<{
  client: Client;
  close: () => Promise<void>;
}> {
  const server = createServer({ registry: defaultRegistry, selectionStore });
  const client = new Client({ name: 'ui-system-selector-tests', version: '1.0.0' });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();

  await server.connect(serverTransport);
  await client.connect(clientTransport);

  return {
    client,
    close: async () => {
      await client.close();
      await server.close();
    }
  };
}
