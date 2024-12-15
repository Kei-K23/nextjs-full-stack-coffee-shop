"use client";

import Image from "next/image";

export function AuthHero() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center space-y-6 p-8">
      <div className="relative w-full h-[500px]">
        <Image
          src="/img/auth_screen_img.jpg"
          alt="Coffee shop ambiance"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-cu-secondary dark:text-cu-primary">
          Welcome Back!
        </h1>
        <p className="text-cu-secondary-sec dark:text-cu-primary-sec text-lg max-w-md">
          Sign in to access your rewards, save your favorites, and enjoy a
          personalized coffee experience.
        </p>
      </div>
    </div>
  );
}
