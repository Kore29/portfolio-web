## 1. Setup & Configuration

- [x] 1.1 Install `next-intl` package dependency
- [x] 1.2 Create empty translation directories and files at `messages/es.json` and `messages/en.json`
- [x] 1.3 Create `i18n/routing.ts` and `i18n/request.ts` configuration files for next-intl routing
- [x] 1.4 Create `middleware.ts` to intercept root requests and redirect them to user locales

## 2. Directory Restructuring

- [x] 2.1 Create the dynamic route directory at `app/[locale]/`
- [x] 2.2 Move `app/layout.tsx` and `app/page.tsx` to `app/[locale]/`
- [x] 2.3 Move `app/about/` and `app/work/` directories to `app/[locale]/`
- [x] 2.4 Update `app/[locale]/layout.tsx` to accept the locale param and feed the provider
- [x] 2.5 Re-create a minimal root layout `app/layout.tsx` that supports next-intl root redirection

## 3. String Externalization and Translations

- [x] 3.1 Extract home page (`app/[locale]/page.tsx`) strings to JSON dictionaries
- [x] 3.2 Extract about page (`app/[locale]/about/page.tsx`) strings to JSON dictionaries
- [x] 3.3 Extract work page (`app/[locale]/work/page.tsx`) strings to JSON dictionaries
- [x] 3.4 Extract project items titles and descriptions from `lib/projects.ts` into JSON dictionaries

## 4. UI Components and Language Toggle

- [x] 4.1 Create a `LanguageSwitcher` component to allow seamless toggle between locales
- [x] 4.2 Integrate the `LanguageSwitcher` component into `components/Navbar.tsx`
- [x] 4.3 Update global links to use next-intl's wrapped Link components for automatic locale prefix routing

## 5. Testing and Verification

- [x] 5.1 Verify automatic locale redirection on navigating to root URL `/`
- [x] 5.2 Verify that `/en` path renders content in English and setting `html lang="en"`
- [x] 5.3 Verify that `/es` path renders content in Spanish and setting `html lang="es"`
- [x] 5.4 Verify that GSAP page transitions and smooth scrolling continue to operate correctly across locale switches
