import FavoriteCard from "@/components/modules/dashboard/FavoriteCard";
import Paginations from "@/components/modules/Paginations";
import SearchBar from "@/components/modules/SearchBar";

function FavoritePage({ data }) {
  const { profiles, ...rest } = data;

  return (
    <div>
      <SearchBar text={"تعداد کل آگهی های موردعلاقه شما:"} />
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
      <div className="flex justify-between flex-wrap gap-x-2 gap-y-7 mb-32">
        {data.profiles.map((profile) => (
          <FavoriteCard data={profile} key={profile._id} />
        ))}
      </div>
      <Paginations data={{ page: rest.page, totalPages: rest.totalPages }} />
    </div>
  );
}

export default FavoritePage;
