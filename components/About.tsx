import React from "react";

const About: React.FC = () => {
  const journey = [
    { step: "01", role: "Aprendiz Industrial SENAI", company: "Franciscon Infraestrutura", period: "2023 – 2024", description: "Base técnica industrial, disciplina profissional e primeiros contatos com processos de manutenção e fabricação.", color: "from-slate-500/20 to-slate-600/10", borderColor: "border-slate-500/30", dotColor: "bg-slate-400" },
    { step: "02", role: "Caldeireiro Industrial — UGAV / Oficina", company: "C3 Engenharia & Soluções / Petrobras RPBC", period: "2026", description: "Experiência de campo em parada de manutenção, caldeiraria, fabricação e execução de atividades em ambiente de refinaria.", color: "from-orange-500/15 to-orange-600/5", borderColor: "border-orange-500/25", dotColor: "bg-orange-400" },
    { step: "03", role: "Assistente de Planejamento — UT2", company: "C3 Engenharia & Soluções / Petrobras RPBC", period: "2026", description: "Atuação no apoio ao planejamento de manutenção e SMS, com controle de atividades, PTs e interface com as frentes de campo.", color: "from-orange-500/20 to-amber-500/10", borderColor: "border-orange-400/40", dotColor: "bg-orange-400", current: false },
  ];

  return (
    <section id="sobre" className="py-40 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden"><div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/3 blur-[120px]" /></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">// SOBRE MIM</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-6">Da experiência de campo<br /><span className="text-primary-gradient">ao planejamento industrial</span></h2>
          <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent mb-8" />
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">Minha trajetória começou na execução industrial e avançou para o planejamento de manutenção. Hoje, meu foco profissional está em aprofundar conhecimentos de planejamento, tubulações e sistemas industriais, usando tecnologia como ferramenta de apoio — não como substituta da especialização industrial.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative group"><div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000" /><div className="relative bg-[#0a0d1a] border border-orange-500/10 p-10 rounded-3xl overflow-hidden">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" /><span className="ml-4 text-slate-600 font-mono text-xs">matheus_silva.profile</span></div>
            <div className="space-y-4 font-mono text-sm"><div className="flex items-center gap-2 text-orange-400"><span className="text-slate-600">01</span><span className="text-purple-400">struct</span> Profile {'{'}</div><div className="pl-8 text-slate-300 space-y-2">
              <div><span className="text-slate-500">foco: </span><span className="text-green-400">"Planejamento de Manutenção Industrial"</span></div>
              <div><span className="text-slate-500">especializacao: </span><span className="text-green-400">["Tubulações", "Sistemas Industriais"]</span></div>
              <div><span className="text-slate-500">base_pratica: </span><span className="text-yellow-400">["Caldeiraria", "Manutenção", "Refinaria"]</span></div>
              <div><span className="text-slate-500">formacao: </span><span className="text-yellow-400">["ADS", "SENAI"]</span></div>
              <div><span className="text-slate-500">tecnologia: </span><span className="text-yellow-400">["Python", "Java", "IA Generativa"]</span></div>
              <div><span className="text-slate-500">objetivo: </span><span className="text-orange-400">"Especialização em sistemas industriais"</span></div>
            </div><div className="text-orange-400">{'}'}</div><div className="pt-4 border-t border-white/5"><div className="flex items-center gap-2 text-slate-500"><span className="text-orange-400">▶</span><span>status:</span><span className="text-green-400 animate-pulse">em_desenvolvimento</span></div></div></div>
          </div></div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl stat-card"><h3 className="text-white font-bold text-lg mb-3">Planejamento como eixo profissional</h3><p className="text-slate-400 text-sm leading-relaxed">A experiência em campo é a base para interpretar restrições reais de execução, sequenciamento, recursos, segurança e interfaces de manutenção.</p></div>
            <div className="p-6 rounded-2xl stat-card"><h3 className="text-white font-bold text-lg mb-3">Tubulações e sistemas industriais</h3><p className="text-slate-400 text-sm leading-relaxed">O próximo ciclo de desenvolvimento é aprofundar conhecimentos técnicos de tubulação, equipamentos, manutenção e funcionamento dos sistemas industriais.</p></div>
            <div className="p-6 rounded-2xl stat-card"><h3 className="text-white font-bold text-lg mb-3">Tecnologia como competência complementar</h3><p className="text-slate-400 text-sm leading-relaxed">ADS, programação, automação de dados e IA ampliam minha capacidade de organizar informação e construir ferramentas para problemas concretos.</p></div>
          </div>
        </div>

        <div><h3 className="text-2xl font-black tracking-tighter text-white mb-10 flex items-center gap-4"><div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/20" />Linha do Tempo<div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/20" /></h3><div className="grid md:grid-cols-3 gap-6">{journey.map((item) => <div key={item.step} className={`relative p-6 rounded-2xl border bg-gradient-to-br ${item.color} ${item.borderColor} transition-all duration-500 hover:-translate-y-2`}><div className="text-5xl font-black text-white/5 font-mono mb-4">{item.step}</div><div className={`w-3 h-3 rounded-full ${item.dotColor} mb-4 shadow-lg`} /><div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">{item.period}</div><h4 className="text-white font-black text-base leading-tight mb-2">{item.role}</h4><p className="text-slate-500 text-[10px] font-bold uppercase tracking-wide mb-4">{item.company}</p><p className="text-slate-400 text-xs leading-relaxed">{item.description}</p></div>)}</div></div>
      </div>
    </section>
  );
};

export default React.memo(About);
