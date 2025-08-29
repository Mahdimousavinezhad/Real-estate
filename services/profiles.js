import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

const getProfiles = async (searchParams, published) => {
  await connectDB();

  let query = {};

  if (searchParams) {
    for (const key in searchParams) {
      if (searchParams[key]) {
        query[key] = {
          $regex: searchParams[key],
          $options: "i",
        };
      }
    }
  }

  const newQuery = { ...query, published };

  const profiles = await Profile.find(newQuery).select("-userId");

  return profiles;
};

export { getProfiles };
