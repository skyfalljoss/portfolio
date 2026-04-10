# AGENTS.md

## Purpose
This repository is a personal portfolio SPA built with Vite, React 19, Tailwind CSS 4, and ESLint 9.
Use this file as the first-stop guide for agentic edits in this repo.
Prefer small, targeted changes that match the surrounding code.

## Stack
- Package manager: npm (`package-lock.json` is present).
- App runtime: React + React DOM.
- Build tool: Vite.
- Styling: Tailwind CSS with a small amount of global CSS in `src/styles/globals.css`.
- Linting: ESLint with the flat config in `eslint.config.js`.
- Deployment: GitHub Pages via `gh-pages`.

## Repository Map
- `src/App.jsx` manages page switching, theme state, and the startup animation.
- `src/main.jsx` is the React entry point.
- `src/pages/` contains top-level page components.
- `src/components/features/` contains section-level UI blocks.
- `src/components/layout/` contains navigation and background layout components.
- `src/components/ui/` contains shared primitives such as buttons, cards, and theme controls.
- `src/components/common/` contains reusable cards and titles.
- `src/data/` contains static content and derived helpers.
- `src/assets/` contains images, icons, and other imported assets.
- `src/styles/globals.css` defines global CSS variables, utilities, and animations.

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Lint the whole repo: `npm run lint`
- Preview the production build: `npm run preview`
- Prepare deploy assets: `npm run predeploy`
- Deploy to GitHub Pages: `npm run deploy`

## Focused Checks
- Lint one file: `npm run lint -- src/components/ui/Button.jsx`
- Lint one folder: `npm run lint -- src/components`
- Build is the main integration check for this repo because no test runner is configured yet.

## Tests
- There is currently no `test` script and no test runner dependency in `package.json`.
- Single-test command: not available yet because there is no test runner.
- Do not assume Jest, Vitest, or React Testing Library are available unless you add them in the same change.
- If tests are introduced later, prefer a runner command that can target one file or one test name directly.
- Until then, validate behavioral changes with `npm run lint` and `npm run build`.

## File And Export Conventions
- Use ESM `import` and `export` everywhere.
- Keep component filenames in `PascalCase` and match the default export name to the filename when practical.
- Keep hook filenames prefixed with `use`.
- Keep data/helper module names in `camelCase`.
- Use default exports for page and component modules when that matches the existing file.
- Use named exports for utility collections such as icon sets and data helpers.
- Prefer relative imports inside `src/`.
- Group imports as external packages first, then internal modules, then styles and assets.

## Formatting
- There is no formatter config in the repo, so preserve the local style of the file you touch.
- Avoid reformat-only churn in unrelated lines.
- Match the surrounding quote style in each file.
- Match the surrounding semicolon usage in each file.
- Keep JSX readable with one prop per line when a component call gets long.
- Keep Tailwind class strings intact and avoid unnecessary class reordering.
- Prefer `const` over `let` unless reassignment is required.

## React Patterns
- Prefer functional components and hooks.
- Keep state close to where it is used.
- Use `useEffect` only for real side effects such as `localStorage`, DOM class toggles, or external subscriptions.
- Use functional state updates when the next value depends on the previous value.
- Keep handlers named `handleX` and state setters named `setX`.
- Keep components focused on one job and split them when they become hard to scan.
- Do not introduce class components.

## Imports And Assets
- Import local images, icons, and PDFs from `src/assets` instead of hard-coding public paths.
- Keep asset names descriptive and stable.
- Prefer named imports for individual icons and small helpers.
- Remove unused imports promptly; ESLint should stay clean.
- Avoid circular imports between shared UI and feature modules.

## Naming
- Components and pages: `PascalCase`.
- Hooks: `useSomething`.
- Booleans: `isLoading`, `hasError`, `canSubmit`.
- Event handlers: `handleClick`, `handleSubmit`, `handleNavClick`.
- Derived collections: plural nouns such as `projects`, `blogPosts`, `contactMethods`.
- Constants: use descriptive names; avoid magic numbers in component logic.

## Types And Data
- This repo is JavaScript-only, not TypeScript.
- Prefer small, explicit object shapes over deeply nested structures.
- Use runtime guards for nullable values and data that may be missing.
- Avoid `any`-style loose patterns by keeping values narrow and predictable.
- In data modules, avoid mutating exported arrays or objects in place; derive new arrays with `map`, `filter`, `find`, or spread copies.

## Error Handling
- Fail fast when a required value is missing.
- Use `try`/`catch` around async work that can fail.
- Surface user-facing errors instead of only logging to the console.
- Clear stale error or status state before retrying an action.
- Prefer explicit fallback UI or copy over silent failure.
- Do not swallow errors unless there is a deliberate recovery path.

## UI And Tailwind
- Use Tailwind utilities for most layout and visual styling.
- Keep custom CSS in `src/styles/globals.css` for cross-cutting tokens, utilities, and animations.
- Prefer the existing theme tokens such as `primary` and `secondary`.
- Keep mobile behavior in mind; the app is expected to work well on small screens.
- Use semantic HTML elements where possible.
- Use accessible button and link patterns; icon-only actions should have an `aria-label`.
- External links opened in a new tab should use `rel="noopener noreferrer"`.

## State And Side Effects
- Keep theme, page navigation, and form state predictable and local.
- Read from `localStorage` inside component initialization only when needed.
- Write to `localStorage` from effects, not from render.
- When toggling DOM classes, keep the logic in a `useEffect` that tracks the source state.
- Keep animation and presentation state separate from business data where possible.

## Data And Content
- Static portfolio content lives in `src/data/`.
- Keep content modules sorted and deterministic.
- If a module exports a derived list, derive it from a base array rather than mutating the base array.
- Keep copy edits accurate; avoid accidental changes to URLs, image imports, and IDs.

## Working Practices
- Read the smallest relevant set of files before editing.
- Make the minimal correct change.
- Do not touch `dist/`, `node_modules/`, or generated artifacts unless the task explicitly requires it.
- Do not remove user changes that you did not create.
- Keep follow-up edits within the same area unless there is a clear reason to expand scope.
- Run `npm run lint` and `npm run build` before finishing a non-trivial change.

## Existing Repo Rules
- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md` files were present when this guide was written.
- If those files are added later, follow them before this document.

## When Adding Tests Later
- Name test files clearly, for example `ComponentName.test.jsx` or `hookName.spec.jsx`.
- Prefer small unit tests for logic-heavy helpers and focused component tests for user-visible behavior.
- Keep tests deterministic and avoid network calls unless they are mocked.
- Add a dedicated `test` script if you introduce a test runner.
