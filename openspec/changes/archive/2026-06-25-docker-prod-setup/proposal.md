## Why

Provide a production-ready, containerized environment for the portfolio web application. The goal is to run the portfolio on a self-hosted Proxmox server inside an LXC container (IP `192.168.1.21`) and expose it securely to the internet through a Cloudflare Tunnel at `portfolio.kore29.com`. Containerization guarantees environment parity between development and production, optimizes server resource utilization, and showcases DevOps/SysAdmin capabilities.

## What Changes

- **Add** a multi-stage `Dockerfile` optimized for Next.js and `pnpm`.
- **Add** a `docker-compose.yml` file to orchestrate the container execution, configure port mappings, and define the service.
- **Add** a `.dockerignore` file to exclude local dependencies, build directories, and configurations from the Docker build context.
- **Modify** [next.config.ts](file:///Users/kore/Documents/Code/Projects/portfolio-web/next.config.ts) to enable Next.js standalone output (`output: 'standalone'`), drastically reducing the production image footprint.

## Capabilities

### New Capabilities

- `docker-prod-setup`: The capability to build, containerize, and run the Next.js portfolio application in a production-ready Docker environment, optimized for resource efficiency and ready to be routed via a Cloudflare Tunnel.

### Modified Capabilities

*No existing capabilities are modified.*

## Impact

- **New files:** `Dockerfile`, `docker-compose.yml`, `.dockerignore`.
- **Modified files:** [next.config.ts](file:///Users/kore/Documents/Code/Projects/portfolio-web/next.config.ts).
- **Dependencies:** None. Build process leverages existing `pnpm` configuration.
- **Deployment:** Ready to run inside the LXC container at Proxmox (IP `192.168.1.21`), listening on port 3000 (or custom configured port) for the Cloudflare Tunnel daemon connection.
