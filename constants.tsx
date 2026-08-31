import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "SENTINELA SAO | Padronizador de Arquivos",
    description: "Produto digital concebido de ponta a ponta para resolver um gargalo real de documentação técnica industrial. O sistema converte e reestrutura automaticamente qualquer arquivo e planilha operacional para o padrão corporativo exigido pela empresa, otimizando em 90% o processamento de dados e eliminando retrabalhos manuais no planejamento.",
    tags: ["Gestão de Produtos", "Análise de Sistemas", "FastAPI", "Python", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://padronizador-nine.vercel.app/",
  },
  
];

export const SKILLS: Skill[] = [
  {
    name: "Planejamento & SMS Industrial",
    category: "Planning",
    proficiency: 92,
    details: ["Apoio Planejamento UT2", "Permissão de Trabalho (PT)", "Segurança e SMS de Refinaria", "Controle de Estojos/Fixação"],
  },
  {
    name: "Gestão de Produtos e Processos",
    category: "Planning",
    proficiency: 88,
    details: ["Mapeamento de Gargalos", "Padronização de Arquivos", "Análise de Requisitos", "Interface Campo–Planejamento"],
  },
  {
    name: "Caldeiraria & Manutenção Pesada",
    category: "Industrial",
    proficiency: 95,
    details: ["Refinaria RPBC (UGAV/UT2)", "Traçagem de Raquetes/Blinds", "Trabalho em Torres/Reatores", "Metrologia & Desenho Técnico"],
  },
  {
    name: "Segurança de Processos Críticos",
    category: "Industrial",
    proficiency: 90,
    details: ["Procedimentos de Segurança HF", "Trabalho em Altura (NR-35)", "Prevenção de SMS", "Organização Operacional"],
  },
  {
    name: "Python & Automação de Dados",
    category: "Tech",
    proficiency: 85,
    details: ["Scripts de Automação", "Processamento de Planilhas", "FastAPI / Vercel API", "Pandas & Data Wrangling"],
  },
  {
    name: "Engenharia de Software (ADS)",
    category: "Tech",
    proficiency: 80,
    details: ["Unisanta (ADS)", "Lógica & Algoritmos", "Oracle Java Foundations", "Desenvolvimento Web (React)"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Universidade Santa Cecília — Unisanta",
    degree: "Análise e Desenvolvimento de Sistemas (ADS)",
    period: "2025 – Em andamento",
    description: "Graduação superior focada em engenharia de software, mapeamento de processos, análise de requisitos e concepção de produtos tecnológicos para a otimização de fluxos operacionais e industriais.",
  },
  {
    id: "2",
    institution: "SENAI Cubatão",
    degree: "Técnico em Manutenção de Máquinas Industriais",
    period: "2023 – 2024",
    description: "Sólida base técnica em processos mecânicos industriais, leitura e interpretação de desenhos de engenharia, calibração, manutenção corretiva/preventiva e controle de ativos físicos.",
  },
  {
    id: "3",
    institution: "Programa Autonomia e Renda Petrobras / SENAI",
    degree: "Especialização em Caldeiraria Industrial",
    period: "2025",
    description: "Formação sob demanda operacional em caldeiraria pesada de refinaria, cálculo de traçagem técnica de raquetes/componentes, montagem estrutural e rigor em procedimentos de risco elevado.",
  },
  {
    id: "4",
    institution: "SENAI Cubatão",
    degree: "IA Generativa Aplicada à Indústria",
    period: "2026",
    description: "Desenvolvimento de soluções com Inteligência Artificial: orquestração de LLMs para automação de procedimentos, análise de documentação técnica de SMS e geração de relatórios de manutenção.",
  },
  {
    id: "5",
    institution: "SENAI Cubatão",
    degree: "Oracle Java Foundations",
    period: "2025",
    description: "Certificação em programação orientada a objetos, lógica estruturada, modularidade de sistemas e desenvolvimento de APIs robustas.",
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
    position: "Apoio ao Planejamento e SMS / Auxiliar de Manutenção — UT2",
    period: "2026 – Presente",
    description: "Promoção estratégica para atuar diretamente no suporte às equipes de Planejamento de Manutenção e Segurança, Meio Ambiente e Saúde (SMS) na unidade UT2 da refinaria. Atuação na interface campo-planejamento, traduzindo desenhos mecânicos em traçagem física de precisão e garantindo a segurança de intervenções críticas.",
    achievements: [
      "Apoio integrado dentro das equipes de Planejamento de Manutenção Industrial e SMS.",
      "Trabalho em altura em torres e reatores, conforme rigorosos procedimentos de segurança industrial (NR-35).",
      "Execução de traçagem técnica de raquetes e componentes de caldeiraria (medições, marcações, preparação para corte, fabricação e montagem de acordo com desenhos/projetos).",
      "Apoio na identificação, organização mecânica e preparação de estojos e conjuntos de fixação para atividades de manutenção.",
    ],
  },
  {
    id: "2",
    company: "C3 Engenharia & Soluções — Refinaria Presidente Bernardes (RPBC/Petrobras)",
    position: "Caldeireiro Industrial — UGAV / Oficina de Fabricação",
    period: "2026",
    description: "Atuação direta em parada de manutenção na unidade de alta criticidade UGAV (Geração de Alquilação e Vinilação) e na oficina de fabricação de componentes mecânicos, priorizando o cumprimento estrito de padrões técnicos e prevenção de acidentes.",
    achievements: [
      "Atuação operacional em área com risco elevado de exposição a HF (Ácido Fluorídrico), seguindo estritamente as diretrizes de segurança.",
      "Apoio, coleta e movimentação de ferramentas na ferramentaria, garantindo organização operacional e prontidão de materiais para as frentes de trabalho.",
      "Execução prática de caldeiraria, interpretação de especificações técnicas e conformação estrutural sob padrões rígidos de controle de qualidade.",
    ],
  },
  {
    id: "3",
    company: "Franciscon Infraestrutura",
    position: "Aprendiz Industrial SENAI",
    period: "2023 – 2024",
    description: "Introdução à carreira na área industrial pesada. Desenvolvimento de disciplina operacional de elite, entendimento aprofundado sobre padronização de processos de produção e resolução de problemas práticos sob metodologia SENAI.",
    achievements: [
      "Formação teórica e prática intensiva em processos industriais mecânicos e de caldeiraria pelo SENAI Cubatão.",
      "Suporte à organização de frentes operacionais de manutenção preventiva e corretiva.",
      "Aprendizado rigoroso de metrologia aplicada e controle de qualidade de componentes de precisão.",
    ],
  },
];

export const FEEDBACKS: Feedback[] = [
  {
    id: "1",
    description: "Profissional extremamente focado, atencioso aos requisitos de segurança e altamente dedicado à otimização das atividades.",
    imageUrls: ["/social-proof/willian.png"],
  },
  {
    id: "2",
    description: "O Matheus combina uma excepcional vivência prática no chão de refinaria com um raciocínio lógico apurado voltado à melhoria de processos com tecnologia. Perfil ideal para planejamento e gestão de produtos.",
    imageUrls: ["/social-proof/arthur.png"],
  },
  {
    id: "3",
    description: "Manteve excelente comunicação, cumpriu todos os prazos no desenvolvimento do Padronizador e entregou soluções organizadas que resolveram dores reais do nosso fluxo.",
    imageUrls: ["/social-proof/icaro.png"],
  },
];