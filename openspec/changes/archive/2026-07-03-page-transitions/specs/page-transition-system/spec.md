## ADDED Requirements

### Requirement: TransitionLink Exit Control
The portfolio MUST use a custom `<TransitionLink>` component for all internal page navigation. When clicked, it MUST prevent default browser routing and execute an exit animation (closing the full-screen curtain overlay) before triggering the route navigation programmatically.

#### Scenario: Exit Animation on Link Click
- **WHEN** the user clicks an internal `<TransitionLink>`
- **THEN** the system SHALL stop the navigation, slide the curtain up to cover the screen, and navigate only when the animation completes.

### Requirement: Page Transition Entry Animation
When a route navigation completes, the system MUST reset the scroll offset immediately while covered, wait one frame for the new page layout to render, and perform a smooth opening animation (sliding the curtain up and out of the viewport).

#### Scenario: Entrance Animation on Page Mount
- **WHEN** the pathname changes indicating navigation is complete
- **THEN** the system SHALL reset scroll, wait a frame, and slide the curtain up and out of the viewport to reveal the new page.

### Requirement: Scroll Sync and Lenis Management
During transition sequences, smooth scroll (Lenis) MUST be paused, and then resumed once the entrance transition completes.

#### Scenario: Scroll Lock and Resume
- **WHEN** a transition exit starts
- **THEN** Lenis SHALL be stopped, and it SHALL only be started again when the entrance animation finishes.
