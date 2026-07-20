FROM node:22-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable pnpm and set isolated store location
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm config set store-dir /root/.pnpm-store

# Install dependencies first (for docker cache layer)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --ignore-scripts

# Copy the rest of the source code (in case dev mount is not used)
COPY . .

EXPOSE 3000

# Bind to 0.0.0.0 for access from the host machine
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run development server
CMD ["pnpm", "dev", "--hostname", "0.0.0.0"]
