import React from "react";

interface HeaderProps {
  resumeFilePath: string;
}

const Header: React.FC<HeaderProps> = ({ resumeFilePath }) => {
  const downloadIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#carreira", label: "Trajetória" },
    { href: "#projetos", label: "Projetos" },
    { href: "#stack", label: "Competências" },
    { href: "#formacao", label: "Formação" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center font-mono font-black text-black shadow-2xl group-hover:rotate-12 transition-transform duration-500 text-sm">
            MS
          </div>
          <div>
            <div className="font-black text-base tracking-tight leading-none text-white">MATHEUS SILVA</div>
            <div className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-widest opacity-80">
              Planejamento Industrial & Tech
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={resumeFilePath}
            download
            className="flex items-center gap-2 px-5 py-2 bg-orange-500/10 border border-orange-500/25 text-orange-400 rounded-full hover:bg-orange-500/20 hover:border-orange-500/50 transition-all text-[10px] font-black uppercase tracking-widest"
          >
            Download CV {downloadIcon}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Header);
