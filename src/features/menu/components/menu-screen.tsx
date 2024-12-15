"use client";

import ImageSlideshow from "@/components/image-slideshow";
import MenuContainer from "@/features/menu/components/menu-container";
import { useNavbarStore } from "@/stores/use-navbar-store";
import { useEffect } from "react";
const BANNER_IMAGES = [
  "/img/menu_banner_1.jpg",
  "/img/menu_banner_2.jpg",
  "/img/menu_banner_3.jpg",
  "/img/menu_banner_4.jpg",
];

export default function MenuScreen() {
  const { resetState } = useNavbarStore();
  useEffect(() => {
    // Cleanup function to reset navbar store
    return () => {
      resetState();
    };
  }, [resetState]);
  return (
    <div>
      <ImageSlideshow images={BANNER_IMAGES} />
      <MenuContainer />
    </div>
  );
}
