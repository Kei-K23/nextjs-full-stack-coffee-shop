"use client";

import AdvertisingSection from "@/features/home/components/advertising-section";
import BannerSection from "@/features/home/components/banner-section";
import FeaturesSection from "@/features/home/components/features-section";
import HeroSection from "@/features/home/components/hero-section";
import ProductsSection from "@/features/home/components/products-section";
import TestimonialSection from "@/features/home/components/testimonial-section";
import { useNavbarStore } from "@/stores/use-navbar-store";
import { Product } from "@/types";
import { useEffect } from "react";

interface HomeScreenProps {
  products: Product[];
}

export default function HomeScreen({ products }: HomeScreenProps) {
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
      <ProductsSection products={products} />
      <FeaturesSection />
      <AdvertisingSection />
      <TestimonialSection />
    </div>
  );
}
