import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("jwtToken")?.value;

  // if (path.startsWith("/api/public")) {
  //   return NextResponse.next();
  // }

  // if there's token redirect to user homepage
  if (token && path === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // if there's no token redirect to visitor homepage
  if (!token && path === "/home") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // protected routes - if there's no token redirect to login
  if (isProtectedRoute(path)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secretKey = process.env.JWT_SECRET_KEY as string;
      const decoded = jwt.verify(token, secretKey) as JwtPayload;
      // protect admin routes
      if (path.startsWith("/admin") && !decoded.isAdmin) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // access to the pathname inside server component
  const response = NextResponse.next();
  response.headers.set("x-pathname", path);
  return response;
}

function isProtectedRoute(path: string): boolean {
  //todo : add the rest of the protected routes 
  const protectedRoutes = ["/dashboard", "/account", "/settings"];
  return protectedRoutes.some(route => path.startsWith(route));
}