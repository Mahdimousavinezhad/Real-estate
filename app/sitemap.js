import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export default async function sitemap() {
  await connectDB();
  const profiles = await Profile.find();

  const otherRoutes = ["", "buy-residential"];

  const profilesMap = profiles.map((profile) => ({
    url: `${process.env.BASE_URL}/buy-residential/${profile._id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  const otherRoutesMap = otherRoutes.map((route) => ({
    url: `${process.env.BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  }));

  return [...profilesMap, ...otherRoutesMap];
}
