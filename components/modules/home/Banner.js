import { FiCircle } from "react-icons/fi";

import { services } from "@/constants/homePageInfo";

function Banner() {
  return (
    <div className="flex flex-col justify-center items-center mt-24 text-[#304ffe]">
      <div>
        <h1 className="text-[3rem] mb-[30px] font-[700]">
          سامانه خرید و اجاره ملک
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-5">
          {services.map((s) => (
            <li
              key={s}
              className="bg-[#bbdefb] flex items-center gap-2 rounded-lg py-1 px-3"
            >
              <FiCircle />
              <span className="font-normal">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Banner;
