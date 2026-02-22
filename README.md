# Alex Rabinovich — Portfolio

Personal portfolio site built with React + TypeScript + Vite.

## Local Development

```sh
npm install
npm run dev
```

Hot reload at **http://localhost:8080**

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

# With coverage report
npm run test:coverage
```

## Deploy to Render

1. Push repo to GitHub
2. Go to Render dashboard → **New Web Service** → **Docker** → connect the repo
   - **Region:** choose closest to your users
     (Frankfurt for Europe/Middle East, Oregon for US West, Singapore for Asia)
   - **Instance Type:** Free
   - **Do not click Deploy yet**
3. Set the following **Environment Variables**:

   | Key | Required |
   |-----|----------|
   | `VITE_OWNER_NAME` | Yes |
   | `VITE_OWNER_TITLE` | Yes |
   | `VITE_LINKEDIN_URL` | Yes |
   | `VITE_GITHUB_URL` | Yes |
   | `VITE_SITE_TITLE` | Yes |
   | `VITE_SITE_DESCRIPTION` | Yes |

4. Set **Health Check Path** under Advanced: `/`
5. Click **Deploy Web Service**

Render auto-deploys on every push to `master`.
Free plan spins down after ~15 minutes of inactivity.

## Environment Variables

See `.env.example` for all required variables and descriptions.
Copy to `.env` and fill in your values — never commit `.env`.
