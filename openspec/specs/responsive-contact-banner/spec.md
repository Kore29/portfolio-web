# responsive-contact-banner Specification

## Purpose
TBD - created by archiving change responsive-layout-improvements. Update Purpose after archive.
## Requirements
### Requirement: Layout Adaptation
On desktop viewports (>= 1024px), the "get in touch" CTA banner MUST align elements horizontally (Left: "get in", Center: GIF, Right: "touch"). On mobile and tablet viewports (< 1024px), the elements MUST stack vertically and be centered to prevent collisions.

#### Scenario: Desktop Horizontal CTA Layout
- **WHEN** the contact section is rendered on a viewport width >= 1024px
- **THEN** the layout SHALL render "get in", the GIF, and "touch" in a row.

#### Scenario: Mobile/Tablet Vertical CTA Layout
- **WHEN** the contact section is rendered on a viewport width < 1024px
- **THEN** the layout SHALL center and stack "get in", the GIF, and "touch" vertically in order.

### Requirement: Proportional Media Scaling
The GIF media and typography MUST scale proportionally with the viewport size to prevent overlap and overflow.

#### Scenario: Large Viewport Scale
- **WHEN** the viewport is >= 1200px
- **THEN** the GIF SHALL render at its full size (450px) and typography SHALL be at its maximum scale.

#### Scenario: Small Viewport Scale
- **WHEN** the viewport is < 640px
- **THEN** the GIF SHALL scale down to 224px (w-56) to fit screen width safely.

