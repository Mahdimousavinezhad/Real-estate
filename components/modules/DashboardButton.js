"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import LogoutButton from "./dashboard/LogoutButton";
import { useEffect, useRef, useState } from "react";

function DashboardButton() {
  const { status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    window.addEventListener("click", () => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    });
  }, [open]);

  const toggleHandler = () => setOpen((prev) => !prev);

  return (
    <>
      {status === "authenticated" ? (
        <div>
          <div className="relative" onClick={toggleHandler} ref={dropdownRef}>
            <div className="flex items-center gap-2 cursor-pointer bg-white rounded-md text-cs-blue p-1 hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105">
              <FaUserAlt className="text-[25px]" />
            </div>
            {open && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col mx-auto gap-2 absolute *:text-black bg-white rounded-lg top-11 w-40 border -right-28 p-4 shadow-lg"
              >
                <Link href={"/dashboard"}>حساب کاربری</Link>
                <Link href={"/dashboard/my-profiles"}>پروفایل های من</Link>
                <LogoutButton dropdown={true} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Link
            href="/signin"
            className="flex items-center gap-1 bg-white rounded-md text-black p-1 hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105"
          >
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default DashboardButton;
