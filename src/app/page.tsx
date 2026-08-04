import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="min-h-screen"
        >
          <Hero />
        </section>

        <section
          id="about"
          className="min-h-screen"
        >
          <About />
        </section>

        <section
          id="skills"
          className="min-h-screen"
        />

        <section
          id="experience"
          className="min-h-screen"
        />

        <section
          id="projects"
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