import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function PATCH(req) {
  try {
    await connectDB();

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد!" },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "شما به این بخش دسترسی ندارید!" },
        { status: 403 }
      );
    }

    const searchParams = await req.nextUrl.searchParams;
    const id = searchParams.get("id");

    await Profile.findOneAndUpdate({ _id: id }, { published: true });

    return NextResponse.json({ message: "آگهی با موفقیت منتشر شد!" });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است!" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectDB();

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد!" },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "شما به این بخش دسترسی ندارید!" },
        { status: 403 }
      );
    }

    const searchParams = await req.nextUrl.searchParams;
    const id = searchParams.get("id");

    await Profile.deleteOne({ _id: id });

    return NextResponse.json({ message: "آگهی با موفقیت حذف شد!" });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است!" },
      { status: 500 }
    );
  }
}
