# Architecture

## Overview

`career-coach` is a Turborepo monorepo. This document describes the high-level
architecture, the boundaries between apps and packages, and how data flows
through the system.

## Monorepo layout

```text
career-coach/
├── apps/
│   ├── web/          # Frontend application (Next.js)
│   └── docs/         # Project documentation
├── packages/         # Shared, reusable packages
└── turbo.json        # Turborepo pipeline configuration
```

## Apps

- **web** — The primary user-facing application.
- **docs** — Internal engineering documentation (this folder).

## Packages

Shared code lives in `packages/*` and is consumed by apps via the workspace
protocol. Keep packages focused and side-effect free where possible.

## Data flow

1. The client renders UI and issues requests to the API layer.
2. The API layer validates input, applies business logic, and talks to storage.
3. Responses flow back to the client following the [API guideline](./api-guideline.md).

## Cross-cutting concerns

- **Auth** — how sessions/tokens are established and propagated.
- **Config** — environment variables and their scoping per app.
- **Observability** — logging, metrics, and tracing conventions.

## Related documents

- [Coding standard](./coding-standard.md)
- [API guideline](./api-guideline.md)
- [Decision log](./decision-log.md)
