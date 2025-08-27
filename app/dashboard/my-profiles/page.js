import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import MyProfilesPage from "@/components/templates/dashboard/MyProfilesPage";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  const profilesData = user.profiles;

  return <MyProfilesPage profilesData={profilesData} />;
}
export default MyProfiles;
