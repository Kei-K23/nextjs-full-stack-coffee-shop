"use server";

import {
  createNewProduct,
  deleteProduct,
  updateProduct,
} from "@/features/admin/mutation";
import { Product } from "@/types";
import { revalidatePath } from "next/cache";

import { z } from "zod";

const productMutationActionSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  coinPrice: z.number(),
  imageUrl: z.string(),
  ingredients: z.string(),
});

export async function productCreateAction(
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
) {
  const validatedFields = productMutationActionSchema.safeParse({
    name: product.name,
    description: product.description,
    coinPrice: product.coinPrice,
    price: product.price,
    imageUrl: product.imageUrl,
    ingredients: product.ingredients,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: "Invalid input fields",
    };
  }

  try {
    // mutate data
    await createNewProduct(validatedFields.data);
    // revalidate cache
    revalidatePath("/admin/products");

    return {
      success: "Successfully created product",
    };
  } catch {
    return {
      errors: "Failed to create product",
    };
  }
}

export async function productUpdateAction(
  id: string,
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
) {
  const validatedFields = productMutationActionSchema.safeParse({
    name: product.name,
    description: product.description,
    coinPrice: product.coinPrice,
    price: product.price,
    imageUrl: product.imageUrl,
    ingredients: product.ingredients,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: "Invalid input fields",
    };
  }

  try {
    // mutate data
    await updateProduct(id, validatedFields.data);
    // revalidate cache
    revalidatePath("/admin/products");

    return {
      success: "Successfully updated product",
    };
  } catch {
    return {
      errors: "Failed to update product",
    };
  }
}

export async function deleteProductAction(id: string) {
  try {
    // mutate data
    await deleteProduct(id);
    // revalidate cache
    revalidatePath("/admin/products");

    return {
      success: "Successfully deleted product",
    };
  } catch {
    return {
      errors: "Failed to delete product",
    };
  }
}