"use client";

import { CardBack } from "@/components/cardBack";
import { CardFront } from "@/components/cardFront";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const valorId = localStorage.getItem("cardId") || 1;
  const totalId: number = parseInt(valorId);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    for (let i = 1; i <= totalId; i++) {
      const cards: any = localStorage.getItem(`card${i}`);
      const savedCards = JSON.parse(cards);
      if (savedCards) {
        setCards(savedCards);
      }

      console.log(cards);
    }
  }, []);

  return (
    <main className="flex justify-center bg-[#251F20] gap-12 flex-col py-12 px-40">
      <Header />

      <Link href={"/"} className="flex items-center justify-around">
        <button className="rounded-md px-12 py-4 font-semibold text-sm bg-[#e68e7b] text-zinc-50 focus:shadow-inner transition duration-150 focus:bg-[#bb6e5c]">
          Cadastrar Novo Cartão
        </button>
      </Link>

      <section className="px-12 grid grid-cols-2 gap-12">
        {Array.isArray(cards) &&
          cards.map((cards) => <CardFront titName={cards.name} cardNumber={cards.number} validate={cards.validate} />)}
      </section>
    </main>
  );
}
