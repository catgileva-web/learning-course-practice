# Storybook Theme Pipeline — Bootstrap + React

Demo for a lecture: design team maintains a Bootstrap theme in Storybook, builds it, and delivers to a product project.

## Project Structure

Monorepo with two sub-projects:
- `Storybook/` — Bootstrap theme source + Storybook stories (Bootstrap 5, react-bootstrap, Storybook 8, Vite 6)
- `Demo_project/` — React app consuming the Bootstrap theme (Bootstrap 5, react-bootstrap, Vite 7, React Router 7)

Theme source: `Storybook/src/theme-bootstrap/custom.scss` (SCSS variable overrides)
Theme in Demo_project: `Demo_project/src/theme/custom.scss` (same SCSS, copied from Storybook)

## Key Commands (run from root)

- `npm run storybook` — launch Storybook on :6006
- `npm run dev` — launch Demo_project on :5173

## Architecture Decisions

- All design tokens live in SCSS variable overrides (`custom.scss`) — single source of truth
- Bootstrap 5 Sass customization: override variables before importing Bootstrap modules
- Import order per Bootstrap docs: functions → variables → maps/mixins/root → utilities → components → utilities/api
- `react-bootstrap` wraps Bootstrap components as React components
- No tests — this is a demo project

## Gotchas

- Keep `custom.scss` in sync between Storybook and Demo_project
- When adding new Bootstrap components, add the corresponding `@import` to `custom.scss`
- `text-muted` is deprecated — use `text-body-secondary` instead
- Always use `controlId` on `Form.Group` for accessibility

## Documentation

Local docs available in `docs/`:
- `docs/bootstrap_docs/` — Bootstrap 5 official docs (MDX)
- `docs/angular_docs/` — Angular official docs (MD)
- `docs/mui_docs/` — MUI docs (kept for reference from lesson 4)

## Sub-project files

- `.claude/agents/mui-docs-expert.md` — docs verification agent (supports MUI, Bootstrap, Angular)
