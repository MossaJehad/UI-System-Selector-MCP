import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { SelectionStore } from '../src/config/selectionStore.js';
import { CONFIG_FILE_NAME } from '../src/config/constants.js';

describe('Selection Store', () => {
  let tempDir: string;
  let store: SelectionStore;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ui-systems-test-'));
    store = new SelectionStore(tempDir);
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('manages session selection in memory', () => {
    expect(store.getSelection()).toBeNull();

    const selection = store.setSelection('primer', 'react', { persist: false });
    expect(selection.selectedSystem).toBe('primer');
    expect(selection.source).toBe('session');

    const current = store.getSelection();
    expect(current?.selectedSystem).toBe('primer');

    // Ensure no file was written
    expect(fs.existsSync(path.join(tempDir, CONFIG_FILE_NAME))).toBe(false);

    store.clearSelection();
    expect(store.getSelection()).toBeNull();
  });

  it('persists selection to .ui-system.json when requested', () => {
    const selection = store.setSelection('carbon', 'react', {
      persist: true,
      projectPath: tempDir
    });

    expect(selection.source).toBe('file');
    const filePath = path.join(tempDir, CONFIG_FILE_NAME);
    expect(fs.existsSync(filePath)).toBe(true);

    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    expect(fileContent.selectedSystem).toBe('carbon');
    expect(fileContent.framework).toBe('react');

    // Create a new store instance to verify it loads from file
    const freshStore = new SelectionStore(tempDir);
    const loaded = freshStore.getSelection(tempDir);
    expect(loaded?.selectedSystem).toBe('carbon');
    expect(loaded?.source).toBe('file');

    // Clear with file removal
    freshStore.clearSelection({ removePersisted: true, projectPath: tempDir });
    expect(fs.existsSync(filePath)).toBe(false);
    expect(freshStore.getSelection(tempDir)).toBeNull();
  });

  it('isolates in-memory selections and persisted configs by project path', () => {
    const secondDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ui-systems-test-second-'));
    try {
      store.setSelection('primer', 'react', { persist: true, projectPath: tempDir });
      store.setSelection('carbon', 'vue', { persist: true, projectPath: secondDir });

      expect(store.getSelection(tempDir)?.selectedSystem).toBe('primer');
      expect(store.getSelection(secondDir)?.selectedSystem).toBe('carbon');
    } finally {
      fs.rmSync(secondDir, { recursive: true, force: true });
    }
  });

  it('does not claim persistence or change session state when writing fails', () => {
    const missingDir = path.join(tempDir, 'missing');

    expect(() => store.setSelection('primer', 'react', {
      persist: true,
      projectPath: missingDir
    })).toThrow(/Failed to persist UI system selection/);
    expect(store.getSelection(missingDir)).toBeNull();
  });

  it('clears a persisted selection for the current session without deleting its file', () => {
    store.setSelection('primer', 'react', { persist: true, projectPath: tempDir });
    const filePath = path.join(tempDir, CONFIG_FILE_NAME);

    expect(store.clearSelection({ projectPath: tempDir })).toBe(true);
    expect(store.getSelection(tempDir)).toBeNull();
    expect(fs.existsSync(filePath)).toBe(true);

    const freshStore = new SelectionStore(tempDir);
    expect(freshStore.getSelection()?.selectedSystem).toBe('primer');
  });
});
