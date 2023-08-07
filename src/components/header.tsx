import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center lg:pt-0">
      <div className="flex flex-col items-start">
        <h1 className="font-extrabold text-xl lg:text-2xl text-zinc-200 text-left">Ballebank</h1>
        <p className="font-medium text-lg lg:text-xl text-zinc-500 text-left">Guarde seus cartões de forma segura</p>
      </div>

      <Image src="/iconGithub.png" alt="" width={32} height={32} />
    </header>
  );
}
