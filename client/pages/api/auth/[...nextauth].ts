import NextAuth, { Account, Profile, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// ID: 769971342453-omvs7it2mr5hjt7alr0f2mvoufnc3rfv.apps.googleusercontent.com

// SECRET: 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

export const authOptions = {
  session: {
    strategy: "jwt" as const,
  },

  providers: [
    GoogleProvider({
      clientId:
        "769971342453-omvs7it2mr5hjt7alr0f2mvoufnc3rfv.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  callbacks: {
    async signIn(user: any) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "cafe/login/",
        {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(user),
        }
      );
      return true;
    },
  },

  // pages: {
  //   signIn: "/login",
  // },
};

export default NextAuth(authOptions);

// callbacks: {
//   async jwt({
//     token,
//     user,
//     account,
//     profile,
//     trigger,
//     session,
//   }: {
// token: JWT;
// user: User | AdapterUser;
// account: Account | null;
// profile?: Profile | undefined;
// trigger?: "signIn" | "signUp" | "update" | undefined;
// isNewUser?: boolean | undefined;
// session?: any;
//   }) {
//     if (user) {
//       token.user = user;
//       token.id;
//     }
//     return token;
//   },

// },

// callbacks: {
//   async signIn({ account, profile }: { account: any; profile: any }) {
//     if (!profile?.email) {
//       throw new Error("No profile");
//     }

//     // call db to register user
//     // await prisma.user.upsert({
//     //   where: {
//     //     email: profile.email,
//     //   },
//     //   create: {
//     //     email: profile.email,
//     //     name: profile.name,
//     //   },
//     //   update: {
//     //     name: profile.name,
//     //   },
//     // });

//     return true;
//   },
//   async session({ session, token }: { session: any; token: any }) {
//     session.user = token.user as any;
//     session.accessToken = token.user.token;
//     return session;
//   },
//   async jwt({
//     token,
//     user,
//     account,
//     profile,
//   }: {
//     token: JWT;
//     user: User | AdapterUser;
//     account: Account | null;
//     profile?: Profile | undefined;
//   }) {
//     if (profile) {
//       // call db to return user
//       // const user = await prisma.user.findUnique({
//       //   where: {
//       //     email: profile.email,
//       //   },
//       // });
//       // if (!user) {
//       //   throw new Error("No user found");
//       // }
//       token.id = "yes";
//     }
//     return token;
//   },
// },
