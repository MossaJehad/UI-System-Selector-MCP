import { describe, it, expect } from 'vitest';
import { createCli } from '../src/cli/index.js';

describe('CLI Command Orchestration', () => {
  it('instantiates the Commander program with all subcommands', () => {
    const program = createCli();
    expect(program.name()).toBe('ui-systems');

    const commandNames = program.commands.map(cmd => cmd.name());
    expect(commandNames).toContain('list');
    expect(commandNames).toContain('search');
    expect(commandNames).toContain('show');
    expect(commandNames).toContain('compare');
    expect(commandNames).toContain('select');
    expect(commandNames).toContain('selected');
    expect(commandNames).toContain('clear');
    expect(commandNames).toContain('recommend');
  });

  it('executes list, search, show, compare, and recommend commands without crashing', () => {
    const program = createCli();
    
    // We can spy on console.log and test execution
    expect(() => program.parse(['node', 'ui-systems', 'list', '--limit', '2'])).not.toThrow();
    expect(() => program.parse(['node', 'ui-systems', 'search', 'developer', '--limit', '2'])).not.toThrow();
    expect(() => program.parse(['node', 'ui-systems', 'show', 'primer', '--component', 'button'])).not.toThrow();
    expect(() => program.parse(['node', 'ui-systems', 'compare', 'primer', 'carbon'])).not.toThrow();
    expect(() => program.parse(['node', 'ui-systems', 'recommend', 'saas', '--limit', '2'])).not.toThrow();
  });
});
