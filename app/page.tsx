import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AIFocus from "@/components/AIFocus";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Education from "@/components/Education";
import Certification from "@/components/Certification";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <AIFocus />
        <Projects />
        <Resume />
        <Education />
        <Certification />
        <CurrentlyLearning />
        <Contact />
      </main>

      <Footer />
    </>
  );
}