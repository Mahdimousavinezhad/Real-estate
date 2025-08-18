"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import Card from "../Card";
import { useDeleteProfile } from "@/hooks/mutations";
import Loader from "../Loader";

function DashboardCard({ data }) {
  const router = useRouter();

  const { mutate, isPending } = useDeleteProfile();

  useEffect(() => {
    router.refresh();
  }, []);

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
    router.refresh();
  };

  const deleteHandler = () => {
    mutate(data._id);
  };

  return (
    <div className="flex w-full p-5 border-2 border-[#304ffe58] rounded-[15px] mb-5 max-[420px]:flex-col">
      <Card data={data} dashboardResponsive={true} />
      <div className="flex items-end justify-between w-full p-[10px] max-[305px]:flex-col max-[305px]:flex-wrap max-[305px]:gap-3">
        <button
          onClick={editHandler}
          className="flex items-center justify-center max-[305px]:w-full w-[48%] bg-white cursor-pointer h-10 rounded-lg text-[1rem] border-2 border-green-500 text-green-500 gap-2 font-normal hover:bg-green-500 hover:text-white transition-all duration-200"
        >
          ویرایش
          <FiEdit className="text-[1.1rem]" />
        </button>
        {isPending ? (
          <div className="self-end mx-auto">
            <Loader />
          </div>
        ) : (
          <button
            onClick={deleteHandler}
            className="flex items-center justify-center max-[305px]:w-full w-[48%] bg-white cursor-pointer h-10 rounded-lg text-[1rem] border-2 border-rose-500 text-rose-500 gap-2 font-normal hover:bg-rose-500 hover:text-white transition-all duration-200"
          >
            حذف
            <AiOutlineDelete className="text-[1.1rem]" />
          </button>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;
