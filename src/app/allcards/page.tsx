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

  for (let i = 1, i2 = 0; i <= totalId; i++, i2++) {
    const savedCards: string = JSON.parse(
      localStorage.getItem(`card${i}`) || "error: card not found",
    );
    cards[i2] = savedCards;
  }

  return (
    <main className="flex h-max flex-col gap-12 bg-[#251F20] px-40 py-12">
      <Header />

      <Link href={"/"} className="flex justify-around">
        <button className="rounded-md bg-[#e68e7b] px-12 py-4 text-center text-sm font-semibold text-zinc-50 transition duration-150 focus:bg-[#bb6e5c] focus:shadow-inner">
          Cadastrar Novo Cartão
        </button>
      </Link>

      <section className="flex flex-col justify-around gap-12 px-12">
        {cards.map((cards) => (
          <div className="flex gap-4">
            <CardFront
              titName={cards.name}
              cardNumber={cards.number}
              validate={cards.validate}
            />
            <CardBack cvv={cards.cvv} />
          </div>
        ))}
      </section>
    </main>
  );
}
