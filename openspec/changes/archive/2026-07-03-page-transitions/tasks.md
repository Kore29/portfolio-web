## 1. Core Transition Components Setup

- [x] 1.1 Create `components/TransitionLink.tsx` to handle default navigation prevention, Lenis scroll stopping, and GSAP exit animation (curtain closing) before programmatically pushing the new route.
- [x] 1.2 Update `components/PageTransition.tsx` to focus purely on the entry animation: reset scroll on pathname change, wait for next frame paint, slide the curtain open, and resume scrolling.
- [x] 1.3 Verify that the `PageTransition` curtain component is correctly mounted inside the root layout ([layout.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/layout.tsx)).

## 2. Refactoring Links to use TransitionLink

- [x] 2.1 Replace Next.js `<Link>` components in [Navbar.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/components/Navbar.tsx) (both desktop list and mobile dropdown menu) with the new `<TransitionLink>`.
- [x] 2.2 Replace Next.js `<Link>` components in [Contact.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/sections/Contact.tsx) footer links with `<TransitionLink>`.
- [x] 2.3 Replace Next.js `<Link>` components in [Projects.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/sections/Projects.tsx) home projects cards with `<TransitionLink>`.
- [x] 2.4 Replace Next.js `<Link>` components in [page.tsx](file:///Users/kore/Documents/Code/Projects/portfolio-web/app/work/page.tsx) work listing page grid with `<TransitionLink>`.
