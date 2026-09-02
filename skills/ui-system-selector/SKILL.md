---
name: ui-system-selector
description: Discover, compare, select, and strictly adhere to professional company-backed and modern UI design systems (GitHub Primer, AWS Cloudscape, IBM Carbon, Shopify Polaris, Adobe React Spectrum, Elastic EUI, Twilio Paste, Mantine, etc.) without silently defaulting to shadcn/ui or MUI.
---

# UI System Selector Skill

This skill teaches AI coding agents how to discover, select, and strictly adhere to specialized UI design systems and component libraries for frontend development.

---

## The Golden Rules for AI Coding Agents

1. **Check Before Selecting**:
   Before proposing, generating, or importing a component library, check whether a UI system is already active by calling the `get_selected_ui_system` MCP tool or checking for a `.ui-system.json` file in the project root.

2. **Absolute Selection Loyalty**:
   Once a UI system is explicitly selected (e.g. `primer`, `cloudscape`, `carbon`, `polaris`, `eui`, `paste`), the AI **MUST NOT** silently introduce or suggest components from alternative libraries (such as `shadcn/ui`, `@mui/material`, `@chakra-ui/react`, or raw Tailwind UI copy-pastes).

3. **No Automatic Mainstream Bias**:
   Never default to `shadcn/ui` or Material UI solely because they are popular in general internet training data. Proactively introduce company-backed design systems (GitHub Primer for developer tools, AWS Cloudscape for cloud dashboards, IBM Carbon for enterprise data portals, Shopify Polaris for commerce, etc.) when they represent a superior domain fit.

4. **Honor Design Tokens & Theming**:
   Use the selected system's official design tokens, theming providers, and layout primitives. Do not hardcode arbitrary CSS styles or bypass the system's spacing and color variables.

5. **Icon System Consistency**:
   Use the icon set native to the selected system (e.g. `@primer/octicons-react` for Primer, `@carbon/icons-react` for Carbon, `@shopify/polaris-icons` for Polaris, `@tabler/icons-react` for Mantine).

6. **Prioritize Official Components Over Custom HTML**:
   If the selected design system provides a component (e.g. `Dialog`, `DataTable`, `Breadcrumb`, `Banner`, `Toast`, `Lozenge`), use the official component rather than writing a custom `<div>` structure.

7. **Strict Accessibility (a11y)**:
   Follow the selected system's accessibility conventions (WCAG AA/AAA, ARIA attributes, keyboard navigation patterns).

8. **Informational Safety**:
   The MCP server is safe and informational. Do not attempt unprompted destructive filesystem modifications. Always show package installation commands clearly.

---

## Agent Workflow Guide

### Workflow 1: Inspecting Existing Project Selection
```
Step 1: Call `get_selected_ui_system()`
Step 2: If a system is returned:
        - Read the mandatory rules in the response.
        - Import components only from the designated package names.
        - Follow the specified layout conventions.
Step 3: If no system is selected:
        - Proceed to Workflow 2 or 3.
```

### Workflow 2: User Requests a Specific UI System
User: *"Use GitHub Primer for this project."*
```
Step 1: Call `select_ui_system({ id: "primer", framework: "react", persist: true })`
Step 2: Read the returned agent directive and confirm selection to the user.
Step 3: When implementing features, query `get_component_guidance({ id: "primer", component: "dialog" })` as needed.
```

### Workflow 3: User Asks for Recommendations / Hidden Gems
User: *"Show me UI systems that work well for a developer telemetry tool. Give me something unusual or lesser known."*
```
Step 1: Call `recommend_ui_systems({
          projectType: "developer-tool",
          framework: "react",
          preferences: ["dense", "dark-mode", "less-common"],
          noveltyPreference: "prefer-hidden-gems"
        })`
Step 2: Present the top 3-5 choices (e.g., Elastic EUI, GitHub Primer, Red Hat PatternFly, Twilio Paste) explaining why each fits.
Step 3: Ask the user which one they would like to lock in for the project.
```

### Workflow 4: Comparing Candidate Systems
User: *"Compare Primer, Carbon, and Cloudscape."*
```
Step 1: Call `compare_ui_systems({ systems: ["primer", "carbon", "cloudscape"] })`
Step 2: Present the comparison matrix covering styling approach, accessibility level, component density, and ideal use cases.
```

---

## Supported UI Systems Reference Catalog

