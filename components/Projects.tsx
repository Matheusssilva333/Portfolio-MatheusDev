import React from "react";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projetos" className="py-40 px-6 bg-[#070a14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">
              // PROJETOS
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-4">
              Tecnologia<br />
              <span className="text-primary-gradient">Aplicada à Indústria</span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />
          </div>
          <p className="text-slate-500 text-sm max-w-sm text-right lg:text-right">
            Desenvolvendo soluções que unem o conhecimento operacional da refinaria com automação, dashboards e inteligência artificial.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isComingSoon = project.title.includes("Em Desenvolvimento");
            return (
              <div
                key={project.id}
                className={`group rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 ${
                  isComingSoon
                    ? "project-card-coming"
                    : "glass-card border-orange-500/5"
                }`}
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isComingSoon
                        ? "grayscale opacity-20 group-hover:opacity-30"
                        : "grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-[#070a14]/60 to-transparent" />
                  
                  {/* Index badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-mono font-black text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {isComingSoon && (
                    <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/25 text-amber-400 rounded-full">
                      Em Desenvolvimento
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className={`text-xl font-black mb-3 uppercase tracking-tight transition-colors ${
                      isComingSoon ? "text-slate-500" : "text-white group-hover:text-orange-400"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tech-tag px-3 py-1 text-[9px] font-mono font-bold rounded-lg uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && !isComingSoon && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-3 text-orange-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-orange-300 transition-all group/link"
                    >
                      Ver no GitHub
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}

                  {isComingSoon && (
                    <div className="mt-8 flex items-center gap-2 text-slate-600 text-[10px] font-mono uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-amber-500/50 animate-pulse" />
                      Em construção — proof of concept
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Matheusssilva333"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3 px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest"
          >
            Ver todos os repositórios
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
