import MyProfilesPage from "@/components/templates/dashboard/MyProfilesPage";
import api from "@/configs/api";

async function MyProfiles({ searchParams }) {
  // await connectDB();
  // const session = await getServerSession(authOptions);
  // const [user] = await User.aggregate([
  //   {
  //     $match: { email: session.user.email },
  //   },
  //   {
  //     $lookup: {
  //       from: "profiles",
  //       foreignField: "userId",
  //       localField: "_id",
  //       as: "profiles",
  //     },
  //   },
  // ]);
  // const profilesData = user.profiles;
  const data = await api.get("/api/profile?userOnly=true&published=none", {
    params: searchParams,
  });

  return <MyProfilesPage profilesData={data} searchParams={searchParams} />;
}
export default MyProfiles;
