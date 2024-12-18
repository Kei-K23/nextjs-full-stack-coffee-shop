import ProductsScreen from "@/features/admin/components/products-screen";
import { getAllProducts } from "@/features/admin/queries";

// const products = [
//   {
//     id: "1",
//     name: "Espresso",
//     description: "Strong Italian coffee",
//     price: 3.99,
//     coinPrice: 40,
//     imageUrl:
//       "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//   },
// ];

export default async function ProductsPage() {
  const products = await getAllProducts();

  return <ProductsScreen products={products} />;
}
