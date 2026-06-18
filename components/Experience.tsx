import React from "react";
import { Experience as ExperienceType } from "../types";

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="carreira" className="py-40 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black tracking-tighter uppercase section-title mb-24 text-center">
          Histórico_Profissional
        </h2>
        
        <div className="space-y-20">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 border-l border-white/10">
              <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
              <div className="mb-4">
                <span className="text-cyan-500 font-mono text-xs font-bold uppercase tracking-[0.2em]">{exp.period}</span>
                <h3 className="text-3xl font-black text-white mt-2">{exp.position}</h3>
                <p className="text-slate-400 font-bold text-lg">{exp.company}</p>
              </div>
              <p className="text-slate-500 text-base leading-relaxed mb-6">{exp.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-slate-400 font-medium">
                    <span className="text-cyan-500 mt-1">⬢</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Experience);
