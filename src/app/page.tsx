import { Header } from "@/components/header";
import { Card } from "@/components/card";

export default function Home() {
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
              className="rounded-md bg-[#342f30] p-2"
              placeholder="1234123412341234"
              type="text"
              name="cardNumber"
              id="cardNumber"
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
                type="date"
                name="validate"
                id="validate"
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
              />
            </div>
          </div>
        </form>

        <Card />
      </div>
    </main>
  );
}
