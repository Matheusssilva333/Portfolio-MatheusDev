import React from "react";
import ArticleFeed from "./ArticleFeed";

const focuses = [
  ["01", "Planejamento de manutenção", "Planejamento, controle, documentação, sequenciamento e interface com a execução."],
  ["02", "Tubulações & sistemas", "Aprofundamento técnico em componentes, leitura, manutenção e funcionamento de sistemas."],
  ["03", "Tecnologia aplicada", "Dados, automação e IA como ferramentas para informação, produtividade e análise."],
];

const WorkArticles: React.FC = () => (
  <section id="trabalho" className="relative py-28 md:py-36 overflow-hidden">
    <div className="section-shell">
      <div className="grid lg:grid-cols-[1fr_.8fr] gap-10 items-end"><div><span className="section-kicker">Trabalho / conhecimento</span><h2 className="section-title">Do trabalho real para <span className="text-primary-gradient">o conhecimento.</span></h2></div><p className="section-copy mt-0">Um registro público da minha evolução profissional: experiências, aprendizados, estudos aplicados e artigos técnicos.</p></div>
      <div className="mt-14 grid lg:grid-cols-3 gap-4">{focuses.map(([n,title,text]) => <div key={n} className="glass-morphism rounded-2xl p-6 hover-lift"><div className="flex justify-between mb-10"><span className="font-mono text-xs text-orange-400">{n}</span><span className="eyebrow">FOCO</span></div><h3 className="text-lg font-extrabold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></div>)}</div>
      <div id="artigos" className="mt-24 pt-10 border-t border-white/10"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"><div><span className="section-kicker">Artigos técnicos</span><h3 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-white">Notas de campo, estudo e tecnologia.</h3></div><span className="eyebrow max-w-xs leading-5">01 — PUBLICAÇÃO CONTÍNUA<br/>Planejamento · Sistemas · Tecnologia</span></div><ArticleFeed /></div>
    </div>
  </section>
);

export default WorkArticles;
