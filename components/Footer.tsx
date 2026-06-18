import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-none">
          PRONTO PARA <br />
          <span className="text-primary-gradient">COLABORAR?</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <a 
            href="https://wa.me/5513974034128" 
            className="px-12 py-6 bg-cyan-500 text-slate-950 font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest"
          >
            CONTATO_WHATSAPP
          </a>
          <a 
            href="mailto:matheus.dev11@outlook.com"
            className="px-12 py-6 bg-transparent border border-white/10 text-white font-black rounded-2xl hover:border-cyan-500/50 transition-all text-sm uppercase tracking-widest"
          >
            ENVIAR_EMAIL
          </a>
        </div>

        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.5em]">
          © 2026 MATHEUS_SILVA // BUILT_FOR_STABILITY
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
