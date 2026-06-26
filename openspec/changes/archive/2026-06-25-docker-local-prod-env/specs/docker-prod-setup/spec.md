## MODIFIED Requirements

### Requirement: Container Orchestration
The system MUST provide a `docker-compose.yml` file to manage the execution, environment variables, port mappings, and lifecycle of the portfolio container, loading production environment variables from `.env.production`.

#### Scenario: Running Services with Compose
- **WHEN** the command `docker compose up -d` is executed
- **THEN** the containerized Next.js application SHALL run in production mode on the host network mapped to port `3000` with variables loaded from `.env.production` file.
