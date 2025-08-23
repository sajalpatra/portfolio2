import Hero from "@/componenets/Hero";
import Image from "next/image";
import Feedback from "./feedback/page";
import Footer from "@/componenets/Footer";
import Biography from "@/componenets/Biography";
import Skills from "@/componenets/Skills";

export default function Home() {
  return (
    <>
    <main>
       <Hero/>
       <Biography/>
       <Skills/>
       <Feedback/>
       <Footer/>
    </main>
    
    </>
  );
}
