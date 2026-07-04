## Why

The current web portfolio contains several unoptimized, duplicate, or generic-named assets (some up to 20MB in size, and a 4.8MB animated GIF) which severely impact page speed, CPU usage, mobile battery life, and overall developer experience (git clone size, build times). Optimizing these media assets, converting high-overhead formats (GIF to video), renaming generic identifiers to descriptive ones, and installing high-performance image processors (sharp) will dramatically improve performance (Core Web Vitals - LCP) and repository cleanliness.

## What Changes

- **Renaming Assets**: Rename cryptic/random file names (like `LSVZUytX1xG.png` and `IMG_5164.jpeg`) to meaningful names matching their context (e.g. `volta-preview.webp`, `profile-bw.webp`).
- **Asset Compression**: Resize and compress all JPEG/PNG project images to WebP/optimized JPG formats with a resolution cap (e.g., max width 1920px) to keep files under 300KB.
- **GIF to Video Migration**: Convert `contact-animation.gif` (4.8MB) to loopable, muted, hardware-accelerated MP4/WebM video formats under 250KB.
- **Unused Asset Deletion**: Safely delete all unused visual assets (such as `Volta.jpg` 20.4MB, `IMG_0007.jpeg` 2.1MB, and `IMG_2614.jpeg` 1.7MB) to recover 24.2MB of wasted repository storage.
- **Production Server Optimization**: Install the `sharp` library to enable high-speed runtime image resizing and compression in Next.js.
- **Codebase References Update**: Update references to the renamed assets in page files, CSS files, and Next.js project code.

## Capabilities

### New Capabilities

- `media-assets-optimization`: Establishes requirements for asset optimization including size limits, descriptive naming conventions, GIF-to-video conversion, and server-side image processing.

### Modified Capabilities

<!-- None -->

## Impact

- **Affected files**: `/public/`, `/components/`, `/sections/`, `/lib/`, `/app/`
- **Dependencies**: Add `sharp` to package dependencies.
- **Repo size**: Wasted space reduced by ~97.6% (from 54.9MB down to ~1.3MB).
