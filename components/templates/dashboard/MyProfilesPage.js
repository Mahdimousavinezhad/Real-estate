import DashboardCard from "@/components/modules/dashboard/DashboardCard";
import Paginations from "@/components/modules/Paginations";
import SearchBar from "@/components/modules/SearchBar";

async function MyProfilesPage({ profilesData }) {
  const { profiles, ...rest } = profilesData;

  return (
    <>
      <div className="mb-28 border-2 p-5 rounded-xl">
        <SearchBar text={"تعداد کل آگهی های ثبت شده:"} />
        <p className="border-2 my-5"></p>
        {!profiles.length && (
          <p className="bg-rose-200 rounded-lg text-rose-700 font-normal text-2xl p-3">
            هیچ آگهی ثبت نشده است
          </p>
        )}
        {profiles.map((profile) => (
          <DashboardCard
            key={profile._id}
            data={JSON.parse(JSON.stringify(profile))}
          />
        ))}
      </div>
      <Paginations data={JSON.parse(JSON.stringify(rest))} />
    </>
  );
}

export default MyProfilesPage;
