import fs from 'node:fs';
import path from 'node:path';
import { SelectionState, ProjectConfigFile, ProjectConfigFileSchema } from '../schemas/selection.js';
import { Framework } from '../schemas/uiSystem.js';
import { CONFIG_FILE_NAME, ALT_CONFIG_FILE_NAME } from './constants.js';
import { logger } from '../utils/logger.js';

export class SelectionStore {
  private sessionSelections = new Map<string, SelectionState>();
  private ignoredPersistedPaths = new Set<string>();
  private defaultProjectPath: string;

  constructor(defaultProjectPath?: string) {
    this.defaultProjectPath = defaultProjectPath || process.cwd();
  }

  /**
   * Get the current selection, checking in-memory session first,
   * then falling back to any persisted configuration file in projectPath.
   */
  public getSelection(projectPath?: string): SelectionState | null {
    const targetDir = projectPath || this.defaultProjectPath;
    const projectKey = this.getProjectKey(targetDir);
    const sessionSelection = this.sessionSelections.get(projectKey);
    if (sessionSelection) return sessionSelection;
    if (this.ignoredPersistedPaths.has(projectKey)) return null;

    const persisted = this.readConfigFile(targetDir);
    if (persisted) {
      this.sessionSelections.set(projectKey, persisted);
      return persisted;
    }

    return null;
  }

  /**
   * Set selection in-memory, and optionally persist to .ui-system.json
   */
  public setSelection(
    systemId: string,
    framework: Framework = 'react',
    options?: { persist?: boolean; projectPath?: string; strictMode?: boolean }
  ): SelectionState {
    const strictMode = options?.strictMode !== false;
    const targetDir = options?.projectPath || this.defaultProjectPath;
    const projectKey = this.getProjectKey(targetDir);

    const state: SelectionState = {
      selectedSystem: systemId,
      framework,
      selectedAt: new Date().toISOString(),
      strictMode,
      source: options?.persist ? 'file' : 'session',
      configPath: options?.persist ? path.join(targetDir, CONFIG_FILE_NAME) : undefined
    };

    if (options?.persist) {
      this.writeConfigFile(targetDir, {
        $schema: 'https://raw.githubusercontent.com/MossaJehad/UI-System-Selector-MCP/main/schemas/ui-system-config.json',
        selectedSystem: systemId,
        framework,
        selectedAt: state.selectedAt,
        strictMode
      });
    }

    this.sessionSelections.set(projectKey, state);
    this.ignoredPersistedPaths.delete(projectKey);

    return state;
  }

  /**
   * Clear in-memory selection and optionally delete persisted config file.
   */
  public clearSelection(options?: { removePersisted?: boolean; projectPath?: string }): boolean {
    const targetDir = options?.projectPath || this.defaultProjectPath;
    const projectKey = this.getProjectKey(targetDir);
    const hadSession = this.sessionSelections.delete(projectKey);
    const hadPersisted = this.findConfigFilePath(targetDir) !== null;

    let removedFile = false;
    if (options?.removePersisted) {
      removedFile = this.deleteConfigFile(targetDir);
      this.ignoredPersistedPaths.delete(projectKey);
    } else {
      // Preserve the file for future server sessions while keeping it inactive
      // for the remainder of this SelectionStore session.
      this.ignoredPersistedPaths.add(projectKey);
    }

    return hadSession || hadPersisted || removedFile;
  }

  private getProjectKey(dir: string): string {
    return path.resolve(dir);
  }

  private findConfigFilePath(dir: string): string | null {
    const primary = path.join(dir, CONFIG_FILE_NAME);
    if (fs.existsSync(primary)) return primary;

    const alt = path.join(dir, ALT_CONFIG_FILE_NAME);
    if (fs.existsSync(alt)) return alt;

    return null;
  }

  private readConfigFile(dir: string): SelectionState | null {
    try {
      const filePath = this.findConfigFilePath(dir);
      if (!filePath) return null;

      const raw = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(raw);
      const validated: ProjectConfigFile = ProjectConfigFileSchema.parse(parsed);

      return {
        selectedSystem: validated.selectedSystem,
        framework: validated.framework,
        selectedAt: validated.selectedAt,
        strictMode: validated.strictMode ?? true,
        source: 'file',
        configPath: filePath,
        customRules: validated.customRules
      };
    } catch (err) {
      logger.debug(`Could not read config file in ${dir}:`, err);
      return null;
    }
  }

  private writeConfigFile(dir: string, config: ProjectConfigFile): void {
    try {
      const stat = fs.statSync(dir);
      if (!stat.isDirectory()) {
        throw new Error('Project path is not a directory.');
      }
      const filePath = path.join(dir, CONFIG_FILE_NAME);
      fs.writeFileSync(filePath, JSON.stringify(config, null, 2), 'utf-8');
      logger.info(`Persisted UI system selection to ${filePath}`);
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      throw new Error(`Failed to persist UI system selection in "${dir}": ${detail}`, { cause: err });
    }
  }

  private deleteConfigFile(dir: string): boolean {
    try {
      const configPaths = [
        path.join(dir, CONFIG_FILE_NAME),
        path.join(dir, ALT_CONFIG_FILE_NAME)
      ];
      let removed = false;

      for (const filePath of configPaths) {
        if (!fs.existsSync(filePath)) continue;
        fs.unlinkSync(filePath);
        logger.info(`Removed configuration file ${filePath}`);
        removed = true;
      }

      return removed;
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      throw new Error(`Failed to remove UI system selection in "${dir}": ${detail}`, { cause: err });
    }
  }
}

export const defaultSelectionStore = new SelectionStore();
