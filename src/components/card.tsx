import Image from "next/image";

export function Card({
  cardNumber,
  titName,
  validate,
  cvv,
}: {
  cardNumber: string;
  titName: string;
  validate: string;
  cvv: string;
}) {
  return (
    <div className="flex flex-col w-[500px] h-[280px] p-6 bg-gradient-to-r from-[#E68E7B] to-[#D47A66] gap-8">
      <Image src="/logo.png" alt="" width={192} height={37.65} />

      <div className="text-white text-left flex flex-col">
        <p className="font-bold text-2xl">{cardNumber}</p>
        <p className="font-medium text-base">{titName}</p>
        <p className="font-normal text-xs">Valido até</p>
        <p className="font-bold text-xs">{validate}</p>
      </div>
    </div>
  );
}
