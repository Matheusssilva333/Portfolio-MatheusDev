import React from "react";
import { Experience as ExperienceType } from "../types";

interface ExperienceProps {
  experiences: ExperienceType[];
}

const companyIcons: Record<string, string> = {
  "C3 Engenharia & Soluções — Refinaria Presidente Bernardes (RPBC/Petrobras)": "🏭",
  "Franciscon Infraestrutura": "🔧",
};

const positionColors: Record<string, { dot: string; line: string; badge: string; badgeText: string }> = {
  "Auxiliar técnico de Planejamento de Manutenção Industrial — UT2": {
    dot: "bg-orange-400 shadow-[0_0_20px_#fb923c]",
    line: "from-orange-500/50 to-orange-500/10",
    badge: "badge-planning",
    badgeText: "Promoção por Mérito",
  },
  "Caldeireiro Industrial — UGAV / Oficina de Fabricação": {
    dot: "bg-amber-400 shadow-[0_0_15px_#fbbf24]",
    line: "from-amber-500/40 to-amber-500/10",
    badge: "badge-industrial",
    badgeText: "Campo Industrial",
  },
  "Aprendiz Industrial SENAI": {
    dot: "bg-slate-400 shadow-[0_0_10px_#94a3b8]",
    line: "from-slate-500/30 to-slate-500/5",
    badge: "industrial-tag",
    badgeText: "Início de Carreira",
  },
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="carreira" className="py-40 px-6 bg-[#070a14] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full bg-orange-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section header */}
        <div className="mb-20">
          <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">
            // HISTÓRICO PROFISSIONAL
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-6">
            Trajetória<br />
            <span className="text-primary-gradient">Industrial</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent mb-6" />
          <p className="text-slate-500 text-base max-w-xl">
            Uma carreira construída da execução para a estratégia — cada experiência fortalecendo a próxima.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/30 via-orange-500/20 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const colors = positionColors[exp.position] ?? {
                dot: "bg-orange-400",
                line: "",
                badge: "badge-industrial",
                badgeText: "",
              };

              return (
                <div key={exp.id} className="relative pl-16 group">
                  {/* Timeline dot */}
                  <div
                    className={`timeline-dot absolute left-0 top-2 w-9 h-9 rounded-full border-2 border-[#070a14] ${colors.dot} flex items-center justify-center text-white text-sm font-black transition-transform duration-500 group-hover:scale-125`}
                  >
                    {String(experiences.length - index).padStart(2, "0")}
                  </div>

                  {/* Content card */}
                  <div className="glass-card rounded-2xl p-8 border border-orange-500/5 hover:border-orange-500/20">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-orange-400 font-mono text-xs font-bold uppercase tracking-[0.25em]">
                            {exp.period}
                          </span>
                          {colors.badgeText && (
                            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${colors.badge}`}>
                              {colors.badgeText}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-black text-white leading-tight group-hover:text-orange-400 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-slate-400 font-semibold mt-1 text-sm">
                          {companyIcons[exp.company] ?? "🏢"} {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-orange-500/20 pl-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-orange-500 mt-0.5 text-xs flex-shrink-0">◈</span>
                          <span className="text-slate-400 text-xs leading-relaxed font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Experience);
