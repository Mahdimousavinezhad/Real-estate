import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";

import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import User from "@/models/User";

export const metadata = {
  title: "پنل کاربری املاک | Next.js Fullstack",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  return <DashboardSidebar user={user}>{children}</DashboardSidebar>;
}

export default DashboardLayout;
