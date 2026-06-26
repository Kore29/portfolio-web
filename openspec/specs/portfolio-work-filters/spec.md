# portfolio-work-filters Specification

## Purpose
TBD - created by archiving change portfolio-views-update. Update Purpose after archive.
## Requirements
### Requirement: Inline Category Filters
The work page MUST display inline navigation items at the top to filter projects by categories (`all`, `web`, `systems`, `ai`).

#### Scenario: Filter Projects by Category
- **WHEN** the user clicks on the `ai` filter button
- **THEN** the projects grid SHALL only display projects classified as `ai`.

### Requirement: Symmetric Grid Layout
The work page MUST display project cards in a symmetric grid of 2 columns with uniform card aspect ratios.

#### Scenario: Uniform Grid Cards
- **WHEN** the work page is rendered
- **THEN** the grid cards SHALL display their respective images in uniform aspect ratio (e.g. 4:3 or square) with text labels below the card.

