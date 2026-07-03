## 1. Preparation & Layout Standards

- [x] 1.1 Refactor non-standard project aspect ratios in `lib/projects.ts` to standard Tailwind CSS arbitrary formats (e.g., replace `aspect-16/11` with `aspect-[16/11]`, `aspect-4/5` with `aspect-[4/5]`, etc.).

## 2. Navigation Bar Responsiveness

- [x] 2.1 Refactor `components/Navbar.tsx` to introduce a state `isOpen` for mobile drawer toggle.
- [x] 2.2 Add mobile hamburger and exit icons to the navbar layout (visible on `< md` screens).
- [x] 2.3 Implement the full-screen slide-down menu overlay in `Navbar.tsx` for `< md` viewports.
- [x] 2.4 Add a window resize listener or CSS breakpoint triggers to automatically close the mobile menu if screen size increases past `768px`.
- [x] 2.5 Connect the mobile menu toggle to Lenis Scroll controllers to lock/stop page scroll when open, and restart scroll when closed.

## 3. Dynamic PageHeader Sizing

- [x] 3.1 Update the `fitText` resize logic in `components/PageHeader.tsx` to enforce a lower limit of `2rem` (32px).
- [x] 3.2 Implement dynamic whitespace styling in `components/PageHeader.tsx` (toggle between `whitespace-nowrap` and `whitespace-normal` depending on font size).

## 4. Section Grid & Timeline Restructuring

- [x] 4.1 Refactor grid columns in `sections/About.tsx` from `md:grid-cols-3` to `lg:grid-cols-3` (and stack columns or use 2-columns on tablet views).
- [x] 4.2 Restructure the timeline rows in `app/about/page.tsx` to group the company name, role, and period date together on mobile viewports.
- [x] 4.3 Hide the desktop-only period column on mobile views (`hidden md:block`) and show a mobile-specific period tag under the company name (`md:hidden`).

## 5. Contact Section Redesign

- [x] 5.1 Refactor `sections/Contact.tsx` CTA banner class names to support `flex-col` on screens `< 1024px` and `lg:flex-row` on screens `>= 1024px`.
- [x] 5.2 Adjust responsive width/height properties of the contact animation GIF wrapper in `sections/Contact.tsx` (using e.g., `w-56 h-56 lg:w-[400px] lg:h-[400px]` transitions).
- [x] 5.3 Eliminate stacked double-margins in the Contact section to make gaps uniform across all pages.
- [x] 5.4 Copy curriculum resume to public/resume.pdf and bind all "download resume" buttons to it.
