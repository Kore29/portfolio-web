# Proposal: Update Portfolio Identity, Projects, and Dynamic Routing

## Why

The portfolio project currently uses template placeholder text (such as "Mike Bennet" and "brand designer based in Portland") and placeholder project items (Lattice, Volta, Iter, Muvv). Furthermore, the current project links in the home page lead to missing sub-pages (causing 404 errors), and the contact animation asset is improperly named `postcss.config.gif` and is excessively heavy (10MB).

Updating the portfolio to reflect the developer's actual identity (Martí Castaño), actual achievements (HP CodeWars, Coursera), and actual projects (WASP, NutriSalut, Whale, Web Dev Notes) is crucial to making it a functional, professional website.

## What Changes

1. **Identity & Bio Refactoring**:
   - Update `About.tsx`, `Navbar.tsx`, `Contact.tsx`, and `app/page.tsx` header text to replace placeholder text of "Mike Bennet" with "Martí Castaño" and the brand designer profile with a fullstack developer/systems/AI profile.
   - Update social links and email contacts to point to Martí's actual resources.

2. **Project Data & Routing Refactoring**:
   - Replace project data in `Projects.tsx` with WASP, NutriSalut, Whale, and Web Dev Notes.
   - Implement dynamic routing for project sub-pages at `app/work/[slug]/page.tsx` to display details for each project and prevent 404 errors.

3. **Asset Renaming & Optimization**:
   - Rename `public/postcss.config.gif` to a semantic name (e.g., `contact-animation.gif` or `touch-animation.gif`) and compress it to reduce page load impact.

4. **SEO & Metadata Improvement**:
   - Replace the generic `description: "portfolio description."` in `app/layout.tsx` with a professional metadata structure.

## Capabilities

### New Capabilities
- `portfolio-identity`: Manages the personal bio, achievements, contact details, and developer profile configurations.
- `work-dynamic-routes`: Implements dynamic page generation for the selected projects list to display details based on URL slugs.

### Modified Capabilities
*(None. There are no pre-existing capabilities registered in the workspace.)*

## Impact

- **Affected Components**: `sections/About.tsx`, `sections/Contact.tsx`, `sections/Projects.tsx`, `components/Navbar.tsx`, `app/page.tsx`, `app/layout.tsx`.
- **New Files**: `app/work/[slug]/page.tsx` for dynamic routing.
- **Assets**: `public/postcss.config.gif` will be renamed and optimized.
- **Dependencies**: No new npm dependencies are introduced.
