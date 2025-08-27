export const dynamic = "force-dynamic"; // This page is Server Side Rendering || SSR

import BuyResidentialPage from "@/components/templates/BuyResidentialPage";
import { getProfiles } from "@/services/profiles";

async function BuyResidentials({ searchParams }) {
  const published = true;
  const data = await getProfiles(searchParams, published); // I did get data directly from own api/server

  return <BuyResidentialPage data={data} />;
}

export default BuyResidentials;
