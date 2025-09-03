"use client";

import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import { useFavorite } from "@/hooks/mutations";
import { useGetFavorite } from "@/hooks/queries";
import Loader from "../Loader";

function FavoriteButton({ data: { id } }) {
  const { data, isPending: isGetFavoritePending } = useGetFavorite(id);
  const [favoriteStatus, setFavoriteStatus] = useState();

  const { isPending, mutate } = useFavorite(favoriteStatus);

  useEffect(() => {
    setFavoriteStatus(data?.data?.favorite);
  }, [isGetFavoritePending, data]);

  const favoriteHandler = () => {
    mutate(id);
  };

  return isPending ? (
    <div className="mx-auto flex">
      <Loader isPending={isPending} favoriteLoader={true} />
    </div>
  ) : (
    <div
      className="flex items-center justify-center gap-2"
      onClick={favoriteHandler}
    >
      {!favoriteStatus ? (
        <MdFavoriteBorder className="text-[1.5rem] text-cs-blue" />
      ) : (
        <MdFavorite className="text-[1.5rem] text-cs-blue" />
      )}
      <button className="border-none bg-none cursor-pointer text-[1rem] text-gray-500 h-5 transition-all ease-in duration-100 hover:text-cs-blue">
        {!favoriteStatus ? "اضافه به مورد علاقه ها" : "حذف از مورد علاقه ها"}
      </button>
    </div>
  );
}

export default FavoriteButton;
