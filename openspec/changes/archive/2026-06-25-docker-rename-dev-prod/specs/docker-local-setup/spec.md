## MODIFIED Requirements

### Requirement: Local Development Docker Containerization
The system MUST provide a `Dockerfile` that sets up a Node.js development environment containing all project dependencies (including devDependencies) to run the Next.js dev server.

#### Scenario: Building Local Container
- **WHEN** the development Docker image is built using `Dockerfile`
- **THEN** the image SHALL be prepared to run Next.js in development mode and expose port `3000`.

### Requirement: Local Orchestration with Hot-Reloading
The system MUST provide a `docker-compose.yml` file to run the Next.js dev server inside the container, mount host directories for instant code syncing (hot-reloading), and inject environment variables from `.env.local`.

#### Scenario: Running Dev Services with Compose
- **WHEN** the command `docker compose up` is executed
- **THEN** the containerized app SHALL run Next.js dev server on host port `3000`, load configurations from `.env.local`, and automatically sync filesystem updates.
