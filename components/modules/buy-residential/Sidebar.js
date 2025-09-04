"use client";

import Link from "next/link";
import { HiFilter } from "react-icons/hi";

import { categories } from "@/constants/strings";
import { useRouter, useSearchParams } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const currentCategory = params.get("category") || "";

  const showAllAdsHandler = () => {
    params.delete("category");
    router.push(`/buy-residential?${params.toString()}`);
  };

  return (
    <div className="shadow-[#304ffe4a_0px_4px_15px] p-4 rounded-xl w-[220px] max-sm:w-[140px] max-[400px]:mx-auto max-[400px]:w-[220px]">
      <p className="flex justify-center items-center gap-2 text-[1.2rem] font-normal mb-4">
        <HiFilter className="text-[1.3rem] text-cs-blue" />
        دسته بندی
      </p>
      <div className="*:text-gray-500 flex flex-col gap-4 text-center">
        <p
          onClick={showAllAdsHandler}
          className={`cursor-pointer py-1 px-2 rounded-lg transition-all duration-100 hover:scale-105 hover:bg-slate-200 ${
            currentCategory === "" &&
            "bg-cs-blue !text-white hover:!bg-blue-800"
          }`}
        >
          همه
        </p>
        {Object.keys(categories).map((i) => {
          params.set("category", i);

          return (
            <Link
              key={i}
              href={`/buy-residential?${params.toString()}`}
              className={`py-1 px-2 rounded-lg transition-all duration-100 hover:scale-105 hover:bg-slate-200 ${
                currentCategory === i &&
                "bg-cs-blue !text-white hover:!bg-blue-800"
              }`}
            >
              {categories[i]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
