"use client";

import ProductsCreateEditDialog from "./products-create-edit-dialog";
import ProductsTable from "./products-table";

interface ProductsScreenProps {
  products: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    coinPrice: number;
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export default function ProductsScreen({ products }: ProductsScreenProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <ProductsCreateEditDialog />
      </div>

      <div className="rounded-md border">
        <ProductsTable products={products} />
      </div>
    </div>
  );
}
