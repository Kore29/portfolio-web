# Design: Update Portfolio Identity, Projects, and Dynamic Routing

## Context

The portfolio web application is built using Next.js App Router (v16) and Tailwind CSS (v4). It currently contains static placeholder text for a designer named "Mike Bennet" and links to four non-existent project pages (/work/lattice, etc.), resulting in 404 errors. To make the site production-ready, we must replace these placeholders with real developer profile data for Martí Castaño and implement dynamic pages for his projects.

## Goals / Non-Goals

**Goals:**
- Update all text elements (bio, title, navbar, footer email, social links) to represent Martí Castaño.
- Setup a static data file containing the specifications for Martí's actual projects (WASP, NutriSalut, Whale, Web Dev Notes).
- Implement a dynamic Next.js route at `app/work/[slug]/page.tsx` to handle details rendering for each project.
- Rename and compress the 10MB `postcss.config.gif` contact asset to `contact-animation.gif` with a lower file size.
- Update SEO meta tags in `app/layout.tsx`.

**Non-Goals:**
- Do not implement any Framer Motion scroll animations or Three.js interactive components (as requested by the user).
- Do not create an external administrative dashboard or database for project management (projects will be statically configured in code).

## Decisions

### Decision 1: Project Data Storage in `/lib/projects.ts`
- **Option A (JSON file)**: Store project details in a `/public/data/projects.json` file.
- **Option B (TypeScript array) [SELECTED]**: Store project details in a static TypeScript array in `@/lib/projects.ts`.
- **Rationale**: Storing the data in a TypeScript array allows for strong typing, autocomplete, direct import of types, and avoids any client/server fetch calls.

### Decision 2: Next.js Dynamic Routing at `app/work/[slug]/page.tsx`
- **Option A (Static Routes)**: Create manual folders for each project (e.g. `app/work/wasp/page.tsx`, `app/work/nutrisalut/page.tsx`, etc.).
- **Option B (Dynamic Route with Static Generation) [SELECTED]**: Use a dynamic routing path `app/work/[slug]/page.tsx` combined with `generateStaticParams()` to pre-render project details at build time.
- **Rationale**: Option B is highly scalable. Adding a new project only requires updating the `@/lib/projects.ts` file rather than creating new folder structures and files, keeping the codebase DRY (Don't Repeat Yourself).

### Decision 3: Image Optimization & GIF Compression
- **Choice**: Rename `postcss.config.gif` to `contact-animation.gif` and compress it using a standard lossy compression algorithm to reduce size below 2MB. Use the Next.js `<Image>` component for rendering project previews to leverage Next's automatic WebP conversion and caching.

## Risks / Trade-offs

- **[Risk]**: The GSAP ScrollTrigger animation in `About.tsx` might break if the word-splitting logic is modified incorrectly.
  - **Mitigation**: Ensure that the new phrase is split exactly by space characters (`split(" ")`) and mapped using the same `<span className="word ...">` tag wrappers.
- **[Risk]**: Missing screenshot assets for WASP, NutriSalut, etc.
  - **Mitigation**: Use styled placeholder SVGs or generate clean, aesthetic mockup images using image generation tools.
