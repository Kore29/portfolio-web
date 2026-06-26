## MODIFIED Requirements

### Requirement: Multi-stage Docker Containerization
The system MUST provide a multi-stage `Dockerfile.prod` using `pnpm` that separates dependency installation, application building, and execution into isolated stages to produce a minimal production image.

#### Scenario: Efficient Docker Build
- **WHEN** the Docker image is built using the provided `Dockerfile.prod`
- **THEN** the builder stage SHALL build the standalone Next.js bundle, and the runner stage SHALL copy only the minimal standalone files and public assets into the final production image.

### Requirement: Container Orchestration
The system MUST provide a `docker-compose.prod.yml` file to manage the execution, environment variables, port mappings, and lifecycle of the portfolio container, loading production environment variables from `.env.production`.

#### Scenario: Running Services with Compose
- **WHEN** the command `docker compose -f docker-compose.prod.yml up -d` is executed
- **THEN** the containerized Next.js application SHALL run in production mode on the host network mapped to port `3000` with variables loaded from `.env.production` file.
