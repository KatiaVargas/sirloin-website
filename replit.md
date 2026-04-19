# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite

## Artifacts

- `artifacts/api-server` — shared Express API server at `/api`.
- `artifacts/mockup-sandbox` — canvas/mockup preview environment at `/__mockup`.
- `artifacts/sirloin-stockade-forum` — Spanish single-page restaurant website for Sirloin Stockade – Forum Tlaquepaque served at `/`.

## Deployment Notes

- Root `vercel.json` is configured for a Vite SPA with `framework: "vite"`, `outputDirectory: "dist/public"`, and a catch-all rewrite to `/index.html`.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/sirloin-stockade-forum run dev` — run the Sirloin Stockade web app locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
