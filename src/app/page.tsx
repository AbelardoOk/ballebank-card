"use client";

import { Header } from "@/components/header";
import { CardFront } from "@/components/cardFront";
import { CardBack } from "@/components/cardBack";
import react from "react";

export default function Home() {
  const [name, setName] = react.useState("");
  const [number, setNumber] = react.useState("");
  const [validate, setValidate] = react.useState("");
  const [cvv, setCvv] = react.useState("");

  return (
    <main className="h-screen w-screen bg-[#251F20] px-24 py-12">
      <Header />

      <div className="flex-row flex p-8 justify-between">
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-xl font-semibold text-zinc-400" htmlFor="cardNumber">
              Número do Cartão
            </label>
            <input
              className="rounded-md bg-[#342f30] text-zinc-400 p-2"
              placeholder="1234123412341234"
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              pattern="[0-9]+"
              maxLength={16}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl font-semibold text-zinc-400" htmlFor="titName">
              Nome do Titular
            </label>
            <input
              className="rounded-md bg-[#342f30] text-zinc-400 p-2"
              type="text"
              name="titName"
              id="titName"
              placeholder="Leonardo di Ser Piero da Vinci"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <label className="text-xl font-semibold text-zinc-400" htmlFor="validate">
                Validade
              </label>
              <input
                className="rounded-md bg-[#342f30] text-zinc-400 p-2"
                placeholder="01/42"
                type="month"
                name="validate"
                id="validate"
                value={validate}
                onChange={(e) => setValidate(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-semibold text-zinc-400" htmlFor="cvv">
                CVV
              </label>
              <input
                className="rounded-md bg-[#342f30] text-zinc-400 p-2"
                placeholder="123"
                type="text"
                name="cvv"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
              />
            </div>
          </div>
        </form>

        <CardFront titName={name} cardNumber={number} validate={validate} />
      </div>
    </main>
  );
}
