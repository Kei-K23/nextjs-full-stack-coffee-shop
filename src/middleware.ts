import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);
export default auth(() => {
  //   if (!req.auth && req.nextUrl.pathname !== "/") {
  //     const newUrl = new URL("/", req.nextUrl.origin);
  //     return Response.redirect(newUrl);
  //   }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
