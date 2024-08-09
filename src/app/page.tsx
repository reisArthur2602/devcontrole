import Image from "next/image";
import HeroImg from "@/assets/hero.svg"

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center flex-col ">
      <h2 className="text-xl font-medium">Gerencie sua empresa</h2>
      <h2 className="text-2xl font-bold text-indigo-700 md:text-4xl mb-8">
        Atendimentos,clientes
      </h2>
      <Image src={HeroImg} width={600} alt="Hero image" className="max-w-sm md:max-w-xl"/>
    </main>
  );
}
