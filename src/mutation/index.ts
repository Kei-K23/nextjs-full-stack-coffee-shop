import { prisma } from "@/lib/prisma";
import { Product } from "@/types";

export const createNewProduct = async (
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
) => {
  return await prisma.coffee.create({
    data: product,
  });
};

export const updateProduct = async (
  id: string,
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
) => {
  return await prisma.coffee.update({
    where: { id },
    data: product,
  });
};

export const deleteProduct = async (id: string) => {
  return await prisma.coffee.delete({
    where: { id },
  });
};
