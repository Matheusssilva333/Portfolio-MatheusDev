import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  { id: "1", title: "SENTINELA SAO | Padronizador de Arquivos", description: "Produto digital concebido para resolver um gargalo de documentação técnica industrial. O sistema converte e reestrutura arquivos e planilhas operacionais para um padrão definido, reduzindo processamento manual e retrabalho.", tags: ["Análise de Sistemas", "FastAPI", "Python", "Vercel"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", link: "https://padronizador-nine.vercel.app/" },
];

export const SKILLS: Skill[] = [
  { name: "Planejamento de Manutenção Industrial", category: "Planning", proficiency: 82, details: ["Apoio ao planejamento de manutenção", "Permissão de Trabalho (PT)", "Controle de atividades", "Interface com equipes de campo"] },
  { name: "Tubulações & Sistemas Industriais", category: "Industrial", proficiency: 65, details: ["Base em caldeiraria industrial", "Leitura e interpretação técnica", "Componentes e interfaces de tubulação", "Foco atual de desenvolvimento"] },
  { name: "Caldeiraria & Manutenção Industrial", category: "Industrial", proficiency: 90, details: ["Experiência em refinaria", "UGAV / Oficina de Fabricação", "Traçagem e fabricação", "Metrologia e desenho técnico"] },
  { name: "Processos e Segurança Industrial", category: "Industrial", proficiency: 84, details: ["Rotinas de SMS", "Permissões de Trabalho", "Procedimentos operacionais", "Organização de frentes de manutenção"] },
  { name: "Python & Automação de Dados", category: "Tech", proficiency: 78, details: ["Scripts de automação", "Processamento de planilhas", "FastAPI", "Pandas"] },
  { name: "Programação & Sistemas", category: "Tech", proficiency: 74, details: ["ADS — Unisanta", "Java", "JavaScript / HTML / CSS", "Fundamentos de engenharia de software"] },
];

export const EDUCATION: Education[] = [
  { id: "1", institution: "Universidade Santa Cecília — Unisanta", degree: "Análise e Desenvolvimento de Sistemas (ADS)", period: "Em andamento", description: "Graduação em tecnologia, com estudos de programação, sistemas, engenharia de software e análise de requisitos." },
  { id: "2", institution: "SENAI Cubatão", degree: "Técnico em Manutenção de Máquinas Industriais", period: "Concluído", description: "Formação técnica em manutenção industrial, processos mecânicos, metrologia, desenho técnico e manutenção de máquinas." },
  { id: "3", institution: "Programa Autonomia e Renda Petrobras / SENAI", degree: "Caldeiraria Industrial", period: "Concluído", description: "Formação prática em caldeiraria industrial e preparação para atuação em ambientes industriais." },
  { id: "4", institution: "SENAI", degree: "Desenvolvimento de aplicações com IA generativa utilizando Google Antigravity", period: "Concluído", description: "Formação complementar em desenvolvimento de aplicações e uso de IA generativa." },
  { id: "5", institution: "SENAI", degree: "Oracle Java Foundations", period: "Concluído", description: "Fundamentos de programação Java e orientação a objetos." },
];

export const IDIOMAS: Idioma[] = [
  { name: "Português", category: "Nativo", proficiency: 100 },
  { name: "Inglês", category: "Em desenvolvimento", proficiency: 55 },
];

export const EXPERIENCE: Experience[] = [
  { id: "1", company: "C3 Engenharia & Soluções — Refinaria Presidente Bernardes (RPBC/Petrobras)", position: "Assistente de Planejamento — UT2", period: "2026", description: "Atuação no apoio ao planejamento de manutenção e SMS durante a campanha de manutenção da UT2, com interface entre informações de campo, controle de atividades e documentação operacional.", achievements: ["Apoio ao planejamento de manutenção industrial.", "Controle e organização de Permissões de Trabalho (PTs) e atividades.", "Interface com equipes de campo e áreas de SMS.", "Organização de dados operacionais para acompanhamento das frentes de trabalho." ] },
  { id: "2", company: "C3 Engenharia & Soluções — Refinaria Presidente Bernardes (RPBC/Petrobras)", position: "Caldeireiro Industrial — UGAV / Oficina de Fabricação", period: "2026", description: "Atuação de campo em manutenção industrial, caldeiraria e fabricação durante atividades na refinaria, desenvolvendo experiência prática que hoje sustenta o interesse em planejamento e sistemas industriais.", achievements: ["Execução de atividades de caldeiraria e fabricação industrial.", "Leitura e interpretação de desenhos e especificações técnicas.", "Organização de ferramentas e materiais para frentes de manutenção.", "Vivência de rotina operacional em ambiente de refinaria." ] },
  { id: "3", company: "Franciscon Infraestrutura", position: "Aprendiz Industrial SENAI", period: "2023 – 2024", description: "Primeira experiência profissional industrial, combinando formação SENAI com rotina operacional e desenvolvimento de disciplina técnica.", achievements: ["Formação prática e teórica em processos industriais.", "Contato com manutenção preventiva e corretiva.", "Desenvolvimento de metrologia e leitura técnica."] },
];

export const FEEDBACKS: Feedback[] = [
  { id: "1", description: "Profissional focado, atento aos requisitos de segurança e dedicado à otimização das atividades.", imageUrls: ["/social-proof/willian.png"] },
  { id: "2", description: "Combina vivência prática no ambiente industrial com raciocínio lógico e interesse em melhoria de processos.", imageUrls: ["/social-proof/arthur.png"] },
  { id: "3", description: "Manteve excelente comunicação, cumpriu prazos e entregou soluções organizadas para problemas reais.", imageUrls: ["/social-proof/icaro.png"] },
];
