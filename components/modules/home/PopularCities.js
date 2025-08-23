import { FaCity } from "react-icons/fa";

import { cities } from "@/constants/strings";

function PopularCities() {
  return (
    <div className="mt-20">
      <h3 className="font-[600] text-[2rem] text-center text-cs-blue">
        شهرهای پر بازدید
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {cities.map((i) => (
          <li
            key={i}
            className="text-cs-blue bg-[#bbdefb] rounded-[10px] py-3 flex items-center gap-2 justify-center text-[1.1rem]"
          >
            <FaCity className="mb-2" />
            <span className="font-normal">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularCities;
