import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

import icons from "@/constants/icons";
import { sp } from "@/utils/replaceNumber";
import DeleteFavoriteButton from "./DeleteFavoriteButton";

function FavoriteCard({ data, dashboardResponsive, residentialResponsive }) {
  return (
    <div
      className={`w-[250px] border-2 border-solid border-[#304ffe58] rounded-[10px] p-[10px]  ${
        dashboardResponsive ? `max-[420px]:w-full` : null
      } ${residentialResponsive ? `max-md:w-full` : null}`}
    >
      <div className="text-[1.8rem] bg-[#304ffe58] text-cs-blue p-[3px] rounded-[5px] w-fit">
        {icons[data?.category]}
      </div>
      <p className="font-normal my-[10px]">
        {data.title.length > 15 ? `${data.title.slice(0, 15)}...` : data.title}
      </p>
      <p className="flex items-center text-grey text-[0.9rem] gap-[5px]">
        <HiOutlineLocationMarker className="text-[1rem]" />
        {data.location.length > 15
          ? `${data.location.slice(0, 15)}...`
          : data.location}
      </p>
      <span className="mt-[10px] text-gray block text-[0.9rem] font-normal">
        {sp(data?.price)} تومان
      </span>
      <hr className="mt-2" />
      <Link
        href={`/buy-residential/${data._id}`}
        className="w-full block bg-cs-blue text-white py-2 px-4 rounded-lg mt-2 text-center transition-all delay-100 hover:scale-105 hover:bg-blue-700"
      >
        مشاهده آگهی
      </Link>
      <DeleteFavoriteButton
        id={JSON.parse(JSON.stringify(data._id))}
        favorite={JSON.parse(JSON.stringify(data.favorite))}
      />
    </div>
  );
}

export default FavoriteCard;
