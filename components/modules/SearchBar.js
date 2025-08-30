"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchBar({ text }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [limit, setLimit] = useState(searchParams.get("limit") || "9");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (limit === "9") {
      params.delete("limit");
    } else {
      params.set("limit", limit.toString());
    }

    if (title === "") {
      params.delete("title");
    } else {
      params.set("title", title.toString());
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [title, limit]);

  return (
    <div className="flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-2">
        <p className="text-gray-600 text-lg max-[322px]:text-[16px] max-[290px]:text-sm">
          {text}
        </p>
        <input
          type="text"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="text-xl text-cs-blue font-normal border border-cs-blue w-[35px] outline-none text-center rounded-md"
        />
      </div>
      <input
        type="text"
        value={title}
        placeholder="آگهی مورد نظر را جستجو کنید..."
        onChange={(e) => setTitle(e.target.value)}
        className="w-96 rounded-lg outline-none border border-cs-blue py-2 px-4 max-[930px]:w-full max-[930px]:mt-3"
      />
    </div>
  );
}

export default SearchBar;
