## Context

The current portfolio codebase utilizes Next.js, React 19, and Tailwind CSS v4. While it operates correctly on standard desktop monitors, the layout breaks down on mobile devices (e.g. viewports under 640px) and tablet displays (e.g., viewports around 768px-1024px). Specifically, the navigation bar links overlap/wrap, the page headers shrink to illegible text, the CTA banner elements collide and cause horizontal overflows, and the timeline dates decouple from company names. This document outlines the technical design to correct these issues while retaining the dark, high-end, micro-animated design system.

## Goals / Non-Goals

**Goals:**
- Guarantee zero horizontal scroll/overflow across all viewports (from 320px up to 1920px).
- Provide a smooth mobile navigation drawer experience on screens `< 768px` using slide-down animations.
- Ensure text scaling safety by enforcing a minimum readable font size for automatically fitted page headers.
- Eliminate layout collisions in the Contact CTA banner on intermediate tablet sizes.
- Group timeline item details together on mobile views to preserve chronological layout readability.
- Standardize all aspect ratio classes using Tailwind CSS v4 arbitrary value notation.

**Non-Goals:**
- Changing the existing typographic fonts (Nohemi, Inter) or colors.
- Redesigning the desktop views (desktop layouts are visually correct and should be left intact).
- Rewriting the custom cursor logic for mouse devices (only ensuring it remains hidden on touch).

## Decisions

### Decision 1: Mobile Dropdown Overlay Implementation
- **Choice**: Implement a compact, top-sliding dropdown menu overlay with glassmorphic backdrop blur (`bg-[#1a1a1a]/95 backdrop-blur-md`) that only occupies the necessary content height.
- **Alternatives considered**:
  1. *Full-screen drawer overlay*: Forces page scroll locking and completely blocks the view of the website, which can feel heavy and intrusive.
  2. *Reflowing links to be smaller in the header*: Font sizes would become too tiny (under 12px) to tap, which violates mobile UX guidelines.
- **Detail**: Use standard React `useState` for toggle state, listen to window scroll events to automatically close the dropdown when scrolled, and clean up listeners on unmount. No body scroll-locking is needed.

### Decision 2: PageHeader Sizing Safety Constraints
- **Choice**: Modify `fitText` in `PageHeader.tsx` to enforce a lower limit of `2rem` (32px) and dynamically switch CSS class `whitespace-nowrap` to `whitespace-normal` when the font size hits that lower limit.
- **Alternatives considered**:
  1. *Pure CSS media queries*: Setting standard breakpoints (`text-5xl md:text-8xl`) loses the exact-fit dynamic look on large desktops. Enforcing a min-size inside the JS listener preserves both behaviors perfectly.
  2. *CSS clamp()*: Already used in smaller text sizes, but for the huge page titles, container fit looks cleaner. Enforcing a minimum limit is the most robust approach.

### Decision 3: Vertical-Centered Stacking for Contact CTA
- **Choice**: Use flex utilities that automatically transition from column to row at the `lg` (1024px) breakpoint.
- **Alternatives considered**:
  1. *Reducing GIF size to keep horizontal row*: On a 768px screen, if the GIF is reduced to fit, it becomes a tiny square (~100px) sitting between two huge blocks of text, losing all its visual impact. Stacking vertically keeps the elements large and visually striking.
  2. *Absolute positioning*: Tends to cause element overlaps and is hard to manage cleanly across dynamic content heights.

### Decision 4: Timeline Date Layout Realignment
- **Choice**: Conditionally display the date (Period) in the company column on mobile (`md:hidden`) and show a dedicated column only on desktop (`hidden md:block`).
- **Alternatives considered**:
  1. *Flex order re-arranging*: Since we use standard grids, shifting column items using `order-x` utilities requires changing the grid layout into a flex layout, which breaks the alignment with other grid items. Conditional visibility keeps the HTML grid structure clean and matches standard UI patterns.

## Risks / Trade-offs

- **[Risk]**: Dropdown remains open and overlaps page content if the user scrolls.
  - *Mitigation*: When the dropdown menu is opened, add a window scroll event listener that automatically calls `setIsOpen(false)` when scrolling occurs, collapsing the menu out of view.
- **[Risk]**: Mobile overlay dropdown gets stuck in open state if the screen is resized back to desktop.
  - *Mitigation*: In the Navbar, use media queries or a ResizeObserver/Window listener to automatically set `isOpen` to `false` if the viewport width crosses the `768px` threshold.
