import React from "react";
import { Skill } from "../types";

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="stack" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase section-title">
              <span className="text-primary-gradient block text-xl mb-4 font-mono">// ARSENAL_TECNICO</span>
              Tecnologias_Core
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Python','Java','Nmap','Wireshark','Burp_Suite','n8n','PostgreSQL','Vite','React'].map(tag => (
                <span key={tag} className="px-5 py-3 bg-white/5 border border-white/10 text-white text-[10px] font-black rounded-xl uppercase tracking-widest hover:border-cyan-500 transition-all cursor-crosshair">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors uppercase tracking-widest font-mono">{skill.name}</h3>
                  <span className="text-cyan-400 font-mono font-bold text-xs">{skill.proficiency}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${skill.proficiency}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
