import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[#fceec7]/50">
      <div className="aspect-[4/3] relative">
        <Image src={product.image} alt={product.name} fill />
      </div>
      <div className="flex items-center justify-center flex-col p-4">
        <p className="text-xl font-bold text-cu-secondary-sec">
          {product.name}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {product.ingredients.map((ingredient, index) => {
            const isLastElement = product.ingredients.length - 1 === index;
            return (
              <div key={ingredient.name}>
                <span>{ingredient.name}</span>{" "}
                <span>{ingredient.percentage}</span>
                {!isLastElement && <span className="ml-2">|</span>}
              </div>
            );
          })}
        </div>
        <p className="text-xl font-bold text-cu-secondary-sec">
          ${product.price}
        </p>
        <Button
          variant={"primary"}
          className="text-black dark:text-black mt-4 z-20 relative font-bold"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}
