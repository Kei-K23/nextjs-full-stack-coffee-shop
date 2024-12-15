"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Coffee, Moon, Sun, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useNavbarStore } from "@/stores/use-navbar-store";
import { useSession } from "next-auth/react";

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
  const {
    setPosition,
    isInAdvertising,
    isInBanner,
    isInFooter,
    isInSlideshow,
  } = useNavbarStore();
  const { data: session } = useSession();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPosition(latest);

    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (theme === "light") {
      setIsLightTheme(true);
    } else {
      setIsLightTheme(false);
    }
  }, [theme]);

  const isInside = isInAdvertising || isInBanner || isInFooter || isInSlideshow;

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
          "w-[1000px] px-4 py-3 bg-gray-400 rounded-[2rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 dark:border-gray-700 flex items-center justify-between gap-x-2"
        )}
      >
        <Link
          href={"/"}
          className={cn(
            "flex items-center gap-2 cursor-pointer group",
            isInside && "text-white dark:text-white",
            isLightTheme && isInside && "text-white dark:text-white"
          )}
        >
          <Coffee className="group-hover:rotate-[18deg] transition-all" />{" "}
          <span className="font-clickerScript text-3xl">Brew Haven</span>
        </Link>
        <nav className="flex items-center gap-x-2">
          {NAVIGATION_LINKS.map((nav) => (
            <Button
              key={nav.name}
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-3xl font-bold",
                (isLightTheme && isInside) || isInside
                  ? "text-white dark:text-white"
                  : "",
                pathname === nav.link &&
                  "bg-cu-primary hover:bg-cu-primary/80 text-black dark:text-black"
              )}
            >
              <Link href={nav.link} className="text-lg">
                {nav.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-x-2">
          {/* <div className="w-[1px] h-8 bg-gray-500 mx-2" /> */}
          <div className="flex items-center gap-x-2">
            {!!session?.user ? (
              <User
                className={cn(
                  isInside && "text-white dark:text-white",
                  isLightTheme && isInside && "text-white dark:text-white"
                )}
              />
            ) : (
              <Button
                asChild
                variant="primary"
                size="sm"
                className="rounded-3xl dark:text-black text-black font-bold"
              >
                <Link href={"/auth"} className="text-lg">
                  Sign In
                </Link>
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              isInside && "text-white dark:text-white",
              isLightTheme && isInside && "text-white dark:text-white"
            )}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
