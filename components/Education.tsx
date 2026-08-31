import React from "react";
import { Idioma } from "../types";

interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface EducationProps {
  education: EducationEntry[];
  idiomas: Idioma[];
}

const EducationSection: React.FC<EducationProps> = ({ education, idiomas }) => {
  const certColors = [
    { border: "border-orange-500/20", icon: "🎓", tag: "badge-planning" },
    { border: "border-slate-500/20", icon: "⚙", tag: "badge-industrial" },
    { border: "border-orange-500/20", icon: "🏭", tag: "badge-industrial" },
    { border: "border-indigo-500/20", icon: "🤖", tag: "badge-tech" },
    { border: "border-indigo-500/20", icon: "☕", tag: "badge-tech" },
  ];

  return (
    <section id="formacao" className="py-40 px-6 bg-[#070a14] relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 w-[600px] h-[400px] rounded-full bg-indigo-500/3 blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-20">
          <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">
            // FORMAÇÃO & CERTIFICAÇÕES
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-6">
            Base de<br />
            <span className="text-primary-gradient">Conhecimento</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Education cards */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-sm">📚</span>
              Formações
            </h3>
            <div className="space-y-5">
              {education.map((edu, index) => {
                const colors = certColors[index % certColors.length];
                return (
                  <div
                    key={edu.id}
                    className={`group p-6 rounded-2xl glass-card border ${colors.border} hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/3 flex items-center justify-center text-2xl flex-shrink-0 border border-white/5">
                        {colors.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-orange-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                            {edu.period}
                          </span>
                          <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full ${colors.tag}`}>
                            {edu.institution}
                          </span>
                        </div>
                        <h4 className="text-white font-black text-base leading-tight mb-2 group-hover:text-orange-400 transition-colors">
                          {edu.degree}
                        </h4>
                        {edu.description && (
                          <p className="text-slate-500 text-xs leading-relaxed">{edu.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column: Idiomas + stats */}
          <div className="space-y-12">

            {/* Idiomas */}
            <div>
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-sm">🌐</span>
                Idiomas
              </h3>
              <div className="space-y-6">
                {idiomas.map((idioma) => (
                  <div key={idioma.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-white font-bold text-sm">{idioma.name}</span>
                        <span className="text-slate-600 text-xs ml-2 font-mono">— {idioma.category}</span>
                      </div>
                      <span className="text-orange-400 font-mono text-xs font-bold">{idioma.proficiency}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                        style={{ width: `${idioma.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key stats */}
            <div>
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-sm">📊</span>
                Em Números
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2+", label: "Anos em Refinaria" },
                  { value: "5", label: "Certificações" },
                  { value: "PT", label: "Permissão de Trabalho" },
                  { value: "ADS", label: "Graduando" },
                ].map((stat) => (
                  <div key={stat.label} className="stat-card p-4 rounded-xl text-center">
                    <div className="text-2xl font-black text-orange-400 font-mono">{stat.value}</div>
                    <div className="text-slate-500 text-[9px] uppercase tracking-wider font-bold mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(EducationSection);
