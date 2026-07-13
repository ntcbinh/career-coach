# Coding Standard

## Language & tooling

- **TypeScript** in strict mode across all apps and packages.
- **ESLint** + **Prettier** enforce style; formatting is not debated in review.
- Run `turbo lint` and `turbo typecheck` before opening a PR.

## Naming

- Files: `kebab-case.ts`; React components: `PascalCase.tsx`.
- Variables & functions: `camelCase`.
- Constants: `UPPER_SNAKE_CASE`.
- Types & interfaces: `PascalCase` (no `I` prefix).

## Structure

- Prefer small, single-responsibility modules.
- Colocate tests next to source as `*.test.ts`.
- Keep shared logic in `packages/*`, not copy-pasted between apps.

## Imports

- Use the workspace alias for internal packages.
- Group imports: external → internal packages → relative.
- No unused or wildcard re-exports.

## React / Next.js

- Server Components by default; opt into client components only when needed.
- Keep components pure; side effects belong in hooks or server actions.
- Follow accessibility basics (semantic HTML, labels, focus states).

## Error handling

- Fail fast on invalid input; validate at boundaries.
- Never swallow errors silently — log with context or rethrow.

## Commits

- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:` …).
- Keep commits focused and reviewable.

## Related documents

- [Architecture](./architecture.md)
- [API guideline](./api-guideline.md)
