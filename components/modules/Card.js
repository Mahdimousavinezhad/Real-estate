import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import icons from "@/constants/icons";
import { sp } from "@/utils/replaceNumber";

function Card({ title, category, location, price, dashboardResponsive }) {
  return (
    <div
      className={`w-[250px] border-2 border-solid border-[#304ffe58] rounded-[10px] p-[10px]  ${
        dashboardResponsive ? `max-[420px]:w-full` : null
      }`}
    >
      <div className="text-[1.8rem] bg-[#304ffe58] text-[#304ffe] p-[3px] rounded-[5px] w-fit">
        {icons[category]}
      </div>
      <p className="font-normal my-[10px]">{title}</p>
      <p className="flex items-center text-grey text-[0.9rem] gap-[5px]">
        <HiOutlineLocationMarker className="text-[1rem]" />
        {location}
      </p>
      <span className="mt-[10px] text-gray block text-[0.9rem] font-normal">
        {sp(price)} تومان
      </span>
      <Link
        href="/"
        className="flex items-center justify-between mt-5 text-[0.95rem] font-normal text-[#304ffe]"
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-[1.5rem]" />
      </Link>
    </div>
  );
}

export default Card;
