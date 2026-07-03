## Why

Navigating between pages in the portfolio (Home, About, Selected Work) currently causes abrupt content updates with no visual continuity. This change introduces fluid, high-end page transitions (combining a custom `TransitionLink` component and GSAP) to block instant routing and ensure the exit animation completes before the route changes, achieving a professional agency-grade UX.

## What Changes

- **Create a Custom Transition Link**: Introduce a `components/TransitionLink.tsx` component that replaces standard Next.js `<Link>` components on transition-enabled routes. It prevents default routing, freezes scroll momentum, triggers the exit animation, and programmatically navigates upon completion.
- **Create a Global Page Transition Curtain**: Create a `components/PageTransition.tsx` curtain element that covers the viewport and slides open downwards/upwards on mounting the new route.
- **Coordinate with Lenis Scroll**: Pause Lenis scrolling during transitions and reset the scroll offset immediately on pathname change while the viewport is covered.

## Capabilities

### New Capabilities
- `page-transition-system`: Smooth page navigation system that triggers entry/exit slide animations via explicit transition link tags, ensuring clean visual loading sequences.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**:
  - `components/TransitionLink.tsx` (New file for custom link handling)
  - `components/PageTransition.tsx` (Refactored to handle entry animation only)
  - `app/layout.tsx` (Integrating transition structures)
  - `components/Navbar.tsx` (Replacing links with TransitionLink)
  - `sections/Contact.tsx` (Replacing footer links with TransitionLink)
  - `sections/Projects.tsx` (Replacing home cards links with TransitionLink)
  - `app/work/page.tsx` (Replacing work cards links with TransitionLink)
- **Dependencies**: GSAP (`gsap` & `@gsap/react`).
