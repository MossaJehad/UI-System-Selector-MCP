import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createServer } from './index.js';
import { logger } from '../utils/logger.js';

export async function runServer(): Promise<void> {
  try {
    const server = createServer();
    const transport = new StdioServerTransport();

    process.on('SIGINT', async () => {
      logger.info('Shutting down UI System Selector MCP server...');
      await server.close();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      logger.info('Terminating UI System Selector MCP server...');
      await server.close();
      process.exit(0);
    });

    await server.connect(transport);
    logger.info('UI System Selector MCP server running on stdio');
  } catch (error) {
    logger.error('Fatal error starting UI System Selector MCP server:', error);
    process.exit(1);
  }
}
