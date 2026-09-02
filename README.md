# UI System Selector MCP

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![MCP](https://img.shields.io/badge/MCP-Model%20Context%20Protocol-green.svg)](https://modelcontextprotocol.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org)

> **Empower AI coding agents to discover, compare, select, and strictly adhere to world-class design systems and component libraries — instead of constantly defaulting to shadcn/ui, MUI, or Bootstrap.**

---

## 📌 The Problem

When developers ask AI coding agents (Claude, Cursor, Copilot, ChatGPT, Gemini, etc.) to build web interfaces, the agents almost universally default to the same few mainstream choices:
* `shadcn/ui`
* `Material UI (MUI)`
* `Tailwind UI / Raw Tailwind divs`
* `Bootstrap`

Meanwhile, the software industry has produced dozens of **extraordinary, company-backed, battle-tested design systems** engineered for specific application domains:
* **GitHub Primer** — Optimized for developer tools, code review, diffs, and GitHub workflows.
* **AWS Cloudscape** — Purpose-built for complex cloud management, DevOps consoles, and high-density resource tables.
* **IBM Carbon** — Engineered for enterprise data analytics, multi-framework apps, and accessibility.
* **Shopify Polaris** — The gold standard for merchant administration, e-commerce back-offices, and billing.
* **Adobe React Spectrum** — Built for creative canvas tools and AAA accessibility compliance.
* **Elastic UI (EUI)** — Specialized in log search, observability, Kibana-like dashboards, and telemetry.
* **Twilio Paste** — Built with radical focus on accessible customer communication portals.
* **Grommet** — Accessible, responsive enterprise interfaces with strong layout primitives.
* **Mantine, HeroUI, Ark UI, Park UI, Ariakit, Kobalte, Web Awesome**, and many more.

**UI System Selector MCP** exposes this rich universe of design systems to AI coding agents via the [Model Context Protocol (MCP)](https://modelcontextprotocol.io).

Once a user or agent selects a design system (e.g. *"Use GitHub Primer for this project"*), the MCP server locks in that selection and instructs the AI coding agent to **strictly follow that system's components, tokens, icons, and layout conventions — and NEVER silently substitute shadcn/ui or MUI.**

---

## 🚀 Key Features

* 🏛️ **40+ Curated Design Systems**: Company design systems (GitHub, AWS, IBM, Shopify, Adobe, Elastic, Twilio, Pinterest, Uber, Microsoft, Atlassian, Red Hat, Salesforce, GitLab, ING, plus Nordhealth as a clearly marked restricted-use reference), modern component systems (Mantine, HeroUI, Radix Themes, Chakra UI, Ark UI, Park UI, Ariakit, React Aria Components, Kobalte, Base UI, Blueprint, Semi Design, Arco Design, Ant Design), web components (Web Awesome, Spectrum WC, FAST), and retro aesthetic systems (98.css, XP.css, NES.css, PaperCSS, DaisyUI).
* 🔒 **Explicit Selection Enforcement**: Locks the chosen UI system for the active session or project (`.ui-system.json`). The AI receives explicit directives prohibiting unauthorized component library substitutions.
* 🔎 **Deterministic Natural-Style Search & Ranking**: Multi-factor keyword and tag ranking without external LLM latency or cost.
* 💎 **Hidden Gem Discovery**: Recommendation engine with novelty weighting (`--hidden-gems`) designed to highlight lesser-known production systems rather than echoing mainstream defaults.
* ⚖️ **Side-by-Side Comparison**: Compare 2 to 8 systems across framework support, styling approach, accessibility tier, component density, and use cases.
* 📦 **Installation & Component Guidance**: Instant access to correct package names, peer dependencies, canonical component imports, and official documentation URLs.
* 🤖 **AI Skill Package**: Includes `skills/ui-system-selector/SKILL.md` for compatible coding agents.
* 💻 **Human CLI**: Fast, colorful CLI tool (`ui-systems`) sharing the same core registry and logic.

---

## 🎬 Example Workflow

### 1. Discovery
**Developer:** *"Show me UI systems that work well for a developer telemetry dashboard. Give me something unusual or lesser known."*

**Coding Agent:** Calls `recommend_ui_systems({ projectType: "developer-tool", preferences: ["dense", "dark-mode", "less-common"], noveltyPreference: "prefer-hidden-gems" })`

**Result:**
1. **Elastic UI (EUI)** (Elastic) — Specialized for log search, data grids, and telemetry.
2. **GitHub Primer** (GitHub) — High-density developer product design system.
3. **Red Hat PatternFly** (Red Hat) — OpenShift/Kubernetes administration and topology graphs.
4. **Twilio Paste** (Twilio) — Accessible, high-trust customer communication workflows.

### 2. Explicit Selection
**Developer:** *"Let's use Primer for this project."*

**Coding Agent:** Calls `select_ui_system({ id: "primer", framework: "react", persist: true })`

**MCP Server Returns Directive:**
```
================================================================================
CRITICAL AI AGENT DIRECTIVE: UI SYSTEM LOCKED TO "GITHUB PRIMER"
================================================================================
The current project has EXPLICITLY selected "GitHub Primer" (@primer/react).
MANDATORY RULES:
• Implement all user interfaces using official Primer components and primitives.
• DO NOT introduce or suggest alternative UI libraries (shadcn/ui, MUI, Chakra).
• Use @primer/octicons-react for iconography.
• Use ThemeProvider and Box/Stack primitives for layout.
• Ensure WCAG AA compliance with Primer's focus management.
================================================================================
```

### 3. Implementation
**Developer:** *"Create the repository settings page with an API key revocation modal."*

**Coding Agent:** Calls `get_selected_ui_system()` and `get_component_guidance({ id: "primer", component: "dialog" })`. The agent generates UI using `@primer/react` (`PageLayout`, `Heading`, `ActionList`, `Dialog`, `Button`, `Flash`) rather than generating shadcn Tailwind code.

---

## 🏗️ Architecture

```
UI-System-Selector-MCP/
├── bin/
│   ├── mcp-server.js              # Executable entry point for MCP stdio server
│   └── ui-systems.js              # Executable entry point for human CLI
├── src/
│   ├── index.ts                   # Public library exports
│   ├── cli/                       # Commander CLI implementation
│   ├── server/                    # MCP Server (tools, resources, prompts)
│   ├── registry/                  # UI Systems registry & search/recommendation engines
│   │   └── systems/               # Modular per-system definitions (40+ systems)
│   ├── schemas/                   # Zod validation schemas and TypeScript types
│   ├── config/                    # Selection store and persistence (.ui-system.json)
│   └── utils/                     # Formatting, comparison matrix, and stderr logger
├── skills/
│   └── ui-system-selector/        # AI Agent skill documentation
│       └── SKILL.md
├── schemas/
│   └── ui-system-config.json      # JSON Schema for persisted project selection
└── tests/                         # Vitest unit & integration test suite
```

---

## 📦 Installation & Setup

### Prerequisites
* Node.js `>= 18.0.0`
* npm or pnpm / yarn

### Build from Source
```bash
git clone https://github.com/MossaJehad/UI-System-Selector-MCP.git
cd UI-System-Selector-MCP
npm install
npm run build
```

---

## ⚙️ MCP Client Configuration

Add `ui-system-selector-mcp` to your favorite MCP client configuration file:

### Claude Desktop
Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "ui-system-selector": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/UI-System-Selector-MCP/bin/mcp-server.js"]
    }
  }
}
```

### Cursor
Add to `.cursor/mcp.json` in your project or global Cursor settings:

```json
{
  "mcpServers": {
    "ui-system-selector": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/UI-System-Selector-MCP/bin/mcp-server.js"]
    }
  }
}
```

### Antigravity / Gemini CLI
Add to `~/.gemini/antigravity-cli/mcp/ui-system-selector.json` or project MCP settings:

```json
{
  "command": "node",
  "args": ["/ABSOLUTE/PATH/TO/UI-System-Selector-MCP/bin/mcp-server.js"]
}
```

### VS Code (Cline / Roo Code / Continue)
```json
{
  "mcpServers": {
    "ui-system-selector": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/UI-System-Selector-MCP/bin/mcp-server.js"]
    }
  }
}
```

---

## 🛠️ MCP Tools Reference

| Tool Name | Description | Key Arguments |
|---|---|---|
| `list_ui_systems` | Filter & list UI design systems in the catalog | `framework`, `category`, `organization`, `tags`, `stylingApproach`, `darkMode`, `noveltyLevel`, `limit` |
| `search_ui_systems` | Multi-factor structured & keyword search | `query`, `framework`, `category`, `noveltyPreference`, `limit` |
| `get_ui_system` | Get complete detailed metadata, docs, and AI guidelines for a system ID | `id` (e.g. `"primer"`, `"carbon"`, `"cloudscape"`) |
| `compare_ui_systems` | Compare 2 to 8 systems in a normalized matrix | `systems: ["primer", "carbon", "cloudscape"]` |
| `select_ui_system` | Explicitly select & lock the UI system for the project/session | `id`, `framework`, `persist`, `projectPath`, `strictMode`, `acknowledgeUsageRestrictions` |
| `get_selected_ui_system` | Get currently active UI system & mandatory AI rules | `projectPath` |
| `clear_selected_ui_system` | Clear the active selection | `removePersisted`, `projectPath` |
| `get_installation` | Get package names, install commands, & peer dependencies | `id`, `framework` |
| `get_component_guidance` | Get canonical component names, import code, & docs | `id`, `component` (e.g. `"button"`, `"dialog"`, `"table"`) |
| `recommend_ui_systems` | Discover top system recommendations with novelty filters | `projectType`, `framework`, `preferences`, `noveltyPreference`, `limit` |

---

## 📑 MCP Resources Reference

* `ui-systems://catalog` — Full JSON array of all registered UI systems.
* `ui-systems://selected` — Currently active selection state and agent rules.
* `ui-systems://categories` — All supported categories with system counts.
* `ui-systems://tags` — All supported tags with system counts.
* `ui-systems://systems/{id}` — Full metadata for a specific UI system ID.

