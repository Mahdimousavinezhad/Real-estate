export const dynamic = "force-dynamic"; // This page is Server Side Rendering || SSR

import BuyResidentialPage from "@/components/templates/BuyResidentialPage";
import api from "@/configs/api";

async function BuyResidentials({ searchParams }) {
  const data = await api.get("/api/profile?published=true", {
    params: searchParams,
  });

  return <BuyResidentialPage data={data} />;
}

export default BuyResidentials;
