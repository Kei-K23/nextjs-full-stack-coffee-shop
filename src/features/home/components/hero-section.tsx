"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      className="relative my-10"
    >
      <div className="px-20 flex items-center justify-between gap-x-8">
        <motion.div className="flex-1 w-full" variants={containerVariants}>
          <motion.h2
            variants={itemVariants}
            className="text-cu-secondary-sec dark:text-cu-secondary text-[54px] font-bold mb-6"
          >
            Discover the best coffee
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="bg-cu-primary-sec cursor-pointer px-6 py-3 rounded-3xl font-bold mt-4 hover:bg-cu-primary-sec/80 transition-colors text-black dark:text-black"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div className="w-[500px]" variants={imageVariants}>
          <div className="w-full h-[484px] relative">
            <Image
              src="/img/hero_img.png"
              alt="Hero image"
              fill
              className="object-fill w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={blastVariants}
        className="absolute w-[298px] h-[172px] -bottom-10"
      >
        <Image
          src="/img/coffee_blast_left.png"
          alt="coffee_blast_left"
          fill
          className="w-full h-full"
        />
      </motion.div>
    </motion.section>
  );
}
