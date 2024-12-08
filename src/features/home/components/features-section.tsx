"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Bean, Coffee, HandCoins } from "lucide-react";
import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    name: "Supreme Beans",
    Icon: Bean,
    description: "Beans that provides great taste",
  },
  {
    name: "High Quality",
    Icon: Award,
    description: "We provide the highest quality",
  },
  {
    name: "Extraordinary ",
    Icon: Coffee,
    description: "Coffee like you have never tasted",
  },
  {
    name: "Affordable Price",
    Icon: HandCoins,
    description: "Our Coffee prices are easy to afford",
  },
];

export default function FeaturesSection() {
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
            Why are we different?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-center md:text-xl text-muted-foreground"
          >
            We don’t just make your coffee, we make your day!
          </motion.p>
        </motion.div>
        <div className="mt-8 grid grid-cols-4 gap-x-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
        <motion.div
          variants={containerVariants}
          className="flex items-center justify-center flex-col gap-y-2 mt-5"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-center md:text-xl text-muted-foreground"
          >
            Great ideas start with great coffee, Lets help you achieve that
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-cu-secondary-sec dark:text-cu-primary-sec text-[30px] font-bold mb-2 text-center"
          >
            Get started today.
          </motion.h2>
          <motion.button
            variants={itemVariants}
            className="bg-cu-primary-sec cursor-pointer px-6 py-3 rounded-3xl font-bold mt-4 hover:bg-cu-primary-sec/80 transition-colors text-black dark:text-black z-20 relative"
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
