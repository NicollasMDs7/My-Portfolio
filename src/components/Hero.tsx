import Image from "next/image";
// import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-7 bg-red-500">
        <Image
          className="rounded-full shadow-lg shadow-black" 
          src="/images/perfil.jpeg"
          alt="Perfil"
          width={180}
          height={180}
        />
        <div className="text-center text-3xl font-semibold">
          <h1>Nícollas Dias</h1>
          <h2>Desenvolvedor Web</h2>
          {/* <a href="" download={}><Button variant="outline">Baixar CV</Button></a> */}
          
        </div>
      </div>
    </div>
  );
}
