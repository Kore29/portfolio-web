## Why

The portfolio current layout suffers from styling issues and visual collisions on mobile and tablet viewports. The navigation bar items wrap awkwardly, header titles shrink to unreadable font sizes, the contact GIF overlaps with text headers, and the about timeline places dates out of reading order on narrow screens. This change makes the portfolio fully responsive, premium, and accessible across all devices without altering its core aesthetic.

## What Changes

- **Add Mobile Overlay Navigation**: Replace the cramped inline Navbar on screens `< 768px` with a clean hamburger toggle that opens a smooth, full-screen menu overlay.
- **Constrain Dynamic Headers**: Add a safety minimum font size of `2rem` (32px) and wrap support to `PageHeader` title calculations to prevent tiny, unreadable headings.
- **Redesign Contact Banner for Mobile/Tablets**: Change the side-by-side row layout to a stacked, centered vertical layout on screens `< 1024px` to avoid text and GIF collision.
- **Refactor Grids & Timeline Layouts**: Improve the About page layout by stacking the info grid on tablet viewports and reordering timeline columns on mobile so that periods (dates) are grouped with the organization details instead of appearing at the bottom.
- **Standardize Tailwind Aspect Ratios**: Refactor non-standard project aspect ratios (`aspect-16/11`, etc.) to standard Tailwind CSS v4 brackets syntax (`aspect-[16/11]`).

## Capabilities

### New Capabilities
- `mobile-navigation-system`: Full-screen overlay menu drawer that slides from the top on mobile/tablet viewports, ensuring readable navigation items and page scroll locking.
- `responsive-contact-banner`: Responsive CTA banner that switches between horizontal alignment on desktops and vertical stacked alignment on tablets/mobiles.

### Modified Capabilities
- `portfolio-experience-timeline`: Alter layout requirements on mobile devices to display periods (dates) adjacent to company/contest titles instead of stacking them at the bottom.

## Impact

- **Affected Code**:
  - `components/Navbar.tsx` (Adding menu state and overlay drawer UI)
  - `components/PageHeader.tsx` (Enforcing `minFontSize` and wrap styles)
  - `sections/Contact.tsx` (Responsive layouts and scaled sizes)
  - `sections/About.tsx` (Grid columns and gap adjustments)
  - `app/about/page.tsx` (Reordering experience grid items)
  - `lib/projects.ts` (Aspect ratio utility values)
- **APIs & Backend**: None.
- **Dependencies**: Lucide icons (`Menu`, `X`) for the mobile menu drawer.
