import {
  Framework,
  FrameworkInstallGuidance,
  UISystem
} from '../schemas/uiSystem.js';

const APPLICATION_FRAMEWORKS = new Set<Framework>([
  'react',
  'next',
  'vue',
  'nuxt',
  'svelte',
  'sveltekit',
  'solid',
  'astro',
  'angular',
  'react-native',
  'vanilla',
  'html-css',
  'framework-agnostic'
]);

export interface InstallationResolution {
  guidance?: FrameworkInstallGuidance;
  integrationFramework: Framework | 'generic';
}

/**
 * A CSS-only or Web Component implementation can be consumed by application
 * frameworks even when the system does not ship a framework-specific wrapper.
 */
export function supportsTargetFramework(system: UISystem, framework: Framework): boolean {
  if (system.frameworks.includes(framework)) return true;
  if (system.frameworks.includes('framework-agnostic')) return true;

  // React-based systems support Next.js
  if (framework === 'next' && system.frameworks.includes('react')) return true;
  // Vue-based systems support Nuxt
  if (framework === 'nuxt' && system.frameworks.includes('vue')) return true;
  // Svelte-based systems support SvelteKit
  if (framework === 'sveltekit' && system.frameworks.includes('svelte')) return true;

  if (!APPLICATION_FRAMEWORKS.has(framework)) return false;

  return (
    system.frameworks.includes('web-components') ||
    system.frameworks.includes('css-only') ||
    system.frameworks.includes('html-css')
  );
}

/**
 * Prefer exact installation instructions, then generic instructions, followed
 * by an explicitly documented framework-agnostic integration path.
 */
export function resolveInstallation(
  system: UISystem,
  framework: Framework
): InstallationResolution | undefined {
  if (!supportsTargetFramework(system, framework)) return undefined;

  const exact = system.installation?.[framework];
  if (exact) return { guidance: exact, integrationFramework: framework };

  const generic = system.installation?.['generic'];
  if (generic) return { guidance: generic, integrationFramework: 'generic' };

  if (
    APPLICATION_FRAMEWORKS.has(framework) &&
    system.frameworks.includes('web-components') &&
    system.installation?.['web-components']
  ) {
    return {
      guidance: system.installation['web-components'],
      integrationFramework: 'web-components'
    };
  }

  if (
    APPLICATION_FRAMEWORKS.has(framework) &&
    system.frameworks.includes('css-only') &&
    system.installation?.['css-only']
  ) {
    return {
      guidance: system.installation['css-only'],
      integrationFramework: 'css-only'
    };
  }

  return { integrationFramework: framework };
}
