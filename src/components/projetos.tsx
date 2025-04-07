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
      </div>

      <div className="max-w-[1500px] mx-auto px-4">
        <Tabs defaultValue="react" className="w-full max-w-[800px] mx-auto">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-4 bg-transparent p-2 rounded-lg">
            <TabsTrigger
              value="react"
              className="px-4 py-2 text-sm sm:text-base rounded-md transition-all border border-gray-500 text-white 
                   data-[state=active]:bg-blue-100 data-[state=active]:drop-shadow-[0_0_0.3rem_#00B4D8] 
                   data-[state=active]:text-blue-600 data-[state=active]:border-transparent"
            >
              React
            </TabsTrigger>
            <TabsTrigger
              value="angular"
              className="px-4 py-2 text-sm sm:text-base rounded-md transition-all border border-gray-500 text-white 
                   data-[state=active]:bg-blue-100 data-[state=active]:drop-shadow-[0_0_0.3rem_#00B4D8] 
                   data-[state=active]:text-blue-600 data-[state=active]:border-transparent"
            >
              Angular
            </TabsTrigger>
            <TabsTrigger
              value="javascript"
              className="px-4 py-2 text-sm sm:text-base rounded-md transition-all border border-gray-500 text-white 
                   data-[state=active]:bg-blue-100 data-[state=active]:drop-shadow-[0_0_0.3rem_#00B4D8] 
                   data-[state=active]:text-blue-600 data-[state=active]:border-transparent"
            >
              JavaScript
            </TabsTrigger>
            <TabsTrigger
              value="Java"
              className="px-4 py-2 text-sm sm:text-base rounded-md transition-all border border-gray-500 text-white 
                   data-[state=active]:bg-blue-100 data-[state=active]:drop-shadow-[0_0_0.3rem_#00B4D8] 
                   data-[state=active]:text-blue-600 data-[state=active]:border-transparent"
            >
              Java
            </TabsTrigger>
            <TabsTrigger
              value="csharp"
              className="px-4 py-2 text-sm sm:text-base rounded-md transition-all border border-gray-500 text-white 
                   data-[state=active]:bg-blue-100 data-[state=active]:drop-shadow-[0_0_0.3rem_#00B4D8] 
                   data-[state=active]:text-blue-600 data-[state=active]:border-transparent"
            >
              C#
            </TabsTrigger>
          </TabsList>
          <TabsContent value="react">
            <React />
          </TabsContent>
          <TabsContent value="angular">
            <Angular />
          </TabsContent>
          <TabsContent value="javascript">
            <HtmlCss />
          </TabsContent>
          <TabsContent value="Java">
            <Java />
          </TabsContent>
          <TabsContent value="csharp">
            <Csharp />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
