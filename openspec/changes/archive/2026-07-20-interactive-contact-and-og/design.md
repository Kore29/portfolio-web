## Context

The current `sections/Contact.tsx` contains static typography, a background video loop, mailto link, and footer navigation.
To improve visitor conversion and recruiter engagement, we need an interactive contact form, seamless email copying with toast notification, live availability and time indicators, and dynamic OpenGraph image generation.

## Goals / Non-Goals

**Goals:**
- Provide a clean, dark-themed interactive contact form inside `Contact.tsx`.
- Use Next.js Server Actions for processing email submissions (with Resend integration fallback to mailto fallback if API key is unconfigured).
- Add one-click email copying (`marticastanorodriguez@gmail.com`) with a floating toast notification.
- Show live availability badge (`🟢 Available for opportunities`) and live Barcelona local time widget (`UTC+2`).
- Add dynamic OpenGraph social preview images using `@vercel/og` (`next/og`) at `app/[locale]/opengraph-image.tsx`.

**Non-Goals:**
- Full user authentication or database storage for messages (emails are dispatched directly).

## Decisions

1. **Server Actions + Resend API**: Use Next.js Server Action (`app/actions/sendEmail.ts`) to handle form submissions securely on the server side. If `RESEND_API_KEY` is not present, degrade gracefully to a structured `mailto:` trigger.
2. **One-Click Copy Toast**: Use native `navigator.clipboard.writeText` with a simple client React state or lightweight toast notification component.
3. **Dynamic OpenGraph via `next/og`**: Create `app/[locale]/opengraph-image.tsx` rendering an ImageResponse (1200x630) with custom fonts, badges, and project highlights.

## Risks / Trade-offs

- [Resend API Key Missing] → Fallback cleanly to pre-filled `mailto:` link while keeping form UI responsive.
- [OpenGraph Font Loading] → Use standard web-safe fonts or fetch Google Fonts asynchronously inside ImageResponse options.
