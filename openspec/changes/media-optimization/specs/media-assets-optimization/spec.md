## ADDED Requirements

### Requirement: Descriptive and organized asset naming
The system SHALL use descriptive and clean filenames for all visual and media resources in the `public/` directory, avoiding cryptic strings, camera defaults, or uninformative titles.

#### Scenario: Code references match visual contexts
- **WHEN** a developer inspects the project assets folder or codebase references
- **THEN** all asset filenames explicitly indicate their purpose and corresponding page/component (e.g. `volta-preview.webp`, `profile-portrait.webp`).

### Requirement: Strict media payload limits
All active visual and image assets in the `public/` directory MUST be compressed and optimized to keep their payload sizes under 300KB each.

#### Scenario: Loading portfolio pages
- **WHEN** a user navigates to any page or section showing projects or profile photos
- **THEN** the browser loads highly compressed and properly scaled image assets that are under 300KB in size.

### Requirement: Hardware-Accelerated Video Loops for Animations
High-overhead animated GIF elements MUST be replaced by loopable, muted, and playsinline MP4 or WebM video streams to allow GPU hardware acceleration and minimize CPU load.

#### Scenario: Contact section animation display
- **WHEN** the contact section banner is rendered on screen
- **THEN** the browser renders a lightweight MP4 or WebM video stream in a silent, autoplaying, infinite loop under 250KB in size.

### Requirement: Server-Side Image Optimization
Next.js standalone server builds MUST use the high-performance image processing engine `sharp` for active runtime operations.

#### Scenario: Standalone production server startup
- **WHEN** the production build runs
- **THEN** Next.js uses the installed `sharp` library to dynamically process, resize, and cache images.
