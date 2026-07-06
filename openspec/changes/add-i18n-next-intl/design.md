## Context

Martí Castaño's professional developer portfolio is currently built using Next.js 16.2.7 and React 19. The layout, sections, and pages are structured using Next.js App Router.
All user-facing strings are hardcoded in Spanish inside page files (`app/page.tsx`, `app/about/page.tsx`, `app/work/page.tsx`) and project metadata (`lib/projects.ts`).
To scale the website's reach, we will implement an internationalization system that routes user requests under subpath segments (`/es` and `/en`) and renders localized content, while keeping existing styles, GSAP transitions, and animations intact.

## Goals / Non-Goals

**Goals:**
- Enable URL-based internationalization routing (e.g. `/es/about` and `/en/about`).
- Set up automatic language detection based on browser preferences.
- Set up `next-intl` as the core translation library, supporting both React Server Components (RSC) and Client Components.
- Externalize all hardcoded UI text strings into localized JSON dictionary files.
- Design and integrate a Language Switcher component in the Navigation bar.
- Keep performance high and preserve existing page transition animations.

**Non-Goals:**
- Localizing the downloadable PDF resume (`public/resume.pdf`).
- Adding support for languages other than Spanish ('es') and English ('en').

## Decisions

### Decision 1: Use `next-intl` as the translation framework
- **Rationale**: `next-intl` provides excellent support for Next.js App Router and React Server Components (RSC), meaning that translations can be rendered on the server without increasing the client bundle size. It also offers type safety for translation keys out of the box.
- **Alternatives considered**:
  - *i18next / next-i18next*: Good alternative, but historically required more complex configurations for React Server Components.
  - *Custom Context/State system*: Easier to build but lacks out-of-the-box SEO subpaths, static rendering optimization, and type safety features.

### Decision 2: Nested routing under `/[locale]` subpaths
- **Rationale**: Search engines index pages under `/es` and `/en` independently, which boosts international SEO. We can easily define a dynamic route segment `[locale]` to encapsulate pages.
- **Alternatives considered**:
  - *Subdomain routing*: e.g. `es.marti.dev` vs `en.marti.dev`. Too complex for a personal developer portfolio; requires domain DNS changes.
  - *Client-side toggle (no route changes)*: Fast to build, but Google would only index one language (the default), losing SEO benefits.

### Decision 3: Project localization via JSON dictionary referencing
- **Rationale**: Instead of maintaining two completely separate lists in `lib/projects.ts` or duplicate file versions, we keep the structural metadata (slugs, links, image paths, tags, aspect ratios) in `lib/projects.ts`, and reference the localized titles and descriptions in `messages/es.json` and `messages/en.json` using the project `slug` as the translation key prefix (e.g., `projects.volta.description`).

## Risks / Trade-offs

- **Risk**: Moving the `/app` folder structure into `app/[locale]` might break relative paths or Next.js configurations.
  - *Mitigation*: Move files carefully, verifying relative imports (such as `@/components/...` which use TypeScript path aliases, making them immune to directory depth changes).
- **Risk**: Interference with GSAP page transition component (`PageTransition`) or smooth scrolling context.
  - *Mitigation*: Validate that `PageTransition` and Lenis scroll provider behave correctly when the route changes across locales. We will verify transitions continue to trigger on `/es/...` and `/en/...`.
