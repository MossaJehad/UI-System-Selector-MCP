import { describe, it, expect } from 'vitest';
import { defaultRegistry, ALL_UI_SYSTEMS } from '../src/registry/index.js';
import { UISystemSchema } from '../src/schemas/uiSystem.js';

describe('UI System Registry', () => {
  it('contains a substantial collection of registered UI systems', () => {
    const all = defaultRegistry.getAll();
    expect(all.length).toBeGreaterThanOrEqual(40);
  });

  it('validates every UI system entry against the Zod schema', () => {
    for (const sys of ALL_UI_SYSTEMS) {
      const result = UISystemSchema.safeParse(sys);
      if (!result.success) {
        console.error(`Validation failed for system "${sys.id}":`, result.error.errors);
      }
      expect(result.success).toBe(true);
    }
  });

  it('retrieves specific systems by ID (case-insensitive)', () => {
    const primer = defaultRegistry.getById('primer');
    expect(primer).toBeDefined();
    expect(primer?.name).toBe('GitHub Primer');
    expect(primer?.organization).toBe('GitHub');

    const carbon = defaultRegistry.getById('CARBON');
    expect(carbon).toBeDefined();
    expect(carbon?.id).toBe('carbon');

    const cloudscape = defaultRegistry.getById('cloudscape');
    expect(cloudscape).toBeDefined();
    expect(cloudscape?.organization).toBe('Amazon Web Services (AWS)');

    const nonExistent = defaultRegistry.getById('unknown-xyz-system');
    expect(nonExistent).toBeUndefined();
  });

  it('filters systems by framework', () => {
    const reactSystems = defaultRegistry.find({ framework: 'react' });
    expect(reactSystems.totalCount).toBeGreaterThan(15);
    expect(reactSystems.systems.every(s => s.frameworks.some(f => ['react', 'web-components', 'css-only', 'html-css', 'framework-agnostic'].includes(f)))).toBe(true);

    const vueSystems = defaultRegistry.find({ framework: 'vue' });
    expect(vueSystems.systems.some(s => s.id === 'pajamas')).toBe(true);
    expect(vueSystems.systems.some(s => s.id === 'ark-ui')).toBe(true);
  });

  it('filters systems by category', () => {
    const companySystems = defaultRegistry.find({ category: 'company-design-system' });
    expect(companySystems.systems.some(s => s.id === 'primer')).toBe(true);
    expect(companySystems.systems.some(s => s.id === 'carbon')).toBe(true);
    expect(companySystems.systems.some(s => s.id === 'cloudscape')).toBe(true);

    const retroSystems = defaultRegistry.find({ category: 'retro' });
    expect(retroSystems.systems.some(s => s.id === '98-css')).toBe(true);
    expect(retroSystems.systems.some(s => s.id === 'nes-css')).toBe(true);
  });

  it('filters systems by organization', () => {
    const adobe = defaultRegistry.find({ organization: 'Adobe' });
    expect(adobe.systems.length).toBeGreaterThanOrEqual(3);
    expect(adobe.systems.some(s => s.id === 'react-spectrum')).toBe(true);
  });

  it('filters systems by novelty level', () => {
    const hiddenGems = defaultRegistry.find({ noveltyLevel: 'hidden-gem' });
    expect(hiddenGems.systems.length).toBeGreaterThanOrEqual(5);
    expect(hiddenGems.systems.some(s => s.id === 'nord')).toBe(true);
    expect(hiddenGems.systems.some(s => s.id === 'eui')).toBe(true);
  });

  it('provides category and tag aggregations with valid counts', () => {
    const categories = defaultRegistry.getCategories();
    expect(categories.length).toBeGreaterThan(0);
    expect(categories.every(c => c.count > 0)).toBe(true);

    const tags = defaultRegistry.getTags();
    expect(tags.length).toBeGreaterThan(0);
    expect(tags.every(t => t.count > 0)).toBe(true);
  });
});
