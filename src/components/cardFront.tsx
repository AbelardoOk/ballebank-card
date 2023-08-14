"use client";

import Image from "next/image";
import react, { useEffect } from "react";

export function CardFront({
  cardNumber,
  titName,
  validate,
}: {
  cardNumber: string;
  titName: string;
  validate: string;
}) {
  const [number, setNumber] = react.useState("1234 1234 1234 1234");
  const [name, setName] = react.useState("Leonardo di Ser Piero da Vinci");
  const [val, setVal] = react.useState("01/42");

  useEffect(() => {
    if (validate) {
      setVal(validate);
    }
  }, [validate]);

  useEffect(() => {
    if (titName) {
      setName(titName);
    }
  }, [titName]);

  useEffect(() => {
    if (cardNumber) {
      const numberSpace = cardNumber.replace(/(.{4})/g, "$1 ");
      setNumber(numberSpace);
    }
  }, [cardNumber]);

  return (
    <div className="animate-flip-up flex h-[215px] w-[384px] flex-col justify-between gap-8 rounded-lg bg-gradient-to-r from-[#E68E7B] to-[#D47A66] p-6 lg:h-[280px] lg:w-[500px]">
      <div className="flex justify-end">
        <Image src="/logo.png" alt="" width={192} height={37.65} />
      </div>

      <div className="flex flex-col text-left text-white">
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-base font-medium">{name}</p>
        <p className="text-xs font-normal">Valido até</p>
        <p className="text-xs font-bold">{val}</p>
      </div>
    </div>
  );
}
