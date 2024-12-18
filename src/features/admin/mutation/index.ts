import { prisma } from "@/lib/prisma";
import { Product } from "@/types";

export const createNewProduct = async (
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
) => {
  return await prisma.coffee.create({
    data: product,
  });
};
