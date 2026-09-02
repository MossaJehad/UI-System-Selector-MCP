import { describe, it, expect } from 'vitest';
import { defaultRegistry } from '../src/registry/index.js';

describe('Search Engine', () => {
  it('finds systems by exact ID and name matches', () => {
    const res = defaultRegistry.search({ query: 'primer' });
    expect(res.results.length).toBeGreaterThan(0);
    expect(res.results[0]?.system.id).toBe('primer');
    expect(res.results[0]?.score).toBeGreaterThan(100);
  });

  it('ranks developer tool systems high for developer tool query', () => {
    const res = defaultRegistry.search({ query: 'UI libraries suitable for a developer tool' });
    expect(res.results.length).toBeGreaterThan(0);
    const topIds = res.results.slice(0, 10).map(r => r.system.id);
    expect(
      topIds.includes('primer') ||
      topIds.includes('cloudscape') ||
      topIds.includes('patternfly') ||
      topIds.includes('eui') ||
      topIds.includes('pajamas') ||
      topIds.includes('ring-ui') ||
      topIds.includes('evergreen')
    ).toBe(true);
  });

  it('ranks retro systems high for retro query', () => {
    const res = defaultRegistry.search({ query: 'unusual 8-bit retro game style' });
    expect(res.results.length).toBeGreaterThan(0);
    const topIds = res.results.slice(0, 5).map(r => r.system.id);
    expect(topIds.includes('nes-css') || topIds.includes('98-css') || topIds.includes('rpgui') || topIds.includes('react95')).toBe(true);
  });

  it('handles novelty searches asking for alternatives to shadcn', () => {
    const res = defaultRegistry.search({ query: 'something unusual instead of shadcn' });
    expect(res.results.length).toBeGreaterThan(0);
    const topSys = res.results[0]?.system;
    expect(topSys?.noveltyLevel === 'hidden-gem' || topSys?.noveltyLevel === 'niche-retro').toBe(true);
    // Ensure shadcn is not the #1 result
    expect(topSys?.id).not.toBe('shadcn-ui');
  });

  it('respects framework filter during search', () => {
    const res = defaultRegistry.search({ query: 'devops dashboard', framework: 'vue' });
    expect(res.results.every(r => r.system.frameworks.some(f => ['vue', 'web-components', 'css-only', 'html-css', 'framework-agnostic'].includes(f)))).toBe(true);
  });

  it('respects limit argument', () => {
    const res = defaultRegistry.search({ query: 'enterprise', limit: 3 });
    expect(res.results.length).toBeLessThanOrEqual(3);
  });

  it('applies every novelty preference', () => {
    const baseline = defaultRegistry.search({ query: 'dashboard', limit: 10 });
    const hiddenGems = defaultRegistry.search({
      query: 'dashboard',
      noveltyPreference: 'prefer-hidden-gems',
      limit: 10
    });
    const established = defaultRegistry.search({
      query: 'dashboard',
      noveltyPreference: 'established-only',
      limit: 20
    });
    const retro = defaultRegistry.search({
      query: 'retro',
      noveltyPreference: 'niche-retro',
      limit: 20
    });

    expect(hiddenGems.results.map(item => item.system.id)).not.toEqual(
      baseline.results.map(item => item.system.id)
    );
    expect(hiddenGems.results[0]?.system.noveltyLevel).toBe('hidden-gem');
    expect(established.results.every(item =>
      item.system.noveltyLevel === 'established' || item.system.noveltyLevel === 'mainstream'
    )).toBe(true);
    expect(retro.results.length).toBeGreaterThan(0);
    expect(retro.results.every(item => item.system.noveltyLevel === 'niche-retro')).toBe(true);
  });
});
