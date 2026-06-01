import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  
  {
    id: "1",
    title: "IA Consultora de Marketing Digital",
    description: "Agente inteligente construido em Java que utiliza a API do Manus AI para realizar consultoria de marketing digital para crescimento empresarial.",
    tags: ["Java", "IA", "API Manus AI"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M30 70 Q50 20 70 70" stroke="#8b5cf6" stroke-width="4" fill="none"/><circle cx="50" cy="40" r="10" fill="#8b5cf6" opacity="0.5"/><path d="M20 80 L80 80" stroke="#334155" stroke-width="2"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "2",
    title: "Plataforma de Streaming",
    description: "Plataforma de streaming construida em Javascript com interface web básica.",
    tags: ["Javascript", "Streaming", "FullStack"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/xml" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M35 30 L75 50 L35 70 Z" fill="#ec4899"/><rect x="20" y="20" width="60" height="60" rx="5" stroke="#334155" stroke-width="2" fill="none"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Projeto-de-Streaming",
  },
  {
    id: "3",
    title: "Calculadora de Preços de Imóveis",
    description: "Calculadora de preços de imóveis construida em Python com algoritmos de machine learning para estimar o preço de um imóvel com base em variáveis como localização, metragem e infraestrutura.",
    tags: ["Python", "Machine Learning", "FullStack"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M20 80 L20 40 L50 20 L80 40 L80 80 Z" fill="none" stroke="#10b981" stroke-width="3"/><rect x="40" y="55" width="20" height="25" fill="#10b981" opacity="0.3"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Calculadora-de-precos-de-imoveis",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Automação com IA",
    category: "AI & Automation",
    proficiency: 90,
    details: ["n8n", "Make", "Gemini CLI", "Antigravity"],
  },
  {
    name: "Python",
    category: "Backend",
    proficiency: 85,
    details: ["Automações", "Básico de Python"],
  },
  {
    name: "SQL & Supabase",
    category: "Database",
    proficiency: 90,
    details: ["PostgreSQL", "Supabase", "Excel"],
  },
  {
    name: "Java Foundations",
    category: "Backend",
    proficiency: 75,
    details: ["Oracle Java Foundations", "SENAI"],
  },
  {
    name: "Manutenção Industrial",
    category: "Hard Skills",
    proficiency: 95,
    details: ["Mecânica Industrial", "Soldagem"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Unisanta",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2025 - 2026",
    description: "Foco em desenvolvimento de software e arquitetura de sistemas.",
  },
  {
    id: "2",
    institution: "SENAI Cubatão",
    degree: "Dev. de Aplicações com IA Generativa (Google Antigravity)",
    period: "2026",
    description: "Especialização em orquestração de agentes e automação com LLMs.",
  },
  {
    id: "3",
    institution: "SENAI Cubatão",
    degree: "Programação Oracle Java Foundations",
    period: "2025",
    description: "Fundamentos de programação orientada a objetos.",
  },
  {
    id: "5",
    institution: "Programa Autonomia e Renda Petrobras",
    degree: "Caldeiraria",
    period: "2025 - 2025",
    description: "Formação técnica em traçagem, corte e conformação de metais pelo programa da Petrobras.",
  },
  {
    id: "4",
    institution: "SENAI Cubatão",
    degree: "Técnico em Manutenção de Máquinas Industriais",
    period: "2023 - 2024",
    description: "Formação técnica em processos industriais e mecânica.",
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
    proficiency: 70,
  },
  {
    name: "Inglês",
    category: "Básico",
    proficiency: 30,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Soldador",
    position: "Soldador",
    period: "2026 - Emprego atual",
    description: "Atuação profissional no setor industrial.",
    achievements: ["Precisão técnica e conformidade com normas de segurança."],
  },
  {
    id: "2",
    company: "Freelance",
    position: "Desenvolvedor Freelancer",
    period: "2025 - 2026",
    description: "Desenvolvimento de soluções de automação e integração de sistemas.",
    achievements: [
      "Implementação de fluxos no n8n e Make",
      "Criação de bots em Python para automação de tarefas",
      "Consultoria em automação de processos com IA"
    ],
  },
  {
    id: "3",
    company: "Franciscon Infraestrutura",
    position: "Jovem Aprendiz",
    period: "2023 - 2024",
    description: "Primeira experiência profissional em infraestrutura.",
    achievements: ["Apoio operacional e administrativo."],
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