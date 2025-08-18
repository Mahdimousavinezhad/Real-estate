"use client";

function BuyResidentialError({ reset }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-rose-600 text-3xl mt-20">
        مشکلی در سمت سرور پیش آمده است!
      </h1>
      <p className="text-gray-600 font-normal mt-2">
        لطفا بعدا دوباره تلاش کنید.
      </p>
      <button
        onClick={reset}
        className="mt-7 bg-[#304ffe] text-white font-normal rounded-lg py-2 px-4 transition-all duration-200 hover:bg-blue-500"
      >
        تلاش مجدد
      </button>
    </div>
  );
}

export default BuyResidentialError;
