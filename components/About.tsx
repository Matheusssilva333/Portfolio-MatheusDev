import React from "react";

const About: React.FC = () => {
  const journey = [
    {
      step: "01",
      role: "Aprendiz Industrial SENAI",
      company: "Franciscon Infraestrutura",
      period: "2023 – 2024",
      description: "Base técnica, disciplina profissional e entendimento de processos operacionais. Início da formação industrial com metodologia SENAI.",
      color: "from-slate-500/20 to-slate-600/10",
      borderColor: "border-slate-500/30",
      dotColor: "bg-slate-400",
    },
    {
      step: "02",
      role: "Caldeireiro Industrial — UGAV",
      company: "C3 Engenharia & Soluções / Petrobras RPBC",
      period: "2025 – 2026",
      description: "Imersão no ambiente de refinaria. Traçagem, conformação, segurança industrial e execução de manutenção em unidades críticas da UGAV.",
      color: "from-orange-500/15 to-orange-600/5",
      borderColor: "border-orange-500/25",
      dotColor: "bg-orange-400",
    },
    {
      step: "03",
      role: "Oficina de Fabricação",
      company: "C3 Engenharia & Soluções / Petrobras RPBC",
      period: "2025 – 2026",
      description: "Ampliação da visão sobre processos produtivos: preparação de materiais, fabricação industrial e organização de atividades operacionais.",
      color: "from-amber-500/15 to-amber-600/5",
      borderColor: "border-amber-500/25",
      dotColor: "bg-amber-400",
    },
    {
      step: "04",
      role: "Assistente de Planejamento — UT2",
      company: "C3 Engenharia & Soluções / Petrobras RPBC",
      period: "2026 – Presente",
      description: "Promoção por desempenho e comprometimento. Gestão de PTs, controle de atividades e interface estratégica entre campo, segurança e planejamento.",
      color: "from-orange-500/20 to-amber-500/10",
      borderColor: "border-orange-400/40",
      dotColor: "bg-orange-400",
      current: true,
    },
  ];

  return (
    <section id="sobre" className="py-40 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section header */}
        <div className="mb-20">
          <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">
            // SOBRE MIM
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-6">
            A Trajetória<br />
            <span className="text-primary-gradient">Profissional</span>
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent mb-8" />
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Construí minha carreira de dentro para fora — da base técnica operacional ao planejamento estratégico, 
            sem nunca perder de vista o que aprendi no chão da refinaria. Cada etapa foi intencional e cada 
            promoção foi resultado de evidência, não de promessa.
          </p>
        </div>

        {/* Profile code card + narrative */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Code profile card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-[#0a0d1a] border border-orange-500/10 p-10 rounded-3xl overflow-hidden">
              
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-slate-600 font-mono text-xs">matheus_silva.profile</span>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-2 text-orange-400">
                  <span className="text-slate-600">01</span>
                  <span className="text-purple-400">struct</span> Profile {"{"}
                </div>
                <div className="pl-8 text-slate-300 space-y-2">
                  <div>
                    <span className="text-slate-500">cargo_atual: </span>
                    <span className="text-green-400">"Planejamento de Manutenção"</span>
                  </div>
                  <div>
                    <span className="text-slate-500">local: </span>
                    <span className="text-green-400">"Refinaria RPBC — Cubatão, SP"</span>
                  </div>
                  <div>
                    <span className="text-slate-500">formacao: </span>
                    <span className="text-yellow-400">"ADS — Unisanta"</span>
                  </div>
                  <div>
                    <span className="text-slate-500">base_tecnica: </span>
                    <span className="text-yellow-400">["Caldeiraria", "SENAI", "Petrobras"]</span>
                  </div>
                  <div>
                    <span className="text-slate-500">tech_stack: </span>
                    <span className="text-yellow-400">["Python", "Java", "IA Generativa"]</span>
                  </div>
                  <div>
                    <span className="text-slate-500">diferencial: </span>
                    <span className="text-orange-400">"Campo + Planejamento + Tecnologia"</span>
                  </div>
                </div>
                <div className="text-orange-400">{"}"}</div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="text-orange-400">▶</span>
                    <span>status:</span>
                    <span className="text-green-400 animate-pulse">em_evolução_constante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl stat-card">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-sm">⚙</span>
                Do Campo ao Planejamento
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Minha experiência em campo como caldeireiro na UGAV não é um capítulo encerrado — é a fundação que torna minha 
                atuação no planejamento diferenciada. Entendo o que acontece na prática antes de planejar no papel.
              </p>
            </div>
            <div className="p-6 rounded-2xl stat-card">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-sm">💡</span>
                Tecnologia como Ferramenta Industrial
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Minha graduação em ADS e formações em Python, Java e IA Generativa não são desvios de rota — são capacitações 
                para resolver problemas reais da indústria com tecnologia de ponta.
              </p>
            </div>
            <div className="p-6 rounded-2xl stat-card">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-sm">📈</span>
                Evolução por Mérito
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A promoção de Caldeireiro para Assistente de Planejamento não foi automática. Foi conquistada através de 
                desempenho, comprometimento e visibilidade dentro da operação.
              </p>
            </div>
          </div>
        </div>

        {/* Journey timeline cards */}
        <div>
          <h3 className="text-2xl font-black tracking-tighter text-white mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/20" />
            Linha do Tempo
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/20" />
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((item) => (
              <div
                key={item.step}
                className={`relative p-6 rounded-2xl border bg-gradient-to-br ${item.color} ${item.borderColor} transition-all duration-500 hover:-translate-y-2`}
              >
                {item.current && (
                  <div className="absolute top-4 right-4 px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-wider bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-full">
                    Atual
                  </div>
                )}
                <div className="text-5xl font-black text-white/5 font-mono mb-4">{item.step}</div>
                <div className={`w-3 h-3 rounded-full ${item.dotColor} mb-4 shadow-lg`} />
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">{item.period}</div>
                <h4 className="text-white font-black text-base leading-tight mb-2">{item.role}</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wide mb-4">{item.company}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
