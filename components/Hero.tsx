import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-60 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.3em] mb-12">
          <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] animate-pulse"></span>
          FULLSTACK DEVELOPER & ETHICAL HACKER
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
          <span className="text-gradient">CODE, SECURE</span> <br />
          <span className="text-primary-gradient">& AUTOMATE.</span>
        </h1>
        
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl font-light">
          De <span className="text-white font-medium">Caldeireiro na Petrobras</span> a <span className="text-emerald-400 font-medium">Hacker Ético</span>. Fundindo a disciplina industrial com a agilidade do desenvolvimento e a precisão da cibersegurança.
        </p>

        <div className="flex flex-wrap gap-6">
          <a href="#projetos" className="px-10 py-5 bg-cyan-500 text-slate-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.3)]">
            Ver_Projetos
          </a>
          <a href="https://wa.me/5513974034128" target="_blank" className="px-10 py-5 bg-transparent border border-white/20 rounded-xl font-black text-sm uppercase tracking-widest hover:border-cyan-500/50 transition-all">
            HACK_MY_TIME
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
