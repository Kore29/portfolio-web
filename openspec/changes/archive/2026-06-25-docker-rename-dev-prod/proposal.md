## Why

Adjust the Docker file naming convention according to the user's preference: the development configuration should be the default (no suffix, e.g., `Dockerfile` and `docker-compose.yml`), and the production configuration should be explicit (with `.prod` suffix, e.g., `Dockerfile.prod` and `docker-compose.prod.yml`). This makes running the local development environment as simple as running `docker compose up`.

## What Changes

- **Rename** `Dockerfile` (prod) to `Dockerfile.prod`.
- **Rename** `Dockerfile.dev` (dev) to `Dockerfile`.
- **Rename** `docker-compose.yml` (prod) to `docker-compose.prod.yml` and update the build directive to point to `Dockerfile.prod`.
- **Rename** `docker-compose.dev.yml` (dev) to `docker-compose.yml` and update the build directive to point to `Dockerfile`.

## Capabilities

### New Capabilities

*No new capabilities are introduced.*

### Modified Capabilities

- `docker-local-setup`: Update spec requirements to specify `Dockerfile` and `docker-compose.yml` as the local development configuration files.
- `docker-prod-setup`: Update spec requirements to specify `Dockerfile.prod` and `docker-compose.prod.yml` as the production configuration files.

## Impact

- **Renamed files:** `Dockerfile` (prod) -> `Dockerfile.prod`, `Dockerfile.dev` (dev) -> `Dockerfile`, `docker-compose.yml` (prod) -> `docker-compose.prod.yml`, `docker-compose.dev.yml` (dev) -> `docker-compose.yml`.
- **Internal references:** Adjust the `dockerfile` path inside both compose files.
