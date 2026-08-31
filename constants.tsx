import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Dashboard Industrial de Manutenção",
    description: "Protótipo de painel de controle para monitoramento de ordens de serviço, KPIs de manutenção e status de permissões de trabalho. Desenvolvido com Python e visualização de dados para apoio a decisões operacionais em tempo real.",
    tags: ["Python", "Dashboard", "Manutenção Industrial", "IA"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333",
  },
  {
    id: "2",
    title: "Automação de Processos com IA Generativa",
    description: "Agente inteligente construído com Java e API de IA generativa para automatizar fluxos de documentação e relatórios técnicos industriais, reduzindo o tempo de elaboração de PTs e relatórios operacionais.",
    tags: ["Java", "IA Generativa", "Automação", "Processos Industriais"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "3",
    title: "Sistema de Análise de Dados Industriais",
    description: "Pipeline de análise e predição com machine learning em Python, aplicado a dados de manutenção preditiva. Foco em identificação de padrões e suporte à tomada de decisão em ambientes industriais.",
    tags: ["Python", "Machine Learning", "Manutenção Preditiva", "Data Science"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Calculadora-de-precos-de-imoveis",
  },
  {
    id: "4",
    title: "Plataforma Full Stack — Em Desenvolvimento",
    description: "Aplicação web full stack orientada a processos industriais, com foco em gestão de manutenção, controle de atividades e interface entre equipes de campo e planejamento. Proof of concept em construção.",
    tags: ["React", "Node.js", "Full Stack", "Gestão Industrial"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333",
  },
  {
    id: "5",
    title: "SENTINELA SAO | Padronizador Industrial",
    description: "Engine de auditoria semântica e padronização com IA (Google Gemini). Elimina a dívida técnica ao converter e reestruturar arquivos para o padrão da empresa com rigor industrial.",
    tags: ["IA Generativa", "Python", "FastAPI", "Auditoria", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://padronizador-nine.vercel.app/",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Manutenção & Caldeiraria Industrial",
    category: "Industrial",
    proficiency: 95,
    details: ["Refinaria RPBC", "Conformação de Metais", "Traçagem de Precisão", "Protocolos de Segurança"],
  },
  {
    name: "Planejamento de Manutenção",
    category: "Planning",
    proficiency: 88,
    details: ["Permissão de Trabalho (PT)", "Controle de Atividades", "Interface Campo–Segurança", "Organização Operacional"],
  },
  {
    name: "Processos Industriais",
    category: "Industrial",
    proficiency: 85,
    details: ["UGAV – Refinaria", "Oficina de Fabricação", "Procedimentos de Segurança", "Inspeção de Campo"],
  },
  {
    name: "Python & Automação",
    category: "Tech",
    proficiency: 82,
    details: ["Scripts de Automação", "Análise de Dados", "Pandas", "IA Aplicada"],
  },
  {
    name: "Inteligência Artificial Generativa",
    category: "Tech",
    proficiency: 78,
    details: ["LLMs", "Agentes Autônomos", "Aplicações Industriais", "SENAI / Google"],
  },
  {
    name: "Desenvolvimento Java",
    category: "Tech",
    proficiency: 75,
    details: ["Oracle Java Foundations", "POO", "Lógica de Programação", "APIs"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Universidade Santa Cecília — Unisanta",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2025 – Em andamento",
    description: "Formação superior com foco em engenharia de software, sistemas distribuídos e desenvolvimento de aplicações orientadas a processos industriais e transformação digital.",
  },
  {
    id: "2",
    institution: "SENAI Cubatão",
    degree: "Técnico em Manutenção de Máquinas Industriais",
    period: "2023 – 2024",
    description: "Base sólida em processos de manutenção industrial, leitura de desenhos técnicos, instrumentação e gestão de ativos mecânicos.",
  },
  {
    id: "3",
    institution: "Programa Autonomia e Renda Petrobras",
    degree: "Formação em Caldeiraria Industrial",
    period: "2025",
    description: "Especialização técnica em caldeiraria, conformação de metais, traçagem e execução de serviços em ambiente industrial de refinaria.",
  },
  {
    id: "4",
    institution: "SENAI Cubatão",
    degree: "IA Generativa Aplicada (Google Antigravity)",
    period: "2026",
    description: "Desenvolvimento de aplicações com Inteligência Artificial Generativa: orquestração de LLMs, agentes autônomos e automação de processos com IA.",
  },
  {
    id: "5",
    institution: "SENAI Cubatão",
    degree: "Oracle Java Foundations",
    period: "2025",
    description: "Certificação em fundamentos de programação orientada a objetos, estrutura de dados e lógica de programação com Java.",
  },
];

export const IDIOMAS: Idioma[] = [
  {
    name: "Português",
    category: "Nativo",
    proficiency: 100,
  },
  {
    name: "Espanhol",
    category: "Intermediário",
    proficiency: 65,
  },
  {
    name: "Inglês",
    category: "Técnico",
    proficiency: 55,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "C3 Engenharia & Soluções — Refinaria Presidente Bernardes (RPBC/Petrobras)",
    position: "Assistente de Planejamento de Manutenção Industrial — UT2",
    period: "2026 – Presente",
    description: "Promovido ao planejamento após demonstrar comprometimento e desempenho no campo. Atuo na interface entre as equipes de campo, segurança e manutenção da UT2, organizando e acompanhando as atividades de manutenção da refinaria.",
    achievements: [
      "Elaboração e acompanhamento de Permissões de Trabalho (PT)",
      "Organização e controle das atividades de manutenção industrial",
      "Interface operacional entre equipes de campo, segurança e gestão",
      "Apoio aos processos de planejamento e inspeção de atividades",
      "Controle de informações para suporte às decisões operacionais",
    ],
  },
  {
    id: "2",
    company: "C3 Engenharia & Soluções — Refinaria Presidente Bernardes (RPBC/Petrobras)",
    position: "Caldeireiro Industrial — UGAV / Oficina de Fabricação",
    period: "2025 – 2026",
    description: "Atuação em parada de manutenção na UGAV (Unidade de Geração de Alquilação e Vinilação) e na oficina de fabricação. Responsável por serviços de conformação, traçagem e montagem sob rigorosos protocolos de segurança industrial.",
    achievements: [
      "Execução de manutenção corretiva e preventiva em unidades críticas de refinaria",
      "Traçagem de precisão e interpretação de medidas para fabricação",
      "Organização e controle de ferramentas conforme normas de segurança",
      "Cálculos aplicados à fabricação e conformação de metais",
      "Participação na oficina de fabricação — preparação e organização de materiais",
    ],
  },
  {
    id: "3",
    company: "Franciscon Infraestrutura",
    position: "Aprendiz Industrial SENAI",
    period: "2023 – 2024",
    description: "Início da trajetória profissional industrial. Desenvolvimento da base técnica, disciplina operacional, conhecimento de processos, padronização e resolução de problemas no ambiente industrial.",
    achievements: [
      "Formação da base técnica em processos industriais",
      "Desenvolvimento de disciplina e metodologia de trabalho (SENAI)",
      "Suporte operacional e logística industrial",
      "Iniciação em organização de ativos e controle de materiais",
    ],
  },
];

export const FEEDBACKS: Feedback[] = [
  {
    id: "1",
    description: "Profissional atencioso e dedicado.",
    imageUrls: ["/social-proof/willian.png"],
  },
  {
    id: "2",
    description: "Matheus é um profissional em constante evolução, com raciocínio analítico apurado e comprometimento real com os resultados.",
    imageUrls: ["/social-proof/arthur.png"],
  },
  {
    id: "3",
    description: "Manteve comunicação clara durante o projeto e entregou conforme solicitado, com precisão e organização.",
    imageUrls: ["/social-proof/icaro.png"],
  },
];