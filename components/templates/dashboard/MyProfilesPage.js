import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import DashboardCard from "@/components/modules/dashboard/DashboardCard";

async function MyProfilesPage() {
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

  return (
    <div className="mb-96 border-2 p-5 rounded-xl">
      {!profilesData.length && (
        <p className="bg-rose-200 rounded-lg text-rose-700 font-normal text-2xl p-3">
          هیچ آگهی ثبت نشده است
        </p>
      )}
      {profilesData.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
}

export default MyProfilesPage;
