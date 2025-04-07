import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Triangle } from 'lucide-react';

export function HtmlCss() {
  return (
    <div className="flex w-full">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card className="relative group h-80 overflow-hidden bg-transparent border border-gray-600 rounded-xl">
          {/* Imagem de fundo */}
          <Image
            src="/images/projeto-js-spotify.png"
            alt="Spotify"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay escurecedor */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Título */}
          <CardTitle className="absolute top-4 left-1/2 -translate-x-1/2 text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8] text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            Spotify
          </CardTitle>

          {/* Descrição centralizada e com largura máxima maior */}
          <CardDescription className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300">
            Projeto em JavaScript, CSS e HTML, onde procurei replicar a
            interface do Spotify com foco em responsividade e fidelidade visual.
          </CardDescription>

          {/* Footer com espaçamento entre botões */}
          <CardFooter className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mt-6">
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] "
            >
              <a href="https://spotify-kappa-ivory.vercel.app/" target="_blank" className="flex flex-col items-center">
                Vercel<Triangle />
              </a>
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] "
            >
              <a href="https://github.com/NicollasMDs7/Spotify" target="_blank" className="flex flex-col items-center">
                Github
                <Github />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card className="relative group h-80 overflow-hidden bg-transparent border border-gray-600 rounded-xl">
          {/* Imagem de fundo */}
          <Image
            src="/images/calculadora-js.png"
            alt="Spotify"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay escurecedor */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Título */}
          <CardTitle className="absolute top-4 left-1/2 -translate-x-1/2 text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8] text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            Calculadora
          </CardTitle>

          {/* Descrição centralizada e com largura máxima maior */}
          <CardDescription className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300">
          Neste projeto, busquei entender a base do html, css e JavaScript.
          </CardDescription>

          {/* Footer com espaçamento entre botões */}
          <CardFooter className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mt-6">
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8]"
            >
              <a href="https://calculadora-teal-one.vercel.app/" target="_blank" className="flex flex-col items-center">
                Vercel <Triangle />
              </a>
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8] "
            >
              <a href="https://github.com/NicollasMDs7/Calculadora" target="_blank" className="flex flex-col items-center">
                Github <Github />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <Card className="relative group h-80 overflow-hidden bg-transparent border border-gray-600 rounded-xl">
          {/* Imagem de fundo */}
          <Image
            src="/images/cafeteria.png"
            alt="cafeteria"
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />

          {/* Overlay escurecedor */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Título */}
          <CardTitle className="absolute top-4 left-1/2 -translate-x-1/2 text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8] hover:drop-shadow-[0_0_0.5rem_#00B4D8] text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
            Dev-coffe
          </CardTitle>

          {/* Descrição centralizada e com largura máxima maior */}
          <CardDescription className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 w-full max-w-[500px] text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300">
          Este projeto é um site responsável por uma cafeteria chamada DevClub Café , criado com HTML e CSS.
          </CardDescription>

          {/* Footer com espaçamento entre botões */}
          <CardFooter className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mt-6">
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8]"
            >
              <a href="https://dev-club-coffe.vercel.app//" target="_blank" className="flex flex-col items-center">
                Vercel <Triangle />
              </a>
              
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent text-blue-100 hover:text-black drop-shadow-[0_0_0.3rem_#00B4D8]"
            >
              <a href="https://github.com/NicollasMDs7/DevClubCoffe" target="_blank" className="flex flex-col items-center">
                Github  <Github />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
