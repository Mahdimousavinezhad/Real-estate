import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import AdminPage from "@/components/templates/dashboard/AdminPage";
import { getProfiles } from "@/services/profiles";

async function Admin({ searchParams }) {
  // Check permission user , if role isn't admin then redirect user to dashboard page
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  // getting data which has not published
  const published = false;
  const data = await getProfiles(searchParams, published);

  return <AdminPage data={data} />;
}

export default Admin;
