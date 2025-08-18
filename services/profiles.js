import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const getProfiles = async (searchParams) => {
  await connectDB();

  let query = {};

  if (searchParams) {
    for (const key in searchParams) {
      if (searchParams[key]) {
        query[key] = searchParams[key];
      }
    }
  }

  const profiles = await Profile.find(query).select("-userId");

  return profiles;
};

export { getProfiles };
