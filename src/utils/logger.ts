/**
 * Safe logging utility for MCP stdio servers and CLI.
 * CRITICAL: In MCP stdio mode, stdout is strictly reserved for JSON-RPC messages.
 * Any log output MUST be written to stderr.
 */
export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.error(`[ui-systems:info] ${message}`, ...args);
  },
  warn: (message: string, ...args: unknown[]) => {
    console.error(`[ui-systems:warn] ${message}`, ...args);
  },
  error: (message: string, ...args: unknown[]) => {
    console.error(`[ui-systems:error] ${message}`, ...args);
  },
  debug: (message: string, ...args: unknown[]) => {
    if (process.env['DEBUG'] === '1' || process.env['DEBUG'] === 'true') {
      console.error(`[ui-systems:debug] ${message}`, ...args);
    }
  }
};
