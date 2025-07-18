import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("Token");

  if (!token && !req.nextUrl.pathname.startsWith('/auth')) {
    const loginUrl = new URL("/auth", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth|font).*)',
  ],
};