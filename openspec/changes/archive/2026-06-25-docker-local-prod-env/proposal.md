## Why

Support both local development and production environments using Docker containers. The local setup should enable hot-reloading (syncing code changes instantly) and loading environment variables from `.env.local` / `.env`. The production setup should run the optimized standalone build and load environment variables from `.env.production` / `.env`.

## What Changes

- **Add** a development Dockerfile (`Dockerfile.dev`) running Next.js in development mode.
- **Add** a development Docker Compose configuration (`docker-compose.dev.yml`) mapping port `3000`, mounting the workspace for hot-reloading, and loading `.env.local`.
- **Modify** `docker-compose.yml` (production) to read production environment variables from `.env.production`.
- **Add** a template environment file (`.env.example`) to document configuration options.

## Capabilities

### New Capabilities

- `docker-local-setup`: The capability to run the Next.js portfolio application locally in a development Docker container with hot-reloading and environment variables injected via local `.env` files.

### Modified Capabilities

- `docker-prod-setup`: Enhance the production container setup to dynamically load production environment variables from `.env.production`.

## Impact

- **New files:** `Dockerfile.dev`, `docker-compose.dev.yml`, `.env.example`.
- **Modified files:** `docker-compose.yml`.
- **Development environment:** Local development can be run inside Docker using `docker compose -f docker-compose.dev.yml up`.
