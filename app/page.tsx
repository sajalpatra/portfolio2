import Hero from "@/componenets/Hero";
import Feedback from "@/componenets/Feedback";
import Footer from "@/componenets/Footer";
import Biography from "@/componenets/Biography";
import Skills from "@/componenets/Skills";
import Projects from "@/componenets/Projects";
import Achievements from "@/componenets/Achivements";
import Contact from "@/componenets/Contact";

export default function Home() {
  return (
    <>
    <main>
       <Hero/>
       <Biography/>
       <Skills/>
       <Projects/>
       <Achievements/>
       <Feedback/>
      <Contact/>
       <Footer/>
    </main>
    
    </>
  );
}
