import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
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

    const { amenities, rules, ...rest } = body;

    for (const key in rest) {
      const value = rest[key];

      if (!value) {
        return NextResponse.json(
          { error: "مقادیر معتبر وارد کنید!" },
          { status: 422 }
        );
      }
    }

    body.userId = new Types.ObjectId(user._id);

    const newProfile = await Profile.create(body);
    return NextResponse.json(
      { message: "آگهی شما با موفقیت ثبت شد!", data: newProfile },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است!" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const body = await req.json();
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    const { amenities, rules, ...rest } = body;

    for (const key in rest) {
      const value = rest[key];

      if (value === "" || value === undefined || value === null) {
        // I had tried !value but it's doesn't work
        return NextResponse.json(
          { error: "مقادیر معتبر وارد کنید!" },
          { status: 422 }
        );
      }
    }

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

    const profile = await Profile.findOne({ _id: id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است!" },
        { status: 403 }
      );
    }

    await Profile.updateOne({ _id: id }, { $set: body });

    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد!", newProfile: profile },
      { status: 200 }
    );
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
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

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

    await Profile.deleteOne({ _id: id });

    return NextResponse.json({ message: "آگهی با موفقیت حذف شد!" });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است!" },
      { status: 500 }
    );
  }
}
