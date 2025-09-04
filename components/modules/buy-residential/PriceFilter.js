"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ReactSlider from "react-slider";

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialMin = Number(searchParams.get("priceMin")) || 0;
  const initialMax = Number(searchParams.get("priceMax")) || 100000000;
  const [values, setValues] = useState([initialMin, initialMax]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (initialMin === 0 && initialMax === 100000000) {
      params.delete("priceMin");
      params.delete("priceMax");
      router.push(`?${params.toString()}`);
      return;
    }

    if (
      !params.has("priceMin") &&
      !params.has("priceMax") &&
      location.href === "http://localhost:3000/buy-residential"
    ) {
      setValues([0, 100000000]); // I was tried this but it make loop update
      router.refresh();
      // router.push(`?${params.toString()}`); // I was tried this but it make loop update
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("priceMin", values[0]);
    params.set("priceMax", values[1]);
    router.push(`?${params.toString()}`);
  }, [values]);

  const handleInputChange = (index, value) => {
    const numValue = Number(value);
    if (index === 0) {
      setValues([Math.min(numValue, values[1]), values[1]]);
    } else {
      setValues([values[0], Math.max(numValue, values[0])]);
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-10 mx-auto p-4 rounded-xl bg-white shadow-[#304ffe4a_0px_4px_15px] w-[220px] max-sm:w-[140px] max-[400px]:mx-auto max-[400px]:w-[220px]">
      <h3 className="text-lg font-semibold text-center">محدوده قیمت</h3>

      {/* ورودی عددی */}
      <div className="flex flex-col justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm text-gray-500">از</label>
          <input
            type="number"
            value={values[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
            className="border rounded-lg px-2 py-1 text-right focus:outline-none focus:ring focus:ring-blue-300 w-full"
          />
        </div>

        <div className="flex items-center gap-2 w-full">
          <label className="text-sm text-gray-500">تا</label>
          <input
            type="number"
            value={values[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
            className="border rounded-lg px-2 py-1 text-right focus:outline-none focus:ring focus:ring-blue-300 w-full"
          />
        </div>
      </div>

      <ReactSlider
        className="h-2 bg-white rounded-lg relative w-full"
        thumbClassName="h-5 w-5 bg-blue-500 rounded-full shadow-md cursor-grab focus:outline-none -top-1"
        value={values}
        min={0}
        max={100000000}
        step={3000}
        minDistance={1000}
        onChange={setValues}
        renderThumb={(props, state) => {
          const { key, ...restProps } = props;
          return (
            <div key={key} {...restProps}>
              <div className="absolute -top-7 text-xs bg-gray-700 text-white px-1 py-0.5 rounded shadow">
                {state.valueNow.toLocaleString("fa-IR")}
              </div>
            </div>
          );
        }}
        renderTrack={(props, state) => {
          const { key, ...restProps } = props;
          const isSelectedTrack = state.index === 1;
          return (
            <div
              key={key}
              {...restProps}
              className={`h-2 rounded-lg ${
                isSelectedTrack ? "bg-blue-500" : "bg-white"
              }`}
            />
          );
        }}
      />

      <div className="flex justify-between text-sm text-gray-500">
        <span>گران‌ترین</span>
        <span>ارزان‌ترین</span>
      </div>
      <button
        className="bg-cs-blue text-white rounded-lg py-2 px-4 text-center transition-all delay-75 hover:scale-105 hover:bg-blue-700"
        onClick={() => setValues([0, 100000000])}
      >
        حذف فیلتر قیمت
      </button>
    </div>
  );
}
