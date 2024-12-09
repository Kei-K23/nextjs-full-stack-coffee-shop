"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TestimonialCard from "@/components/testimonial-card";
import Image from "next/image";

const TESTIMONIALS = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Jonny Thomas",
    role: "Project Manager",
    profileImage: "Project Manager",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Jack",
    role: "Product Owner",
    profileImage: "Product Owner",
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
    name: "Michael",
    role: "Singer",
    profileImage: "Singer",
  },
];

export default function TestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const blastVariants = {
    hidden: { opacity: 0, rotate: -20 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative my-20"
    >
      <div className="px-20">
        <motion.div variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-cu-secondary-sec dark:text-cu-primary-sec text-[54px] font-bold mb-2 text-center"
          >
            Our coffee perfection feedback
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-center md:text-xl text-muted-foreground"
          >
            Our customers has amazing things to say about us
          </motion.p>
        </motion.div>
        <Carousel
          opts={{
            loop: true,
          }}
          className="mt-10"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-cu-primary size-12 rounded-lg hover:bg-cu-primary-sec text-black dark:text-black" />
          <CarouselNext className="bg-cu-primary size-12 rounded-lg hover:bg-cu-primary-sec text-black dark:text-black" />
        </Carousel>
      </div>
      <motion.div
        variants={blastVariants}
        className="absolute -left-24 w-[298px] h-[172px] -bottom-10"
      >
        <Image
          src="/img/coffee_blast_left.png"
          alt="coffee_blast_left"
          fill
          className="w-full h-full -rotate-45"
        />
      </motion.div>
      <motion.div
        variants={blastVariants}
        className="absolute -right-20 w-[298px] h-[172px] top-6"
      >
        <Image
          src="/img/coffee_blast_right.png"
          alt="coffee_blast_right"
          fill
          className="w-full h-full -rotate-12"
        />
      </motion.div>
    </motion.section>
  );
}
