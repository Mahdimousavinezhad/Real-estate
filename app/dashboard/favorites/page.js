import FavoritePage from "@/components/templates/dashboard/FavoritePage";
import api from "@/configs/api";

async function Favorites({ searchParams }) {
  const data = await api.get("/api/profile?favorite=true&published=none", {
    params: { searchParams },
  });

  return (
    <>
      <FavoritePage data={data} />
    </>
  );
}

export default Favorites;
