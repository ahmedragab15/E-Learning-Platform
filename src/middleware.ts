import { NextResponse } from "next/server";

// access to the pathname inside server component
export function middleware(request: { nextUrl: { pathname: string } }) {
  const url = request.nextUrl.pathname;
  const response = NextResponse.next();
  response.headers.set("x-pathname", url);
  return response;
}
