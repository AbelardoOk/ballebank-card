"use client";

import { Header } from "@/components/header";
import { CardFront } from "@/components/cardFront";
import { CardBack } from "@/components/cardBack";
import react, { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = react.useState("");
  const [number, setNumber] = react.useState("");
  const [validate, setValidate] = react.useState("");
  const [cvv, setCvv] = react.useState("");

  const [side, setSide] = react.useState(true);

  useEffect(() => {
    if (cvv) {
      setSide(false);
    }
  }, [cvv]);

  useEffect(() => {
    if (name || number || validate) {
      setSide(true);
    }
  }, [name, number, validate]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#251F20] flex justify-center flex-col gap-12 px-6 lg:px-40">
      <Header />

      <div className="flex-col-reverse lg:flex-row flex gap-12 lg:p-8 justify-around">
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

            <div className="flex flex-col overflow-hidden">
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

        <div className="flex justify-center items-center">
          <div className="relative w-full h-full duration-1000">
            {side == true ? (
              <CardFront titName={name} cardNumber={number} validate={validate} />
            ) : (
              <CardBack cvv={cvv} />
            )}
          </div>
        </div>
      </div>

      <div className="transition duration-1000">
        {name != "" && number != "" && validate != "" && cvv != "" ? (
          <Link href={"/allcards"} className="flex justify-center items-center">
            <button className="rounded-md px-12 py-3 font-semibold text-sm bg-[#e68e7b] text-zinc-50 focus:shadow-inner transition duration-150 focus:bg-[#bb6e5c]">
              Cadastrar Cartão
            </button>
          </Link>
        ) : (
          <div className="flex justify-center items-center">
            <button className="rounded-md px-12 py-3 font-semibold text-sm bg-[#e6bcb3] text-zinc-700 shadow-inner">
              Cadastrar Cartão
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
