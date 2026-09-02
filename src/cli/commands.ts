import pc from 'picocolors';
import { defaultRegistry } from '../registry/index.js';
import { defaultSelectionStore } from '../config/selectionStore.js';
import { formatSelectionRules, formatComponentGuidance } from '../utils/guidance.js';
import { formatSystemDetailMarkdown } from '../utils/formatting.js';
import { Framework, UISystemCategory } from '../schemas/uiSystem.js';
import { SelectionState } from '../schemas/selection.js';

export function listCommand(options: {
  framework?: string;
  category?: string;
  org?: string;
  tag?: string[];
  limit?: number;
}): void {
  const filter = {
    framework: options.framework as Framework | undefined,
    category: options.category as UISystemCategory | undefined,
    organization: options.org,
    tags: options.tag,
    limit: options.limit || 50
  };

  const { systems, totalCount } = defaultRegistry.find(filter);

  console.log(`\n${pc.bold(pc.cyan('UI Systems Catalog'))} (${pc.green(systems.length)} of ${totalCount} available)\n`);

  for (const sys of systems) {
    const noveltyColor =
      sys.noveltyLevel === 'hidden-gem'
        ? pc.magenta(`[${sys.noveltyLevel}]`)
        : sys.noveltyLevel === 'niche-retro'
        ? pc.yellow(`[${sys.noveltyLevel}]`)
        : pc.blue(`[${sys.noveltyLevel}]`);

    console.log(
      `${pc.bold(pc.white(sys.name))} ${pc.dim(`(${sys.id})`)} ${noveltyColor}`
    );
    console.log(
      `  ${pc.dim('Org:')} ${sys.organization} | ${pc.dim('Category:')} ${sys.category} | ${pc.dim('Density:')} ${sys.density}`
    );
    console.log(
      `  ${pc.dim('Frameworks:')} ${sys.frameworks.join(', ')} | ${pc.dim('Styling:')} ${sys.stylingApproach}`
    );
    console.log(`  ${pc.dim('Best for:')} ${sys.bestFor.slice(0, 2).join('; ')}`);
    console.log(`  ${pc.dim('Docs:')} ${pc.underline(sys.docsUrl)}\n`);
  }
}

export function searchCommand(query: string, options: {
  framework?: string;
  category?: string;
  hiddenGems?: boolean;
  limit?: number;
}): void {
  const noveltyPreference = options.hiddenGems ? 'prefer-hidden-gems' : 'all';
  const res = defaultRegistry.search({
    query,
    framework: options.framework as Framework | undefined,
    category: options.category as UISystemCategory | undefined,
    noveltyPreference,
    limit: options.limit || 10
  });

  console.log(`\n${pc.bold(pc.cyan('Search Results'))} for "${pc.yellow(query)}" (${pc.green(res.results.length)} matches)\n`);

  if (res.results.length === 0) {
    console.log(pc.yellow('No matching UI systems found. Try a broader search term or list all systems with `ui-systems list`.'));
    return;
  }

  for (const item of res.results) {
    const sys = item.system;
    console.log(
      `${pc.bold(pc.white(sys.name))} ${pc.dim(`(${sys.id})`)} - ${pc.green(`Score: ${item.score}`)}`
    );
    console.log(`  ${pc.dim('Org:')} ${sys.organization} | ${pc.dim('Category:')} ${sys.category} | ${pc.dim('Novelty:')} ${sys.noveltyLevel}`);
    console.log(`  ${pc.dim('Frameworks:')} ${sys.frameworks.join(', ')} | ${pc.dim('Styling:')} ${sys.stylingApproach}`);
    console.log(`  ${pc.dim('Match Reasons:')} ${item.matchReasons.join(', ')}`);
    console.log(`  ${pc.dim('Docs:')} ${pc.underline(sys.docsUrl)}\n`);
  }
}

export function showCommand(id: string, options: { component?: string }): void {
  const sys = defaultRegistry.getById(id);
  if (!sys) {
    console.error(pc.red(`Error: UI system "${id}" not found in registry.`));
    process.exit(1);
  }

  if (options.component) {
    const guidance = formatComponentGuidance(sys, options.component);
    console.log(`\n${guidance}\n`);
    return;
  }

  const markdown = formatSystemDetailMarkdown(sys);
  console.log(`\n${markdown}\n`);
}

export function compareCommand(ids: string[]): void {
  if (ids.length < 2) {
    console.error(pc.red('Error: Please provide at least 2 system IDs to compare (e.g. `ui-systems compare primer carbon cloudscape`).'));
    process.exit(1);
  }

  try {
    const comp = defaultRegistry.compare({ systems: ids });
    console.log(`\n${comp.summary}\n`);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(pc.red(`Comparison error: ${msg}`));
    process.exit(1);
  }
}

