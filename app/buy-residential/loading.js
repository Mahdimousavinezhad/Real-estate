"use client";

import Loader from "@/components/modules/Loader";

function DashboardLoading() {
  return (
    <div className="flex flex-col justify-center items-center mt-56">
      <Loader />
    </div>
  );
}

export default DashboardLoading;
