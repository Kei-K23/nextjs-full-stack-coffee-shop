import { deleteProductAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product } from "@/types";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import ProductsCreateEditDialog from "./products-create-edit-dialog";

export default function ProductsTable({ products }: { products: Product[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Coin Price</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Image
                src={product.imageUrl || ""}
                alt={product.name}
                width={12}
                height={12}
                className="h-12 w-12 rounded-md object-cover"
              />
            </TableCell>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.coinPrice}</TableCell>
            <TableCell className="text-right">
              <ProductsCreateEditDialog product={product}>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </ProductsCreateEditDialog>
              <Button
                variant="ghost"
                size="icon"
                onClick={async () => {
                  // TODO: Add delete confirm button
                  const { errors, success } = await deleteProductAction(
                    product.id
                  );
                  if (errors) {
                    toast.error(errors);
                  }
                  if (success) {
                    toast.success(success);
                  }
                }}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
