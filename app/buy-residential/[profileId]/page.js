export const revalidate = 15; // This page is SSG and rebuilding at 15 seconde , it means this page also have ISR
export const dynamicParams = true; // After building first 10 pages , another pages will create with first request , this line in default is true but i wrote that for sure

import ProfileDetailsPage from "@/components/templates/ProfileDetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { notFound } from "next/navigation";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) {
    return notFound();
  }

  return <ProfileDetailsPage data={profile} />;
}

export default ProfileDetails;

export async function generateStaticParams() {
  await connectDB();
  const profile = await Profile.find();
  return profile.slice(0, 10).map((pro) => ({
    profileId: pro._id.toString(),
  }));
}
