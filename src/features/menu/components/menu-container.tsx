import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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

export default function MenuContainer() {
  return (
    <div className="my-20 px-20">
      <h2 className="text-cu-secondary-sec dark:text-cu-primary-sec text-2xl md:text-3xl font-bold text-center mb-5">
        Start your day with our best coffee
      </h2>
      <form className="flex w-full max-w-sm mx-auto items-center space-x-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ease-in-out"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          className="rounded-full px-6 py-2 text-black dark:text-black transition-all duration-300 ease-in-out"
        >
          Search
        </Button>
      </form>
      <div className="mt-10 grid grid-cols-4 gap-6">
        {PRODUCTS.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}
