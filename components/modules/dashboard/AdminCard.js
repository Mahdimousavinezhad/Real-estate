"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { sp } from "@/utils/replaceNumber";
import { useDeleteProfileAdmin, usePublishProfile } from "@/hooks/mutations";

function AdminCard({ profile: { _id, title, description, location, price } }) {
  const router = useRouter();
  const { mutate: publishMutate, isPending: isPublishPending } =
    usePublishProfile();
  const { mutate: deleteMutate, isPending: isDeletePending } =
    useDeleteProfileAdmin();

  useEffect(() => {
    router.refresh();
  }, []);

  const publishHandler = () => {
    if (isPublishPending) return;

    publishMutate(_id);
  };

  const deleteHandler = () => {
    if (isDeletePending) return;

    deleteMutate(_id);
  };

  return (
    <div className="border-b-[2px] border-cs-blue pb-[10px] mb-[80px]">
      <h3 className="text-[1.2rem] font-normal text-cs-blue mb-5">{title}</h3>
      <p className="text-justify mb-5">{description}</p>
      <div className="flex items-center mb-5 *:bg-[#304ffe58] *:text-cs-blue *:py-[5px] *:px-[10px] *:ml-[15px] *:rounded-[5px]">
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <div className="flex items-center gap-4 *:h-8 *:w-24 *:text-[1rem] *:font-normal *:text-white *:rounded-[5px] *:cursor-pointer *:mt-5 *:transition-all *:ease-in *:duration-100 max-[280px]:flex-col max-[280px]:*:w-full">
        <button className="bg-cs-blue hover:bg-transparent hover:border hover:border-cs-blue hover:text-black">
          <Link
            href={`/dashboard/admin/${_id}`}
            className="text-[1rem] font-normal"
          >
            جزئیات
          </Link>
        </button>

        <button
          onClick={publishHandler}
          disabled={isPublishPending}
          className="bg-[#00a800] hover:bg-transparent hover:border hover:border-[#00a800] hover:text-black disabled:bg-[#00a800]/75 disabled:hover:text-white disabled:hover:border-none"
        >
          {isPublishPending ? "صبر کنید" : "انتشار"}
        </button>
        <button
          onClick={deleteHandler}
          disabled={isDeletePending}
          className="bg-rose-600 hover:bg-transparent hover:border hover:border-rose-600 hover:text-black disabled:bg-rose-600/75 disabled:hover:text-white disabled:hover:border-none"
        >
          {isDeletePending ? "صبر کنید" : "حذف"}
        </button>
      </div>
    </div>
  );
}

export default AdminCard;
