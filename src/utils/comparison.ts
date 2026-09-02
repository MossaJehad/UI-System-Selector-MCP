import { UISystem } from '../schemas/uiSystem.js';

export interface ComparisonMatrixItem {
  id: string;
  name: string;
  organization: string;
  category: string;
  noveltyLevel: string;
  frameworks: string[];
  stylingApproach: string;
  accessibility: {
    wcagLevel: string;
    keyboardNav: boolean;
    screenReaderTested: boolean;
    ariaCompliant: boolean;
  };
  density: string;
  opinionatedLevel: string;
  darkMode: boolean;
  rtlSupport: boolean;
  tokensAvailable: boolean;
  iconsAvailable: boolean;
  license: string;
  bestFor: string[];
  avoidFor: string[];
  strengths: string[];
  weaknesses: string[];
  docsUrl: string;
}

export interface ComparisonResult {
  systems: ComparisonMatrixItem[];
  markdownMatrix: string;
  summary: string;
}

export function buildComparison(systems: UISystem[]): ComparisonResult {
  const items: ComparisonMatrixItem[] = systems.map(s => ({
    id: s.id,
    name: s.name,
    organization: s.organization,
    category: s.category,
    noveltyLevel: s.noveltyLevel,
    frameworks: s.frameworks,
    stylingApproach: s.stylingApproach,
    accessibility: {
      wcagLevel: s.accessibility.wcagLevel,
      keyboardNav: s.accessibility.keyboardNav,
      screenReaderTested: s.accessibility.screenReaderTested,
      ariaCompliant: s.accessibility.ariaCompliant
    },
    density: s.density,
    opinionatedLevel: s.opinionatedLevel,
    darkMode: s.darkMode,
    rtlSupport: s.rtlSupport,
    tokensAvailable: s.designTokens.available,
    iconsAvailable: s.icons.available,
    license: s.license,
    bestFor: s.bestFor,
    avoidFor: s.avoidFor,
    strengths: s.strengths,
    weaknesses: s.weaknesses,
    docsUrl: s.docsUrl
  }));

  // Generate Markdown Table
  const headers = ['Feature', ...systems.map(s => `**${s.name}**`)];
  const separator = headers.map(() => '---');

  const rows = [
    ['**Organization**', ...systems.map(s => s.organization)],
    ['**Category**', ...systems.map(s => s.category)],
    ['**Novelty Level**', ...systems.map(s => s.noveltyLevel)],
    ['**Frameworks**', ...systems.map(s => s.frameworks.join(', '))],
    ['**Styling Approach**', ...systems.map(s => s.stylingApproach)],
    ['**Density**', ...systems.map(s => s.density)],
    ['**Opinionated Level**', ...systems.map(s => s.opinionatedLevel)],
    ['**WCAG Level**', ...systems.map(s => s.accessibility.wcagLevel)],
    ['**Dark Mode / RTL**', ...systems.map(s => `${s.darkMode ? '✅' : '❌'} / ${s.rtlSupport ? '✅' : '❌'}`)],
    ['**Tokens / Icons**', ...systems.map(s => `${s.designTokens.available ? '✅' : '❌'} / ${s.icons.available ? '✅' : '❌'}`)],
    ['**License**', ...systems.map(s => s.license)],
    ['**Best For**', ...systems.map(s => s.bestFor.slice(0, 3).join('; '))],
    ['**Avoid For**', ...systems.map(s => s.avoidFor.slice(0, 2).join('; '))]
  ];

  const tableLines = [
    `| ${headers.join(' | ')} |`,
    `| ${separator.join(' | ')} |`,
    ...rows.map(row => `| ${row.join(' | ')} |`)
  ];

  const markdownMatrix = tableLines.join('\n');

  // Summary analysis
  const summaryParts = systems.map(s => `
### ${s.name} (${s.organization})
- **Aesthetic & Focus:** ${s.aesthetic}
- **Key Strengths:** ${s.strengths.join(', ')}
- **Trade-offs:** ${s.weaknesses.join(', ')}
- **Docs:** ${s.docsUrl}
`.trim());

  const summary = `
## UI Systems Comparison Matrix

${markdownMatrix}

## Detailed Breakdown
${summaryParts.join('\n\n')}
`.trim();

  return {
    systems: items,
    markdownMatrix,
    summary
  };
}
