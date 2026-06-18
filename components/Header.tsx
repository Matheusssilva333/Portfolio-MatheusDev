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

  return (
    <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center font-mono font-black text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
            M_
          </div>
          <div>
            <div className="font-black text-lg tracking-tight leading-none text-white">MATHEUS_SILVA</div>
            <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest opacity-70">DEV_&_HACKER</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {['sobre', 'projetos', 'carreira', 'stack'].map(item => (
            <a key={item} href={`#${item}`} className="hover:text-white transition-colors relative group">
              /{item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a href={resumeFilePath} download className="px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center gap-2">
            DOWNLOAD_CV {downloadIcon}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Header);
