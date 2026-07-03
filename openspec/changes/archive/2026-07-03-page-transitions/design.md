## Context

The portfolio uses Next.js App Router and GSAP. To implement page transitions, Next.js unmounts pages instantly, preventing traditional exit transitions. We will bypass Next.js client-side link interception by implementing a custom `<TransitionLink>` component that replaces `<Link>` on internal routes. This component prevents default navigation, locks scrolling, animates the curtain closed, and pushes the route programmatically on animation completion.

## Goals / Non-Goals

**Goals:**
- Provide a premium, fluid page transition animation (slide-in curtain) on all internal navigation events.
- Enforce 100% deterministic exit animation execution by programmatically delaying the route change until the transition completes.
- Pause smooth scrolling (Lenis) during transitions and reset the scroll position immediately upon page change to avoid visual jumps.

**Non-Goals:**
- Applying transitions to external links (e.g. GitHub) or file downloads (e.g. resume PDF).
- Intercepting anchor clicks (e.g., scrolling to `#contact`).

## Decisions

### Decision 1: Custom TransitionLink Component
- **Choice**: Create a `<TransitionLink>` component that renders a standard HTML `<a>` tag and intercepts click events in React.
- **Alternatives considered**:
  1. *Global click interceptor in capture phase*: Next.js boot processes register window listeners earlier, which often bypasses the interceptor and navigates instantly. Explicit components are fully standard and 100% reliable.
- **Detail**: The click handler calls `e.preventDefault()`, pauses Lenis scroll, and executes a GSAP timeline to slide the curtain closed. It triggers `router.push(href)` on completion.

### Decision 2: Simplified PageTransition Curtain
- **Choice**: Render the fixed curtain element (`fixed inset-x-0 bottom-0 h-screen w-screen bg-[#151515] z-[9999] pointer-events-none translate-y-full`) in the layout.
- **Detail**: It only listens to `pathname` updates. When `pathname` changes (indicating navigation completed), it resets the scroll, waits one frame via `requestAnimationFrame` + `delay: 0.1` to let the new page paint, slides open, and resumes Lenis.

### Decision 3: Link Refactoring
- **Choice**: Replace Next.js `<Link>` components with `<TransitionLink>` in:
  - Navigation menus (`Navbar.tsx` - desktop & mobile)
  - Footer page links (`sections/Contact.tsx`)
  - Portfolio project cards (`sections/Projects.tsx` and `app/work/page.tsx`)

## Risks / Trade-offs

- **[Risk]**: The user middle-clicks or ctrl-clicks the TransitionLink, which should open in a new tab but gets hijacked by the animation handler.
  - *Mitigation*: In the link click handler, check if `e.metaKey`, `e.ctrlKey`, `e.shiftKey`, or `e.button !== 0` are present, and bypass the animation to let standard browser behaviors trigger.
