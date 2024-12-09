"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function AdvertisingSection() {
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

  const imgVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="h-[574px] relative w-full my-20"
    >
      <div className="w-full h-full absolute">
        <Image
          src="/img/coffee_rectangle.png"
          alt="coffee_rectangle"
          fill
          className="object-fill"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-cu-secondary/70" />
      </div>
      <motion.div
        variants={containerVariants}
        className="relative h-full text-white px-20 flex items-center justify-between gap-x-8"
      >
        <motion.div variants={containerVariants} className="w-full md:w-1/2">
          <motion.h2 variants={itemVariants} className="text-[54px]">
            Get a chance to have an Amazing morning
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mt-3">
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="bg-cu-primary-sec cursor-pointer px-6 py-3 rounded-3xl font-bold mt-4 hover:bg-cu-primary-sec/80 transition-colors text-black dark:text-black z-20 relative"
          >
            Order Now
          </motion.button>
        </motion.div>
        <motion.div
          variants={imgVariants}
          className="w-full h-full md:w-1/2 flex items-center justify-center"
        >
          <div className="w-1/2 h-3/4 relative z-20">
            <Image src="/img/cup.png" alt="cup" fill className="object-fill" />
          </div>
        </motion.div>
        <div className="absolute w-2/5 h-full right-0">
          <Image
            src="/img/coffee_bean.png"
            alt="coffee_bean"
            fill
            className="object-fill"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
