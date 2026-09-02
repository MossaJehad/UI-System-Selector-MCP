#!/usr/bin/env node

import { runServer } from '../dist/server/start.js';

runServer().catch(err => {
  console.error('[ui-systems:fatal]', err);
  process.exit(1);
});
