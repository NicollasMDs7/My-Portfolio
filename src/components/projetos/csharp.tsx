import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Triangle } from "lucide-react";

export function Csharp() {
  return (
    <div className="flex w-full">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card className="relative group h-80 overflow-hidden bg-transparent border border-gray-600 rounded-xl">
          {/* Imagem de fundo */}
          <Image
            src="/images/crud.png"
            alt="Spotify"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay escurecedor */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Título */}
          <CardTitle className="absolute top-4 left-1/2 -translate-x-1/2 text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8] text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            Crud
          </CardTitle>

          {/* Descrição centralizada e com largura máxima maior */}
          <CardDescription className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300">
          Projeto onde criei uma API de um CRUD de usuários, utilizando o .Net
          </CardDescription>

          {/* Footer com espaçamento entre botões */}
          <CardFooter className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mt-6">
            
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] "
            >
              <a
                href="https://github.com/NicollasMDs7/ProjetoAPI/tree/main"
                target="_blank"
                className="flex flex-col items-center"
              >
                Github
                <Github />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
