## Context

The portfolio currently has a storage footprint of 54.9MB for image/GIF assets in the `public/` directory. Several files are unused (like `Volta.jpg` 20.4MB), several have unreadable random names (like `LSVZUytX1xG.png` 14.4MB), and others are in inefficient formats like animated GIF (`contact-animation.gif` 4.8MB). Additionally, the standalone production server lacks the `sharp` library, causing slow, resource-heavy image processing.

## Goals / Non-Goals

**Goals:**
- Optimize page loading speed (lower Largest Contentful Paint - LCP).
- Reduce active asset storage size from 54.9MB to under 1.5MB (a ~97.6% savings).
- Standardize descriptive naming conventions for all media files.
- Migrate heavy GIF animations to hardware-accelerated loops.
- Configure standalone Next.js to use `sharp` for server-side processing.

**Non-Goals:**
- Modifying design layouts, colors, animations, or component interfaces (only the underlying assets and reference links will change).
- Implementing client-side canvas-based drawing or WebGL shaders.

## Decisions

### Decision 1: Rename cryptic files to descriptive contexts
We will replace cryptic, auto-generated names with names that describe where they are used.
- **Volta Image**: `public/work/volta/LSVZUytX1xG.png` -> `public/work/volta/volta-preview.webp`
- **Lattice Image**: `public/work/lattice/Lattice.jpg` -> `public/work/lattice/lattice-preview.webp`
- **Iter Image**: `public/work/iter/Iter.jpg` -> `public/work/iter/iter-preview.webp`
- **Muvv Image**: `public/work/muvv/Muvv.jpg` -> `public/work/muvv/muvv-preview.webp`
- **About Hero Image**: `public/me/IMG_2843.jpeg` -> `public/me/profile-hero.webp`
- **About Bio Image**: `public/me/IMG_5164.jpeg` -> `public/me/profile-about.webp`
- **Contact Animation**: `public/contact-animation.gif` -> `public/contact-animation.mp4` (and webm)

### Decision 2: Convert GIF to loopable H.264 MP4 and WebM
We will convert `contact-animation.gif` to standard `.mp4` and `.webm` formats (1920px max resolution, high compression) and render them with a `<video>` tag using `autoplay loop muted playsinline` attributes.
- **Rationale**: WebM/MP4 support is baseline; they use GPU hardware acceleration and compile to ~95% smaller sizes than raw GIFs.

### Decision 3: Pre-compress and scale source assets to WebP
Before committing the new renamed assets, we will scale their dimensions (max-width `1920px` for previews, `1200px` for portrait/about images) and save them as optimized WebP (lossy, 80% quality).
- **Rationale**: WebP is widely supported and yields superior compression over JPEG/PNG. Reducing source file sizes protects server memory during dynamic runtime processing.

### Decision 4: Safe Deletion of Unused Assets
We will delete `public/work/volta/Volta.jpg` (20.4MB), `public/me/IMG_0007.jpeg` (2.1MB), and `public/me/IMG_2614.jpeg` (1.7MB).
- **Rationale**: These are confirmed to have zero import statements or references in the code.

### Decision 5: Install `sharp` in production dependencies
Add `sharp` to package dependencies to optimize Next.js standalone image routing.

## Risks / Trade-offs

- **[Risk]** Video autoplay restrictions on mobile device browsers.
  - *Mitigation*: Ensure the `<video>` tag includes the `muted`, `playsinline`, and `autoplay` attributes. iOS and Android browsers require all three to be set for background video autoplay.
- **[Risk]** Broken image/video path links.
  - *Mitigation*: Run a complete global codebase text search for renamed filenames and update them. Build the project locally with `pnpm build` to verify all static page metadata and imports are correct.
