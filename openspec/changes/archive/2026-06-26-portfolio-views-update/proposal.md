## Why

The current subpages for "/work" and "/about" merely duplicate the landing page's summary sections. This change refactors these views to provide a premium, detailed presentation: a filterable grid of projects grouped by category (all, web, systems, ai) for the Work page, and a personal profile with a grayscale portrait alongside a professional/academic timeline for the About Me page.

## What Changes

- **Add** a structured experience dataset at `lib/experience.ts` to store roles, competitions, and descriptions.
- **Modify** `lib/projects.ts` to add category associations (`web`, `systems`, `ai`) for all existing projects.
- **Modify** [app/about/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/about/page.tsx) to render a two-column profile layout (bio text + grayscale profile photo) and a clean "my experience" timeline separated by dividers.
- **Modify** [app/work/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/work/page.tsx) to implement inline category buttons at the top and a symmetric grid of project cards below it.

## Capabilities

### New Capabilities

- `portfolio-experience-timeline`: Display a structured list of experiences, contests, and courses separated by borders in a responsive 3-column layout (Left: Company/Contest, Center: Description, Right: Date).
- `portfolio-work-filters`: Enable client-side project filtering by category (`all`, `web`, `systems`, `ai`) using styled capsule buttons and a uniform grid of square/proportional project cards.

### Modified Capabilities

*No existing capabilities are modified.*

## Impact

- **New files:** `lib/experience.ts`.
- **Modified files:** [app/about/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/about/page.tsx), [app/work/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/work/page.tsx), `lib/projects.ts`.
