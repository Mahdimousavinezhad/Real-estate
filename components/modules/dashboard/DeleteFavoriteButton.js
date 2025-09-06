"use client";

import { useEffect, useState } from "react";

import { useFavorite } from "@/hooks/mutations";
import { useGetFavorite } from "@/hooks/queries";
import Loader from "../Loader";

const forceReload = true; // I wrote this because prefetch value isn't work here

function DeleteFavoriteButton({ id }) {
  const [favoriteStatus, setFavoriteStatus] = useState();

  const { data, isPending: isGetFavoritePending, refetch } = useGetFavorite(id);
  const { mutate, isPending } = useFavorite(
    favoriteStatus,
    refetch,
    forceReload
  );

  useEffect(() => {
    setFavoriteStatus(data?.data?.favorite);
  }, [isGetFavoritePending, data]);

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
