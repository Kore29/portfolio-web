## Context

The user wants the environment variable files to follow the exact same suffix convention as the Docker and Compose configurations:
- Development files have NO suffix: `Dockerfile`, `docker-compose.yml`, and `.env`.
- Production files have `.prod` suffix: `Dockerfile.prod`, `docker-compose.prod.yml`, and `.env.prod`.

## Goals / Non-Goals

**Goals:**
- Rename `.env.local` -> `.env` (development environment config).
- Rename `.env.production` -> `.env.prod` (production environment config).
- Update the `env_file` loading directives in `docker-compose.yml` (dev) and `docker-compose.prod.yml` (prod).

**Non-Goals:**
- Modifying the values or keys of environment variables.

## Decisions

### Decision 1: Align Environment Filenames to Dev/Prod Suffix Conventions
- **Choice:**
  - Dev env: `.env`
  - Prod env: `.env.prod`
- **Rationale:** Ensures complete symmetry across all Docker-related files.

### Decision 2: Update docker-compose env_file References
- **Choice:**
  - `docker-compose.yml` (dev): change `env_file` from `.env.local` to `.env`.
  - `docker-compose.prod.yml` (prod): change `env_file` from `.env.production` to `.env.prod`.

## Risks / Trade-offs

- **[Risk] Git untracked files safety** → We must ensure that the newly named `.env` and `.env.prod` files remain ignored by Git.
  - *Mitigation:* The `.gitignore` has `/` or global rules for `.env*`, which automatically ignores `.env` and `.env.prod`.
