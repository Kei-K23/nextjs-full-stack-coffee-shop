import { Testimonial } from "@/types";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-primary-card h-[427px] pt-20 px-28 flex flex-col items-center justify-center gap-y-4 relative">
      <div className="absolute top-7 left-24 w-[60px] h-[50px]">
        <Image src="/img/quote_img.png" alt="quote" fill />
      </div>
      <p className="text-center text-lg md:text-xl font-semibold leading-loose">
        {testimonial.content}
      </p>
      <span className="mt-4 text-center text-4xl font-bold text-cu-secondary dark:text-cu-primary-sec">
        {testimonial.name}
      </span>
      <span className="text-center text-xl text-muted-foreground">
        {testimonial.role}
      </span>
      <Avatar className="size-16 rounded-lg bg-cu-primary-sec">
        <AvatarImage src={testimonial.profileImage} alt={testimonial.name} />
        <AvatarFallback className="bg-cu-primary-sec text-black dark:text-black">
          <b className="text-3xl">{testimonial.name.charAt(0).toUpperCase()}</b>
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
