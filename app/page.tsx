import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { EXPERIENCE, SKILLS, PROJECTS, EDUCATION, IDIOMAS } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <About />
        {/* Adicionando as outras seções gradualmente conforme as refatoramos */}
      </main>
      <Footer />
    </div>
  );
}
