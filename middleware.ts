import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('site-auth')?.value === 'authenticated'
  const isPasswordPage = request.nextUrl.pathname === '/password'
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/')
  const isStaticFile = request.nextUrl.pathname.startsWith('/_next/') ||
                       request.nextUrl.pathname.includes('.')

  // Allow access to password page, API routes, and static files
  if (isPasswordPage || isApiRoute || isStaticFile) {
    return NextResponse.next()
  }

  // Redirect to password page if not authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/password', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
