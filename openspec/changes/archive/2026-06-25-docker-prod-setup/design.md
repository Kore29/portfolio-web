## Context

The portfolio web application is built with Next.js 16 and managed via `pnpm`. The application is targeted to deploy inside a Proxmox LXC container (IP `192.168.1.21`), which hosts multiple production project docker containers. External public access to `portfolio.kore29.com` will be managed using a Cloudflare Tunnel running on the LXC host or a separate routing container. There are no external databases or runtime environment variables needed for this application, making it a self-contained service.

## Goals / Non-Goals

**Goals:**
- Containerize the Next.js application using a multi-stage Docker build to keep the image size minimal (<150MB).
- Integrate `pnpm` inside the Docker build process efficiently.
- Provide a `docker-compose.yml` to define port mapping (`3000:3000`), container auto-restart policies, and simple configuration.
- Expose the container port to the LXC host network so it can be picked up by the Cloudflare Tunnel daemon.

**Non-Goals:**
- Setting up the Cloudflare Tunnel daemon (cloudflared) inside this project's container. The daemon runs externally on the LXC.
- Configuring SSL/TLS certificates inside the container (Cloudflare handles HTTPS termination).

## Decisions

### Decision 1: Next.js Standalone Build
- **Choice:** Set `output: 'standalone'` in [next.config.ts](file:///Users/kore/Documents/Code/Projects/portfolio-web/next.config.ts).
- **Rationale:** Next.js standalone mode analyzes the import graph and only bundles files that are actually used in production, excluding all devDependencies and unused node modules. This dramatically reduces image size.
- **Alternatives Considered:** Copying the entire `node_modules` directory into the final image, which leads to an image size of 1GB+ and slow build times.

### Decision 2: Multi-stage Dockerfile using Alpine Linux
- **Choice:** Use a 3-stage Dockerfile: `deps` (fetches packages via pnpm), `builder` (compiles next.js standalone), and `runner` (runs the app using a lightweight `node:20-alpine` image).
- **Rationale:** Separating dependency resolution, compilation, and execution prevents the build tools, compiler caches, and devDependencies from bloating the final production image. Alpine Linux is chosen for its minimal footprint and security profile.
- **Alternatives Considered:** A single-stage build using standard Debian-based Node images, which are larger and have a broader vulnerability surface.

### Decision 3: Simple docker-compose.yml Orchestration
- **Choice:** Use a docker-compose file with `restart: unless-stopped` and local port binding to `3000`.
- **Rationale:** Simplifies container deployment, updates, and troubleshooting on the Proxmox LXC. Updating the portfolio will simply require `git pull && docker compose build && docker compose up -d`.
- **Alternatives Considered:** Manual `docker run` commands, which are prone to configuration drift and hard to document.

## Risks / Trade-offs

- **[Risk] Missing static files in standalone mode** → Next.js standalone mode does not copy the `public` or `.next/static` directories by default because they are typically served by a CDN. 
  - *Mitigation:* We will explicitly copy these directories into the runtime image's workspace (`.next/standalone/public` and `.next/standalone/.next/static`) in the final stage of the `Dockerfile`.
- **[Risk] Proxmox LXC network binding mismatch** → The container could listen only on local loopback, preventing the LXC Cloudflare Tunnel daemon from accessing it.
  - *Mitigation:* The `Dockerfile` runner script will explicitly set `ENV HOSTNAME="0.0.0.0"` and `ENV PORT=3000`, ensuring the Next.js standalone server listens on all network interfaces inside the container.
