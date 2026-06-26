## 1. File Renaming

- [x] 1.1 Rename `docker-compose.yml` to `docker-compose.prod.yml`.
- [x] 1.2 Rename `Dockerfile` to `Dockerfile.prod`.
- [x] 1.3 Rename `docker-compose.dev.yml` to `docker-compose.yml`.
- [x] 1.4 Rename `Dockerfile.dev` to `Dockerfile`.

## 2. Config Adjustments

- [x] 2.1 Update the build directive in `docker-compose.yml` (now dev) to point to `Dockerfile` and keep `env_file` loading `.env.local`.
- [x] 2.2 Update the build directive in `docker-compose.prod.yml` (now prod) to point to `Dockerfile.prod` and keep `env_file` loading `.env.production`.

## 3. Verification

- [x] 3.1 Verify building local dev container with `docker compose build`.
- [x] 3.2 Verify building production container with `docker compose -f docker-compose.prod.yml build`.
