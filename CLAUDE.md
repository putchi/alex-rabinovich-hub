# CLAUDE.md

## Commands

### Frontend (root)

```
npm run dev            # dev server (port 8080)
npm run build          # tsc + vite production build
npm run lint           # ESLint
npm run test           # run tests once
npm run test:watch     # watch mode
npm run test:coverage  # coverage (100% threshold enforced)
```

### Studio (`studio/`)

```
npm run dev            # Sanity Studio at http://localhost:3333
npm run deploy         # deploy studio to Sanity hosting
```

### Docker (root)

```
./start.sh    # start containers
./stop.sh     # stop containers
./status.sh   # container status
```

## Architecture

- **React 18 + TypeScript + Vite (SWC)** — SPA
- **TailwindCSS + shadcn/ui (Radix UI)** — styling
- **TanStack Query v5** — data fetching
- **Sanity v3** — headless CMS (content in Sanity cloud)
- **Docker + Nginx** — serves SPA on port 8080
- **Render** — auto-deploys on push to master

## Environment Setup

Copy `.env.example` → `.env` and fill in:

```
VITE_SANITY_PROJECT_ID   # from manage.sanity.io
VITE_SANITY_DATASET      # usually "production"
VITE_SANITY_TOKEN        # read-only viewer token (required if dataset is private)
VITE_OWNER_NAME
VITE_SITE_TITLE
VITE_SITE_DESCRIPTION
```

Never commit `.env`.

## Key Patterns / Gotchas

- **100% test coverage required** — vitest enforces 100% lines/functions/branches/statements. Tests must pass before claiming work is done.
- **`VITE_*` vars baked in at Docker build time** — not runtime env vars; passed as Docker ARGs.
- **Sanity singletons** — `siteSettings`, `hero`, `about` use singleton pattern; do not add document types without updating `studio/sanity.config.ts`.
- **`src/components/ui/`** — shadcn/ui generated components; do not edit directly, excluded from coverage.
- **Path alias** — `@/*` maps to `./src/*` (tsconfig + Vite).
- **TypeScript permissive** — `strictNullChecks: false`, `noImplicitAny: false`. Do not rely on strict type checking.
- **Two lockfiles** — `bun.lockb` (legacy) and `package-lock.json` (current). Use `npm`.

## Testing

Coverage exclusions (no tests needed for these):

- `src/components/ui/**`
- `src/components/NavLink.tsx`
- `src/hooks/**`
- `src/sanity/**`
- Config files, `main.tsx`, `App.tsx`, `vite-env.d.ts`

## Git Commit Rules

**When to commit:**
Read-only git commands (`git log`, `git diff`, `git status`, `git show`, etc.) are allowed at any time. Never run write commands — `git add`, `git commit`, `git push`, `git rebase`, `git merge`, `git reset`, `git stash`, or anything that modifies the repo state — unless explicitly instructed by the user.

**How to write commit messages:**
- Imperative mood only: "Fix bug" not "Fixed bug" or "Fixes bug"
- Subject line under 72 characters
- No emojis, no punctuation flourishes
- No filler phrases: "This commit...", "Now we can...", "Let's...", "Enhances...", "Leverages..."
- No AI-flavored words: seamlessly, robust, streamline, ensure, utilize, facilitate
- No `Co-authored-by` trailer or any AI attribution
- Body only when context is non-obvious — explain *why*, never *what* (the diff shows what)
