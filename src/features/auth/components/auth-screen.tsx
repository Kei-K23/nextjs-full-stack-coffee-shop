"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AuthCardHeader } from "./auth-card-header";
import { AuthHero } from "./auth-hero";
import { OAuthButton } from "./oauth-button";
import { TermsNotice } from "./terms-notice";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function AuthScreenPage() {
  const handleOAuthLogin = async (provider: "google" | "github") => {
    if (provider === "github") {
      signIn("github", { redirectTo: "/" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FDF8F3] dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-[1400px] grid lg:grid-cols-2 gap-8 items-center">
        <AuthHero />

        <div className="w-full max-w-md mx-auto">
          <Card className="border-none shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <AuthCardHeader />
            <CardContent className="space-y-4">
              <OAuthButton
                provider="google"
                onClick={() => handleOAuthLogin("google")}
              />
              <OAuthButton
                provider="github"
                onClick={() => handleOAuthLogin("github")}
              />
              <TermsNotice />
            </CardContent>
          </Card>
          <div className="flex items-center justify-center mt-5">
            <Link
              href={"/"}
              className="underline hover:text-cu-secondary dark:hover:text-cu-primary"
            >
              Back to home screen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
