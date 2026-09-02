import { describe, it, expect } from 'vitest';
import { defaultRegistry } from '../src/registry/index.js';

describe('Recommendation Engine', () => {
  it('recommends Shopify Polaris for e-commerce project', () => {
    const recs = defaultRegistry.recommend({
      projectType: 'ecommerce-admin',
      framework: 'react'
    });
    expect(recs.recommendations.length).toBeGreaterThan(0);
    const topId = recs.recommendations[0]?.system.id;
    expect(topId).toBe('polaris');
  });

  it('recommends Cloudscape or PatternFly for cloud infrastructure', () => {
    const recs = defaultRegistry.recommend({
      projectType: 'cloud-infrastructure-console',
      framework: 'react',
      preferences: ['dense', 'dark-mode']
    });
    const topIds = recs.recommendations.slice(0, 3).map(r => r.system.id);
    expect(topIds.includes('cloudscape') || topIds.includes('carbon') || topIds.includes('patternfly')).toBe(true);
  });

  it('prioritizes hidden gems when requested', () => {
    const recs = defaultRegistry.recommend({
      projectType: 'saas-dashboard',
      framework: 'react',
      noveltyPreference: 'prefer-hidden-gems',
      preferences: ['less-common', 'dense']
    });
    expect(recs.recommendations.length).toBeGreaterThan(0);
    const top = recs.recommendations[0]!;
    expect(top.noveltyTier === 'hidden-gem' || top.noveltyTier === 'niche-retro').toBe(true);
  });

  it('recommends headless libraries when preference is headless', () => {
    const recs = defaultRegistry.recommend({
      projectType: 'custom-design-system',
      framework: 'react',
      preferences: ['headless', 'unstyled']
    });
    const topIds = recs.recommendations.slice(0, 5).map(r => r.system.id);
    expect(
      topIds.includes('ark-ui') ||
      topIds.includes('ariakit') ||
      topIds.includes('react-aria') ||
      topIds.includes('base-ui') ||
      topIds.includes('radix-primitives') ||
      topIds.includes('headless-ui')
    ).toBe(true);
  });

  it('filters established-only and niche-retro recommendations', () => {
    const established = defaultRegistry.recommend({
      projectType: 'dashboard',
      noveltyPreference: 'established-only',
      limit: 10
    });
    const retro = defaultRegistry.recommend({
      projectType: 'retro-game',
      noveltyPreference: 'niche-retro',
      limit: 10
    });

    expect(established.recommendations.every(item =>
      item.noveltyTier === 'established' || item.noveltyTier === 'mainstream'
    )).toBe(true);
    expect(retro.recommendations.length).toBeGreaterThan(0);
    expect(retro.recommendations.every(item => item.noveltyTier === 'niche-retro')).toBe(true);
  });

  it('excludes restricted-use systems unless explicitly allowed', () => {
    const normal = defaultRegistry.recommend({
      projectType: 'nordic health portal',
      limit: 30
    });
    const authorized = defaultRegistry.recommend({
      projectType: 'nordic health portal',
      preferences: ['allow-restricted'],
      limit: 30
    });

    expect(normal.recommendations.some(item => item.system.id === 'nord')).toBe(false);
    expect(authorized.recommendations.some(item => item.system.id === 'nord')).toBe(true);
  });
});
