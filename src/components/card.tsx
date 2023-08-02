import Image from "next/image";

interface Dados {
  cardNumber: string;
  titName: string;
  validate: string;
  cvv: string;
}

export function Card(props: Dados) {
  return (
    <div className="flex flex-col p-6 bg-gradient-to-r from-[#E68E7B] to-[#D47A66] gap-8 w-max">
      <Image src="/logo.png" alt="" width={192} height={37.65} />

      <div className="text-white text-left flex flex-col">
        <p className="font-bold text-2xl">1234 1234 1234 1234</p>
        <p className="font-medium text-base">Leonardo di Ser Piero da Vinci</p>
        <p className="font-normal text-xs">Valido até</p>
        <p className="font-bold text-xs">01/42</p>
      </div>
    </div>
  );
}
