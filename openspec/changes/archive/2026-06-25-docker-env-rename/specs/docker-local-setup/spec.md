## MODIFIED Requirements

### Requirement: Local Orchestration with Hot-Reloading
The system MUST provide a `docker-compose.yml` file to run the Next.js dev server inside the container, mount host directories for instant code syncing (hot-reloading), and inject environment variables from `.env`.

#### Scenario: Running Dev Services with Compose
- **WHEN** the command `docker compose up` is executed
- **THEN** the containerized app SHALL run Next.js dev server on host port `3000`, load configurations from `.env`, and automatically sync filesystem updates.
