import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { verify } from "argon2";

export const getAdminUser = async (email: string, password: string) => {
  try {
    const adminUser = await prisma.admin.findFirst({
      where: {
        email,
      },
    });

    if (!adminUser) {
      throw new Error("User not found");
    }
    const isVerify = await verify(adminUser.password, password);
    if (!isVerify) {
      throw new Error("Invalid credentials");
    }

    return adminUser;
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong");
  }
};

export const getAllProducts = async () => {
  return await prisma.coffee.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getDashboardAnalyticData = async () => {
  const coffeeCount = await prisma.coffee.count();
  return {
    coffeeCount,
  };
};

export const getUserData = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const getOrdersByAuthUser = async () => {
  const session = await auth();
  return await prisma.order.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      orderDetails: {
        include: {
          coffee: true,
        },
      },
    },
  });
};
