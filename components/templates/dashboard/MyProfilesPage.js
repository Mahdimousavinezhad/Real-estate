import DashboardCard from "@/components/modules/dashboard/DashboardCard";
import SearchBar from "@/components/modules/SearchBar";

async function MyProfilesPage({ profilesData, searchParams }) {
  const newProfileData = profilesData.filter((ads) => {
    if (searchParams.title) {
      return ads.title.includes(searchParams.title);
    } else {
      return profilesData;
    }
  });

  return (
    <div className="mb-96 border-2 p-5 rounded-xl">
      <SearchBar
        data={JSON.parse(JSON.stringify(newProfileData))}
        text={"تعداد کل آگهی های ثبت شده:"}
      />
      <p className="border-2 my-5"></p>
      {!newProfileData.length && (
        <p className="bg-rose-200 rounded-lg text-rose-700 font-normal text-2xl p-3">
          هیچ آگهی ثبت نشده است
        </p>
      )}
      {newProfileData.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
}

export default MyProfilesPage;
