import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
export function Hero() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row h-auto lg:h-screen items-center justify-around gap-7  px-4 py-10">
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h1 className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl">
          Olá, Eu sou{" "}
          <span className="text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8]">
            Nícollas Dias
          </span>
        </h1>
        <h2 className="font-semibold text-blue-100 text-2xl sm:text-3xl drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8]">
          Desenvolvedor Web
        </h2>
        <p className="text-white text-base sm:text-lg lg:text-xl">
          Sou desenvolvedor fullstack, apaixonado por tecnologia e por criar
          soluções que unem design e funcionalidade.
        </p>
        <p className="text-white text-base sm:text-lg lg:text-xl">
          Trabalho com React, JavaScript, Angular, .NET e Spring, sempre
          buscando escrever código limpo e eficiente.
        </p>
        <p className="text-white text-base sm:text-lg lg:text-xl">
          Estou em constante evolução e meu objetivo é crescer na área,
          contribuir com projetos de impacto e me tornar uma referência no
          desenvolvimento de soluções digitais.
        </p>

        <div className="flex flex-col items-center lg:items-start gap-4 mt-6">
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/nicollas-mendes-dias-871357303/"
              target="_blank"
            >
              <Linkedin className="w-10 h-10 sm:w-[50px] sm:h-[50px] text-white border-2 border-white rounded-full p-2 hover:bg-blue-100 hover:text-black" />
            </Link>

            <Link href="https://github.com/NicollasMDs7" target="_blank">
              <Github className="w-10 h-10 sm:w-[50px] sm:h-[50px] text-white border-2 border-white rounded-full p-2 hover:bg-blue-100 hover:text-black" />
            </Link>

            <Link
              href="https://www.instagram.com/nicollasmendes.dev/"
              target="_blank"
            >
              <Instagram className="w-10 h-10 sm:w-[50px] sm:h-[50px] text-white border-2 border-white rounded-full p-2 hover:bg-blue-100 hover:text-black" />
            </Link>
          </div>

          <a
            href="https://drive.google.com/uc?export=download&id=1jLUuPKxCod23WP6ae7hN-NiDlF6ivxx1"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-[150px] h-[45px] text-white border-2 border-white rounded-full hover:bg-white hover:text-black">
              <Download className="mr-2" />
              Baixar CV
            </Button>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center  lg:mt-8">
        <Image
          src="/images/perfil2.png"
          alt="Perfil"
          width={447}
          height={180}
          className="max-w-[80%] sm:max-w-[200px] md:max-w-[400px] lg:max-w-[469px] h-auto"
        />
      </div>
    </div>
  );
}
