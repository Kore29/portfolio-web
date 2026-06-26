## 1. Local Development Docker Setup

- [x] 1.1 Create `Dockerfile.dev` in the root directory for local development.
- [x] 1.2 Create `docker-compose.dev.yml` mapping ports, mounting volumes (with anonymous overrides for node_modules and .next), and loading `.env.local`.

## 2. Environment Configurations & Production Updates

- [x] 2.1 Create `.env.example` in the root directory to document all environment variables.
- [x] 2.2 Update `docker-compose.yml` (production) to load env variables from `.env.production` using the `env_file` directive.

## 3. Verification and Testing

- [x] 3.1 Build and run the development container using `docker compose -f docker-compose.dev.yml up -d` and verify hot-reloading works.
- [x] 3.2 Add a test variable in `.env.local` and verify it is accessible inside the local dev container.
- [x] 3.3 Re-build the production container to ensure no build or runtime regressions occur.
