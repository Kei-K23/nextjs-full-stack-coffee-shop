import { prisma } from "@/lib/prisma";

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

    if (adminUser.password !== password) {
      throw new Error("Invalid credentials");
    }

    return adminUser;
  } catch (e) {
    console.error(e);
    throw new Error("Something went wrong");
  }
};
