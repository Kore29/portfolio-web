# social-opengraph Capability Spec

## Purpose
Generates dynamic OpenGraph (OG) images for social media previews when sharing portfolio links.

## Requirements

### Requirement: Dynamic OG Image Generation
The application MUST serve a dynamic OpenGraph image at `/opengraph-image` (and for localized routes).

#### Scenario: Fetching social card preview
- **WHEN** a social crawler (LinkedIn, Twitter, Discord, WhatsApp) requests the page metatags
- **THEN** Next.js executes `app/[locale]/opengraph-image.tsx` via `next/og` ImageResponse
- **AND** returns a 1200x630 PNG card featuring name, title, status, and project highlights.