export function selectCommand(id: string, options: {
  framework?: string;
  persist?: boolean;
  projectPath?: string;
  acknowledgeRestrictions?: boolean;
}): void {
  const sys = defaultRegistry.getById(id);
  if (!sys) {
    console.error(pc.red(`Error: UI system "${id}" not found in registry.`));
    process.exit(1);
  }

  const fw = (options.framework as Framework) || 'react';
  if (!sys.frameworks.includes(fw)) {
    console.error(pc.red(`Error: ${sys.name} does not declare direct support for "${fw}". Supported integration targets: ${sys.frameworks.join(', ')}.`));
    process.exit(1);
  }

  if (sys.usageRestrictions && !options.acknowledgeRestrictions) {
    console.error(pc.red(`Usage restriction: ${sys.usageRestrictions}`));
    console.error(pc.yellow('If you are authorized, re-run with --acknowledge-restrictions.'));
    process.exit(1);
  }

  let selection: SelectionState;
  try {
    selection = defaultSelectionStore.setSelection(sys.id, fw, {
      persist: options.persist,
      projectPath: options.projectPath
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(pc.red(`Selection error: ${message}`));
    process.exit(1);
  }

  console.log(pc.green(`\n✔ UI System Selected: ${pc.bold(sys.name)} (${sys.organization})`));
  console.log(`  Framework: ${selection.framework}`);
  console.log(`  Persistence: ${selection.source === 'file'
    ? pc.cyan(`Saved in ${selection.configPath}`)
    : pc.yellow('Not saved; use --persist to make this selection available to later CLI/MCP sessions.')}\n`);

  const rules = formatSelectionRules(sys, selection);
  console.log(rules);
}

export function selectedCommand(options: { projectPath?: string }): void {
  const selection = defaultSelectionStore.getSelection(options.projectPath);
  if (!selection) {
    console.log(pc.yellow('\nNo UI system is currently selected for this project.'));
    console.log(pc.dim('Use `ui-systems select <id>` to lock a design system.\n'));
    return;
  }

  const sys = defaultRegistry.getById(selection.selectedSystem);
  if (!sys) {
    console.log(pc.yellow(`\nSelected system ID "${selection.selectedSystem}" was not found in active registry.`));
    return;
  }

  console.log(pc.green(`\n✔ Active Selection: ${pc.bold(sys.name)} (${sys.organization})`));
  console.log(`  Framework: ${selection.framework}`);
  console.log(`  Source: ${selection.source === 'file' ? pc.cyan(`Config file (${selection.configPath})`) : pc.dim('In-Memory Session')}\n`);

  const rules = formatSelectionRules(sys, selection);
  console.log(rules);
}

export function clearCommand(options: { removePersisted?: boolean; projectPath?: string }): void {
  let cleared: boolean;
  try {
    cleared = defaultSelectionStore.clearSelection({
      removePersisted: options.removePersisted,
      projectPath: options.projectPath
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(pc.red(`Clear selection error: ${message}`));
    process.exit(1);
  }

  if (cleared && options.removePersisted) {
    console.log(pc.green('\n✔ Successfully cleared UI system selection.\n'));
  } else if (cleared) {
    console.log(pc.yellow('\nA persisted selection exists and remains active. Re-run with --remove-persisted to delete it.\n'));
  } else {
    console.log(pc.yellow('\nNo active selection was found to clear.\n'));
  }
}

export function recommendCommand(projectType: string, options: {
  framework?: string;
  preferences?: string[];
  hiddenGems?: boolean;
  limit?: number;
}): void {
  const noveltyPreference = options.hiddenGems ? 'prefer-hidden-gems' : 'all';
  const recs = defaultRegistry.recommend({
    projectType,
    framework: (options.framework as Framework) || 'react',
    preferences: options.preferences || [],
    noveltyPreference,
    limit: options.limit || 5
  });

  console.log(`\n${pc.bold(pc.cyan('Top UI System Recommendations'))} for "${pc.yellow(projectType)}" (${recs.framework})\n`);

  for (let i = 0; i < recs.recommendations.length; i++) {
    const item = recs.recommendations[i]!;
    const sys = item.system;
    console.log(
      `${pc.bold(pc.green(`${i + 1}. ${sys.name}`))} ${pc.dim(`(${sys.id})`)} - ${pc.cyan(`Score: ${item.score}`)} [${sys.noveltyLevel}]`
    );
    console.log(`   ${pc.dim('Fit:')} ${item.fitSummary}`);
    console.log(`   ${pc.dim('Key Strengths:')} ${item.keyStrengthsForProject.join('; ')}`);
    if (item.potentialTradeoffs.length > 0) {
      console.log(`   ${pc.dim('Trade-offs:')} ${item.potentialTradeoffs.join('; ')}`);
    }
    console.log(`   ${pc.dim('Docs:')} ${pc.underline(sys.docsUrl)}\n`);
  }
}
