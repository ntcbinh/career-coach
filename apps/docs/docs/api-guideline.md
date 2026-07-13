# API Guideline

## Principles

- APIs are contracts. Design for the consumer, version deliberately.
- Be consistent: same casing, same error shape, same pagination everywhere.

## Conventions

- **Base path**: `/api`.
- **Resources** are plural nouns: `/api/users`, `/api/sessions`.
- **HTTP methods**: `GET` (read), `POST` (create), `PATCH` (partial update),
  `PUT` (replace), `DELETE` (remove).
- **Casing**: `camelCase` for JSON request and response bodies.

## Status codes

| Code | Meaning |
| ---- | ------- |
| 200  | OK |
| 201  | Created |
| 204  | No Content |
| 400  | Bad Request (validation failed) |
| 401  | Unauthorized |
| 403  | Forbidden |
| 404  | Not Found |
| 409  | Conflict |
| 422  | Unprocessable Entity |
| 500  | Internal Server Error |

## Error shape

All errors return a consistent envelope:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable summary",
    "details": []
  }
}
```

## Pagination

- Cursor-based by default: `?limit=20&cursor=<opaque>`.
- Responses include `nextCursor` (null when no more pages).

## Validation

- Validate all input at the boundary (e.g. with a schema validator).
- Reject unknown fields rather than silently ignoring them.

## Versioning

- Breaking changes require a new version namespace or a documented migration.
- Record notable API decisions in the [decision log](./decision-log.md).

## Related documents

- [Architecture](./architecture.md)
- [Coding standard](./coding-standard.md)
