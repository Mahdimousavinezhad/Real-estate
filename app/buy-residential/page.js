export const dynamic = "force-dynamic"; // This page is Server Side Rendering || SSR

import BuyResidentialPage from "@/components/templates/BuyResidentialPage";
import { getProfiles } from "@/services/profiles";

async function BuyResidentials({ searchParams }) {
  const data = await getProfiles(searchParams); // I did get data directly from own api/server

  return <BuyResidentialPage data={data} />;
}

export default BuyResidentials;
