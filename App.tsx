import React from "react";
import { PROJECTS, SKILLS, EXPERIENCE, FEEDBACKS } from "./constants";

// Add animation styles
const animationStyles = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.2), transparent);
    z-index: 50;
    pointer-events: none;
    animation: scan 4s linear infinite;
  }
  .grid-bg {
    background-image: radial-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;

const App: React.FC = () => {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 bg-slate-950 text-slate-200 font-sans overflow-x-hidden">
      <div className="scanline" />
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/20 border border-white/10">
              MS
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase font-mono">
              MATHEUS<span className="text-cyan-500">_DEV</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">/SOBRE</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">/PROJETOS</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">/CARREIRA</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">/STACK</a>
            <a href="#contact" className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md hover:bg-cyan-500/20 transition-all">CONTRATAR</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Disponível para Estágio • 3º Semestre ADS
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-white">
            SECURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              AI SYSTEMS
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
            Sou <span className="text-white font-medium">Matheus Silva</span>, estudante de ADS e Engenheiro de Automação com IA. 
            Especializado em criar sistemas autônomos robustos, escaláveis e com foco total em 
            <span className="text-cyan-400"> integridade de dados e segurança operacional</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-cyan-500 text-slate-950 rounded-lg font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
              Explorar Projetos
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-900 border border-white/10 rounded-lg font-bold hover:border-cyan-500/50 transition-all">
              Documentação / Contato
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 border-t border-white/5 relative bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl rounded-3xl" />
            <div className="relative bg-slate-900 border border-white/10 p-8 rounded-2xl shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <code className="text-sm font-mono leading-relaxed text-cyan-400/80">
                <span className="text-purple-400">class</span> <span className="text-yellow-400">Developer</span> {"{"} <br />
                &nbsp;&nbsp;name = <span className="text-green-400">"Matheus Silva"</span>; <br />
                &nbsp;&nbsp;role = <span className="text-green-400">"AI Automation Expert"</span>; <br />
                &nbsp;&nbsp;status = <span className="text-green-400">"Searching for Internship"</span>; <br />
                &nbsp;&nbsp;skills = [<span className="text-green-400">"Python", "MLOps", "Security"</span>]; <br />
                {"}"}
              </code>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-8 text-white uppercase">
              <span className="text-cyan-500 font-mono text-xl block mb-2 opacity-50">// 01. QUEM SOU</span>
              PERFIL PROFISSIONAL
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Estudante de Análise e Desenvolvimento de Sistemas (3º Semestre), focado em 
              <span className="text-white font-medium"> Engenharia de Machine Learning</span>. 
              Atuo como Freelancer desenvolvendo automações que não apenas resolvem problemas, 
              mas o fazem de forma segura e eficiente.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="text-cyan-400 font-bold mb-1">Freelance</h4>
                <p className="text-xs text-slate-500">Automações com IA e Agentes Autônomos.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="text-cyan-400 font-bold mb-1">Acadêmico</h4>
                <p className="text-xs text-slate-500">3º Semestre de ADS - Foco em Backend.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl font-black tracking-tighter text-white uppercase">
              <span className="text-cyan-500 font-mono text-xl block mb-2 opacity-50">// 02. PORTFÓLIO</span>
              SISTEMAS DESENVOLVIDOS
            </h2>
            <p className="text-slate-500 max-w-xs text-xs font-mono">
              [SYSTEM_CHECK]: PROJETOS VERIFICADOS E DISPONÍVEIS NO GITHUB.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative flex flex-col bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/40">
                <div className="aspect-video relative overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-1 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/5 text-slate-400 text-[10px] font-bold rounded uppercase tracking-wider border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-bold text-[10px] uppercase tracking-widest hover:text-cyan-300 transition-all">
                      Acessar Código <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 border-t border-white/5 bg-slate-900/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-16 text-center text-white uppercase">
            <span className="text-cyan-500 font-mono text-xl block mb-2 opacity-50">// 03. HISTÓRICO</span>
            TRAJETÓRIA PROFISSIONAL
          </h2>
          <div className="relative space-y-12">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            
            {EXPERIENCE.map((exp, idx) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)] border-4 border-slate-950" />
                <div className="md:w-1/2 bg-slate-900/60 border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 transition-all">
                  <span className="text-cyan-500 font-mono text-xs font-bold block mb-2">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                  <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs text-slate-400">
                        <span className="text-cyan-500 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-8 text-white uppercase">
                <span className="text-cyan-500 font-mono text-xl block mb-2 opacity-50">// 04. TECH_STACK</span>
                DOMÍNIO TÉCNICO
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Focado na construção de sistemas que utilizam <span className="text-white">inteligência artificial de ponta</span> com protocolos de segurança de nível industrial.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Python', 'MLOps', 'PyTorch', 'FastAPI', 'N8N', 'Docker', 'ADS', 'SQL'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold rounded-lg uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="bg-slate-900/40 border border-white/5 p-6 rounded-xl group hover:border-cyan-500/30 transition-all">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{skill.category}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                    </div>
                    <span className="text-cyan-400 font-mono font-bold text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 group-hover:from-cyan-400 group-hover:to-cyan-600 transition-all duration-1000" style={{ width: `${skill.proficiency}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-white/5 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black tracking-tighter mb-8 text-white uppercase">SISTEMA <span className="text-cyan-500">ONLINE</span></h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto text-sm">
            Pronto para integrar IA segura em seu negócio ou oferecer uma oportunidade de estágio para um desenvolvedor focado em alta performance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:matheus.dev@outlook.com" className="px-10 py-5 bg-cyan-500 text-slate-950 font-black rounded-xl hover:scale-105 transition-all shadow-xl shadow-cyan-500/20">
              INICIAR CONVERSA
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Matheusssilva333" className="p-5 bg-slate-900 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all text-white">GitHub</a>
              <a href="https://www.linkedin.com/in/matheus-de-souza-0b177b333/" className="p-5 bg-slate-900 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all text-white">LinkedIn</a>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            © 2026 MATHEUS_SILVA // SECURE_AI_DEVELOPER // ADS_ADS_STUDENT
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;