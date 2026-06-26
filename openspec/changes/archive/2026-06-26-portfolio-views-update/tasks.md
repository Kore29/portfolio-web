## 1. Data Models and Setup

- [x] 1.1 Create `lib/experience.ts` containing the experience dataset with the user's real items.
- [x] 1.2 Update the `Project` interface and projects array in `lib/projects.ts` to include a `categories` array (values: `web`, `systems`, `ai`).

## 2. About Me Page Refactoring

- [x] 2.1 Update [app/about/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/about/page.tsx) to implement a two-column profile layout (left: text + resume button, right: `/me/IMG_5164.jpeg` with grayscale filter).
- [x] 2.2 Add the "my experience" section in [app/about/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/about/page.tsx) structured as a clean 3-column grid separated by dividers.

## 3. Work Page Refactoring

- [x] 3.1 Refactor [app/work/page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/work/page.tsx) to support dynamic client-side filtering by category (`all`, `web`, `systems`, `ai`).
- [x] 3.2 Add inline category filters at the top of the page.
- [x] 3.3 Create the symmetric 2-column projects grid with uniform aspect ratios (`aspect-[4/3]`) and tags below each image.

## 4. Verification

- [x] 4.1 Run the TypeScript and next compile check (`pnpm run build`) to ensure no errors exist.
