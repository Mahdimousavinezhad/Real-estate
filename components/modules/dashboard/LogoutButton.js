"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

function LogoutButton({ dropdown }) {
  const router = useRouter();

  const signOutHandler = () => {
    signOut({ redirect: false });
    router.push("/signin");
  };

  return (
    <button
      onClick={signOutHandler}
      className={`flex items-center gap-1 w-full  !text-red-600 font-normal max-md:justify-center ${
        !dropdown ? "mt-4" : null
      }`}
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
