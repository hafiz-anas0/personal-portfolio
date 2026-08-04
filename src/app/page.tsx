import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
          <Hero />
          <About />
          <Skills />
          <Projects />

        <section
          id="experience"
          className="min-h-screen"
        />


        <section
          id="education"
          className="min-h-screen"
        />


        <section
          id="certifications"
          className="min-h-screen"
        />

        <section
          id="contact"
          className="min-h-screen"
        />
      </main>
    </>
  );
}