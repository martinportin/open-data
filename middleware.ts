import type { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

const defaultLocale: Locale = 'en-GB';
const locales: Locale[] = [defaultLocale, 'sv-SE'];

const pathnameHasLocale = (pathname: string) => {
  return locales.some(isInPathname(pathname));
};

const isInPathname = (pathname: string) => (locale: string) => {
  return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
};

const locale = (request: NextRequest): string | undefined => {
  const acceptLanguage = request.headers.get('accept-language')!;
  const headers: Negotiator.Headers = { 'accept-language': acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
};

const getRedirectionPathname = (request: NextRequest, pathname: string) => {
  return `/${locale(request)}${pathname}`;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathnameHasLocale(pathname)) {
    return;
  }

  request.nextUrl.pathname = getRedirectionPathname(request, pathname);
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