---

## 💬 MCP Prompts Reference

* `build-with-selected-ui-system` — Injects the active design system's tokens, components, accessibility rules, and anti-substitution directives into the agent prompt.
* `evaluate-ui-system-fit` — Prompts an AI to analyze project requirements against top candidate design systems.

---

## 💻 Human CLI Usage

A command-line tool `ui-systems` is included for developer convenience:

```bash
# List all systems
node bin/ui-systems.js list

# Filter systems
node bin/ui-systems.js list --framework react --category developer-tool

# Search systems
node bin/ui-systems.js search "developer tools"
node bin/ui-systems.js search "unusual retro look" --hidden-gems

# Show details & component guidance
node bin/ui-systems.js show primer
node bin/ui-systems.js show primer --component dialog

# Compare systems side-by-side
node bin/ui-systems.js compare primer carbon cloudscape

# Explicitly lock a UI system for your project
node bin/ui-systems.js select primer --persist

# Check active selection
node bin/ui-systems.js selected

# Get smart recommendations
node bin/ui-systems.js recommend "cloud-console" --hidden-gems

# Clear selection
node bin/ui-systems.js clear --remove-persisted
```

---

## 📂 Project Preference Persistence

When `persist: true` is passed to `select_ui_system` or `--persist` is used with the CLI, a lightweight configuration file `.ui-system.json` is saved in the project root:

