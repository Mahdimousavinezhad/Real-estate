import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (req.method !== "POST") return;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در اتصال با پایگاه داده پیش آمده!");
        }

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("اطلاعات خود را به درستی وارد کنید!");
        }

        const isExistUser = await User.findOne({ email });
        if (!isExistUser) {
          throw new Error("این حساب کاربری وجود ندارد!");
        }

        const isValidPassword = await verifyPassword(
          password,
          isExistUser.password
        );
        if (!isValidPassword) {
          throw new Error("ایمیل یا پسوورد شما اشتباه می باشد!");
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
