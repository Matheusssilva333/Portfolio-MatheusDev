import React, { Suspense, lazy } from "react";
import { PROJECTS, SKILLS, EXPERIENCE } from "./constants";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// Lazy Loaded Components for Performance
const AIAssistant = lazy(() => import("./components/AIAssistant"));
const NeuralBackground = lazy(() => import("./components/NeuralBackground"));

const App: React.FC = () => {
  const resumeFilePath = "/Curriculo-Matheus-Silva.pdf";

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 bg-[#050505] text-slate-200 overflow-x-hidden industrial-grid">
      <Suspense fallback={null}>
        <NeuralBackground />
      </Suspense>
      
      <Header resumeFilePath={resumeFilePath} />

      <main>
        <Hero />
        <About />
        <Projects projects={PROJECTS} />
        <Experience experiences={EXPERIENCE} />
        <Skills skills={SKILLS} />
      </main>

      <Footer />

      <Suspense fallback={null}>
        <AIAssistant />
      </Suspense>
    </div>
  );
};

export default App;
