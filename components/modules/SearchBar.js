"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { e2p } from "@/utils/replaceNumber";

function SearchBar({ data, text }) {
  const [title, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (title === "") {
      params.delete("title");
      //   return;  doesn't need to use that , because URLSearchParams already do that
    } else {
      params.set("title", title);
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [title]);

  return (
    <div className="flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-2">
        <p className="text-gray-600 text-lg max-[322px]:text-[16px] max-[290px]:text-sm">
          {text}
        </p>
        <p className="text-2xl text-cs-blue font-normal underline max-[322px]:text-lg">
          {e2p(data.length)}
        </p>
      </div>
      <input
        type="text"
        value={title}
        placeholder="آگهی مورد نظر را جستجو کنید..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 rounded-lg outline-none border border-cs-blue py-2 px-4 max-[930px]:w-full max-[930px]:mt-3"
      />
    </div>
  );
}

export default SearchBar;
