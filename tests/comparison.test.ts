import { describe, it, expect } from 'vitest';
import { defaultRegistry } from '../src/registry/index.js';

describe('Comparison Utility', () => {
  it('compares Primer, Carbon, and Cloudscape correctly', () => {
    const comp = defaultRegistry.compare({
      systems: ['primer', 'carbon', 'cloudscape']
    });

    expect(comp.systems.length).toBe(3);
    expect(comp.systems[0]?.name).toBe('GitHub Primer');
    expect(comp.systems[1]?.name).toBe('IBM Carbon Design System');
    expect(comp.systems[2]?.name).toBe('AWS Cloudscape Design System');

    expect(comp.markdownMatrix).toContain('GitHub Primer');
    expect(comp.markdownMatrix).toContain('IBM Carbon');
    expect(comp.markdownMatrix).toContain('AWS Cloudscape');
    expect(comp.summary).toContain('Detailed Breakdown');
  });

  it('throws error when no recognized systems are provided', () => {
    expect(() => {
      defaultRegistry.compare({
        systems: ['non-existent-1', 'non-existent-2']
      });
    }).toThrow(/Unknown UI system IDs/);
  });

  it('rejects partial, duplicate, and out-of-range comparisons', () => {
    expect(() => defaultRegistry.compare({ systems: ['primer', 'not-real'] }))
      .toThrow(/Unknown UI system ID/);
    expect(() => defaultRegistry.compare({ systems: ['primer', 'primer'] }))
      .toThrow(/Duplicate UI system ID/);
    expect(() => defaultRegistry.compare({ systems: ['primer'] }))
      .toThrow(/between 2 and 8/);
  });
});
