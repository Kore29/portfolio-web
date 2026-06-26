# docker-prod-setup Specification

## Purpose
TBD - created by archiving change docker-prod-setup. Update Purpose after archive.
## Requirements
### Requirement: Standalone Production Build
The Next.js application MUST be configured to compile in standalone mode for production builds to minimize the final container size.

#### Scenario: Configured for Standalone Build
- **WHEN** the application is compiled using `next build`
- **THEN** Next.js SHALL generate a standalone server bundle inside `.next/standalone` containing only the necessary production files and node_modules.

### Requirement: Multi-stage Docker Containerization
The system MUST provide a multi-stage `Dockerfile.prod` using `pnpm` that separates dependency installation, application building, and execution into isolated stages to produce a minimal production image.

#### Scenario: Efficient Docker Build
- **WHEN** the Docker image is built using the provided `Dockerfile.prod`
- **THEN** the builder stage SHALL build the standalone Next.js bundle, and the runner stage SHALL copy only the minimal standalone files and public assets into the final production image.

### Requirement: Container Orchestration
The system MUST provide a `docker-compose.prod.yml` file to manage the execution, environment variables, port mappings, and lifecycle of the portfolio container, loading production environment variables from `.env.prod`.

#### Scenario: Running Services with Compose
- **WHEN** the command `docker compose -f docker-compose.prod.yml up -d` is executed
- **THEN** the containerized Next.js application SHALL run in production mode on the host network mapped to port `3000` with variables loaded from `.env.prod` file.

### Requirement: Network Binding for Cloudflare Tunnel
The containerized Next.js application MUST bind to all network interfaces to allow routing through a Cloudflare Tunnel running in the Proxmox LXC container.

#### Scenario: Listening on 0.0.0.0
- **WHEN** the containerized server starts
- **THEN** the Next.js server SHALL listen on host `0.0.0.0` at port `3000` to allow proxying external requests from the Cloudflare Tunnel daemon.

