import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Formacao } from "@/components/formation";
import { Projetos } from "@/components/projetos";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Hero />
      <Formacao />
      <Projetos />
      <Footer />
    </div>
  );
}
