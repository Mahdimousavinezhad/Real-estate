import Sidebar from "../modules/buy-residential/Sidebar";
import Card from "../modules/Card";
import SearchBar from "../modules/SearchBar";

function BuyResidentialPage({ data }) {
  return (
    <div className="flex justify-between gap-5 mt-10 mb-28 w-full max-[400px]:flex-col max-[400px]:justify-center">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <SearchBar
          data={JSON.parse(JSON.stringify(data))}
          text={"تعداد کل آگهی های مربوطه:"}
        />
        <p className="border-2 my-5"></p>
        {!data.length && (
          <p className="text-center mt-64 font-semibold text-3xl text-rose-600">
            هنوز هیچ آگهی ثبت نشده است !
          </p>
        )}
        <div className="flex justify-between flex-wrap gap-x-2 gap-y-7">
          {data?.map((profile) => (
            <Card
              key={profile._id}
              data={profile}
              residentialResponsive={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyResidentialPage;
