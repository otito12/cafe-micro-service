import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      idToken?: string;
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    idToken?: string;
    accessToken?: string;
  }
}
