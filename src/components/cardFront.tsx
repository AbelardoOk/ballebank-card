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
    <div className="flex justify-between flex-col w-[500px] h-[280px] p-6 bg-gradient-to-r from-[#E68E7B] to-[#D47A66] gap-8 rounded-lg">
      <div className="flex justify-end">
        <Image src="/logo.png" alt="" width={192} height={37.65} />
      </div>

      <div className="text-white text-left flex flex-col">
        <p className="font-bold text-2xl">{number}</p>
        <p className="font-medium text-base">{name}</p>
        <p className="font-normal text-xs">Valido até</p>
        <p className="font-bold text-xs">{val}</p>
      </div>
    </div>
  );
}
