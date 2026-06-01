import React from "react";
import { PROJECTS, SKILLS, EXPERIENCE, EDUCATION, FEEDBACKS, IDIOMAS } from "./constants";
import AIAssistant from "./components/AIAssistant";
import NeuralBackground from "./components/NeuralBackground";

// Add animation and enhanced styles
const animationStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  :root {
    --primary: #06b6d4;
    --secondary: #8b5cf6;
    --accent: #f43f5e;
    --bg-dark: #020617;
    --glass: rgba(15, 23, 42, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.2); }
    50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.4); }
  }

  .glass-card {
    background: var(--glass);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .text-gradient {
    background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-primary-gradient {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-blur {
    backdrop-filter: blur(20px) saturate(180%);
    background: rgba(2, 6, 23, 0.8);
  }

  .section-title {
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: -0.05em;
  }

  .tech-tag {
    background: rgba(6, 182, 212, 0.1);
    border: 1px solid rgba(6, 182, 212, 0.2);
    transition: all 0.3s ease;
  }

  .tech-tag:hover {
    background: var(--primary);
    color: var(--bg-dark);
  }

  /* Industrial Accent */
  .industrial-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
  }
`;

const App: React.FC = () => {
  const resumeFilePath = "/Curriculo-Matheus-Silva.pdf";
  const [feedbackLightboxSrc, setFeedbackLightboxSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const downloadIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 bg-slate-950 text-slate-200 overflow-x-hidden">
      <NeuralBackground />
      
      {/* Dynamic Header */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center font-mono font-black text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
              M_
            </div>
            <div>
              <div className="font-black text-lg tracking-tight leading-none text-white">MATHEUS_SILVA</div>
              <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest opacity-70">AI_AUTOMATION</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {['sobre', 'projetos', 'carreira', 'formação', 'stack'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-white transition-colors relative group">
                /{item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href={resumeFilePath} download className="px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center gap-2">
              CV_PDF {downloadIcon}
            </a>
          </div>
        </div>
      </nav>

      {/* Impact Hero Section */}
      <section className="relative pt-60 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-[11px] font-black uppercase tracking-[0.3em] mb-12 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            Disponível para Projetos e Transição
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-10">
            <span className="text-gradient">ENGINEERING</span> <br />
            <span className="text-primary-gradient">THE FUTURE.</span>
          </h1>
          
          <p className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl font-light">
            Do metal à inteligência artificial. Fundindo <span className="text-white font-medium">precisão industrial</span> com <span className="text-cyan-400 font-medium">automação autônoma</span> para criar sistemas que resolvem o amanhã.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="px-10 py-5 bg-cyan-500 text-slate-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.2)]">
              Ver_Sistemas
            </a>
            <a href="#contact" className="px-10 py-5 bg-slate-900 border border-white/10 rounded-xl font-black text-sm uppercase tracking-widest hover:border-cyan-500/50 transition-all">
              Contato_Direto
            </a>
          </div>
        </div>
      </section>

      {/* About: The Industrial Transition */}
      <section id="sobre" className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-white/10 p-12 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="white"><path d="M10 10 H90 V90 H10 Z" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 5"/></svg>
              </div>
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-pink-500">const</span> identity = {"{"}
                </div>
                <div className="pl-6 text-slate-300">
                  name: <span className="text-yellow-400">"Matheus Silva"</span>,<br />
                  origin: <span className="text-yellow-400">"Industrial Maintenance"</span>,<br />
                  evolution: <span className="text-yellow-400">"AI Automation"</span>,<br />
                  mindset: <span className="text-yellow-400">"Surgical Precision"</span>
                </div>
                <div className="text-cyan-400">{"}"}</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase section-title">
              <span className="text-primary-gradient block text-xl mb-4 font-mono">// A_TRANSFORMACAO</span>
              O Perfil do Híbrido
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              Minha base começou no chão de fábrica, entre soldas e máquinas pesadas no <span className="text-white">SENAI</span>. Hoje, aplico essa mesma resiliência e foco em detalhes no mundo da <span className="text-white font-bold">Automação com IA</span>.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 italic border-l-2 border-cyan-500/30 pl-6">
              "Acredito que a IA não é apenas sobre código, é sobre orquestrar processos que funcionam com a mesma perfeição de uma engrenagem industrial."
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-white mb-2">03+</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Especializações_IA</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-2">ADS</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Formação_Superior</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects: The Portfolio */}
      <section id="projetos" className="py-40 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl font-black tracking-tighter uppercase section-title">
              <span className="text-primary-gradient block text-xl mb-4 font-mono">// SOLUCOES_CONSTRUIDAS</span>
              Portfolio_Ativo
            </h2>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-mono text-slate-400">STATUS: PRODUCTION_READY</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden bg-slate-950">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" />
                </div>
                
                <div className="p-10 w-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tech-tag px-3 py-1 text-[9px] font-bold rounded-md uppercase tracking-wider text-cyan-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.3em] hover:text-cyan-400 transition-all">
                      Analyze_Code <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Career Timeline */}
      <section id="carreira" className="py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter uppercase section-title mb-6">
              Jornada_Profissional
            </h2>
            <div className="industrial-line w-24 mx-auto"></div>
          </div>
          
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={exp.id} className="relative pl-12 border-l border-white/10 pb-8 last:pb-0">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="text-cyan-500 font-mono text-xs font-bold uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-3xl font-black text-white">{exp.position}</h3>
                    <p className="text-slate-400 font-bold text-lg">{exp.company}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-2xl">{exp.description}</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="text-cyan-500">»</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education: Specialized Knowledge */}
      <section id="formação" className="py-40 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black tracking-tighter mb-24 uppercase section-title text-center">
            Domínio_Acadêmico
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="glass-card p-10 rounded-3xl flex flex-col justify-between group h-full">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-primary-gradient transition-all">{edu.degree}</h3>
                  <p className="text-slate-400 font-bold text-sm mb-6">{edu.institution}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tech Stack */}
      <section id="stack" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase section-title">
                <span className="text-primary-gradient block text-xl mb-4 font-mono">// STACK_TECNICA</span>
                Arsenal_Digital
              </h2>
              <div className="flex flex-wrap gap-4">
                {['n8n','Make','Python','SQL', 'Supabase', 'Gemini_CLI', 'Antigravity', 'Caldeiraria', 'Solda'].map(tag => (
                  <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-black rounded-lg uppercase tracking-widest hover:border-cyan-500 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{skill.name}</h3>
                    <span className="text-cyan-400 font-mono font-bold text-xs">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-1000 group-hover:brightness-125" style={{ width: `${skill.proficiency}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Idiomas Horizontal bar */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-12">
          {IDIOMAS.map(idioma => (
            <div key={idioma.name} className="flex items-center gap-6 group">
              <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">{idioma.category}</span>
              <span className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">{idioma.name}</span>
              <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500" style={{ width: `${idioma.proficiency}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Feedbacks */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter uppercase section-title mb-4">Validation_Log</h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Feedback de Clientes e Parceiros</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FEEDBACKS.map((fb) => (
              <div key={fb.id} className="glass-card p-10 rounded-3xl relative">
                <div className="absolute top-6 right-8 text-cyan-500 opacity-20 text-6xl font-serif">“</div>
                <p className="text-slate-300 text-base leading-relaxed mb-8 relative z-10 italic">
                  {fb.description}
                </p>
                <div className="flex items-center gap-4">
                  {fb.imageUrls[0] && (
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-500/30">
                      <img src={fb.imageUrls[0]} alt="Feedback user" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="h-px flex-1 bg-white/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call: Footer */}
      <footer id="contact" className="py-40 px-6 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase leading-none">
            VAMOS <span className="text-primary-gradient">CONSTRUIR</span> <br />
            O PRÓXIMO NÍVEL?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <a href="mailto:matheus.dev11@outlook.com" className="px-12 py-6 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-2xl">
              INICIAR_PROCESSO
            </a>
            <a href="https://www.linkedin.com/in/matheus-de-souza-0b177b333/" className="px-12 py-6 bg-slate-900 border border-white/10 text-white font-black rounded-2xl hover:border-cyan-500/50 transition-all text-sm uppercase tracking-widest">
              LINKEDIN_CONNECT
            </a>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] pt-20 border-t border-white/5">
            <div>© 2026 MATHEUS_SILVA</div>
            <div>STATUS: ONLINE_SYNC</div>
            <div>LOCATION: BRAZIL_HUB</div>
            <a href="https://chat.whatsapp.com/B8iH9FETMjw6VMeE4qm3uL" className="text-cyan-400 hover:text-white transition-colors">NETWORKING_COMMUNITY</a>
          </div>
        </div>
      </footer>

      {/* Lightbox logic preserved */}
      {feedbackLightboxSrc && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl" onClick={() => setFeedbackLightboxSrc(null)}>
          <img src={feedbackLightboxSrc} className="max-h-full max-w-full rounded-2xl shadow-2xl border border-white/10" alt="Enlarged feedback" />
        </div>
      )}

      <AIAssistant />
    </div>
  );
};

export default App;