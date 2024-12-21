import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";
import { auth as libAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const session = await libAuth();

  const adminRouteReg = /^\/admin(\/(?!login$).*)?/; // Matches /admin except /admin/login
  const isAdminRoute = adminRouteReg.test(req.nextUrl.pathname);
  const isCheckoutRoute = req.nextUrl.pathname === "/checkout"; // Check if the route is /checkout

  // Define destination URLs to prevent infinite loops
  const adminDashboardUrl = new URL("/admin", req.nextUrl.origin);
  const adminLoginUrl = new URL("/admin/login", req.nextUrl.origin);
  const userHomeUrl = new URL("/", req.nextUrl.origin);
  const checkoutLoginUrl = new URL("/auth", req.nextUrl.origin); // Redirect for checkout route

  // If no session exists, redirect to appropriate login page
  if (!session) {
    if (isAdminRoute && req.nextUrl.pathname !== "/admin/login") {
      return NextResponse.redirect(adminLoginUrl);
    } else if (isCheckoutRoute) {
      return NextResponse.redirect(checkoutLoginUrl); // Redirect to login for /checkout
    } else if (!isAdminRoute) {
      return NextResponse.next();
    }
    return NextResponse.next();
  }

  const isAdmin = session?.user?.isAdmin;

  // If the user is an admin
  if (isAdmin) {
    if (!isAdminRoute && req.nextUrl.pathname !== "/admin") {
      // Prevent admin from accessing end-user routes
      return NextResponse.redirect(adminDashboardUrl);
    }
  } else {
    // If the user is NOT an admin
    if (isAdminRoute && req.nextUrl.pathname !== "/") {
      // Prevent non-admin users from accessing admin routes
      return NextResponse.redirect(userHomeUrl);
    }
    if (isCheckoutRoute && req.nextUrl.pathname !== "/checkout") {
      // Prevent non-authenticated users from accessing /checkout if they are not logged in
      return NextResponse.redirect(checkoutLoginUrl);
    }
  }

  // Allow access if no redirection conditions are met
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
