# Alex Rabinovich — Portfolio

Personal portfolio site built with React + TypeScript + Vite. Content is managed via [Sanity CMS](https://sanity.io).

## Architecture

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Vite + TailwindCSS + shadcn/ui + Framer Motion |
| Data fetching | TanStack React Query v5 |
| CMS | Sanity v3 (project `tpg3gf74`, dataset `production`) |
| Studio | `studio/` subdirectory — deploy via `sanity deploy` |

Content lives in Sanity; the app fetches it via GROQ queries on page load. A skeleton loading state is shown while data loads.

## Local Development

### Frontend

```sh
cp .env.example .env   # fill in VITE_SANITY_PROJECT_ID + VITE_SANITY_DATASET
npm install
npm run dev
```

Hot reload at **http://localhost:8080**

### Sanity Studio

```sh
cd studio
npm install
npm run dev            # opens at http://localhost:3333
```

## Docker (Local)

```sh
# First run
./start.sh

# Force rebuild
./start.sh --rebuild

# Restart containers
./start.sh --restart

# Stop
./stop.sh

# Check status
./status.sh
```

Visit **http://localhost:8080**

## Tests

```sh
# Run once
npm run test

# Watch mode
npm run test:watch

# With coverage report (enforced at 100%)
npm run test:coverage
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your values — never commit `.env`.

| Variable | Required | Description |
|---|---|---|
| `VITE_SANITY_PROJECT_ID` | Yes | Sanity project ID (found at manage.sanity.io) |
| `VITE_SANITY_DATASET` | Yes | Sanity dataset name (usually `production`) |

The following variables are **deprecated** — content previously set via these env vars is now managed in Sanity:
`VITE_OWNER_NAME`, `VITE_OWNER_TITLE`, `VITE_LINKEDIN_URL`, `VITE_GITHUB_URL`, `VITE_SITE_TITLE`, `VITE_SITE_DESCRIPTION`

## Deploy to Render

1. Push repo to GitHub
2. Go to Render dashboard → **New Web Service** → **Docker** → connect the repo
   - **Region:** choose closest to your users
   - **Instance Type:** Free
   - **Do not click Deploy yet**
3. Set the following **Environment Variables**:

   | Key | Required |
   |-----|----------|
   | `VITE_SANITY_PROJECT_ID` | Yes |
   | `VITE_SANITY_DATASET` | Yes |

4. Set **Health Check Path** under Advanced: `/`
5. Click **Deploy Web Service**

Render auto-deploys on every push to `master`.
Free plan spins down after ~15 minutes of inactivity.

## Sanity Studio Deployment

```sh
cd studio
npm run deploy   # publishes to alex-rabinovich.sanity.studio
```
