import NextAuth, { DefaultSession, User as DefaultUser } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import "next-auth/jwt";
import authConfig from "./auth.config";

const prisma = new PrismaClient();
// Extend the User type to include isAdmin
interface User extends DefaultUser {
  isAdmin?: boolean;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
    } & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    /** OpenID ID Token */
    id?: string;
    isAdmin?: boolean;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = (user as User).isAdmin;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id!;
      session.user.isAdmin = token.isAdmin!;

      return { ...session, isAdmin: token.isAdmin };
    },
  },
});
