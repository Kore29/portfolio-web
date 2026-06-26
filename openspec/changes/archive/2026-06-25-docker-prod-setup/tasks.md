## 1. Next.js Configuration

- [x] 1.1 Update [next.config.ts](file:///Users/kore/Documents/Code/Projects/portfolio-web/next.config.ts) to enable standalone output (`output: 'standalone'`).

## 2. Docker Files Creation

- [x] 2.1 Create `.dockerignore` file in the root directory to exclude unneeded assets and cache.
- [x] 2.2 Create a multi-stage `Dockerfile` supporting `pnpm` and copying static/public folders to the standalone destination.
- [x] 2.3 Create `docker-compose.yml` configured to bind to port 3000 and run the standalone server with `unless-stopped` restart policy.

## 3. Verification and Testing

- [x] 3.1 Build the production Docker image locally to check for build errors.
- [x] 3.2 Run the container using `docker compose up` and test that the application is fully functional at `http://localhost:3000` including images, styles, and scripts.
