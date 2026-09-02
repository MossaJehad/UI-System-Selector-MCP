// Registry
export { UISystemRegistry, defaultRegistry, ALL_UI_SYSTEMS, UI_SYSTEMS_MAP } from './registry/index.js';
export { searchUISystems } from './registry/search.js';
export { recommendUISystems } from './registry/recommend.js';

// Schemas & Types
export * from './schemas/uiSystem.js';
export * from './schemas/registry.js';
export * from './schemas/selection.js';

// Selection Store
export { SelectionStore, defaultSelectionStore } from './config/selectionStore.js';
export * from './config/constants.js';

// Server
export { createServer } from './server/index.js';
export { runServer } from './server/start.js';

// CLI
export { createCli } from './cli/index.js';

// Utilities
export { formatSelectionRules, formatComponentGuidance } from './utils/guidance.js';
export { buildComparison } from './utils/comparison.js';
export { formatSystemDetailMarkdown, formatSystemListMarkdown } from './utils/formatting.js';
export { logger } from './utils/logger.js';
export { supportsTargetFramework, resolveInstallation } from './utils/framework.js';
