import { UISystem } from '../schemas/uiSystem.js';
import { SearchUISystemsQuery } from '../schemas/registry.js';
import { supportsTargetFramework } from '../utils/framework.js';

export interface SearchResultItem {
  system: UISystem;
  score: number;
  matchReasons: string[];
}

export interface SearchResponse {
  query: string;
  results: SearchResultItem[];
  totalMatches: number;
}

export function searchUISystems(
  systems: UISystem[],
  options: SearchUISystemsQuery
): SearchResponse {
  const queryStr = options.query.trim().toLowerCase();
  const tokens = queryStr
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1);

  const isAskingForUnusual =
    queryStr.includes('unusual') ||
    queryStr.includes('hidden gem') ||
    queryStr.includes('less-known') ||
    queryStr.includes('less obvious') ||
    queryStr.includes('niche') ||
    queryStr.includes('different') ||
    queryStr.includes('not shadcn') ||
    queryStr.includes('instead of shadcn');

  const isAskingForDeveloper =
    queryStr.includes('developer') ||
    queryStr.includes('dev tool') ||
    queryStr.includes('github') ||
    queryStr.includes('terminal');

  const isAskingForEnterprise =
    queryStr.includes('enterprise') ||
    queryStr.includes('ibm') ||
    queryStr.includes('aws') ||
    queryStr.includes('cloud') ||
    queryStr.includes('data');

  const isAskingForAccessible =
    queryStr.includes('accessible') ||
    queryStr.includes('a11y') ||
    queryStr.includes('wcag') ||
    queryStr.includes('screen reader');

  const scored: SearchResultItem[] = [];

  for (const sys of systems) {
    // Check framework filter if provided
    if (options.framework && !supportsTargetFramework(sys, options.framework)) {
      continue;
    }

    // Check category filter if provided
    if (options.category && sys.category !== options.category && !sys.secondaryCategories?.includes(options.category)) {
      continue;
    }

    // Check novelty preference filter
    if (options.noveltyPreference === 'established-only' && (sys.noveltyLevel === 'niche-retro' || sys.noveltyLevel === 'hidden-gem')) {
      continue;
    } else if (options.noveltyPreference === 'niche-retro' && sys.noveltyLevel !== 'niche-retro') {
      continue;
    }

    let score = 0;
    const matchReasons: string[] = [];

    const idLower = sys.id.toLowerCase();
    const nameLower = sys.name.toLowerCase();
    const orgLower = sys.organization.toLowerCase();
    const descLower = sys.description.toLowerCase();
    const aestheticLower = sys.aesthetic.toLowerCase();

    // 1. Exact ID match
    if (idLower === queryStr || idLower.replace(/-/g, '') === queryStr.replace(/\s+/g, '')) {
      score += 150;
      matchReasons.push(`Exact ID match on "${sys.id}"`);
    }

    // 2. Exact or substring Name match
    if (nameLower.includes(queryStr)) {
      score += 80;
      matchReasons.push(`Name contains "${queryStr}"`);
    }

    // 3. Organization match
    if (orgLower.includes(queryStr)) {
      score += 50;
      matchReasons.push(`Maintained by ${sys.organization}`);
    }

    // 4. Aliases match
    if (sys.aliases) {
      for (const alias of sys.aliases) {
        const aliasLower = alias.toLowerCase();
        if (aliasLower === queryStr || aliasLower.replace(/[-\s]/g, '') === queryStr.replace(/[-\s]/g, '')) {
          score += 140;
          matchReasons.push(`Alias match on "${alias}"`);
        } else if (aliasLower.includes(queryStr)) {
          score += 60;
          matchReasons.push(`Alias contains "${queryStr}"`);
        }
      }
    }

    // 5. Token matches across all metadata fields
    for (const token of tokens) {
      if (idLower.includes(token)) {
        score += 25;
        matchReasons.push(`ID matched "${token}"`);
      }
      if (nameLower.includes(token)) {
        score += 20;
        matchReasons.push(`Name matched "${token}"`);
      }
      if (orgLower.includes(token)) {
        score += 15;
        matchReasons.push(`Organization matched "${token}"`);
      }
      if (sys.aliases?.some(a => a.toLowerCase().includes(token))) {
        score += 20;
        matchReasons.push(`Alias matched "${token}"`);
      }
      if (sys.category.toLowerCase().includes(token)) {
        score += 20;
        matchReasons.push(`Category matched "${token}"`);
      }
      if (sys.tags.some(t => t.toLowerCase().includes(token))) {
        score += 20;
        matchReasons.push(`Tag matched "${token}"`);
      }
      if (sys.bestFor.some(b => b.toLowerCase().includes(token))) {
        score += 15;
        matchReasons.push(`Best-for domain matched "${token}"`);
      }
      if (sys.strengths.some(s => s.toLowerCase().includes(token))) {
        score += 10;
        matchReasons.push(`Strength matched "${token}"`);
      }
      if (descLower.includes(token)) {
        score += 8;
      }
      if (aestheticLower.includes(token)) {
        score += 10;
        matchReasons.push(`Aesthetic matched "${token}"`);
      }
    }

    // 6. Contextual heuristic bonuses
    const isAskingForGovernment =
      queryStr.includes('gov') ||
      queryStr.includes('public sector') ||
      queryStr.includes('civic') ||
      queryStr.includes('nhs') ||
      queryStr.includes('uswds');

    const isAskingForHeadless =
      queryStr.includes('headless') ||
      queryStr.includes('unstyled') ||
      queryStr.includes('primitive');

    const isAskingForWebComponents =
      queryStr.includes('web component') ||
      queryStr.includes('custom element') ||
      queryStr.includes('lit') ||
      queryStr.includes('shadow dom');

    const isAskingForSourceOwned =
      queryStr.includes('source owned') ||
      queryStr.includes('source-owned') ||
      queryStr.includes('copy paste') ||
      queryStr.includes('copy-paste');

    const isAskingForObscure =
      queryStr.includes('obscure') ||
      queryStr.includes('low star') ||
      queryStr.includes('less than') ||
      queryStr.includes('rare') ||
      queryStr.includes('less popular') ||
      queryStr.includes('less-known');

    if (isAskingForGovernment && (sys.category === 'government' || sys.secondaryCategories?.includes('government') || sys.tags.includes('government'))) {
      score += 60;
      matchReasons.push('Government / public sector design system');
    }

    if (isAskingForHeadless && (sys.category === 'headless' || sys.opinionatedLevel === 'unstyled-headless' || sys.stylingApproach === 'unstyled')) {
      score += 50;
      matchReasons.push('Headless unstyled UI primitives');
    }

    if (isAskingForWebComponents && (sys.category === 'web-components' || sys.frameworks.includes('web-components'))) {
      score += 50;
      matchReasons.push('Web Components / Custom Elements standards-based UI');
    }

    if (isAskingForSourceOwned && (sys.sourceOwned || sys.category === 'source-owned' || sys.tags.includes('copy-paste') || sys.tags.includes('source-owned'))) {
      score += 50;
      matchReasons.push('Source-owned / copy-paste component architecture');
    }

    if (isAskingForObscure && (sys.noveltyLevel === 'hidden-gem' || sys.noveltyLevel === 'niche-retro')) {
      score += 65;
      matchReasons.push('Lesser-known / obscure UI library discovery bonus');
    }

    if (isAskingForUnusual || options.noveltyPreference === 'prefer-hidden-gems') {
      if (sys.noveltyLevel === 'hidden-gem') {
        score += 60;
        matchReasons.push('Hidden gem bonus (lesser-known production design system)');
      } else if (sys.noveltyLevel === 'niche-retro') {
        score += 70;
        matchReasons.push('Niche/retro unique aesthetic bonus');
      } else if (sys.noveltyLevel === 'mainstream') {
        score -= 40; // Deprioritize mainstream
      }
      if (sys.id === 'shadcn-ui') {
        score -= 100; // Explicit anti-shadcn demotion when user asks for alternatives
      }
    }

    if (isAskingForDeveloper && (sys.category === 'developer-tool' || sys.secondaryCategories?.includes('developer-tool') || sys.tags.includes('developer-tool') || sys.tags.includes('github-like'))) {
      score += 40;
      matchReasons.push('Developer tool and technical workflow optimization');
    }

    if (isAskingForEnterprise && (sys.category === 'enterprise' || sys.secondaryCategories?.includes('enterprise') || sys.tags.includes('enterprise'))) {
      score += 35;
      matchReasons.push('Enterprise-grade design system');
    }

    if (isAskingForAccessible && (sys.accessibility.wcagLevel === 'AAA' || sys.tags.includes('high-accessibility'))) {
      score += 45;
      matchReasons.push(`High accessibility conformance (${sys.accessibility.wcagLevel})`);
    }

    // Deduplicate match reasons
    const uniqueReasons = Array.from(new Set(matchReasons));

    if (score > 0) {
      scored.push({
        system: sys,
        score,
        matchReasons: uniqueReasons
      });
    }
  }

  // Sort descending by score, then alphabetically by name
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.system.name.localeCompare(b.system.name);
  });

  const limit = options.limit || 10;
  const paginated = scored.slice(0, limit);

  return {
    query: options.query,
    results: paginated,
    totalMatches: scored.length
  };
}
