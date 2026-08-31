import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-56 pb-40 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Status badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full badge-industrial text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_#fb923c] animate-pulse" />
          Auxiliar técnico de Planejamento de Manutenção Industrial
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.88] mb-10">
          <span className="text-gradient block">MATHEUS</span>
          <span className="text-primary-gradient block">SILVA.</span>
        </h1>

        {/* Professional statement */}
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-6 max-w-3xl font-light">
          Profissional industrial com experiência prática em{" "}
          <span className="text-orange-400 font-semibold">manutenção de refinaria</span>, atuando na interface entre{" "}
          <span className="text-white font-semibold">campo, planejamento e tecnologia</span> para apoiar a evolução digital da indústria.
        </p>

        {/* Secondary line */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-12 bg-orange-500/50" />
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
            Do chão de fábrica à transformação digital
          </p>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-6 mb-14">
          {[
            { label: "Refinaria", sublabel: "Petrobras RPBC" },
            { label: "ADS", sublabel: "Unisanta — Graduando" },
            { label: "SENAI", sublabel: "Técnico Industrial" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-px h-8 bg-orange-500/30" />
              <div>
                <div className="text-white font-black text-base leading-none">{stat.label}</div>
                <div className="text-slate-500 text-[10px] font-mono uppercase tracking-wider mt-1">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-5">
          <a
            href="#projetos"
            className="btn-primary px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest"
          >
            Ver Projetos
          </a>
          <a
            href="#carreira"
            className="btn-outline px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest"
          >
            Minha Trajetória
          </a>
          <a
            href="https://wa.me/5513974034128"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border border-white/10 text-slate-400 rounded-xl font-black text-sm uppercase tracking-widest hover:border-white/30 hover:text-white transition-all"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
