import { Project, Skill, Experience, Feedback } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Bot de análise de day trade na B3",
    description: "Bot de análise de day trade na B3 que utiliza análise técnica em tempo real, gestão de risco algorítmica e execução de ordens via API com baixa latência.",
    tags: ["Python", "Automação com IA", "Machine Learning", "Mercado Financeiro"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M20 80 L40 50 L60 70 L80 30" stroke="#06b6d4" stroke-width="3" fill="none"/><circle cx="80" cy="30" r="4" fill="#06b6d4"/><path d="M10 90 L90 90 M10 10 L10 90" stroke="#334155" stroke-width="2"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Bot-de-analise-de-day-trade-na-B3",
  },
  {
    id: "2",
    title: "IA Consultora de Marketing Digital",
    description: "Agente inteligente construido em Java que utiliza a API do Manus AI para realizar consultoria de marketing digital para crescimento empresarial.",
    tags: ["Java", "IA", "API Manus AI"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M30 70 Q50 20 70 70" stroke="#8b5cf6" stroke-width="4" fill="none"/><circle cx="50" cy="40" r="10" fill="#8b5cf6" opacity="0.5"/><path d="M20 80 L80 80" stroke="#334155" stroke-width="2"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "4",
    title: "Plataforma de Streaming",
    description: "Plataforma de streaming construida em Javascript com interface web básica.",
    tags: ["Javascript", "Streaming", "FullStack"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/xml" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M35 30 L75 50 L35 70 Z" fill="#ec4899"/><rect x="20" y="20" width="60" height="60" rx="5" stroke="#334155" stroke-width="2" fill="none"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Projeto-de-Streaming",
  },
  {
    id: "5",
    title: "Calculadora de Preços de Imóveis",
    description: "Calculadora de preços de imóveis construida em Python com algoritmos de machine learning para estimar o preço de um imóvel com base em variáveis como localização, metragem e infraestrutura.",
    tags: ["Python", "Machine Learning", "FullStack"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M20 80 L20 40 L50 20 L80 40 L80 80 Z" fill="none" stroke="#10b981" stroke-width="3"/><rect x="40" y="55" width="20" height="25" fill="#10b981" opacity="0.3"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Calculadora-de-precos-de-imoveis",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Automações Inteligentes",
    category: "Automation",
    proficiency: 90,
    details: ["Fluxos Complexos em N8N", "Agentes Autônomos de IA"],
  },
  {
    name: "Python ",
    category: "Backend e automações",
    proficiency: 95,
    details: ["Flask", "Programação orientada a objetos"],
  },

  {
    name: "Java ",
    category: "Backend",
    proficiency: 80,
    details: ["Programação orientada a objetos"],
  },

  {
    name: "SQL e Supabase",
    category: "Banco de Dados",
    proficiency: 90,
    details: ["SQL", "Supabase"],
  },

  {
    name: "HTML, CSS e Javascript",
    category: "Frontend",
    proficiency: 80,
    details: ["HTML", "CSS", "Javascript"],
  },
 
];


export const IDIOMAS: Idioma[] = [
  {
    name: "Português",
    category: "Nativo",
    proficiency: 100,
  },
  {
    name: "Espanhol ",
    category: "Intermediário",
    proficiency: 90,
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
    company: "Freelance",
    position: "Desenvolvedor de Automação com IA",
    period: "2025 - Presente",
    description:
      "Atuando no desenvolvimento de sistemas personalizados para automação de processos e integração de IA.",
    achievements: [
      "Implementação de bots autônomos para automação de processos",
      "Criação de agentes de IA para consultoria de marketing digital",
      "Otimização de processos reduzindo tempo operacional",
    ],
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
