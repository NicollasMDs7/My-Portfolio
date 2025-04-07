import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Formacao } from "@/components/formation";

export default function Home() {
  return (<div >
    <header><Navbar /></header>
    <Hero />
    <Formacao />
    
    </div>)
}