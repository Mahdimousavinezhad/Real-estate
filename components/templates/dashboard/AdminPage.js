import AdminCard from "@/components/modules/dashboard/AdminCard";
import Paginations from "@/components/modules/Paginations";
import SearchBar from "@/components/modules/SearchBar";

async function AdminPage({ data }) {
  const { profiles, ...rest } = data;

  return (
    <>
      <div className="mb-24 border-2 p-5 rounded-xl">
        <SearchBar
          data={JSON.parse(JSON.stringify(profiles))}
          text={"تعداد کل آگهی های در انتظار تایید:"}
        />
        <p className="border-2 my-5"></p>
        {!profiles.length && rest.page <= rest.totalPages && (
          <p className="text-center mt-64 font-semibold text-3xl text-rose-600">
            هنوز هیچ آگهی ثبت نشده است !
          </p>
        )}
        {rest.page > rest.totalPages && (
          <p className="text-center mt-64 font-semibold text-3xl text-rose-600">
            در صفحه ی {rest.page} آگهی وجود ندارد!
          </p>
        )}
        {profiles.map((profile) => (
          <AdminCard
            key={profile._id}
            profile={JSON.parse(JSON.stringify(profile))}
          />
        ))}
      </div>
      <Paginations data={JSON.parse(JSON.stringify(rest))} />
    </>
  );
}

export default AdminPage;
