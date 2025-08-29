"use client";

import Link from "next/link";
import { HiFilter } from "react-icons/hi";

import { categories } from "@/constants/strings";
import { useRouter, useSearchParams } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const showAllAdsHandler = () => {
    params.delete("category");
    router.push(`/buy-residential?${params.toString()}`);
  };

  return (
    <div className="shadow-[#304ffe4a_0px_4px_15px] w-[220px] p-4 rounded-xl max-sm:w-[140px] max-[400px]:mx-auto max-[400px]:w-[220px]">
      <p className="flex justify-center items-center gap-2 text-[1.2rem] font-normal mb-4">
        <HiFilter className="text-[1.3rem] text-cs-blue" />
        دسته بندی
      </p>
      <div className="*:text-gray-500 flex flex-col gap-4 text-center">
        <p onClick={showAllAdsHandler} className="cursor-pointer">
          همه
        </p>
        {Object.keys(categories).map((i) => {
          params.set("category", i);

          return (
            <Link key={i} href={`/buy-residential?${params.toString()}`}>
              {categories[i]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
