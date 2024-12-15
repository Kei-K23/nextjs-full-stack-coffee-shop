"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface OAuthButtonProps {
  provider: "google" | "github";
  onClick: () => void;
}

export function OAuthButton({ provider, onClick }: OAuthButtonProps) {
  const [isRendered, setIsRendered] = useState(false);
  const { resolvedTheme } = useTheme();
  const providerConfig = {
    google: {
      text: "Continue with Google",
      icon: "/img/google_icon.svg",
    },
    github: {
      text: "Continue with GitHub",
      icon:
        resolvedTheme === "dark"
          ? "/img/github_dark_icon.svg"
          : "/img/github_icon.svg",
    },
  };

  const config = providerConfig[provider];
  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return null;
  }
  return (
    <Button
      variant="outline"
      className="w-full h-12 text-base hover:bg-cu-primary/10 dark:hover:bg-cu-primary/5 dark:border-gray-700 dark:text-gray-300"
      onClick={onClick}
    >
      <Image
        src={config.icon}
        alt={provider}
        width={20}
        height={20}
        className="mr-2"
      />
      {config.text}
    </Button>
  );
}
