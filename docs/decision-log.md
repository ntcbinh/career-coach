# Decision Log

A running record of significant technical decisions (lightweight ADRs).
Add a new entry at the top for each decision. Never rewrite history — supersede
an old decision with a new entry instead.

## Template

```text
## YYYY-MM-DD — <Title>

**Status**: Proposed | Accepted | Superseded by <link>
**Context**: What problem or forces led to this decision?
**Decision**: What did we choose?
**Consequences**: Trade-offs, follow-ups, and things to watch.
```

---

## 2026-07-13 — Adopt Turborepo monorepo

**Status**: Accepted
**Context**: The project spans a web app, shared packages, and documentation
that evolve together. Separate repos would fragment tooling and versioning.
**Decision**: Use a single Turborepo monorepo with `apps/*` and `packages/*`.
**Consequences**: Shared CI pipeline and unified dependency management; requires
discipline around package boundaries to avoid tight coupling.
