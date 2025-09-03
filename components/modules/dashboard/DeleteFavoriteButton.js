"use client";

import { useFavorite } from "@/hooks/mutations";
import Loader from "../Loader";

function DeleteFavoriteButton({ id, favorite }) {
  const { mutate, isPending } = useFavorite(favorite);

  const deleteHandler = () => {
    mutate(id);
  };

  return isPending ? (
    <div className="mx-auto flex">
      <Loader isPending={isPending} />
    </div>
  ) : (
    <button
      disabled={isPending}
      onClick={deleteHandler}
      className="w-full block bg-rose-600 text-white py-2 px-4 rounded-lg mt-2 transition-all delay-100 hover:scale-105 hover:bg-rose-700"
    >
      حذف
    </button>
  );
}

export default DeleteFavoriteButton;
