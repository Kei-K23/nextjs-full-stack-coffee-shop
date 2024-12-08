"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function BannerSection() {
  function scrollTo() {
    window.scrollTo(0, 768);
  }

  return (
    <section className="h-[768px] relative dark:text-white text-white">
      <div className="h-full w-full absolute">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
        <Image
          src="/img/main_banner.png"
          alt="Main banner"
          fill
          className="object-fill"
        />
      </div>
      <div className="max-w-[527px] absolute top-1/2 -translate-y-1/2 left-20 z-20">
        <p className="text-xl">We’ve got your morning covered with</p>
        <span className="font-clickerScript text-[220px]">Coffee</span>
        <p className="text-xl">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <Button
          variant="primary"
          className="mt-3 font-bold dark:text-black text-black"
        >
          Order Now
        </Button>
      </div>
      <ChevronDown
        onClick={scrollTo}
        className="dark:text-white text-white rounded-full absolute left-1/2 bottom-5 z-20 size-10 cursor-pointer transition bg-neutral-800/50 animate-bounce"
      />
    </section>
  );
}