| ID | Name | Organization | Focus / Best For |
|---|---|---|---|
| `primer` | GitHub Primer | GitHub | Developer platforms, code review, GitHub apps |
| `cloudscape` | AWS Cloudscape | AWS | Cloud management, DevOps consoles, dense tables |
| `carbon` | IBM Carbon | IBM | Enterprise data analytics, multi-framework apps |
| `polaris` | Shopify Polaris | Shopify | E-commerce admin, merchant apps, billing |
| `react-spectrum` | Adobe React Spectrum | Adobe | Creative tools, AAA accessibility, canvas web apps |
| `spectrum-css` | Adobe Spectrum CSS | Adobe | Framework-agnostic CSS-only Spectrum styling |
| `spectrum-web-components` | Adobe Spectrum WC | Adobe | Lit-based Web Components with Shadow DOM |
| `eui` | Elastic UI (EUI) | Elastic | Observability, log analytics, Kibana dashboards |
| `paste` | Twilio Paste | Twilio | Inclusive communications, customer support |
| `gestalt` | Pinterest Gestalt | Pinterest | Visual discovery, masonry feeds, media curation |
| `base-web` | Uber Base Web | Uber | Logistics dispatch, real-time transport, Styletron |
| `fluent-ui` | Microsoft Fluent UI | Microsoft | Windows 11 & Microsoft 365 enterprise apps |
| `fast` | Microsoft FAST / Fluent WC | Microsoft | Standards-based Web Components for any framework |
| `atlassian` | Atlassian Design System | Atlassian | Jira & Confluence style issue tracking and workflows |
| `patternfly` | Red Hat PatternFly | Red Hat | Linux & OpenShift administration, topology graphs |
| `lightning` | Salesforce Lightning (SLDS) | Salesforce | CRM pipelines, enterprise sales record pages |
| `pajamas` | GitLab Pajamas | GitLab | Vue.js DevOps workflows and merge request diffs |
| `nord` | Nord Design System | Nordhealth | Restricted to authorized work for Nordhealth; never recommend for general projects |
| `lion` | ING Lion | ING Bank | White-label unstyled financial Web Components |
| `mantine` | Mantine | Community | 100+ components, built-in forms, charts, hooks |
| `heroui` | HeroUI (NextUI) | Community | Vibrant modern Next.js SaaS, Framer Motion |
| `radix-themes` | Radix Themes | WorkOS | Refined typography, Radix accessibility, CSS vars |
| `chakra-ui` | Chakra UI | Chakra Systems | Composable styled-system, v3 Ark UI & Panda |
| `ark-ui` | Ark UI | Chakra Systems | Multi-framework (React, Vue, Solid) Zag state machines |
| `park-ui` | Park UI | Community | Multi-framework Ark UI components styled with Panda |
| `ariakit` | Ariakit | Community | AAA accessible unstyled React primitives |
| `react-aria-components` | React Aria Components | Adobe | Headless accessible components for Tailwind/CSS |
| `kobalte` | Kobalte | Community | SolidJS unstyled accessible primitives |
| `zag-js` | Zag.js | Chakra Systems | Framework-agnostic UI state machines |
| `headless-ui` | Headless UI | Tailwind Labs | Official Tailwind unstyled primitives (React/Vue) |
| `base-ui` | Base UI | MUI Team | Modern next-gen unstyled React primitives |
| `blueprint` | Palantir Blueprint | Palantir | Desktop analytics, financial spreadsheets, dense data |
| `grommet` | Grommet | HPE | Accessible responsive enterprise UI |
| `semi-design` | Semi Design | ByteDance / TikTok | Enterprise ad consoles, creator studios, rich tables |
| `arco-design` | Arco Design | ByteDance | React and Vue enterprise design system |
| `ant-design` | Ant Design | Ant Group / Alibaba | Classic enterprise administration portals |
| `web-awesome` | Web Awesome | Font Awesome | Framework-agnostic modern web components |
| `98-css` | 98.css | Jordan Scales | Authentic Windows 98 retro desktop aesthetic |
| `xp-css` | XP.css | botoxparty | Windows XP Luna blue 2000s desktop aesthetic |
| `nes-css` | NES.css | nostalgic-css | 8-bit retro gaming NES pixel aesthetic |
| `paper-css` | PaperCSS | Community | Hand-drawn notebook pencil sketch wireframe style |
| `daisyui` | DaisyUI | Pouya Saadeghi | Tailwind CSS semantic classes and 30+ themes |
| `shadcn-ui` | shadcn/ui | Community | Radix + Tailwind copy-paste baseline for comparison |
