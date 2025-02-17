import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./drizzle";
import { progress } from "./drizzle/schema";
import { users } from "./drizzle/schema";
import { initialUnits, SUBJECTS } from "./lib/constants";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
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

        for (const subject of Object.values(SUBJECTS)) {
          await db.insert(progress).values({
            userId: email,
            subject: subject,
            data: initialUnits[subject],
          });
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email!;
      return session;
    },
  },
});
