import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");

    const profile = await Profile.findOne({ _id: id });

    return NextResponse.json({ data: profile }, { status: 200 });
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

    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    let status = searchParams.get("status");

    if (status === "true") {
      status = true;
    } else {
      status = false;
    }

    // await Profile.updateOne(
    //   { _id: id },
    //   status ? { favorite: true } : { favorite: false }
    // );

    const profile = await Profile.findOne({ _id: id });

    if (status) {
      profile.favorite = false;
    } else {
      profile.favorite = true;
    }
    await profile.save();

    return NextResponse.json(
      !status
        ? {
            message: `آگهی به بخش آگهی مورد علاقه ها اضافه شد!`,
          }
        : {
            message: `آگهی از بخش آگهی مورد علاقه ها حذف شد!`,
          },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است!" },
      { status: 500 }
    );
  }
}
