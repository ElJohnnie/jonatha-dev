import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  locales,
  defaultLocale: 'pt',
  localePrefix,
});

export const config = {
  matcher: ['/', '/(pt|en)/:path*'],
};
