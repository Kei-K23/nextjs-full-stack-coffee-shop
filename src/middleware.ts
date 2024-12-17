import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";
import { NextResponse } from "next/server";
import { auth as libAuth } from "@/lib/auth";

const { auth } = NextAuth(authConfig);
export default auth(async (req) => {
  const session = await libAuth();
  const adminRouteReg = new RegExp("^/admin/(?!login$).+");

  if (
    req.auth &&
    session?.user?.isAdmin &&
    !adminRouteReg.test(req.nextUrl.pathname)
  ) {
    const newUrl = new URL("/admin/dashboard", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
