import { Command, InvalidArgumentError, Option } from 'commander';
import {
  listCommand,
  searchCommand,
  showCommand,
  compareCommand,
  selectCommand,
  selectedCommand,
  clearCommand,
  recommendCommand
} from './commands.js';
import { FrameworkSchema, UISystemCategorySchema } from '../schemas/uiSystem.js';

function parseLimit(value: string, max: number): number {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > max) {
    throw new InvalidArgumentError(`Limit must be an integer between 1 and ${max}.`);
  }
  return parsed;
}

export function createCli(): Command {
  const program = new Command();

  program
    .name('ui-systems')
    .description('CLI tool to discover, compare, select, and inspect UI design systems for AI coding agents.')
    .version('1.0.0');

  program
    .command('list')
    .description('List registered UI systems with optional filters')
    .addOption(new Option('-f, --framework <framework>', 'Filter by framework').choices([...FrameworkSchema.options]))
    .addOption(new Option('-c, --category <category>', 'Filter by category').choices([...UISystemCategorySchema.options]))
    .option('-o, --org <org>', 'Filter by organization (e.g. GitHub, AWS, IBM, Shopify)')
    .option('-t, --tag <tags...>', 'Filter by tags')
    .option('-l, --limit <number>', 'Max results to return', value => parseLimit(value, 100))
    .action(listCommand);

  program
    .command('search <query>')
    .description('Search UI systems using natural query or keywords')
    .addOption(new Option('-f, --framework <framework>', 'Filter by framework').choices([...FrameworkSchema.options]))
    .addOption(new Option('-c, --category <category>', 'Filter by category').choices([...UISystemCategorySchema.options]))
    .option('--hidden-gems', 'Prioritize lesser-known production hidden gems')
    .option('-l, --limit <number>', 'Max results to return', value => parseLimit(value, 50))
    .action(searchCommand);

  program
    .command('show <id>')
    .description('Show full details, AI instructions, and documentation for a UI system')
    .option('--component <component>', 'Get specific component guidance (e.g. button, dialog, table)')
    .action(showCommand);

  program
    .command('compare <ids...>')
    .description('Compare 2 to 8 UI systems side-by-side')
    .action(compareCommand);

  program
    .command('select <id>')
    .description('Print selection directives and optionally persist them for the project')
    .addOption(new Option('-f, --framework <framework>', 'Target framework (default: react)').choices([...FrameworkSchema.options]))
    .option('-p, --persist', 'Persist selection to .ui-system.json')
    .option('--acknowledge-restrictions', 'Confirm authorization to use a restricted system')
    .option('--project-path <path>', 'Custom project root directory')
    .action(selectCommand);

  program
    .command('selected')
    .description('Show the currently selected UI system and AI agent directives')
    .option('--project-path <path>', 'Custom project root directory')
    .action(selectedCommand);

  program
    .command('clear')
    .description('Inspect or remove the project’s persisted UI system selection')
    .option('--remove-persisted', 'Also delete the .ui-system.json file if present')
    .option('--project-path <path>', 'Custom project root directory')
    .action(clearCommand);

  program
    .command('recommend <projectType>')
    .description('Get smart design system recommendations for a project type')
    .addOption(new Option('-f, --framework <framework>', 'Target framework (default: react)').choices([...FrameworkSchema.options]))
    .option('--pref <preferences...>', 'Preferences (e.g. dense, dark-mode, high-accessibility, headless)')
    .option('--hidden-gems', 'Promote hidden gems over mainstream defaults')
    .option('-l, --limit <number>', 'Max results', value => parseLimit(value, 10))
    .action(recommendCommand);

  return program;
}
