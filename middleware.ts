import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - _next/static, _next/image (Next.js internals)
  // - Assets/static files with file extensions (e.g. favicon.ico, resume.pdf, images)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
