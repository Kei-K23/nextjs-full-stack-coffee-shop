import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-primary-card hover:bg-primary-card-sec transition-all">
      <div className="aspect-[4/3] relative overflow-hidden transition-all">
        <Image
          src={product.imageUrl || ""}
          alt={product.name}
          fill
          className="hover:scale-110 transition-all object-cover"
        />
      </div>
      <div className="flex items-center justify-center flex-col p-4">
        <p className="text-xl font-bold text-cu-secondary-sec dark:text-cu-primary-sec mb-3">
          {product.name}
        </p>
        <div className="flex items-center gap-2 flex-wrap text-sm">
          {JSON.parse(product.ingredients).map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (ingredient: any, index: any) => {
              const isLastElement =
                JSON.parse(product.ingredients).length - 1 === index;
              return (
                <div key={ingredient.name}>
                  <span>{ingredient.name}</span>{" "}
                  <span>{ingredient.percentage}%</span>
                  {!isLastElement && <span className="ml-2">|</span>}
                </div>
              );
            }
          )}
        </div>
        <p className="mt-2 text-xl font-bold text-cu-secondary-sec dark:text-cu-primary-sec">
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
