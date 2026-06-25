## ADDED Requirements

### Requirement: Real Projects Data Display
The system SHALL list WASP, NutriSalut, Whale, and Web Dev Notes in the Projects component on the home and work pages, replacing Lattice, Volta, Iter, and Muvv.

#### Scenario: Displaying real projects grid
- **WHEN** a user visits "/" or "/work"
- **THEN** they see card previews for WASP, NutriSalut, Whale, and Web Dev Notes, each showcasing its correct description, tech tags, and code links.

### Requirement: Dynamic Routing for Project Detail Pages
The system SHALL resolve URLs matching `/work/[slug]` dynamically to show the specific details of the selected project (e.g., description, tags, GitHub repository link, and images/mockups), returning a 404 only if the project slug is invalid.

#### Scenario: Navigating to a project detail page
- **WHEN** a user clicks on the WASP project card
- **THEN** they are navigated to `/work/wasp` which displays details specifically loaded for WASP, with no 404 error.

### Requirement: Optimized Contact Asset
The system SHALL use a renamed, compressed version of the contact GIF animation instead of the raw 10MB `postcss.config.gif` file.

#### Scenario: Loading the contact GIF asset
- **WHEN** the contact section loads
- **THEN** it renders the optimized GIF under `public/contact-animation.gif` with a file size under 2MB.
