import Sidebar from "../modules/buy-residential/Sidebar";
import Card from "../modules/Card";
import Paginations from "../modules/Paginations";
import SearchBar from "../modules/SearchBar";

function BuyResidentialPage({ data }) {
  const { profiles, ...rest } = data;

  return (
    <>
      <div className="flex justify-between gap-5 mt-10 mb-28 w-full max-[400px]:flex-col max-[400px]:justify-center">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <SearchBar text={"تعداد کل آگهی های مربوطه:"} />
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
          <div className="flex justify-between flex-wrap gap-x-2 gap-y-7">
            {profiles?.map((profile) => (
              <Card
                key={profile._id}
                data={profile}
                residentialResponsive={true}
              />
            ))}
          </div>
        </div>
      </div>
      <Paginations data={JSON.parse(JSON.stringify(rest))} />
    </>
  );
}

export default BuyResidentialPage;
