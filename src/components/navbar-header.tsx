"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

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
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isReachBanner, setIsReachBanner] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest < 704) {
      setIsReachBanner(true);
    } else {
      setIsReachBanner(false);
    }
  });

  useEffect(() => {
    if (theme === "light") {
      setIsLightTheme(true);
    } else {
      setIsLightTheme(false);
    }
  }, [theme]);

  useEffect(() => {
    if (window.scrollY < 704) {
      setIsReachBanner(true);
    }
  }, []);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-135%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full top-4 flex items-center justify-center z-50"
    >
      <div
        className={cn(
          "px-4 py-3 bg-gray-400 rounded-[2rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 dark:border-gray-700 flex items-center gap-x-2"
        )}
      >
        <nav className="flex items-center gap-x-2">
          {NAVIGATION_LINKS.map((nav) => (
            <Button
              key={nav.name}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-3xl font-bold",
                (isLightTheme && isReachBanner) || isReachBanner
                  ? "text-white dark:text-white"
                  : ""
              )}
            >
              <Link href={nav.link} className="text-lg">
                {nav.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="w-[1px] h-8 bg-gray-500 mx-2" />
        <div className="flex items-center gap-x-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className={cn(
              "rounded-3xl font-bold",
              isReachBanner && "text-white dark:text-white",
              isLightTheme && isReachBanner && "text-white dark:text-white"
            )}
          >
            <Link href={"/sign-in"} className="text-lg">
              Sign In
            </Link>
          </Button>
          <Button
            asChild
            variant="primary"
            size="sm"
            className="rounded-3xl dark:text-black text-black font-bold"
          >
            <Link href={"/sign-up"} className="text-lg">
              Sign Up
            </Link>
          </Button>
        </div>
        <div className="w-[1px] h-8 bg-gray-500 mx-2" />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            isReachBanner && "text-white dark:text-white",
            isLightTheme && isReachBanner && "text-white dark:text-white"
          )}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </motion.header>
  );
}
