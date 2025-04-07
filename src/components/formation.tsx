import { Hourglass, MoveRight } from "lucide-react";

export function Formacao() {
  return (
    <section id="formacao" className="px-8 pt-24 md:h-[50vh] mb-24">
      <div className="flex justify-center mb-5">
        <h1 className="text-4xl font-bold text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8]">
          Formação
        </h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative border-l-4 border-blue-100 border-solid pl-6 py-4">
          <div className="group mb-8 ml-6 border-2 border-blue-100rounded-4xl p-4  shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-110 duration-300">
            <div className="absolute -left-0 w-6 h-6  group-hover:hidden  ">
              <MoveRight className="text-blue-100 drop-shadow-[0_0_0.5rem_#00B4D8] " />
            </div>
            <h3 className="text-xl font-semibold text-blue-100">2022</h3>
            <p className="text-gray-600">UNINOVE</p>
            <span className="text-sm text-gray-400">Gestão Comercial</span>
          </div>
          <div className="group mb-8 ml-6 border-2 border-blue-100rounded-4xl p-4  shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:scale-110 duration-300">
            <div className="absolute -left-0 w-6 h-6  group-hover:hidden  ">
              <MoveRight className="text-blue-100 drop-shadow-[0_0_0.5rem_#00B4D8] " />
            </div>
            <h3 className="text-xl font-semibold text-blue-100">2023 - 2027</h3>
            <p className="text-gray-600">DESCOMPLICA</p>
            <span className="text-sm text-gray-400">
              Sistemas da informação
            </span>
          </div>

          <div className="mb-7 ml-6">
            <div className="absolute -left-0 w-6 h-6    ">
              <Hourglass className="text-blue-100 drop-shadow-[0_0_0.5rem_#00B4D8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
