import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "ایمیل یا پسورد رو وارد کنید!",
        status: 422,
      });
    }

    const isExistUser = await User.findOne({ email });

    if (isExistUser) {
      return NextResponse.json({
        error: "این حساب کاربری از قبل وجود دارد!",
        status: 422,
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "کاربر با موفقیت ثبت نام کرد",
      userData: {
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "مشکلی در سرور رخ داده است!",
    });
  }
}
