## 1. Environment File Renaming

- [x] 1.1 Rename `.env.local` to `.env`.
- [x] 1.2 Rename `.env.production` to `.env.prod`.

## 2. Compose Config Updates

- [x] 2.1 Update `docker-compose.yml` to load `.env` (instead of `.env.local`).
- [x] 2.2 Update `docker-compose.prod.yml` to load `.env.prod` (instead of `.env.production`).

## 3. Verification

- [x] 3.1 Build and run dev container with `docker compose up -d` to verify it loads `.env`.
- [x] 3.2 Build production container with `docker compose -f docker-compose.prod.yml build` to verify correctness.
