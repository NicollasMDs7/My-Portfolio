import { Angular } from "@/components/projetos/angular";
import { Java } from "@/components/projetos/java";
import { HtmlCss } from "@/components/projetos/html-css";
import { Csharp } from "@/components/projetos/csharp";
import { React } from "@/components/projetos/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Projetos() {
  return (
    <section id="projetos" className="px-8 lg:mt-36 mt-12 md:h-[90vh]">
      <div className="flex flex-col items-center mb-5 ">
        <h1 className="text-4xl font-bold text-blue-100 drop-shadow-[0_0_0.3rem_#00B4D8]">
          Projetos
        </h1>
        <p className="text-white">Descrição</p>
      </div>

      <div className="max-w-[1500px] mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <Angular />
        <Java />
        <HtmlCss />
        <Csharp />
        <React />
      </div>
    </section>
  );
}
