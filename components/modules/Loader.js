import { ThreeDots } from "react-loader-spinner";

function Loader({ isPending }) {
  return (
    <ThreeDots
      visible={isPending}
      height="50"
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
