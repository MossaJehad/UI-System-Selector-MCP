import { describe, it, expect } from 'vitest';
import { createServer } from '../src/server/index.js';
import { defaultRegistry } from '../src/registry/index.js';
import { SelectionStore } from '../src/config/selectionStore.js';
import { formatSelectionRules, formatComponentGuidance } from '../src/utils/guidance.js';
import { createTestClient } from './helpers/mcp.js';

describe('MCP Server Integration & Tools', () => {
  it('creates an MCP server instance with registered tools and resources', () => {
    const store = new SelectionStore();
    const server = createServer({ registry: defaultRegistry, selectionStore: store });
    expect(server).toBeDefined();
  });

  it('negotiates MCP and executes tools through a real transport', async () => {
    const connection = await createTestClient(new SelectionStore());
    try {
      const listed = await connection.client.listTools();
      expect(listed.tools).toHaveLength(10);
      expect(listed.tools.map(tool => tool.name)).toContain('recommend_ui_systems');

      const calls = [
        { name: 'list_ui_systems', arguments: { framework: 'react', limit: 2 } },
        { name: 'search_ui_systems', arguments: { query: 'developer tool', limit: 2 } },
        { name: 'get_ui_system', arguments: { id: 'primer' } },
        { name: 'compare_ui_systems', arguments: { systems: ['primer', 'carbon'] } },
        { name: 'get_installation', arguments: { id: 'primer', framework: 'react' } },
        { name: 'get_component_guidance', arguments: { id: 'primer', component: 'button' } },
        { name: 'recommend_ui_systems', arguments: { projectType: 'developer-tool', limit: 2 } },
        { name: 'select_ui_system', arguments: { id: 'primer', framework: 'react' } },
        { name: 'get_selected_ui_system', arguments: {} },
        { name: 'clear_selected_ui_system', arguments: {} }
      ];

      const results = [];
      for (const call of calls) {
        results.push(await connection.client.callTool(call));
      }

      expect(results.every(result => result.isError !== true)).toBe(true);
      expect(JSON.stringify(results)).toContain('primer');
    } finally {
      await connection.close();
    }
  });

  it('rejects unsupported framework selections and persistence failures', async () => {
    const connection = await createTestClient(new SelectionStore());
    try {
      const unsupported = await connection.client.callTool({
        name: 'select_ui_system',
        arguments: { id: 'primer', framework: 'vue' }
      });
      expect(unsupported.isError).toBe(true);
      expect(JSON.stringify(unsupported.content)).toContain('does not declare direct support');

      const failedWrite = await connection.client.callTool({
        name: 'select_ui_system',
        arguments: {
          id: 'primer',
          framework: 'react',
          persist: true,
          projectPath: '/path/that/does/not/exist'
        }
      });
      expect(failedWrite.isError).toBe(true);
      expect(JSON.stringify(failedWrite.content)).toContain('Failed to persist');
    } finally {
      await connection.close();
    }
  });

  it('requires explicit acknowledgement before selecting a restricted-use system', async () => {
    const connection = await createTestClient(new SelectionStore());
    try {
      const rejected = await connection.client.callTool({
        name: 'select_ui_system',
        arguments: { id: 'nord', framework: 'react' }
      });
      expect(rejected.isError).toBe(true);
      expect(JSON.stringify(rejected.content)).toContain('Usage Restriction');

      const accepted = await connection.client.callTool({
        name: 'select_ui_system',
        arguments: {
          id: 'nord',
          framework: 'react',
          acknowledgeUsageRestrictions: true
        }
      });
      expect(accepted.isError).not.toBe(true);
    } finally {
      await connection.close();
    }
  });

  it('generates strict AI agent directive when Primer is selected', () => {
    const store = new SelectionStore();
    const primer = defaultRegistry.getById('primer')!;
    const selection = store.setSelection('primer', 'react');

    const rules = formatSelectionRules(primer, selection);
    expect(rules).toContain('UI SYSTEM LOCKED TO "GITHUB PRIMER"');
    expect(rules).toContain('DO NOT introduce or suggest alternative UI libraries');
    expect(rules).toContain('@primer/react');
    expect(rules).toContain('@primer/octicons-react');
  });

  it('honors advisory mode and persisted custom rules', () => {
    const store = new SelectionStore();
    const primer = defaultRegistry.getById('primer')!;
    const selection = store.setSelection('primer', 'react', { strictMode: false });
    selection.customRules = ['Use compact page spacing.'];

    const rules = formatSelectionRules(primer, selection);
    expect(rules).toContain('Selection Mode: Advisory');
    expect(rules).not.toContain('DO NOT introduce or suggest alternative UI libraries');
    expect(rules).toContain('Use compact page spacing.');
  });

  it('formats component guidance for specific components', () => {
    const primer = defaultRegistry.getById('primer')!;
    const buttonGuidance = formatComponentGuidance(primer, 'button');
    expect(buttonGuidance).toContain('Component Guidance: GitHub Primer -> Button');
    expect(buttonGuidance).toContain('@primer/react');
    expect(buttonGuidance).toContain('variant="primary"');

    const fallbackGuidance = formatComponentGuidance(primer, 'unknown-widget');
    expect(fallbackGuidance).toContain('Component Guidance: GitHub Primer -> unknown-widget');
    expect(fallbackGuidance).toContain('https://primer.style');
  });

  it('handles bad tool inputs with structured error responses', async () => {
    const connection = await createTestClient(new SelectionStore());
    try {
      // 1. get_ui_system with unknown ID
      const unknownSystem = await connection.client.callTool({
        name: 'get_ui_system',
        arguments: { id: 'definitely-not-real' }
      });
      expect(unknownSystem.isError).toBe(true);
      expect(JSON.stringify(unknownSystem.content)).toContain('not found in registry');

      // 2. compare_ui_systems with unknown or duplicate IDs
      const unknownCompare = await connection.client.callTool({
        name: 'compare_ui_systems',
        arguments: { systems: ['primer', 'not-a-real-system'] }
      });
      expect(unknownCompare.isError).toBe(true);
      expect(JSON.stringify(unknownCompare.content)).toContain('Unknown UI system ID');

      const dupCompare = await connection.client.callTool({
        name: 'compare_ui_systems',
        arguments: { systems: ['primer', 'primer'] }
      });
      expect(dupCompare.isError).toBe(true);
      expect(JSON.stringify(dupCompare.content)).toContain('Duplicate UI system ID');

      // 3. get_installation with unknown ID and unsupported framework
      const unknownInstall = await connection.client.callTool({
        name: 'get_installation',
        arguments: { id: 'unknown-sys', framework: 'react' }
      });
      expect(unknownInstall.isError).toBe(true);
      expect(JSON.stringify(unknownInstall.content)).toContain('not found');

      const unsuppInstall = await connection.client.callTool({
        name: 'get_installation',
        arguments: { id: 'primer', framework: 'vue' }
      });
      expect(unsuppInstall.isError).toBe(true);
      expect(JSON.stringify(unsuppInstall.content)).toContain('does not declare direct support');

      // 4. get_component_guidance with unknown ID
      const unknownComp = await connection.client.callTool({
        name: 'get_component_guidance',
        arguments: { id: 'unknown-sys', component: 'button' }
      });
      expect(unknownComp.isError).toBe(true);
      expect(JSON.stringify(unknownComp.content)).toContain('not found');

      // 5. select_ui_system with unknown ID
      const unknownSelect = await connection.client.callTool({
        name: 'select_ui_system',
        arguments: { id: 'unknown-sys', framework: 'react' }
      });
      expect(unknownSelect.isError).toBe(true);
      expect(JSON.stringify(unknownSelect.content)).toContain('Cannot select unknown UI system');
    } finally {
      await connection.close();
    }
  });
});
