import { UISystem, Framework } from '../schemas/uiSystem.js';
import { RecommendUISystemsQuery } from '../schemas/registry.js';
import { supportsTargetFramework } from '../utils/framework.js';

export interface RecommendationItem {
  system: UISystem;
  score: number;
  fitSummary: string;
  keyStrengthsForProject: string[];
  potentialTradeoffs: string[];
  noveltyTier: string;
}

export interface RecommendationResponse {
  projectType: string;
  framework: string;
  recommendations: RecommendationItem[];
  totalEvaluated: number;
}

export function recommendUISystems(
  systems: UISystem[],
  query: RecommendUISystemsQuery
): RecommendationResponse {
  const fw = query.framework || 'react';
  const projectTypeLower = query.projectType.toLowerCase();
  const prefs = (query.preferences || []).map(p => p.toLowerCase());
  const noveltyPref = query.noveltyPreference || 'all';

  const wantsHiddenGems =
    noveltyPref === 'prefer-hidden-gems' ||
    prefs.some(p => p.includes('hidden-gem') || p.includes('less-common') || p.includes('unusual') || p.includes('alternative'));

  const scored: RecommendationItem[] = [];

  for (const sys of systems) {
    const allowsRestrictedSystems = prefs.some(pref =>
      pref === 'allow-restricted' || pref === 'proprietary'
    );
    if (
      sys.usageRestrictions &&
      !allowsRestrictedSystems &&
      !projectTypeLower.includes(sys.organization.toLowerCase())
    ) {
      continue;
    }

    if (
      noveltyPref === 'established-only' &&
      sys.noveltyLevel !== 'established' &&
      sys.noveltyLevel !== 'mainstream'
    ) {
      continue;
    }
    if (noveltyPref === 'niche-retro' && sys.noveltyLevel !== 'niche-retro') {
      continue;
    }

    // 1. Framework compatibility check
    const supportsFramework = supportsTargetFramework(sys, fw as Framework);
    if (!supportsFramework) {
      continue;
    }

    let score = 50; // base score for framework compatibility
    const strengthsForProject: string[] = [];
    const tradeoffs: string[] = [];

    // 2. Project Type Relevance
    const projectTokens = projectTypeLower.split(/[\s-_/]+/);
    for (const token of projectTokens) {
      if (token.length < 3) continue;

      if (sys.id.includes(token) || sys.name.toLowerCase().includes(token)) {
        score += 20;
      }
      if (sys.category.toLowerCase().includes(token) || sys.secondaryCategories?.some(c => c.toLowerCase().includes(token))) {
        score += 30;
        strengthsForProject.push(`Tailored category fit: "${sys.category}"`);
      }
      if (sys.tags.some(t => t.toLowerCase().includes(token))) {
        score += 25;
        strengthsForProject.push(`Tag alignment: #${token}`);
      }
      if (sys.bestFor.some(b => b.toLowerCase().includes(token))) {
        score += 35;
        strengthsForProject.push(`Direct domain specialization in ${token}`);
      }
    }

    // 3. User Preferences Alignment
    for (const pref of prefs) {
      if (pref === 'dense' || pref === 'compact') {
        if (sys.density === 'compact/dense') {
          score += 25;
          strengthsForProject.push('High component and information density');
        }
      }
      if (pref === 'dark-mode' || pref === 'darkmode') {
        if (sys.darkMode) {
          score += 20;
          strengthsForProject.push('First-class dark mode support');
        } else {
          score -= 15;
          tradeoffs.push('Lacks native dark mode theme');
        }
      }
      if (pref === 'accessible' || pref === 'high-accessibility' || pref === 'a11y') {
        if (sys.accessibility.wcagLevel === 'AAA' || sys.accessibility.wcagLevel === 'AA') {
          score += 30;
          strengthsForProject.push(`WCAG ${sys.accessibility.wcagLevel} accessibility audit`);
        }
      }
      if (pref === 'headless' || pref === 'unstyled') {
        if (sys.opinionatedLevel === 'unstyled-headless' || sys.stylingApproach === 'unstyled') {
          score += 40;
          strengthsForProject.push('Zero-runtime unstyled headless primitives');
        } else {
          score -= 20;
        }
      }
      if (pref === 'styled' || pref === 'pre-styled') {
        if (sys.opinionatedLevel !== 'unstyled-headless') {
          score += 25;
          strengthsForProject.push('Polished out-of-the-box styled components');
        }
      }
      if (pref === 'government' || pref === 'civic' || pref === 'public-sector') {
        if (sys.category === 'government' || sys.secondaryCategories?.includes('government')) {
          score += 45;
          strengthsForProject.push('Official government / public sector standard design system');
        }
      }
      if (pref === 'web-components' || pref === 'custom-elements') {
        if (sys.category === 'web-components' || sys.frameworks.includes('web-components')) {
          score += 40;
          strengthsForProject.push('Standards-based W3C Web Components');
        }
      }
      if (pref === 'source-owned' || pref === 'copy-paste') {
        if (sys.sourceOwned || sys.category === 'source-owned' || sys.tags.includes('copy-paste')) {
          score += 40;
          strengthsForProject.push('Direct source-code ownership and copy-paste component architecture');
        }
      }
      if (pref === 'tailwind' || pref === 'tailwindcss') {
        if (sys.stylingApproach === 'tailwind' || sys.stylingApproach === 'utility-classes' || sys.tags.includes('tailwind')) {
          score += 35;
          strengthsForProject.push('Tailwind CSS utility-class integration');
        }
      }
      if (pref === 'mobile' || pref === 'react-native') {
        if (sys.category === 'mobile' || sys.frameworks.includes('react-native')) {
          score += 40;
          strengthsForProject.push('Mobile and React Native cross-platform support');
        }
      }
      if (pref === 'rtl') {
        if (sys.rtlSupport) {
          score += 20;
          strengthsForProject.push('Right-to-left (RTL) localization support');
        }
      }
    }

    // 4. Novelty & Discoverability Weighting
    if (wantsHiddenGems) {
      if (sys.noveltyLevel === 'hidden-gem') {
        score += 50;
        strengthsForProject.push('High discovery value: production-proven hidden gem');
      } else if (sys.noveltyLevel === 'niche-retro') {
        score += 40;
        strengthsForProject.push('Unique aesthetic personality');
      } else if (sys.noveltyLevel === 'mainstream') {
        score -= 50; // Heavily penalize default mainstream suggestions
        tradeoffs.push('Common default choice with frequent AI over-recommendation');
      }
    } else {
      if (sys.noveltyLevel === 'established' || sys.noveltyLevel === 'mainstream') {
        score += 15;
      }
    }

    // Collect inherent system tradeoffs
    if (sys.weaknesses.length > 0) {
      tradeoffs.push(...sys.weaknesses.slice(0, 2));
    }

    // Compose fit summary
    const fitSummary = `${sys.name} by ${sys.organization} is a ${sys.density} ${sys.opinionatedLevel} design system (${sys.stylingApproach}) ideal for ${sys.bestFor[0] || 'modern web apps'}.`;

    scored.push({
      system: sys,
      score,
      fitSummary,
      keyStrengthsForProject: Array.from(new Set(strengthsForProject)),
      potentialTradeoffs: Array.from(new Set(tradeoffs)),
      noveltyTier: sys.noveltyLevel
    });
  }

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  const limit = query.limit || 5;
  const topRecommendations = scored.slice(0, limit);

  return {
    projectType: query.projectType,
    framework: fw,
    recommendations: topRecommendations,
    totalEvaluated: systems.length
  };
}
