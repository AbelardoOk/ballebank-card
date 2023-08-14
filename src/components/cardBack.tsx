"use client";

import Image from "next/image";
import react, { useEffect } from "react";

export function CardBack({ cvv }: { cvv: string }) {
  const [cv, setCv] = react.useState("123");

  useEffect(() => {
    if (cvv) {
      setCv(cvv);
    }
  }, [cvv]);

  return (
    <div className="animate-flip-down flex h-[215px] w-[384px] flex-col gap-8 rounded-lg bg-gradient-to-r from-[#E68E7B] to-[#D47A66] p-6 lg:h-[280px] lg:w-[500px]">
      <div className="h-[30] w-[344] bg-[#A45A49] px-6 pt-6 lg:h-[40px] lg:w-[448px]"></div>

      <div className="flex flex-col items-end justify-center text-end text-white">
        <p className="text-base font-normal">cvv</p>
        <p className="text-base font-bold">{cv}</p>
      </div>

      <div className="flex items-end justify-end">
        <Image src="/iconDiscord.png" alt="" width={36} height={36} />
      </div>
    </div>
  );
}
