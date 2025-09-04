"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function ConnectionLostProvider() {
  const [isOnline, setNetwork] = useState();
  const router = useRouter();

  useEffect(() => {
    setNetwork(navigator.onLine);

    if (!isOnline) {
      router.push("/connection-lost");
    } else {
      router.push("/");
    }
  }, [isOnline]);

  return <></>;
}

export default ConnectionLostProvider;
