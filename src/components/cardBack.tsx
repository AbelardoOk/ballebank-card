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
    <div className="flex flex-col w-[384px] h-[215px] lg:w-[500px] lg:h-[280px] p-6 bg-gradient-to-r from-[#E68E7B] to-[#D47A66] gap-8 rounded-lg">
      <div className="px-6 pt-6 w-[344] h-[30] lg:w-[448px] lg:h-[40px] bg-[#A45A49]"></div>

      <div className="text-white text-end flex flex-col justify-center items-end">
        <p className="font-normal text-base">cvv</p>
        <p className="font-bold text-base">{cvv}</p>
      </div>

      <div className="justify-end items-end flex">
        <Image src="/iconDiscord.png" alt="" width={36} height={36} />
      </div>
    </div>
  );
}
