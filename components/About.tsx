import React from "react";

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-40 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0a] border border-white/5 p-12 rounded-3xl overflow-hidden">
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-pink-500">struct</span> Profile {"{"}
              </div>
              <div className="pl-6 text-slate-300">
                experience: <span className="text-emerald-400">"2 Years Freelance"</span>,<br />
                skills: [<span className="text-yellow-400">"Python"</span>, <span className="text-yellow-400">"Java"</span>, <span className="text-yellow-400">"Security"</span>],<br />
                current_role: <span className="text-emerald-400">"Industrial Maintenance @ Petrobras"</span>,<br />
                mindset: <span className="text-emerald-400">"Hacker Spirit"</span>
              </div>
              <div className="text-cyan-400">{"}"}</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase section-title">
            <span className="text-primary-gradient block text-xl mb-4 font-mono">// QUEM_SOU_EU</span>
            O Perfil Híbrido
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            Atualmente na linha de frente da manutenção industrial na <span className="text-white">Petrobras (UGAV)</span>, trago a rigidez e o foco em segurança do chão de fábrica para o código. Como <span className="text-white font-bold">Desenvolvedor e Hacker Ético</span>, busco vulnerabilidades e construo soluções com a mesma precisão de uma solda industrial.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-3xl font-black text-white mb-2">02</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Anos_Freelance</div>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <div className="text-3xl font-black text-white mb-2">ADS</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Graduando</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
