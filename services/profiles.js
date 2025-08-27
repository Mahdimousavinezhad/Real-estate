import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const getProfiles = async (searchParams, published) => {
  await connectDB();

  let query = {};

  if (searchParams) {
    for (const key in searchParams) {
      if (searchParams[key]) {
        query[key] = searchParams[key];
      }
    }
  }

  const newQuery = { ...query, published };

  const profiles = await Profile.find(newQuery).select("-userId");

  return profiles;
};

export { getProfiles };
