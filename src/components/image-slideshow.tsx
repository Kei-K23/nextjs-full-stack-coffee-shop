"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ImageSlideshowProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function ImageSlideshow({
  images,
  autoSlide = true,
  autoSlideInterval = 6000,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-cu-secondary/70" />
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className={`w-2 h-2 rounded-full p-0 ${
                currentIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
