import BannerSection from "@/features/home/components/banner-section";
import FeaturesSection from "@/features/home/components/features-section";
import HeroSection from "@/features/home/components/hero-section";
import ProductsSection from "@/features/home/components/products-section";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
    </div>
  );
}
