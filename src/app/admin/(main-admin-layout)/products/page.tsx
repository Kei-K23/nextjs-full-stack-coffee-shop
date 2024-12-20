import ProductsScreen from "@/features/admin/components/products-screen";
import { getAllProducts } from "@/queries";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return <ProductsScreen products={products} />;
}
