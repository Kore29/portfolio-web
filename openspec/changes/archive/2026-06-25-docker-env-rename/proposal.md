## Why

Standardize the environment file naming convention to match the Docker files: the development environment loads variables from `.env` (no suffix), and the production environment loads variables from `.env.prod` (with `.prod` suffix).

## What Changes

- **Rename** `.env.local` to `.env` (development configurations).
- **Rename** `.env.production` to `.env.prod` (production configurations).
- **Modify** `docker-compose.yml` (dev) to load `.env` instead of `.env.local`.
- **Modify** `docker-compose.prod.yml` (prod) to load `.env.prod` instead of `.env.production`.

## Capabilities

### New Capabilities

*No new capabilities are introduced.*

### Modified Capabilities

- `docker-local-setup`: Update spec requirements to specify `.env` as the local development environment file.
- `docker-prod-setup`: Update spec requirements to specify `.env.prod` as the production environment file.

## Impact

- **Renamed files:** `.env.local` -> `.env`, `.env.production` -> `.env.prod`.
- **Internal references:** Adjust the `env_file` path inside both compose files.
