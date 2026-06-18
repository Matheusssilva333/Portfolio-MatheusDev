import React from "react";
import { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projetos" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-6xl font-black tracking-tighter uppercase section-title">
            <span className="text-primary-gradient block text-xl mb-4 font-mono">// REPOSITORIO_OFENSIVO</span>
            Projetos_Selecionados
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full border-white/5">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
              </div>
              
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors uppercase">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag px-3 py-1 text-[9px] font-mono font-bold rounded-md uppercase tracking-wider text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:text-cyan-400 transition-all">
                    INSPECT_SOURCE <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
