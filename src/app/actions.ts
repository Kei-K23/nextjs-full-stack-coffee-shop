"use server";

import { createNewProduct } from "@/features/admin/mutation";
import { Product } from "@/types";
import { revalidatePath } from "next/cache";

import { z } from "zod";

const productCreateActionSchema = z.object({
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
  const validatedFields = productCreateActionSchema.safeParse({
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
      errors: validatedFields.error.flatten().fieldErrors,
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
