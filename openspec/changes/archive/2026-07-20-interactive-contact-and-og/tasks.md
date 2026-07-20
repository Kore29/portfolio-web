## 1. i18n Translations & Infrastructure

- [x] 1.1 Add contact form, status badge, local time, and toast translation keys to `messages/es.json`, `messages/en.json`, `messages/ca.json`, `messages/de.json`, and `messages/fr.json`
- [x] 1.2 Create Next.js Server Action (`app/actions/sendEmail.ts`) with input validation and Resend / mailto fallback logic

## 2. Interactive Contact Form & Utilities

- [x] 2.1 Build `ContactForm.tsx` component with dark theme styling, form state, error handling, and loading state
- [x] 2.2 Implement one-click email copy button with floating Toast feedback in `Contact.tsx`
- [x] 2.3 Add live Availability Status badge ("Available for opportunities") and Barcelona Live Time widget

## 3. Dynamic OpenGraph Social Preview

- [x] 3.1 Implement `app/[locale]/opengraph-image.tsx` using `next/og` ImageResponse for HD social preview generation
- [x] 3.2 Verify OpenGraph metadata in head layout tags across locales

## 4. Verification & Testing

- [x] 4.1 Test form submission, input validation, toast notifications, email copy, and OpenGraph preview
