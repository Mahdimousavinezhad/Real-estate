import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";

import ItemList from "../modules/profile-details/ItemList";
import Title from "../elements/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import icons from "@/constants/icons";
import { categories } from "@/constants/strings";
import ShareButton from "../modules/profile-details/ShareButton";

function ProfileDetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    category,
    price,
    constructionDate,
  },
}) {
  return (
    <div className="flex my-[60px] max-[480px]:flex-col-reverse max-[480px]:gap-10">
      <div className="w-full">
        <h1 className="text-cs-blue text-[1.3rem] font-normal mb-[10px]">
          {title}
        </h1>
        <span className="flex items-start gap-[5px] h-[15px] mb-[50px] text-gray-600">
          <HiOutlineLocationMarker className="text-[1.2rem]" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-[50px]">{description}</p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className="w-[250px] mr-10 *:shadow-[#304ffe4a_0px_4px_15px] *:p-[10px] *:rounded-[10px] *:mb-5  max-[480px]:mx-auto  max-[290px]:w-[200px]">
        <div className="flex flex-col items-center">
          <SiHomebridge className="text-[3rem] text-cs-blue m-[10px_0_20px]" />
          <p className="text-[1.1rem] font-normal text-center">
            املاک {realState}
          </p>
          <span className="flex items-center gap-[5px] text-gray-500 mt-5">
            <AiOutlinePhone className="text-[1.4rem] text-gray-500 m-0" />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className="flex flex-col items-center !p-[20px_0_0] *:flex *:items-center *:text-gray-500 *:mb-5 *:h-5 *:gap-1">
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck className="text-[1.5rem] text-cs-blue" />
            {new Date(constructionDate).toLocaleDateString("FA-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