```json
{
  "$schema": "https://raw.githubusercontent.com/MossaJehad/UI-System-Selector-MCP/main/schemas/ui-system-config.json",
  "selectedSystem": "primer",
  "framework": "react",
  "selectedAt": "2026-09-02T14:00:00.000Z",
  "strictMode": true
}
```

This file can be committed to your repository so all team members and AI coding assistants automatically adhere to the same design system.
The referenced JSON Schema is included in this repository and in the published npm package, so editors can validate committed configuration files.

---

## ➕ Adding a New UI System to the Registry

Adding a new design system is simple and completely modular:

1. Create a new file in `src/registry/systems/<system-id>.ts`:
```typescript
import { UISystem } from '../../schemas/uiSystem.js';

export const mySystem: UISystem = {
  id: 'my-system',
  name: 'My Design System',
  organization: 'Acme Corp',
  description: 'Enterprise design system for high-performance SaaS.',
  category: 'enterprise',
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@acme/ui'],
  docsUrl: 'https://design.acme.com',
  repositoryUrl: 'https://github.com/acme/ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: { available: true },
  icons: { available: true },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Precision engineering aesthetic.',
  noveltyLevel: 'hidden-gem',
  bestFor: ['Enterprise dashboards'],
  avoidFor: ['Casual gaming apps'],
  strengths: ['Great data tables'],
  weaknesses: ['React only'],
  tags: ['enterprise', 'dense', 'dark-mode'],
  aiInstructions: {
    principles: ['Wrap root in <AcmeProvider>.'],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Acme theme tokens.',
    iconUsage: 'Use @acme/icons.',
    layoutConventions: 'Use Acme Grid and Flex.'
  }
};
```
2. Export your system in `src/registry/systems/index.ts` and add it to `ALL_UI_SYSTEMS`.
3. Run `npm test` to verify that your new system passes strict Zod schema validation!

---

## 🧪 Testing & Quality

Run the comprehensive Vitest test suite:

```bash
# Run unit tests
npm test

# Run typecheck
npm run typecheck

# Run linter
npm run lint

# Run tests with V8 coverage
npm run test:coverage

# Verify the production build
npm run build

# Inspect exactly what would be published to npm
npm pack --dry-run
```

---

## 🗺️ Roadmap

- [ ] Automatic detection of UI libraries in existing repositories (`package.json` inspector tool)
- [ ] Live remote community registry updates
- [ ] Figma token sync references
- [ ] Component documentation live search integration
- [ ] Interactive MCP App webview UI for visual browsing

---

## 📄 License

MIT © [Mousa Hasouneh](LICENSE)
