import Image from "next/image";
import react, { useEffect } from "react";

export function CardBack(cvv: string) {
  const [cv, setCv] = react.useState("123");

  useEffect(() => {
    if (cvv) {
      setCv(cvv);
    }
  }, [cvv]);

  return (
    <div className="flex flex-col w-[500px] h-[280px] p-6 bg-gradient-to-r from-[#E68E7B] to-[#D47A66] gap-8">
      <div className="px-6 pt-6 bg-[#A45A49]"></div>
      <div className="items-end flex flex-col">
        <div className="text-white text-end flex flex-col">
          <p className="font-normal text-base">CVV</p>
          <p className="font-bold text-base">{cvv}</p>
        </div>
        <Image src="/iconDiscord.png" alt="" width={36} height={36} />
      </div>
    </div>
  );
}
