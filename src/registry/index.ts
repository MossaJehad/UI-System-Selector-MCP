import { UISystem, Framework, UISystemCategory } from '../schemas/uiSystem.js';
import {
  ListUISystemsFilter,
  SearchUISystemsQuery,
  CompareUISystemsQuery,
  RecommendUISystemsQuery
} from '../schemas/registry.js';
import { ALL_UI_SYSTEMS, UI_SYSTEMS_MAP } from './systems/index.js';
import { searchUISystems, SearchResponse } from './search.js';
import { recommendUISystems, RecommendationResponse } from './recommend.js';
import { buildComparison, ComparisonResult } from '../utils/comparison.js';
import { supportsTargetFramework } from '../utils/framework.js';

export class UISystemRegistry {
  private systems: UISystem[];
  private map: Map<string, UISystem>;

  constructor(systems: UISystem[] = ALL_UI_SYSTEMS) {
    this.systems = [...systems];
    this.map = new Map();
    for (const sys of this.systems) {
      this.map.set(sys.id.toLowerCase(), sys);
    }
  }

  /**
   * Return all registered UI systems.
   */
  public getAll(): UISystem[] {
    return this.systems;
  }

  /**
   * Get a UI system by its unique ID (case-insensitive).
   */
  public getById(id: string): UISystem | undefined {
    return this.map.get(id.trim().toLowerCase());
  }

  /**
   * Filter UI systems by structured metadata.
   */
  public find(filter: ListUISystemsFilter): { systems: UISystem[]; totalCount: number } {
    let matches = this.systems;

    if (filter.framework) {
      matches = matches.filter(s => supportsTargetFramework(s, filter.framework as Framework));
    }

    if (filter.category) {
      matches = matches.filter(s =>
        s.category === filter.category ||
        s.secondaryCategories?.includes(filter.category as UISystemCategory)
      );
    }

    if (filter.organization) {
      const orgLower = filter.organization.toLowerCase();
      matches = matches.filter(s => s.organization.toLowerCase().includes(orgLower));
    }

    if (filter.stylingApproach) {
      matches = matches.filter(s => s.stylingApproach === filter.stylingApproach);
    }

    if (filter.opinionatedLevel) {
      matches = matches.filter(s => s.opinionatedLevel === filter.opinionatedLevel);
    }

    if (filter.noveltyLevel) {
      matches = matches.filter(s => s.noveltyLevel === filter.noveltyLevel);
    }

    if (filter.darkMode !== undefined) {
      matches = matches.filter(s => s.darkMode === filter.darkMode);
    }

    if (filter.rtlSupport !== undefined) {
      matches = matches.filter(s => s.rtlSupport === filter.rtlSupport);
    }

    if (filter.tags && filter.tags.length > 0) {
      const targetTags = filter.tags.map(t => t.toLowerCase());
      matches = matches.filter(s =>
        targetTags.some(t => s.tags.map(st => st.toLowerCase()).includes(t))
      );
    }

    const totalCount = matches.length;
    const limit = filter.limit !== undefined ? filter.limit : matches.length;
    const result = matches.slice(0, limit);

    return { systems: result, totalCount };
  }

  /**
   * Search UI systems using natural-ish structured query and multi-factor ranking.
   */
  public search(query: SearchUISystemsQuery): SearchResponse {
    return searchUISystems(this.systems, query);
  }

  /**
   * Compare multiple UI systems side-by-side.
   */
  public compare(query: CompareUISystemsQuery): ComparisonResult {
    if (query.systems.length < 2 || query.systems.length > 8) {
      throw new Error('Comparison requires between 2 and 8 UI system IDs.');
    }

    const matched: UISystem[] = [];
    const missing: string[] = [];

    for (const rawId of query.systems) {
      const sys = this.getById(rawId);
      if (sys) {
        matched.push(sys);
      } else {
        missing.push(rawId);
      }
    }

    if (missing.length > 0) {
      throw new Error(`Unknown UI system ID${missing.length === 1 ? '' : 's'}: ${missing.join(', ')}`);
    }

    const duplicateIds = matched
      .map(system => system.id)
      .filter((id, index, ids) => ids.indexOf(id) !== index);
    if (duplicateIds.length > 0) {
      throw new Error(`Duplicate UI system ID${duplicateIds.length === 1 ? '' : 's'}: ${Array.from(new Set(duplicateIds)).join(', ')}`);
    }

    if (matched.length < 2) {
      throw new Error('At least 2 recognized UI systems are required for comparison.');
    }

    return buildComparison(matched);
  }

  /**
   * Recommend UI systems based on project type and developer preferences.
   */
  public recommend(query: RecommendUISystemsQuery): RecommendationResponse {
    return recommendUISystems(this.systems, query);
  }

  /**
   * Get all categories and their system counts.
   */
  public getCategories(): { category: string; count: number }[] {
    const counts = new Map<string, number>();
    for (const sys of this.systems) {
      counts.set(sys.category, (counts.get(sys.category) || 0) + 1);
      if (sys.secondaryCategories) {
        for (const sec of sys.secondaryCategories) {
          counts.set(sec, (counts.get(sec) || 0) + 1);
        }
      }
    }
    return Array.from(counts.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }

  /**
   * Get all tags and their system counts.
   */
  public getTags(): { tag: string; count: number }[] {
    const counts = new Map<string, number>();
    for (const sys of this.systems) {
      for (const t of sys.tags) {
        counts.set(t, (counts.get(t) || 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }
}

export const defaultRegistry = new UISystemRegistry(ALL_UI_SYSTEMS);
export { ALL_UI_SYSTEMS, UI_SYSTEMS_MAP };
