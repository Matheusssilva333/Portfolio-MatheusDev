import React from "react";
import ArticleFeed from "./ArticleFeed";

const WorkArticles: React.FC = () => {
  return (
    <section id="trabalho" className="py-40 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/3 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-4">// TRABALHO & CONHECIMENTO</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter section-title mb-6">O que faço e<br /><span className="text-primary-gradient">o que aprendo</span></h2>
            <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent" />
          </div>
          <p className="text-slate-500 text-base leading-relaxed">Registro profissional, estudo aplicado e artigos técnicos sobre planejamento de manutenção, sistemas industriais e tecnologia complementar.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {[
            { number: "01", title: "Planejamento de manutenção", text: "Planejamento, controle de atividades, documentação e interface com a execução." },
            { number: "02", title: "Tubulações e sistemas", text: "Aprofundamento técnico em componentes, leitura, manutenção e funcionamento de sistemas." },
            { number: "03", title: "Tecnologia aplicada", text: "Dados, automação e IA como ferramentas complementares para informação e produtividade." },
          ].map((item) => <div key={item.title} className="glass-card rounded-2xl p-7 border border-orange-500/10 hover:border-orange-500/25 transition-all"><div className="text-orange-400 font-mono text-xs font-bold mb-5">{item.number} / FOCO</div><h3 className="text-white text-xl font-black mb-3">{item.title}</h3><p className="text-slate-500 text-sm leading-relaxed">{item.text}</p></div>)}
        </div>

        <div id="artigos">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-10"><div><span className="text-orange-400 text-xs font-mono font-bold uppercase tracking-[0.3em]">// ARTIGOS TÉCNICOS</span><h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mt-3">Notas de campo, estudo e tecnologia</h3></div></div>
          <ArticleFeed />
        </div>
      </div>
    </section>
  );
};

export default React.memo(WorkArticles);
