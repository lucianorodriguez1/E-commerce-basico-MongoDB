import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { connectDB } from "@/utils/mongoose";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Correo electronico",
        },
        password: { label: "Password", type: "text", placeholder: "******" },
      },
      async authorize(credentials, req) {
        await connectDB();
        const userFound = await User.findOne({ email: credentials.email }).select("+password");
        if (!userFound) throw new Error("Invalid credentials");
        const isPasswordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!isPasswordMatch) throw new Error("Invalid credentials");
        //console.log(credentials);
        return userFound; 
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages:{
    signIn:"/login"
  }
});

export { handler as GET, handler as POST };
