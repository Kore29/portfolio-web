## Why

Martí Castaño's professional developer portfolio is currently written entirely in Spanish, but uses a default English html lang tag. To reach a global audience, recruiters, and international clients, the site needs a robust translation system supporting both Spanish and English, optimized for search engines (SEO).

## What Changes

- Introduce `next-intl` library as the core translation framework.
- Restructure the application routing from `/app/...` to `/app/[locale]/...` to enable locale-based subpathing (e.g., `/es/about` vs `/en/about`).
- Add language switcher component to the header/navbar allowing users to toggle between Spanish and English.
- Implement middleware to automatically detect user locale (via headers or cookies) and redirect from `/` to `/es` or `/en`.
- Externalize all user-facing strings (about page, work list, home, contact) into localized JSON translation dictionaries (`messages/es.json` and `messages/en.json`).

## Capabilities

### New Capabilities
- `internationalization-system`: Core localization and internationalization system supporting multi-language routing, automatic locale detection, localized asset loading, and language switching.

### Modified Capabilities

## Impact

- **Routing Structure**: All routes will be nested under a dynamic `[locale]` segment.
- **Dependencies**: Add `next-intl` package.
- **Project Data**: Localized details in `lib/projects.ts` will be externalized to dictionary JSON files.
- **Navbar/Components**: Navbar will be updated to include a Language Switcher component.
