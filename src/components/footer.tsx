"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const NAVIGATION_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "AboutUs",
    link: "/about-us",
  },
  {
    name: "ContactUs",
    link: "/contact-us",
  },
];

export default function Footer() {
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

  const leftImgVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };
  const rightImgVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col w-full relative mt-24"
    >
      <div className="w-full h-[374px] relative text-white dark:text-white">
        <Image
          src="/img/coffee_rectangle.png"
          alt="coffee_rectangle"
          fill
          className="object-fill"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-cu-secondary/70" />
        <div className="relative w-full h-full flex items-center justify-center flex-col gap-y-2">
          <h3 className="text-[50px] font-bold">
            Subscribe to get the Latest News
          </h3>
          <p className="text-xl">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
          <form className="mt-4 h-[47px] w-[450px] text-black flex items-center">
            <Input
              placeholder="Enter your mail"
              className="h-full outline-none border-none rounded-none bg-white dark:bg-white ring-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none"
            />
            <Button
              variant="primary"
              className="rounded-none text-black dark:text-black h-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full h-[500px] relative text-white dark:text-white">
        <Image
          src="/img/footer_img.png"
          alt="footer_img"
          fill
          className="object-fill"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-cu-secondary-sec/90" />
        <div className="relative pt-52 px-20 w-full h-full grid grid-cols-4 gap-x-14">
          <div>
            <h3 className="text-[54px] font-clickerScript">Brew Haven</h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl mb-3">About</h3>
            <ul className="flex flex-col gap-y-1">
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl mb-3">Company</h3>
            <ul className="flex flex-col gap-y-1">
              <Link href={"/how-we-work"} className="hover:underline">
                How we work
              </Link>
              <Link href={"/terms-of-service"} className="hover:underline">
                Terms of service
              </Link>
              <Link href={"/pricing"} className="hover:underline">
                Pricing
              </Link>
              <Link href={"/faq"} className="hover:underline">
                FAQ
              </Link>
            </ul>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl mb-3">Contact Us</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </li>
              <li>+1 202-918-2132</li>
              <li>beanscene@mail.com</li>
              <li>www.beanscene.com</li>
            </ul>
          </div>
        </div>
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2">
          Copyright-{new Date().getFullYear()}@Brew Haven
        </p>
      </div>
      <motion.div
        variants={leftImgVariants}
        className="absolute top-[19%] -left-24 -translate-y-2/4 w-[400px] h-[350px]"
      >
        <Image src="/img/cup_left.png" alt="cup_left" fill />
      </motion.div>
      <motion.div
        variants={rightImgVariants}
        className="absolute top-[19%] -right-24 -translate-y-2/4 w-[400px] h-[350px]"
      >
        <Image src="/img/cup_right.png" alt="cup_right" fill />
      </motion.div>
    </motion.footer>
  );
}
