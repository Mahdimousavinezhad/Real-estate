import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";

async function ProfileIdAdmin({ params }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/");

  const profile = await Profile.findOne({ _id: params.profileId });
  return <ProfileDetailsPage data={profile} role={user.role} />;
}

export default ProfileIdAdmin;
