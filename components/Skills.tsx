import React, { useState } from "react";
import { Skill } from "../types";

interface SkillsProps {
  skills: Skill[];
}

const CATEGORY_META: Record<string, { label: string; icon: string; color: string; borderColor: string; barColor: string }> = {
  Industrial: {
    label: "Competências Industriais",
    icon: "⚙",
    color: "text-orange-400",
    borderColor: "border-orange-500/20",
    barColor: "from-orange-500 to-amber-500",
  },
  Planning: {
    label: "Planejamento & Gestão",
    icon: "📋",
    color: "text-green-400",
    borderColor: "border-green-500/20",
    barColor: "from-green-500 to-emerald-400",
  },
  Tech: {
    label: "Tecnologia & Desenvolvimento",
    icon: "💻",
    color: "text-indigo-400",
    borderColor: "border-indigo-500/20",
    barColor: "from-indigo-500 to-violet-400",
  },
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>("Industrial");

  const categories = Object.keys(CATEGORY_META);
  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  const techTags = [
    "Python", "Java", "React", "IA Generativa", "Manutenção Industrial",
    "Caldeiraria", "Planejamento", "Permissão de Trabalho", "Segurança Industrial",
    "Automação", "Processos Industriais", "Machine Learning"
  ];

  return (
    <section id="stack" className="py-40 px-6 relative">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-indigo-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-16">
          <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">
            // COMPETÊNCIAS
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-6">
            Arsenal<br />
            <span className="text-primary-gradient">Profissional</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left: Category tabs + skill bars */}
          <div>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat) => {
                const meta = CATEGORY_META[cat];
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                      isActive
                        ? `bg-orange-500/10 border-orange-500/40 text-orange-400`
                        : `bg-transparent border-white/5 text-slate-500 hover:border-white/10 hover:text-slate-400`
                    }`}
                  >
                    <span>{meta.icon}</span>
                    {meta.label}
                  </button>
                );
              })}
            </div>

            {/* Skill bars */}
            <div className="space-y-8">
              {filteredSkills.map((skill) => {
                const meta = CATEGORY_META[skill.category];
                return (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className={`text-sm font-bold uppercase tracking-wider ${meta.color} transition-colors`}>
                        {skill.name}
                      </h3>
                      <span className={`font-mono font-bold text-xs ${meta.color}`}>{skill.proficiency}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${meta.barColor} rounded-full skill-bar-fill`}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    {skill.details && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {skill.details.map((d) => (
                          <span
                            key={d}
                            className="text-[9px] px-2 py-0.5 rounded-md font-mono font-bold uppercase tracking-wide text-slate-500 border border-white/5"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Tag cloud */}
          <div>
            <h3 className="text-xl font-black text-white mb-8 tracking-tight">
              <span className="text-primary-gradient">Domínios</span> de Atuação
            </h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="industrial-tag px-4 py-2 text-[10px] font-bold rounded-xl uppercase tracking-widest cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Differentials */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-white tracking-tight mb-6">
                Diferenciais Competitivos
              </h3>
              {[
                {
                  icon: "🏭",
                  title: "Experiência Real de Campo",
                  desc: "Anos em refinaria — não teoria, mas vivência industrial na prática.",
                },
                {
                  icon: "🔗",
                  title: "Interface Campo–Tecnologia",
                  desc: "Capaz de traduzir necessidades operacionais em soluções tecnológicas.",
                },
                {
                  icon: "📊",
                  title: "Visão de Planejamento",
                  desc: "Controle, organização e suporte à decisão em ambientes complexos.",
                },
                {
                  icon: "🤖",
                  title: "Transformação Digital Industrial",
                  desc: "Aplicando IA e automação para resolver problemas reais da indústria.",
                },
              ].map((d) => (
                <div key={d.title} className="flex items-start gap-4 p-4 rounded-xl stat-card">
                  <span className="text-2xl flex-shrink-0">{d.icon}</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{d.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
