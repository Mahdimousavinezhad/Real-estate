import AddProfilePage from "@/components/templates/dashboard/AddProfilePage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function ProfileId({ params }) {
  await connectDB();
  const profileId = params.profileId;
  const profile = await Profile.findOne({ _id: profileId });

  return (
    <AddProfilePage
      profileId={profileId}
      profile={JSON.parse(JSON.stringify(profile))}
    />
  );
}

export default ProfileId;
