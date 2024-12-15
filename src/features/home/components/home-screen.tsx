"use client";

import AdvertisingSection from "@/features/home/components/advertising-section";
import BannerSection from "@/features/home/components/banner-section";
import FeaturesSection from "@/features/home/components/features-section";
import HeroSection from "@/features/home/components/hero-section";
import ProductsSection from "@/features/home/components/products-section";
import TestimonialSection from "@/features/home/components/testimonial-section";
import { useNavbarStore } from "@/stores/use-navbar-store";
import { useEffect } from "react";
export default function HomeScreen() {
  const { resetState } = useNavbarStore();
  useEffect(() => {
    // Cleanup function to reset navbar store
    return () => {
      resetState();
    };
  }, [resetState]);
  return (
    <div>
      <BannerSection />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AdvertisingSection />
      <TestimonialSection />
    </div>
  );
}
