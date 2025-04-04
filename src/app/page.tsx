import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (<div className="bg-black">
    <header><Navbar /></header>
    <Hero />
    </div>)
}