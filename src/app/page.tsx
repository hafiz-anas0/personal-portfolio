import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <h1 className="text-6xl font-bold">Hero Section</h1>
        </section>

        <section
          id="about"
          className="min-h-screen"
        />

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