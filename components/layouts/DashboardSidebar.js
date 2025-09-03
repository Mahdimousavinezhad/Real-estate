"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import LogoutButton from "../modules/dashboard/LogoutButton";

function DashboardSidebar({ children, user }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex justify-between mt-20 gap-7 max-md:flex-col max-md:justify-center max-md:items-center">
      <div className="flex flex-col items-center h-fit py-[30px] px-[15px] rounded-[10px] shadow-[#304ffe4a_0px_4px_15px] w-[250px] max-md:w-96 max-md:text-center max-[420px]:w-60 max-[288px]:w-56">
        <div className="flex flex-col items-center gap-2">
          <CgProfile className="text-[3rem] text-cs-blue" />
          {user.role === "ADMIN" && <p className="font-normal">ادمین</p>}
        </div>
        <p className="text-grey text-[1.1rem] font-normal mt-5">
          {user?.email}
        </p>
        <span className="bg-cs-blue w-full h-[1px] mb-[30px]"></span>
        <Link
          href="/dashboard"
          className={`flex items-center gap-2 my-[3px] font-normal w-full transition-all hover:bg-slate-200 rounded-lg py-2 px-2 hover:-translate-x-1 ${
            pathname === "/dashboard" &&
            "bg-cs-blue text-white hover:!bg-blue-800"
          }`}
        >
          <FaRegUser className="self-start text-lg" />
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-profiles"
          className={`flex items-center gap-2 my-[3px] font-normal w-full transition-all hover:bg-slate-200 rounded-lg py-2 px-2 hover:-translate-x-1 ${
            pathname === "/dashboard/my-profiles" &&
            "bg-cs-blue text-white hover:!bg-blue-800"
          }`}
        >
          <RiFileList3Line className="self-start text-lg" />
          آگهی های من
        </Link>
        <Link
          href="/dashboard/favorites"
          className={`flex items-center gap-2 my-[3px] font-normal w-full transition-all hover:bg-slate-200 rounded-lg py-2 px-2 hover:-translate-x-1 ${
            pathname === "/dashboard/favorites" &&
            "bg-cs-blue text-white hover:!bg-blue-800"
          }`}
        >
          <MdFavoriteBorder className="self-start text-lg" />
          آگهی های مورد علاقه
        </Link>
        <Link
          href="/dashboard/add"
          className={`flex items-center gap-2 my-[3px] font-normal w-full transition-all hover:bg-slate-200 rounded-lg py-2 px-2 hover:-translate-x-1 ${
            pathname === "/dashboard/add" &&
            "bg-cs-blue text-white hover:!bg-blue-800"
          }`}
        >
          <FaRegSave className="self-start text-lg" />
          ثبت آگهی
        </Link>
        {user.role === "ADMIN" && (
          <>
            <Link
              href="/dashboard/admin"
              className={`flex items-center gap-2 my-[3px] font-normal w-full transition-all hover:bg-slate-200 rounded-lg py-2 px-2 hover:-translate-x-1 ${
                pathname === "/dashboard/admin" &&
                "bg-cs-blue text-white hover:!bg-blue-800"
              }`}
            >
              <IoCheckmarkDone className="self-start text-lg" />
              در انتظار تایید
            </Link>
          </>
        )}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
