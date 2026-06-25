## 1. Setup & Identity Refactoring

- [x] 1.1 Update title and professional description metadata in `app/layout.tsx`.
- [x] 1.2 Replace the placeholder bio phrase text and preserve the word-splitting GSAP animation in `sections/About.tsx`.
- [x] 1.3 Update email contact address to Martí's real email in `sections/Contact.tsx`.
- [x] 1.4 Link actual social handles (GitHub, LinkedIn, X, etc.) in `sections/Contact.tsx`.
- [x] 1.5 Replace the designer subtitle with Martí's developer identity in `app/page.tsx` PageHeader.

## 2. Project Data & Routing

- [x] 2.1 Create the static data file `lib/projects.ts` with real projects: WASP, NutriSalut, Whale, and Web Dev Notes.
- [x] 2.2 Refactor `sections/Projects.tsx` to dynamic mapping from `lib/projects.ts` and update project links to `/work/[slug]`.
- [x] 2.3 Create dynamic route file `app/work/[slug]/page.tsx` using `generateStaticParams()` to statically render specific project details.

## 3. Asset Optimization

- [x] 3.1 Rename `public/postcss.config.gif` to `public/contact-animation.gif`.
- [x] 3.2 Optimize/compress the contact animation GIF file to reduce file weight.
- [x] 3.3 Update the source paths in `sections/Contact.tsx` to load `contact-animation.gif`.
