# Proposal: Interactive Contact Section & Dynamic OpenGraph

## Why

The portfolio currently uses a static `mailto:` link for contact, which creates friction for recruiters and clients using webmail or mobile browsers. Additionally, sharing the site on social networks (LinkedIn, Twitter) lacks a dynamic visual preview card (OG Image), reducing engagement and click-through rates.

Adding an interactive contact form powered by Next.js Server Actions, a one-click email copy button with toast notifications, availability badges, local time display, and dynamic OpenGraph image generation will significantly increase conversions, professional polish, and visual appeal.

## What Changes

- **Interactive Contact Form**: Add an interactive contact form component in the Contact section with input validation and Server Action integration for message delivery.
- **One-Click Email Copy & Toast**: Allow users to click the email address to copy `marticastanorodriguez@gmail.com` with a floating toast feedback notification.
- **Availability & Time Status**: Add a live status badge ("Available for opportunities") and live Barcelona time display.
- **Dynamic OpenGraph Images**: Implement `@vercel/og` / `next/og` in `app/[locale]/opengraph-image.tsx` to generate HD social preview images with name, title, and key project badges.

## Capabilities

### New Capabilities
- `contact-form`: Interactive message form with Server Action backend, form validation, and feedback notifications.
- `social-opengraph`: Dynamic OpenGraph image generation for social media sharing.

### Modified Capabilities

(None)

## Impact

- `sections/Contact.tsx`: Updated with form trigger, email copy handler, availability status badge, and time widget.
- `app/[locale]/opengraph-image.tsx`: New route file for dynamic OG image generation.
- `messages/[locale].json`: Add i18n keys for contact form inputs, status labels, and toast messages in all supported languages (`es`, `en`, `ca`, `de`, `fr`).
