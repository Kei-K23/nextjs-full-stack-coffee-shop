import ProductsScreen from "@/features/admin/components/products-screen";
import { getAllProducts } from "@/features/admin/queries";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return <ProductsScreen products={products} />;
}
