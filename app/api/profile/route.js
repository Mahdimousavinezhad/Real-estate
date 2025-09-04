import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function GET(req) {
  try {
    await connectDB();

    const session = await getServerSession(req);

    const user = await User.findOne({ email: session?.user?.email });

    const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

    let {
      page: pages = 1,
      limit: limits = 9,
      userOnly = false,
      published = false,
      favorite = false,
      ...rest
    } = searchParams;

    if (published === "true") {
      published = true;
    } else if (published === "false") {
      published = false;
    }

    if (userOnly === "true") {
      userOnly = true;
    } else {
      userOnly = false;
    }

    const page = +pages;
    const limit = +limits;
    const skip = (page - 1) * limit;

    let query = {};

    if (published !== "none") {
      query.published = published;
    } else {
      delete query.published;
    }

    if (favorite === "true") {
      query.favorite = true;
    } else {
      delete query.favorite;
    }

    if (rest.priceMin || rest.priceMax) {
      query.price = {};

      if (rest.priceMin) query.price.$gte = Number(rest.priceMin);
      if (rest.priceMax) query.price.$lte = Number(rest.priceMax);

      delete rest.priceMin;
      delete rest.priceMax;
    }

    if (rest) {
      for (const key in rest) {
        if (rest[key]) {
          query[key] = {
            $regex: rest[key],
            $options: "i",
          };
        }
      }
    }

    if (userOnly && user) {
      query.userId = user._id;
    }

    const total = await Profile.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    const profiles = await Profile.find(query)
      .skip(skip)
      .limit(limit)
      .select("-userId");

    return NextResponse.json({ profiles, page, totalPages }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سمت سرور پیش آمده است!" },
      { status: 500 }
    );
  }
}

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
    const { searchParams } = req.nextUrl;
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
    const { searchParams } = req.nextUrl;
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

    const profile = await Profile.findOne({ _id: id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است!" },
        { status: 403 }
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
