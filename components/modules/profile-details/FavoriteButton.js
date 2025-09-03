"use client";

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

import { useFavorite } from "@/hooks/mutations";
import Loader from "../Loader";

function FavoriteButton({ data: { id, favorite } }) {
  const { isPending, mutate } = useFavorite(favorite);

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
      {!favorite ? (
        <MdFavoriteBorder className="text-[1.5rem] text-cs-blue" />
      ) : (
        <MdFavorite className="text-[1.5rem] text-cs-blue" />
      )}
      <button className="border-none bg-none cursor-pointer text-[1rem] text-gray-500 h-5 transition-all ease-in duration-100 hover:text-cs-blue">
        {!favorite ? "اضافه به مورد علاقه ها" : "حذف از مورد علاقه ها"}
      </button>
    </div>
  );
}

export default FavoriteButton;
