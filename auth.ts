import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./drizzle";
import { users } from "./drizzle/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { name, email } = user;

      if (!email || !name) {
        return false;
      }

      const emailExists = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

      if (emailExists.length === 0) {
        await db.insert(users).values({ name, email });
      }

      return true;
    },
  },
});
