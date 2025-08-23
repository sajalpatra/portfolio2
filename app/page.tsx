import Hero from "@/componenets/Hero";
import Image from "next/image";
import Feedback from "./feedback/page";
import Footer from "@/componenets/Footer";

export default function Home() {
  return (
    <>
    <main>
       <Hero/>
       <Feedback/>
       <Footer/>
    </main>
    
    </>
  );
}
