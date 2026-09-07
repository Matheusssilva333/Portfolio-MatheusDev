import React from "react";

const journey = [
  ["01", "2023 — 2024", "Aprendiz Industrial SENAI", "Franciscon Infraestrutura", "Base técnica industrial, disciplina profissional e primeiros contatos com manutenção e fabricação."],
  ["02", "2026", "Caldeireiro Industrial", "C3 Engenharia & Soluções · Petrobras RPBC", "Experiência de campo em caldeiraria, fabricação e execução durante manutenção em refinaria."],
  ["03", "2026", "Assistente de Planejamento", "C3 Engenharia & Soluções · Petrobras RPBC", "Apoio ao planejamento de manutenção e SMS, controle de atividades, PTs e interface com campo."],
];

const pillars = [
  ["01", "Planejamento", "Sequenciamento, recursos, restrições, interfaces e controle de execução."],
  ["02", "Sistemas industriais", "Desenvolvimento técnico em tubulações, equipamentos e manutenção."],
  ["03", "Tecnologia", "Programação, dados e IA como ferramentas para organizar e automatizar informação."],
];

const About: React.FC = () => (
  <section id="sobre" className="relative py-28 md:py-36">
    <div className="section-shell">
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24 items-end">
        <div><span className="section-kicker">Sobre / trajetória</span><h2 className="section-title">Experiência de campo que evolui para <span className="text-primary-gradient">planejamento.</span></h2></div>
        <p className="section-copy mt-0">Minha trajetória profissional parte da execução industrial e avança para o planejamento de manutenção. O objetivo é construir profundidade técnica em tubulações e sistemas industriais, mantendo tecnologia como competência complementar.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 glass-morphism rounded-3xl p-7 md:p-9 hover-lift">
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7"><span className="eyebrow">perfil profissional</span><span className="font-mono text-[10px] text-emerald-400">● EM DESENVOLVIMENTO</span></div>
          <div className="font-mono text-sm leading-8"><div className="text-orange-400">profile <span className="text-slate-500">=</span> {'{'}</div><div className="pl-5 md:pl-8 space-y-1 text-slate-300"><div><span className="text-slate-500">eixo</span>: <span className="text-white">"Planejamento de Manutenção Industrial"</span>,</div><div><span className="text-slate-500">especialização</span>: <span className="text-orange-300">["Tubulações", "Sistemas Industriais"]</span>,</div><div><span className="text-slate-500">base</span>: <span className="text-amber-300">["Caldeiraria", "Manutenção", "Refinaria"]</span>,</div><div><span className="text-slate-500">formação</span>: <span className="text-amber-300">["ADS", "SENAI"]</span>,</div><div><span className="text-slate-500">tecnologia</span>: <span className="text-sky-300">["Python", "Java", "IA Generativa"]</span></div></div><div className="text-orange-400">{'}'}</div></div>
        </div>
        <div className="lg:col-span-5 grid gap-4">{pillars.map(([n,title,text]) => <div key={n} className="glass-morphism rounded-2xl p-6 hover-lift"><div className="flex gap-4"><span className="font-mono text-xs text-orange-400">{n}</span><div><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div></div></div>)}</div>
      </div>

      <div className="mt-24"><div className="flex items-center gap-5 mb-8"><span className="section-kicker">Evolução</span><div className="section-divider flex-1" /></div><div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">{journey.map(([n,period,role,company,text]) => <article key={n} className="bg-[#08121b] p-7 md:p-8 hover:bg-[#0c1923] transition-colors"><div className="flex justify-between items-start"><span className="font-mono text-4xl font-bold text-white/10">{n}</span><span className="font-mono text-[10px] text-orange-400">{period}</span></div><h3 className="mt-10 text-lg font-extrabold text-white">{role}</h3><p className="mt-2 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">{company}</p><p className="mt-5 text-sm leading-7 text-slate-400">{text}</p></article>)}</div></div>
    </div>
  </section>
);

export default About;
