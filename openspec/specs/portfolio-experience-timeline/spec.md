# portfolio-experience-timeline Specification

## Purpose
TBD - created by archiving change portfolio-views-update. Update Purpose after archive.
## Requirements
### Requirement: Grayscale Profile Layout
The about page MUST display a two-column section with biographical text + resume button on the left, and a profile photo `/me/IMG_5164.jpeg` with a CSS grayscale filter on the right.

#### Scenario: Profile Display on About Page
- **WHEN** the user visits `/about`
- **THEN** the page SHALL display the biographical text and the grayscale image side-by-side in responsive layout.

### Requirement: Table-structured Timeline Grid
The about page MUST display a structured list of experiences, contests, and courses, where each item is separated by horizontal dividers and structured in columns.

#### Scenario: Displaying Achievements Timeline
- **WHEN** the experience section is rendered
- **THEN** the layout SHALL render columns for Company/Contest, description text, and period date for all entries in the experience dataset.

