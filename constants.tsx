import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  
  {
    id: "1",
    title: "IA Consultora de Marketing Digital",
    description: "Agente inteligente construído em Java que automatiza o funil de vendas. Utiliza a API do Manus AI para gerar estratégias personalizadas, resultando em um aumento de 40% na eficiência de prospecção durante os testes beta.",
    tags: ["Java", "IA Generativa", "API Manus AI", "Marketing"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "2",
    title: "Plataforma de Streaming FullStack",
    description: "Ecossistema completo de vídeo construído com JavaScript moderno. Focado em performance de carregamento e experiência do usuário, implementando arquitetura escalável para distribuição de conteúdo.",
    tags: ["JavaScript", "FullStack", "Streaming", "UX"],
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Projeto-de-Streaming",
  },
  {
    id: "3",
    title: "Calculadora de Preços Imobiliários",
    description: "Sistema de predição de preços que utiliza regressão linear e machine learning em Python. Analisa mais de 15 variáveis de mercado para entregar estimativas com margem de erro inferior a 10%.",
    tags: ["Python", "Machine Learning", "Data Science", "Real Estate"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Calculadora-de-precos-de-imoveis",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Automação com IA",
    category: "Core Stack",
    proficiency: 95,
    details: ["n8n", "Make (Integromat)", "LangChain", "Agentes Autônomos"],
  },
  {
    name: "Desenvolvimento Python",
    category: "Backend",
    proficiency: 90,
    details: ["FastAPI", "Pandas", "Automação de Scripts", "Bots"],
  },
  {
    name: "Engenharia de Dados",
    category: "Database",
    proficiency: 85,
    details: ["PostgreSQL", "Supabase", "SQL Avançado", "Excel Pro"],
  },
  {
    name: "Desenvolvimento Java",
    category: "Backend",
    proficiency: 75,
    details: ["Oracle Java Foundations", "POO", "Estrutura de Dados"],
  },
  {
    name: "Precisão Industrial",
    category: "Soft Skills",
    proficiency: 100,
    details: ["Resiliência", "Foco em Detalhes", "Metodologia SENAI"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Unisanta",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2025 - 2026",
    description: "Foco em engenharia de software moderna, arquitetura distribuída e desenvolvimento ágil.",
  },
  {
    id: "2",
    institution: "SENAI Cubatão",
    degree: "Aplicações com IA Generativa (Google Antigravity)",
    period: "2026",
    description: "Especialização técnica em orquestração de LLMs e fluxos complexos de agentes inteligentes.",
  },
  {
    id: "3",
    institution: "SENAI Cubatão",
    degree: "Programação Oracle Java Foundations",
    period: "2025",
    description: "Certificação focada em lógica de programação complexa e fundamentos robustos de POO.",
  },
  {
    id: "5",
    institution: "Programa Autonomia e Renda Petrobras",
    degree: "Especialização em Caldeiraria",
    period: "2025",
    description: "Desenvolvimento de raciocínio lógico espacial e precisão técnica em conformação de metais.",
  },
  {
    id: "4",
    institution: "SENAI Cubatão",
    degree: "Técnico em Manutenção Industrial",
    period: "2023 - 2024",
    description: "Base da minha disciplina técnica e entendimento de processos operacionais complexos.",
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
    proficiency: 40,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Setor Industrial",
    position: "Soldador",
    period: "2026 - Presente",
    description: "Aplicação de rigor técnico e normas de segurança em ambientes de alta pressão.",
    achievements: ["Zero falhas em testes de integridade", "Otimização de processos de soldagem reduzindo retrabalho em 30%"],
  },
  {
    id: "2",
    company: "Freelance Tech",
    position: "Desenvolvedor de Automações",
    period: "2025 - 2026",
    description: "Consultoria e implementação de soluções que unem IA e produtividade.",
    achievements: [
      "Desenvolvimento de bots de atendimento via WhatsApp",
      "Integração de CRMs com n8n reduzindo trabalho manual em 60%",
      "Criação de dashboards inteligentes no Supabase"
    ],
  },
  {
    id: "3",
    company: "Franciscon Infraestrutura",
    position: "Jovem Aprendiz Técnico",
    period: "2023 - 2024",
    description: "Início da trajetória profissional com foco em suporte operacional e logística.",
    achievements: ["Otimização da organização de ativos industriais"],
  }
];

export const FEEDBACKS: Feedback[] = [
  {
    id: "1",
    description: "Profissional atencioso e dedicado.",
    imageUrls: ["/social-proof/willian.png"],
  },
  {
    id: "2",
    description: "Matheus é um programador e resolvedor de problemas nato. Em constante aprendizado, busca aprender e aplicar seus conhecimentos em produtos reais.",
    imageUrls: ["/social-proof/arthur.png"],
  },
  {
    id: "3",
    description: "Manteve a comunicação durante o projeto e entregou conforme solicitado.",
    imageUrls: ["/social-proof/icaro.png"],
  },
];