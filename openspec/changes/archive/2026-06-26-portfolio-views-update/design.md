## Context

The `/about` and `/work` pages currently reuse the landing page's bio and project summaries, failing to present detailed resume data or structured filtering. The user wants to align both pages with specific mockups:
- `/about`: Large "about me" header, 2-column bio/photo layout (grayscale photo), and a "my experience" section with fine divider lines and tabular layout.
- `/work`: Inline category selectors (`all`, `web`, `systems`, `ai`) at the top, and a symmetric 2-column grid of projects.

## Goals / Non-Goals

**Goals:**
- Add `lib/experience.ts` containing Martí's real experience data (Summer 2025 Courses, June 2025 ProgramaMe, March 2024 HP CodeWars).
- Implement a two-column bio layout with a grayscale portrait on the right of `/about`.
- Implement a 3-column table-like timeline for experience/contests on `/about`.
- Implement client-side filtering on `/work` with category links (`all`, `web`, `systems`, `ai`).
- Render a uniform 2-column project grid with clean tags and layout.

**Non-Goals:**
- Modifying the landing page (`app/page.tsx`) or project detail views (`app/work/[slug]/page.tsx`).

## Decisions

### Decision 1: Experience Data Model (`lib/experience.ts`)
- **Choice:** Create a new data file `lib/experience.ts` exporting an array of structured experience objects.
- **Rationale:** Separates content from visual JSX layout, enabling straightforward data additions in the future.

### Decision 2: Project Category Taxonomy
- **Choice:** Add a `categorySlug` array or field to the `Project` interface in `lib/projects.ts` mapping each project to `web`, `systems`, or `ai`.
  - WASP: `['web', 'systems']`
  - NutriSalut: `['web', 'ai']`
  - Whale: `['systems']`
  - Web Dev Notes: `['web']`
- **Rationale:** Enables clean client-side filtering matching the requested categories.

### Decision 3: Grayscale CSS Filter for Profile Image
- **Choice:** Render the image in `/about` using CSS filter class `grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-750`.
- **Rationale:** Recreates the premium black-and-white look from the mockup while allowing color transition on hover.

### Decision 4: Three-Column Experience Grid Layout
- **Choice:** Each experience item is rendered as a row in a CSS Grid: `grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-zinc-800`.
  - Column 1: `md:col-span-3` (Role & Organization)
  - Column 2: `md:col-span-6` (Description)
  - Column 3: `md:col-span-3 text-right text-zinc-400` (Period)
- **Rationale:** Matches the layout shown in the user's second screenshot exactly.

### Decision 5: Filter Bar and Uniform Cards Grid on /work
- **Choice:** Use a client component in `app/work/page.tsx`. Use inline filters `all`, `web`, `systems`, `ai` spaced horizontally. Below it, render a grid `grid grid-cols-1 md:grid-cols-2 gap-8`. Image wrappers will have `aspect-[4/3]` or `aspect-[16/11]` to keep cards symmetric.
- **Rationale:** Ensures clean alignment and professional visual weight.

## Risks / Trade-offs

- **[Risk] Grayscale picture quality** → The image `/me/IMG_5164.jpeg` might not be high contrast enough.
  - *Mitigation:* Apply minor CSS adjustments (`contrast-[1.1] brightness-[0.95]`) to make the grayscale pop.
- **[Risk] Page load or SSR mismatch on client-side state** → Category filter states can cause hydration issues if not handled.
  - *Mitigation:* Keep the filter state in a client component that correctly initializes on mounting or renders static shell first.
