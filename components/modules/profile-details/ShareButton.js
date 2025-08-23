"use client";

import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className="flex items-center justify-center gap-[10px]">
        <LuShare2 className="text-[1.2rem] text-cs-blue" />
        <button className="border-none bg-none cursor-pointer text-[1rem] text-gray-500 h-5 transition-all ease-in duration-100 hover:text-cs-blue">
          اشتراک گذاری
        </button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
