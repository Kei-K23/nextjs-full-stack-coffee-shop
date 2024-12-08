import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NAVIGATION_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "AboutUs",
    link: "/about-us",
  },
  {
    name: "ContactUs",
    link: "/contact-us",
  },
];

export default function NavbarHeader() {
  return (
    <header className="sticky top-5 flex items-center justify-center">
      <div className="px-4 py-3 bg-gray-400 rounded-[2rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 flex items-center gap-x-2">
        <nav className="flex items-center gap-x-2">
          {NAVIGATION_LINKS.map((nav) => (
            <Button
              key={nav.name}
              asChild
              variant="ghost"
              size="sm"
              className="rounded-2xl"
            >
              <Link href={nav.link} className="text-lg">
                {nav.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="w-[1px] h-8 bg-gray-500 mx-2" />
        <div className="flex items-center gap-x-2">
          <Button asChild variant="ghost" size="sm" className="rounded-2xl">
            <Link href={"/sign-in"} className="text-lg">
              Sign In
            </Link>
          </Button>
          <Button asChild variant="primary" size="sm" className="rounded-2xl">
            <Link href={"/sign-up"} className="text-lg">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
