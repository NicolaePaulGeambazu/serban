import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 180 days in seconds
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;
const SPLIT_COOKIE = 'split-test-variant';
const QUIZ_DONE_COOKIE = 'quiz-completed';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Allow quiz page and static files always
  if (
    pathname.startsWith('/quiz') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/manifest.json') ||
    pathname.startsWith('/vercel.svg') ||
    pathname.startsWith('/logo.') ||
    pathname.startsWith('/icon-') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.gif')
  ) {
    return NextResponse.next();
  }

  // Forced variant via URL parameter
  const forcedVariant = searchParams.get('variant');
  if (forcedVariant === 'A' || forcedVariant === 'B') {
    let redirectUrl = pathname;
    if (forcedVariant === 'A') {
      redirectUrl = '/quiz';
    }
    const response = NextResponse.redirect(new URL(redirectUrl, request.url));
    response.cookies.set(SPLIT_COOKIE, forcedVariant, {
      maxAge: COOKIE_MAX_AGE,
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  // Get or set split test variant
  let variant = request.cookies.get(SPLIT_COOKIE)?.value;
  if (!variant) {
    variant = Math.random() < 0.5 ? 'A' : 'B';
    if (variant === 'A') {
      const response = NextResponse.redirect(new URL('/quiz', request.url));
      response.cookies.set(SPLIT_COOKIE, variant, {
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'lax',
      });
      return response;
    } else {
      const response = NextResponse.next();
      response.cookies.set(SPLIT_COOKIE, variant, {
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'lax',
      });
      return response;
    }
  }

  // If variant A, check if quiz is completed
  if (variant === 'A') {
    const quizDone = request.cookies.get(QUIZ_DONE_COOKIE)?.value;
    if (!quizDone && pathname !== '/quiz') {
      const response = NextResponse.redirect(new URL('/quiz', request.url));
      return response;
    }
  }

  // Otherwise, allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|manifest.json|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.gif).*)' 
  ],
}; 