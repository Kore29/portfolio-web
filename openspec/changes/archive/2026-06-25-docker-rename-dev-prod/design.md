## Context

The user has requested to invert the Docker file naming convention. Development files should be the default (no suffix: `Dockerfile` and `docker-compose.yml`), while production files should be explicit (with `.prod` suffix: `Dockerfile.prod` and `docker-compose.prod.yml`).

## Goals / Non-Goals

**Goals:**
- Swap filenames so that the development configuration runs by default (`Dockerfile` and `docker-compose.yml`).
- Swap filenames so that the production configuration is explicitly targeted (`Dockerfile.prod` and `docker-compose.prod.yml`).
- Update internal Compose configuration references (`dockerfile` build path and environment variables).

**Non-Goals:**
- Changing the configurations or dependencies themselves. The content of development and production setups remains identical.

## Decisions

### Decision 1: Rename Local Dev to Default and Production to Suffix
- **Choice:**
  - `Dockerfile.dev` (dev) -> `Dockerfile`
  - `docker-compose.dev.yml` (dev) -> `docker-compose.yml`
  - `Dockerfile` (prod) -> `Dockerfile.prod`
  - `docker-compose.yml` (prod) -> `docker-compose.prod.yml`
- **Rationale:** Aligns with the user's workspace convention. Local dev is ran frequently, so running it with default `docker compose up` without extra flags is optimal.

### Decision 2: Update Build Directives
- **Choice:**
  - In `docker-compose.yml` (now dev): point to `dockerfile: Dockerfile` and load `env_file: .env.local`.
  - In `docker-compose.prod.yml` (now prod): point to `dockerfile: Dockerfile.prod` and load `env_file: .env.production`.
- **Rationale:** Ensures Docker Compose loads the correct files after renaming them.

## Risks / Trade-offs

- **[Risk] Path reference errors during execution** → If any file points to a non-existent Dockerfile, build will fail.
  - *Mitigation:* We will verify the content of both files immediately after renaming.
