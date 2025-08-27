"use client";

import { useDeleteProfileAdmin, usePublishProfile } from "@/hooks/mutations";
import { useRouter } from "next/navigation";

function AdminOptions({ id }) {
  const router = useRouter();

  const { mutate: publishMutate, isPending: isPublishPending } =
    usePublishProfile(router);
  const { mutate: deleteMutate, isPending: isDeletePending } =
    useDeleteProfileAdmin(router);

  const publishHandler = () => {
    if (isPublishPending) return;

    publishMutate(id);
  };

  const deleteHandler = () => {
    if (isDeletePending) return;

    deleteMutate(id);
  };

  return (
    <div className="flex items-center gap-4 *:h-8 *:w-full *:text-[1rem] *:font-normal *:text-white *:rounded-[5px] *:cursor-pointer *:mt-5 *:transition-all *:ease-in *:duration-100">
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
  );
}

export default AdminOptions;
