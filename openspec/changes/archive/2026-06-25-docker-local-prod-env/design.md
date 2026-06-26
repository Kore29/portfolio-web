## Context

The system requires two distinct containerized workflows: one for local development and one for production. Additionally, the configuration must support injecting environment variables from appropriate env files (`.env.local` for development and `.env.production` for production) to avoid hardcoding secrets or setup-dependent configurations.

## Goals / Non-Goals

**Goals:**
- Provide a `Dockerfile.dev` and `docker-compose.dev.yml` for local development with hot-reloading and source code mirroring.
- Load environment variables dynamically into containers using Docker Compose's `env_file` directive (`.env.local` locally and `.env.production` in production).
- Add a `.env.example` file to document available environment variables.
- Maintain the optimized multi-stage build structure for production.

**Non-Goals:**
- Including actual `.env.local` or `.env.production` files in version control. These files must remain ignored by Git.

## Decisions

### Decision 1: Dedicated Dockerfile.dev for Local Development
- **Choice:** Create a lightweight `Dockerfile.dev` specifically for dev mode.
- **Rationale:** The development container does not require multi-stage optimization or standalone bundling. It only needs Node 22, `pnpm` installed, all packages (including `devDependencies`), and to execute `pnpm dev`. Keeping the files separate avoids complex branching within a single Dockerfile.
- **Alternatives Considered:** A single `Dockerfile` with build arguments (`ARG NODE_ENV`) to run conditional logic. This increases Dockerfile complexity and makes caching harder.

### Decision 2: Anonymous Volume Mounting for node_modules in Development
- **Choice:** In `docker-compose.dev.yml`, use volumes to mount the workspace:
  ```yaml
  volumes:
    - .:/app
    - /app/node_modules
    - /app/.next
  ```
- **Rationale:** Mounting `.:/app` maps the source code into the container for hot-reloading. Mounting `/app/node_modules` and `/app/.next` as anonymous volumes ensures that the container's dependencies and cache do not overwrite or conflict with the host's dependencies (which might be built for a different OS/architecture, e.g., macOS host vs. Linux container).
- **Alternatives Considered:** Mounting everything without volume exclusions, which causes build errors due to binary incompatibilities of packages like `sharp` or native compilers.

### Decision 3: Env File Injection via docker-compose env_file
- **Choice:** Use the `env_file` block in Docker Compose files:
  - `env_file: .env.local` in `docker-compose.dev.yml`
  - `env_file: .env.production` in `docker-compose.yml`
- **Rationale:** Compose parses these files and injects them as runtime environment variables into the container. Next.js natively picks up process environment variables at runtime/build-time.
- **Alternatives Considered:** Copying `.env` files into the Docker image, which is a major security risk and forces rebuilds when configs change.

## Risks / Trade-offs

- **[Risk] Host and container dependency drift** → If dependencies are installed on the host and the lockfile changes, the container needs to re-install.
  - *Mitigation:* The `Dockerfile.dev` will run `pnpm install` during the image build process, and the `docker-compose.dev.yml` will not mount the host `node_modules`. If the user updates packages, they can rebuild using `docker compose -f docker-compose.dev.yml build`.
- **[Risk] Environment variables needed at build time in production** → Next.js standalone builds some pages statically at build-time. If those pages rely on environment variables, they must be present during `next build`.
  - *Mitigation:* If variables are required at build time, they must be declared as build arguments (`ARG`) in the Dockerfile and passed via `build.args` in Compose, or populated in a `.env` file before running the build.
