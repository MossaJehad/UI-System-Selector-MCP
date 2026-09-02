import { describe, it, expect } from 'vitest';
import { SelectionStore } from '../src/config/selectionStore.js';
import { createTestClient } from './helpers/mcp.js';

describe('MCP Resources & Prompts', () => {
  it('lists and reads all static resources and dynamic templates through MCP', async () => {
    const store = new SelectionStore();
    const connection = await createTestClient(store);
    try {
      const resources = await connection.client.listResources();
      const templates = await connection.client.listResourceTemplates();
      const prompts = await connection.client.listPrompts();
      expect(resources.resources).toHaveLength(4);
      expect(templates.resourceTemplates).toHaveLength(1);
      expect(prompts.prompts).toHaveLength(2);

      // Read catalog
      const catalog = await connection.client.readResource({ uri: 'ui-systems://catalog' });
      expect((catalog.contents[0] as { text: string }).text).toContain('GitHub Primer');
      expect((catalog.contents[0] as { text: string }).text).toContain('IBM Carbon');

      // Read categories
      const categories = await connection.client.readResource({ uri: 'ui-systems://categories' });
      expect((categories.contents[0] as { text: string }).text).toContain('company-design-system');

      // Read tags
      const tags = await connection.client.readResource({ uri: 'ui-systems://tags' });
      expect((tags.contents[0] as { text: string }).text).toContain('developer-tool');

      // Read selected (empty initially)
      const selectedEmpty = await connection.client.readResource({ uri: 'ui-systems://selected' });
      expect((selectedEmpty.contents[0] as { text: string }).text).toContain('"selected": false');

      // Select Primer and read selected again
      store.setSelection('primer', 'react');
      const selectedActive = await connection.client.readResource({ uri: 'ui-systems://selected' });
      expect((selectedActive.contents[0] as { text: string }).text).toContain('"selected": true');
      expect((selectedActive.contents[0] as { text: string }).text).toContain('GitHub Primer');

      // Read dynamic system resource template (valid)
      const dynamicValid = await connection.client.readResource({ uri: 'ui-systems://systems/primer' });
      expect((dynamicValid.contents[0] as { text: string }).text).toContain('GitHub Primer');

      // Read dynamic system resource template (unknown)
      const dynamicUnknown = await connection.client.readResource({ uri: 'ui-systems://systems/unknown-id' });
      expect((dynamicUnknown.contents[0] as { text: string }).text).toContain('not found');
    } finally {
      await connection.close();
    }
  });

  it('generates build-with-selected-ui-system prompt with no selection, strict selection, advisory selection, and unknown selection', async () => {
    const store = new SelectionStore();
    const connection = await createTestClient(store);
    try {
      // 1. No selection
      const noSelectPrompt = await connection.client.getPrompt({
        name: 'build-with-selected-ui-system',
        arguments: { taskDescription: 'Create settings panel' }
      });
      const noSelectText = (noSelectPrompt.messages[0]?.content as { text: string }).text;
      expect(noSelectText).toContain('No UI system has been selected yet');
      expect(noSelectText).toContain('do NOT default to shadcn/ui or MUI');

      // 2. Strict selection
      store.setSelection('primer', 'react', { strictMode: true });
      const strictPrompt = await connection.client.getPrompt({
        name: 'build-with-selected-ui-system',
        arguments: { taskDescription: 'Create repository header' }
      });
      const strictText = (strictPrompt.messages[0]?.content as { text: string }).text;
      expect(strictText).toContain('UI SYSTEM LOCKED TO "GITHUB PRIMER"');
      expect(strictText).toContain('Do NOT import or generate components from unselected libraries');

      // 3. Advisory selection
      store.setSelection('primer', 'react', { strictMode: false });
      const advisoryPrompt = await connection.client.getPrompt({
        name: 'build-with-selected-ui-system',
        arguments: { taskDescription: 'Create repository header' }
      });
      const advisoryText = (advisoryPrompt.messages[0]?.content as { text: string }).text;
      expect(advisoryText).toContain('Selection Mode: Advisory');
      expect(advisoryText).toContain('Prefer the selected system');

      // 4. Unknown selection ID
      store.setSelection('nonexistent-id', 'react', { strictMode: true });
      const unknownPrompt = await connection.client.getPrompt({
        name: 'build-with-selected-ui-system',
        arguments: { taskDescription: 'Create something' }
      });
      const unknownText = (unknownPrompt.messages[0]?.content as { text: string }).text;
      expect(unknownText).toContain('Selected system ID "nonexistent-id" is unknown');
    } finally {
      await connection.close();
    }
  });

  it('generates evaluate-ui-system-fit prompt correctly', async () => {
    const store = new SelectionStore();
    const connection = await createTestClient(store);
    try {
      const evalPrompt = await connection.client.getPrompt({
        name: 'evaluate-ui-system-fit',
        arguments: { projectRequirements: 'A high-density analytics dashboard' }
      });
      expect(evalPrompt.messages).toHaveLength(1);
      const text = (evalPrompt.messages[0]?.content as { text: string }).text;
      expect(text).toContain('recommend_ui_systems');
      expect(text).toContain('compare_ui_systems');
      expect(text).toContain('A high-density analytics dashboard');
    } finally {
      await connection.close();
    }
  });
});
