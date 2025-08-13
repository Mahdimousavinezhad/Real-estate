"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  const router = useRouter();

  const signOutHandler = () => {
    signOut({ redirect: false });
    router.push("/signin");
  };

  return (
    <button
      onClick={signOutHandler}
      className="flex items-center gap-1 text-red-600 w-full font-normal mt-4 max-md:justify-center"
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
