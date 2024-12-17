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