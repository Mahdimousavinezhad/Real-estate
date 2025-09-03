import { ThreeDots } from "react-loader-spinner";

function Loader({ isPending, favoriteLoader }) {
  return (
    <ThreeDots
      visible={isPending}
      height={`${favoriteLoader ? "22" : "50"}`}
      width="80"
      color="#304ffe"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
      wrapperClass=""
    />
  );
}

export default Loader;
