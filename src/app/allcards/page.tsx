"use client";

import { CardBack } from "@/components/cardBack";
import { CardFront } from "@/components/cardFront";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const totalId = parseInt(localStorage.getItem("cardId") || "error: id not found") - 1;
  const cards = new Array(totalId);

  useEffect(() => {
    const cards = new Array(totalId);
    for (let i = 1, i2 = 0; i <= totalId; i++, i2++) {
      const savedCards: string = JSON.parse(localStorage.getItem(`card${i}`) || "error: card not found");
      cards[i2] = savedCards;
    }

    console.log(cards);
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
        {cards.map((cards) => (
          <CardFront key={cards.id} titName={cards.name} cardNumber={cards.number} validate={cards.validate} />
        ))}
      </section>
    </main>
  );
}
