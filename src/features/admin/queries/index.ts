import { prisma } from "@/lib/prisma";

export const getAllProducts = async () => {
  return await prisma.coffee.findMany();
};
