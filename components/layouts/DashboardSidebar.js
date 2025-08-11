import { getServerSession } from "next-auth";
import { CgProfile } from "react-icons/cg";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "../modules/LogoutButton";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between mt-20 gap-7">
      <div className="flex flex-col items-center h-fit py-[30px] px-[15px] rounded-[10px] shadow-[#304ffe4a_0px_4px_15px] w-[220px]">
        <CgProfile className="text-[3rem] text-[#304ffe]" />
        <p className="text-grey text-[1.1rem] font-normal mt-5">
          {session?.user.email}
        </p>
        <span className="bg-[#304ffe] w-full h-[1px] mb-[30px]"></span>
        <Link href="/dashboard" className="my-[5px] font-normal w-full">
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-profiles"
          className="my-[5px] font-normal w-full"
        >
          آگهی های من
        </Link>
        <Link href="/dashboard/add" className="my-[5px] font-normal w-full">
          ثبت آگهی
        </Link>
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
