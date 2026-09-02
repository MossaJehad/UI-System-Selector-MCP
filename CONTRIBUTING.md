# Contributing to UI System Selector MCP

Thank you for your interest in contributing to **UI System Selector MCP**! We welcome contributions of new design systems, documentation improvements, bug fixes, and feature enhancements.

---

## 🎯 Contribution Guidelines for New UI Systems

When proposing or adding a new design system to the registry, please follow these principles:

1. **Verify Primary Sources**:
   - Check official documentation and official repositories.
   - Do NOT invent or guess package names, docs URLs, or accessibility conformance.
   - If an attribute cannot be confirmed, leave it undefined/null rather than assuming.

2. **Accurate Metadata**:
   - Ensure `id` matches `^[a-z0-9-]+$`.
   - Provide concrete, verified `packageNames` and installation instructions.
   - List realistic `strengths`, `weaknesses`, `bestFor`, and `avoidFor`.

3. **Schema Compliance**:
   - Every system entry must pass `UISystemSchema` Zod validation (`npm test`).

4. **Modular Architecture**:
   - Create a dedicated file in `src/registry/systems/<your-system-id>.ts`.
   - Export and register in `src/registry/systems/index.ts`.
   - Avoid giant switch statements or hardcoded logic in tool handlers.

---

## 🛠️ Development Setup

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/MossaJehad/UI-System-Selector-MCP.git
   cd UI-System-Selector-MCP
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Typecheck, Lint, and Tests**:
   ```bash
   npm run typecheck
   npm run lint
   npm test
   ```

4. **Test the CLI and Server**:
   ```bash
   npm run build
   node bin/ui-systems.js list
   ```

---

## 🧪 Testing Requirements

- Any new UI system added must pass `tests/registry.test.ts`.
- Any changes to search, recommendation, or selection logic must include unit tests in `tests/`.
- Ensure all tests pass with `npm test` before opening a pull request.

---

## 📜 Code of Conduct

Please maintain a welcoming, respectful, and collaborative environment for all contributors.
