import ImageSlideshow from "@/components/image-slideshow";
import MenuContainer from "@/features/menu/components/menu-container";
import React from "react";

const BANNER_IMAGES = [
  "/img/menu_banner_1.jpg",
  "/img/menu_banner_2.jpg",
  "/img/menu_banner_3.jpg",
  "/img/menu_banner_4.jpg",
];

export default function MenuPage() {
  return (
    <div>
      <ImageSlideshow images={BANNER_IMAGES} />
      <MenuContainer />
    </div>
  );
}
