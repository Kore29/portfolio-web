import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
  
  // Used when no locale matches
  defaultLocale: 'es', // Default language of the current content is Spanish
  
  // No prefix in default locale if we want simple `/` or always prefixed:
  // Using prefixing to keep clean subpaths for both. Let's keep default behavior.
  localePrefix: 'always'
});

// Lightweight wrappers for Next.js navigation APIs
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
