"use client";

import { Product } from "@/types";
import ProductsCreateEditDialog from "./products-create-edit-dialog";
import ProductsTable from "./products-table";

interface ProductsScreenProps {
  products: Product[];
}

export default function ProductsScreen({ products }: ProductsScreenProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <ProductsCreateEditDialog />
      </div>

      {products.length > 0 ? (
        <div className="rounded-md border">
          <ProductsTable products={products} />
        </div>
      ) : (
        <p className="text-center text-muted-foreground mt-4">No products</p>
      )}
    </div>
  );
}
