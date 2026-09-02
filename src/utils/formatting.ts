import { UISystem } from '../schemas/uiSystem.js';

export function formatSystemDetailMarkdown(system: UISystem): string {
  const installEntries = system.installation
    ? Object.entries(system.installation)
        .map(([fw, inst]) => `  - **${fw}:** \`${inst.command}\`${inst.peerDependencies?.length ? ` (Peers: ${inst.peerDependencies.join(', ')})` : ''}`)
        .join('\n')
    : '  - Not specified';

  return `
# ${system.name}

> **Organization:** ${system.organization}  
> **Category:** \`${system.category}\`${system.secondaryCategories?.length ? ` (Also: ${system.secondaryCategories.map(c => `\`${c}\``).join(', ')})` : ''}  
> **Novelty Score:** \`${system.noveltyLevel}\`  
> **License:** ${system.license}  
${system.usageRestrictions ? `> **Usage Restrictions:** ${system.usageRestrictions}  ` : ''}
> **Docs:** [${system.docsUrl}](${system.docsUrl})  
${system.repositoryUrl ? `> **Repository:** [${system.repositoryUrl}](${system.repositoryUrl})  ` : ''}

---

## 📌 Overview
${system.description}

- **Aesthetic:** ${system.aesthetic}
- **Frameworks Supported:** ${system.frameworks.map(f => `\`${f}\``).join(', ')}
- **Styling Approach:** \`${system.stylingApproach}\`
- **Component Density:** \`${system.density}\`
- **Opinionated Level:** \`${system.opinionatedLevel}\`
- **Maturity:** \`${system.maturity}\`

---

## ♿ Accessibility & Internationalization
- **WCAG Level:** \`${system.accessibility.wcagLevel}\`
- **Keyboard Navigation:** ${system.accessibility.keyboardNav ? '✅ Full Support' : '❌ Partial / Manual'}
- **Screen Reader Tested:** ${system.accessibility.screenReaderTested ? '✅ Verified' : '⚠️ Unverified'}
- **ARIA Compliant:** ${system.accessibility.ariaCompliant ? '✅ Compliant' : '⚠️ Partial'}
- **Dark Mode:** ${system.darkMode ? '✅ Yes' : '❌ No'}
- **RTL Support:** ${system.rtlSupport ? '✅ Yes' : '❌ No'}
${system.accessibility.notes ? `> *Note:* ${system.accessibility.notes}` : ''}

---

## 📦 Packages & Installation
- **Primary Packages:** ${system.packageNames.map(p => `\`${p}\``).join(', ')}
- **Design Tokens:** ${system.designTokens.available ? `✅ Available (${system.designTokens.format || 'Tokens'})` : '❌ Not separated'}
- **Icons:** ${system.icons.available ? `✅ Available (${system.icons.packageName || system.icons.name || 'Included'})` : '❌ External required'}

### Install Commands:
${installEntries}

---

## 🎯 Best For & Avoid For
### ✅ Best For:
${system.bestFor.map(b => `- ${b}`).join('\n')}

### ⚠️ Avoid For:
${system.avoidFor.map(a => `- ${a}`).join('\n')}

---

## ⚖️ Strengths & Weaknesses
### 🚀 Strengths:
${system.strengths.map(s => `- ${s}`).join('\n')}

### 📉 Weaknesses:
${system.weaknesses.map(w => `- ${w}`).join('\n')}

---

## 🏷️ Tags
${system.tags.map(t => `\`#${t}\``).join(' ')}

---

## 🤖 AI Agent Guidelines
- **Core Principles:**
${system.aiInstructions.principles.map(p => `  - ${p}`).join('\n')}
- **Strictly Prohibited Substitutions:** ${system.aiInstructions.forbiddenSubstitutions.map(f => `\`${f}\``).join(', ')}
- **Theming Guide:** ${system.aiInstructions.themingGuide}
- **Icon Usage:** ${system.aiInstructions.iconUsage}
- **Layout Conventions:** ${system.aiInstructions.layoutConventions}
`.trim();
}

export function formatSystemListMarkdown(systems: UISystem[], totalCount?: number): string {
  if (systems.length === 0) {
    return 'No UI systems matched your filter criteria.';
  }

  const items = systems.map(s => {
    return `### ${s.name} (\`${s.id}\`)
- **Organization:** ${s.organization} | **Category:** \`${s.category}\` | **Novelty:** \`${s.noveltyLevel}\`
- **Frameworks:** ${s.frameworks.join(', ')} | **Styling:** \`${s.stylingApproach}\` | **Density:** \`${s.density}\`
- **Description:** ${s.description}
- **Best For:** ${s.bestFor.slice(0, 2).join('; ')}
- **Docs:** ${s.docsUrl}
`;
  });

  return `
## Available UI Systems (${systems.length}${totalCount ? ` of ${totalCount}` : ''})

${items.join('\n')}
`.trim();
}
