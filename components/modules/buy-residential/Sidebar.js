import Link from "next/link";
import { HiFilter } from "react-icons/hi";

import { categories } from "@/constants/strings";

function Sidebar() {
  return (
    <div className="shadow-[#304ffe4a_0px_4px_15px] w-[220px] p-4 rounded-xl max-sm:w-[140px] max-[400px]:mx-auto max-[400px]:w-[220px]">
      <p className="flex justify-center items-center gap-2 text-[1.2rem] font-normal mb-4">
        <HiFilter className="text-[1.3rem] text-cs-blue" />
        دسته بندی
      </p>
      <div className="*:text-gray-500 flex flex-col gap-4 text-center">
        <Link href="/buy-residential">همه</Link>
        {Object.keys(categories).map((i) => (
          <Link
            key={i}
            href={{
              pathname: "/buy-residential",
              query: { category: i },
            }}
          >
            {categories[i]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
