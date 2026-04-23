import { Project, Skill, Experience, Feedback } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Bot Trader B3 - Scalper Autônomo",
    description: "Sistema de trading automatizado de alta performance para a B3 (Brasil, Bolsa, Balcão). Implementado em Python, utiliza análise técnica em tempo real, gestão de risco algorítmica e execução de ordens via API com baixa latência.",
    tags: ["Python", "Fintech", "Algorithmic Trading", "Automation"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M20 80 L40 50 L60 70 L80 30" stroke="#06b6d4" stroke-width="3" fill="none"/><circle cx="80" cy="30" r="4" fill="#06b6d4"/><path d="M10 90 L90 90 M10 10 L10 90" stroke="#334155" stroke-width="2"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Bot-Trader.git",
  },
  {
    id: "2",
    title: "Calculadora Industrial NR-13",
    description: "Ferramenta técnica para engenharia industrial focada em conformidade com a norma NR-13. Realiza cálculos de pressão, espessura de parede e inspeção de vasos de pressão, garantindo segurança operacional e integridade estrutural.",
    tags: ["Engineering", "Safety", "Industrial", "Python"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><circle cx="50" cy="50" r="35" stroke="#94a3b8" stroke-width="4" fill="none"/><path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50" stroke="#94a3b8" stroke-width="4"/><path d="M50 50 L70 30" stroke="#ef4444" stroke-width="3" fill="none"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Calculadora-Industrial",
  },
  {
    id: "3",
    title: "IA Consultora de Marketing Digital",
    description: "Agente inteligente que utiliza LLMs para análise de mercado e criação de estratégias de growth. Integrada via API, a IA processa dados de audiência e sugere campanhas otimizadas para conversão e escalabilidade.",
    tags: ["AI", "Marketing", "LLM", "Growth"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M30 70 Q50 20 70 70" stroke="#8b5cf6" stroke-width="4" fill="none"/><circle cx="50" cy="40" r="10" fill="#8b5cf6" opacity="0.5"/><path d="M20 80 L80 80" stroke="#334155" stroke-width="2"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "4",
    title: "Nexus Streaming Platform",
    description: "Arquitetura de plataforma de streaming escalável com foco em entrega de conteúdo multimídia e gerenciamento de sessões. Implementa protocolos de segurança para proteção de dados e otimização de largura de banda.",
    tags: ["Web Architecture", "Streaming", "Security", "FullStack"],
    imageUrl: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/xml" width="200" height="200" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0f172a"/><path d="M35 30 L75 50 L35 70 Z" fill="#ec4899"/><rect x="20" y="20" width="60" height="60" rx="5" stroke="#334155" stroke-width="2" fill="none"/></svg>`)}`,
    link: "https://github.com/Matheusssilva333/Projeto-de-Streaming",
  },
  {
    id: "5",
    title: "Preditor de Preços Imobiliários",
    description: "Modelo de regressão avançado para avaliação de imóveis. Utiliza Scikit-learn para analisar variáveis como localização, metragem e infraestrutura, fornecendo estimativas precisas para o mercado imobiliário.",
    tags: ["Data Science", "Machine Learning", "Real Estate", "Python"],
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
    name: "Cibersegurança",
    category: "Security",
    proficiency: 75,
    details: ["Pentesting em Web Apps", "Desenvolvimento Seguro (OWASP)"],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Freelance - Tech Solutions",
    position: "Desenvolvedor de Software & IA",
    period: "2024 - Presente",
    description:
      "Atuando no desenvolvimento de sistemas personalizados para automação de processos e integração de IA.",
    achievements: [
      "Implementação de bots de trading autônomos",
      "Criação de agentes de IA para consultoria",
      "Otimização de processos reduzindo tempo operacional em 60%",
    ],
  },
  {
    id: "2",
    company: "Acadêmico - ADS",
    position: "Estudante de Análise e Des. de Sistemas",
    period: "3º Semestre",
    description: "Focado em engenharia de software e segurança da informação.",
    achievements: [
      "Desenvolvimento de projetos fullstack",
      "Estudos em estruturas de dados",
      "Busca ativa por estágio",
    ],
  },
];

export const FEEDBACKS: Feedback[] = [
  {
    id: "1",
    description: "Entrega excepcional em automações complexas.",
    imageUrls: ["/social-proof/willian.png"],
  },
  {
    id: "2",
    description: "Matheus resolve problemas complexos de forma nativa.",
    imageUrls: ["/social-proof/arthur.png"],
  },
];
