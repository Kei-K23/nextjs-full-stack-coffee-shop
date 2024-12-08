"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ProductCard from "@/components/product-card";

const PRODUCTS = [
  {
    name: "Cappuccino",
    price: "8.50",
    image: "/img/cappuccino.png",
    ingredients: [
      { name: "Coffee", percentage: "50%" },
      { name: "Milk", percentage: "50%" },
    ],
  },
  {
    name: "Chai Latte",
    price: "8.50",
    image: "/img/chai_latte.png",
    ingredients: [
      { name: "Coffee", percentage: "50%" },
      { name: "Milk", percentage: "50%" },
    ],
  },
  {
    name: "Macchiato",
    price: "8.50",
    image: "/img/macchiato.png",
    ingredients: [
      { name: "Coffee", percentage: "50%" },
      { name: "Milk", percentage: "50%" },
    ],
  },
  {
    name: "Expresso",
    price: "8.50",
    image: "/img/expresso.png",
    ingredients: [
      { name: "Coffee", percentage: "50%" },
      { name: "Milk", percentage: "50%" },
    ],
  },
];

export default function ProductsSection() {
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
            Enjoy a new blend of coffee style
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-center md:text-xl text-muted-foreground"
          >
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </motion.p>
        </motion.div>
        <div className="mt-8 grid grid-cols-4 gap-x-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
      <motion.div
        variants={blastVariants}
        className="absolute right-0 w-[298px] h-[172px] -bottom-30"
      >
        <Image
          src="/img/coffee_blast_right.png"
          alt="coffee_blast_right"
          fill
          className="w-full h-full"
        />
      </motion.div>
    </motion.section>
  );
}
