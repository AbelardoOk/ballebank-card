"use client";

import { CardBack } from "@/components/cardBack";
import { CardFront } from "@/components/cardFront";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const totalId =
    parseInt(localStorage.getItem("cardId") || "error: id not found") - 1;
  const cards = new Array(totalId);

  useEffect(() => {
    const cards = new Array(totalId);
    for (let i = 1, i2 = 0; i <= totalId; i++, i2++) {
      const savedCards: string = JSON.parse(
        localStorage.getItem(`card${i}`) || "error: card not found",
      );
      cards[i2] = savedCards;
    }

    console.table(cards);
  }, []);

  return (
    <main className="flex flex-col justify-center gap-12 bg-[#251F20] px-40 py-12">
      <Header />

      <Link href={"/"} className="flex items-center justify-around">
        <button className="rounded-md bg-[#e68e7b] px-12 py-4 text-sm font-semibold text-zinc-50 transition duration-150 focus:bg-[#bb6e5c] focus:shadow-inner">
          Cadastrar Novo Cartão
        </button>
      </Link>

      <section className="grid grid-cols-2 gap-12 px-12">
        {cards.map((cards, i) => (
          <CardFront
            titName={cards[i].name}
            cardNumber={cards[i].number}
            validate={cards[i].validate}
          />
        ))}
      </section>
    </main>
  );
}
