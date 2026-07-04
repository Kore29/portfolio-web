## 1. Environment and Tools Setup

- [x] 1.1 Install the `sharp` library for Next.js image optimization by running `pnpm add sharp`.

## 2. Unused Asset Cleanup

- [x] 2.1 Delete unused asset `public/work/volta/Volta.jpg` (20.4MB).
- [x] 2.2 Delete unused asset `public/me/IMG_0007.jpeg` (2.1MB).
- [x] 2.3 Delete unused asset `public/me/IMG_2614.jpeg` (1.7MB).

## 3. Media Conversion and Optimization

- [x] 3.1 Convert and compress the GIF animation `public/contact-animation.gif` (4.8MB) into highly compressed loopable videos: `public/contact-animation.mp4` and `public/contact-animation.webm` (under 250KB each).
- [x] 3.2 Compress, resize (max-width 1920px), and save the main project images as WebP assets:
  - `public/work/volta/LSVZUytX1xG.png` -> `public/work/volta/volta-preview.webp`
  - `public/work/lattice/Lattice.jpg` -> `public/work/lattice/lattice-preview.webp`
  - `public/work/iter/Iter.jpg` -> `public/work/iter/iter-preview.webp`
  - `public/work/muvv/Muvv.jpg` -> `public/work/muvv/muvv-preview.webp`
- [x] 3.3 Compress, resize (max-width 1200px), and save profile photos as WebP assets:
  - `public/me/IMG_2843.jpeg` -> `public/me/profile-hero.webp`
  - `public/me/IMG_5164.jpeg` -> `public/me/profile-about.webp`

## 4. Code References Refactoring

- [x] 4.1 Update all references to the renamed project images in the projects database file (`lib/projects.ts`).
- [x] 4.2 Update references to the renamed profile photo `IMG_2843.jpeg` in `app/about/page.tsx` to `profile-hero.webp`.
- [x] 4.3 Update references to the renamed profile photo `IMG_5164.jpeg` in `sections/About.tsx` to `profile-about.webp`.
- [x] 4.4 Refactor `sections/Contact.tsx` to replace the unoptimized GIF rendering with a hardware-accelerated video tag loading `contact-animation.mp4` and `contact-animation.webm` as fallbacks.

## 5. Verification and Validation

- [x] 5.1 Run `pnpm build` to compile the application and verify that all static routing paths and metadata compilation complete successfully.
- [x] 5.2 Test video loop rendering behavior and verify that no console loading warnings or unhandled exceptions occur.
