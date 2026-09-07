import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-56 pb-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/4 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full badge-industrial text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_#fb923c] animate-pulse" />
          Planejamento de Manutenção Industrial
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.88] mb-10">
          <span className="text-gradient block">MATHEUS</span>
          <span className="text-primary-gradient block">SILVA.</span>
        </h1>
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-6 max-w-4xl font-light">
          Profissional com experiência prática em <span className="text-orange-400 font-semibold">manutenção de refinaria</span> e atuação em <span className="text-white font-semibold">planejamento industrial</span>, com foco em tubulações, processos de manutenção e sistemas industriais.
        </p>
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-12 bg-orange-500/50" />
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Campo industrial → Planejamento → Especialização</p>
        </div>
        <div className="flex flex-wrap gap-6 mb-14">
          {[
            { label: "Planejamento", sublabel: "Manutenção Industrial" },
            { label: "Tubulações", sublabel: "Foco de desenvolvimento" },
            { label: "ADS", sublabel: "Unisanta — Em andamento" },
            { label: "SENAI", sublabel: "Base técnica industrial" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-px h-8 bg-orange-500/30" />
              <div><div className="text-white font-black text-base leading-none">{stat.label}</div><div className="text-slate-500 text-[10px] font-mono uppercase tracking-wider mt-1">{stat.sublabel}</div></div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#trabalho" className="btn-primary px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest">Minha atuação</a>
          <a href="#projetos" className="btn-outline px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest">Ver projetos</a>
          <a href="#artigos" className="px-10 py-5 bg-transparent border border-white/10 text-slate-400 rounded-xl font-black text-sm uppercase tracking-widest hover:border-white/30 hover:text-white transition-all">Artigos técnicos</a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
