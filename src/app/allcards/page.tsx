import { CardBack } from "@/components/cardBack";
import { CardFront } from "@/components/cardFront";
import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center bg-[#251F20] gap-12 flex-col py-12 px-40">
      <Header />

      <Link href={"/"} className="flex items-center justify-around">
        <button className="rounded-md px-12 py-4 font-semibold text-sm bg-[#e68e7b] text-zinc-50 focus:shadow-inner transition duration-150 focus:bg-[#bb6e5c]">
          Cadastrar Novo Cartão
        </button>
      </Link>

      <section className="px-12 grid grid-cols-2 gap-12">
        <CardFront />
        <CardBack />

        <CardFront />
        <CardBack />

        <CardFront />
        <CardBack />
      </section>
    </main>
  );
}
