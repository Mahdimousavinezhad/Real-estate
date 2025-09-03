"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Paginations({ data: { page, totalPages } }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({
    page: searchParams.get("page") || "1",
  });

  useEffect(() => {
    const newQuery = new URLSearchParams(searchParams);

    if (query.page === "1") {
      newQuery.delete("page");
    } else {
      newQuery.set("page", query.page);
    }

    router.push(`${pathname}?${newQuery.toString()}`);
  }, [query.page]);

  const pagesHandler = (status) => {
    if (status === "next") {
      setQuery((prev) => ({ ...prev, page: String(+prev.page + 1) }));
    } else if (status === "prev" && query.page > 1) {
      setQuery((prev) => ({ ...prev, page: String(+prev.page - 1) }));
    }
  };

  const changePageHandler = (event) => {
    if (+page >= 1) {
      setQuery((prev) => ({ ...prev, page: String(+event.target.innerText) }));
    }
  };

  return (
    <div className="flex items-center gap-4 justify-center mb-28">
      <button
        onClick={() => pagesHandler("prev")}
        disabled={query.page === "1"}
        className="px-5 py-1 rounded bg-cs-blue text-white disabled:bg-blue-400"
      >
        قبلی
      </button>
      <div className="flex items-center gap-2">
        <p
          onClick={changePageHandler}
          className={`py-1 px-3 rounded border cursor-pointer ${
            query.page === "1" ? "bg-cs-blue text-white" : "border-cs-blue"
          }`}
        >
          1
        </p>

        {+query.page > 2 && <span>...</span>}

        {+query.page > 1 && +query.page < totalPages && (
          <p
            onClick={changePageHandler}
            className="py-1 px-3 rounded border border-cs-blue bg-cs-blue text-white cursor-pointer"
          >
            {query.page}
          </p>
        )}

        {+query.page < totalPages - 1 && <span>...</span>}

        {+query.page !== totalPages - 1 &&
          totalPages - 1 !== 1 &&
          totalPages - 1 !== 0 &&
          totalPages - 1 !== -1 && (
            <p
              onClick={changePageHandler}
              className={`py-1 px-3 rounded border cursor-pointer ${
                query.page === String(totalPages - 1)
                  ? "bg-cs-blue text-white"
                  : "border-cs-blue"
              }`}
            >
              {totalPages - 1}
            </p>
          )}

        {totalPages > 1 && (
          <p
            onClick={changePageHandler}
            className={`py-1 px-3 rounded border cursor-pointer ${
              query.page === String(totalPages)
                ? "bg-cs-blue text-white"
                : "border-cs-blue"
            }`}
          >
            {totalPages}
          </p>
        )}
      </div>

      <button
        onClick={() => pagesHandler("next")}
        disabled={page >= totalPages}
        className="px-5 py-1 rounded bg-cs-blue text-white disabled:bg-blue-400"
      >
        بعدی
      </button>
    </div>
  );
}

export default Paginations;
