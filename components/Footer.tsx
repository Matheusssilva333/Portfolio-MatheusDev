import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/3 pointer-events-none" />
      <div className="absolute left-1/2 top-0 w-[600px] h-[300px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Section label */}
        <span className="text-primary-gradient text-sm font-mono font-bold uppercase tracking-[0.4em] block mb-6">
          // CONTATO
        </span>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
          VAMOS<br />
          <span className="text-primary-gradient">CONVERSAR?</span>
        </h2>

        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-16 leading-relaxed">
          Aberto a oportunidades que unam minha experiência industrial ao desenvolvimento de soluções tecnológicas para a indústria.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-24">
          <a
            href="https://wa.me/5513974034128"
            className="btn-primary px-12 py-5 font-black rounded-2xl text-sm uppercase tracking-widest inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.529 5.849L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.833 0-3.552-.49-5.035-1.343l-.361-.213-3.754.894.908-3.661-.234-.376A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="mailto:matheus.dev11@outlook.com"
            className="btn-outline px-12 py-5 font-black rounded-2xl text-sm uppercase tracking-widest"
          >
            E-mail
          </a>
          <a
            href="https://github.com/Matheusssilva333"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-transparent border border-white/10 text-slate-400 font-black rounded-2xl hover:border-white/20 hover:text-white transition-all text-sm uppercase tracking-widest"
          >
            GitHub
          </a>
        </div>

        {/* Divider */}
        <div className="section-divider mb-10" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600">
          <div className="text-[10px] font-mono uppercase tracking-[0.4em]">
            © 2026 Matheus Silva
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.3em]">
            Planejamento Industrial · Caldeiraria · Tecnologia
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.4em]">
            Cubatão — SP · Brasil
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
