import { UISystem } from '../schemas/uiSystem.js';
import { SelectionState } from '../schemas/selection.js';
import { resolveInstallation } from './framework.js';

export function formatSelectionRules(system: UISystem, selection: SelectionState): string {
  const fw = selection.framework;
  const forbidden = system.aiInstructions.forbiddenSubstitutions.join(', ');
  const principles = system.aiInstructions.principles.map(p => `• ${p}`).join('\n');
  const customRules = selection.customRules?.map(rule => `   • ${rule}`).join('\n');
  const installation = resolveInstallation(system, fw);
  const installInfo = installation?.guidance;
  const installCmd = installInfo?.command || 'No curated command is available for this framework; consult the official documentation.';
  const packages = installInfo?.packages.length
    ? installInfo.packages.join(', ')
    : 'See framework-specific official documentation';
  const heading = selection.strictMode
    ? `CRITICAL AI AGENT DIRECTIVE: UI SYSTEM LOCKED TO "${system.name.toUpperCase()}"`
    : `AI AGENT GUIDANCE: UI SYSTEM SELECTED — "${system.name.toUpperCase()}"`;
  const adoptionRules = selection.strictMode
    ? `1. EXCLUSIVE SYSTEM ADOPTION:
   • Implement all user interfaces using official ${system.name} components and primitives.
   • DO NOT introduce or suggest alternative UI libraries (${forbidden}).
   • DO NOT silently fall back to shadcn/ui, Tailwind UI, MUI, or Bootstrap.`
    : `1. PRIMARY SYSTEM ADOPTION:
   • Prefer official ${system.name} components and primitives for a consistent design language.
   • If ${system.name} cannot meet a requirement, explain the limitation and get explicit user approval before introducing another UI library.
   • Never substitute another library silently.`;

  return `
================================================================================
${heading}
================================================================================

The current project has EXPLICITLY selected "${system.name}" (${system.organization}) for all UI development.

Selection Source: ${selection.source === 'file' ? `Persisted in ${selection.configPath}` : 'Active Session'}
Target Framework: ${fw}
Selection Mode: ${selection.strictMode ? 'Strict' : 'Advisory'}
Documentation: ${system.docsUrl}
Primary Packages for This Integration: ${packages}

${selection.strictMode ? 'MANDATORY RULES' : 'GUIDANCE'} FOR THE CODING AGENT:
--------------------------------------------------------------------------------
${adoptionRules}

2. OFFICIAL CONVENTIONS & DESIGN LANGUAGE:
${principles}

3. THEMING & TOKENS:
   • ${system.aiInstructions.themingGuide}
   • Design Tokens Available: ${system.designTokens.available ? `Yes (${system.designTokens.format || 'Standard tokens'})` : 'No'}

4. ICONOGRAPHY:
   • ${system.aiInstructions.iconUsage}

5. LAYOUT & SPACING:
   • ${system.aiInstructions.layoutConventions}
   • Density Profile: ${system.density}

6. ACCESSIBILITY COMPLIANCE:
   • Target WCAG Level: ${system.accessibility.wcagLevel}
   • Keyboard Navigation: ${system.accessibility.keyboardNav ? 'Full support built-in' : 'Manual validation required'}
   • Screen Reader Tested: ${system.accessibility.screenReaderTested ? 'Yes' : 'Verify ARIA attributes'}
   ${system.accessibility.notes ? `• Note: ${system.accessibility.notes}` : ''}

7. INSTALLATION REFERENCE:
   • Install Command: \`${installCmd}\`
   ${installInfo?.peerDependencies?.length ? `• Peer Dependencies: ${installInfo.peerDependencies.join(', ')}` : ''}

8. NO ARBITRARY COMPONENT RE-INVENTIONS:
   • If ${system.name} already provides a component (e.g., Dialog, Button, Table, Toast, Dropdown), use the official component rather than writing custom HTML/CSS primitives.
${customRules ? `
9. PROJECT-SPECIFIC RULES:
${customRules}` : ''}
================================================================================
`.trim();
}

export function formatComponentGuidance(
  system: UISystem,
  componentKey: string
): string {
  const normKey = componentKey.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Find matching component in guidance dictionary
  let matchedKey: string | undefined;
  let compInfo = system.componentGuidance?.[normKey];

  if (!compInfo && system.componentGuidance) {
    matchedKey = Object.keys(system.componentGuidance).find(k => 
      k.toLowerCase().includes(normKey) || normKey.includes(k.toLowerCase())
    );
    if (matchedKey) {
      compInfo = system.componentGuidance[matchedKey];
    }
  }

  if (compInfo) {
    const docUrl = compInfo.docSubUrl 
      ? (compInfo.docSubUrl.startsWith('http') ? compInfo.docSubUrl : `${system.docsUrl.replace(/\/$/, '')}/${compInfo.docSubUrl.replace(/^\//, '')}`)
      : system.docsUrl;

    return `
### Component Guidance: ${system.name} -> ${compInfo.canonicalName}

- **System:** ${system.name} (${system.organization})
- **Canonical Component:** \`${compInfo.canonicalName}\`
- **Description:** ${compInfo.description}
${compInfo.importExample ? `- **Import Example:**\n\`\`\`typescript\n${compInfo.importExample}\n\`\`\`` : ''}
${compInfo.propsPattern ? `- **Prop Conventions:** ${compInfo.propsPattern}` : ''}
${compInfo.accessibilityNotes ? `- **Accessibility:** ${compInfo.accessibilityNotes}` : ''}
- **Official Documentation:** ${docUrl}
`.trim();
  }

  // Fallback when component is not in pre-indexed dictionary
  return `
### Component Guidance: ${system.name} -> ${componentKey}

- **System:** ${system.name} (${system.organization})
- **Status:** Detailed snippet for "${componentKey}" is not specifically pre-indexed in the local metadata dictionary.
- **Packages to Check:** ${system.packageNames.join(', ')}
- **Official Documentation:** ${system.docsUrl}
- **General Rule:** Check ${system.docsUrl} for the canonical "${componentKey}" component and follow the system's design tokens and theming guide (${system.aiInstructions.themingGuide}).
`.trim();
}
