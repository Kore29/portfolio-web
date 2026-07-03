## MODIFIED Requirements

### Requirement: Table-structured Timeline Grid
The about page MUST display a structured list of experiences, contests, and courses, where each item is separated by horizontal dividers. On desktop viewports (>= 768px), the layout SHALL be structured in three columns (Company & Role, Description, Period). On mobile viewports (< 768px), the layout SHALL stack vertically but group the Period (date) directly adjacent to the Company and Role metadata to preserve timeline reading order.

#### Scenario: Displaying Achievements Timeline on Desktop
- **WHEN** the experience section is rendered on a viewport width >= 768px
- **THEN** the layout SHALL render columns for Company/Contest and Role, description text, and period date side-by-side.

#### Scenario: Displaying Achievements Timeline on Mobile
- **WHEN** the experience section is rendered on a viewport width < 768px
- **THEN** the layout SHALL group the Period (date) with the Company and Role metadata, and render the description text underneath.
