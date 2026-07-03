## ADDED Requirements

### Requirement: Responsive Navigation Collapsing
On desktop viewports (>= 768px), the navbar MUST show all navigation links inline. On mobile and tablet viewports (< 768px), the inline links MUST be hidden, and a menu trigger button MUST be displayed instead.

#### Scenario: Desktop Navbar Display
- **WHEN** the viewport width is >= 768px
- **THEN** the navbar SHALL display all links ("martí castaño", "work", "about me", "start a project") horizontally in a single row.

#### Scenario: Mobile Navbar Display
- **WHEN** the viewport width is < 768px
- **THEN** the navbar SHALL hide inline links and show a minimalist menu trigger button.

### Requirement: Top-Sliding Dropdown Menu Overlay
When the mobile menu trigger button is clicked, a compact, partial-height dropdown menu overlay with glassmorphic backdrop blur MUST slide down from the top, displaying the navigation links.

#### Scenario: Opening Mobile Dropdown Menu
- **WHEN** the mobile menu trigger button is clicked while the menu is closed
- **THEN** the top-sliding dropdown menu SHALL animate into view.

### Requirement: Scroll Auto-Collapse
If the user scrolls the document while the dropdown menu is open, the menu MUST automatically collapse and slide back up.

#### Scenario: Auto-Closing Menu on Scroll
- **WHEN** the user scrolls the viewport while the mobile dropdown menu is open
- **THEN** the menu SHALL automatically close and animate out of view.
