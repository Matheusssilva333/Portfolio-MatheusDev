import { Project, Skill, Experience, Education, Feedback, Idioma } from "./types";

export const PROJECTS: Project[] = [
  { id: "1", title: "SENTINELA SAO | Padronizador de Arquivos", description: "Solução digital criada para organizar e padronizar arquivos e planilhas operacionais, demonstrando aplicação prática de tecnologia para reduzir trabalho manual e melhorar a leitura de informações.", tags: ["Python", "FastAPI", "Automação", "Dados"], imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", link: "https://padronizador-nine.vercel.app/" },
];

export const SKILLS: Skill[] = [
  { name: "Planejamento de Obras de Manutenção", category: "Planning", proficiency: 82, details: ["Planejamento de paradas", "Permissão de Trabalho (PT)", "Acompanhamento de atividades", "Programação para equipes de campo"] },
  { name: "Controle de Documentação e Atividades", category: "Planning", proficiency: 84, details: ["Planilhas de controle", "Organização de PTs", "Acompanhamento de avanço", "Excel"] },
  { name: "Caldeiraria e Manutenção Industrial", category: "Industrial", proficiency: 90, details: ["Experiência prática em refinaria", "UGAV e UT2", "Traçagem e fabricação", "Trabalho em altura"] },
  { name: "Processos e Segurança Industrial", category: "Industrial", proficiency: 84, details: ["Rotinas de SMS", "Permissões de Trabalho", "Procedimentos de segurança", "Vivência em parada"] },
  { name: "Tubulações e Sistemas Industriais", category: "Industrial", proficiency: 65, details: ["Base em caldeiraria", "Leitura técnica", "Componentes de sistemas", "Desenvolvimento técnico"] },
  { name: "Tecnologia Aplicada", category: "Tech", proficiency: 74, details: ["Python", "Excel / automação", "Java", "IA generativa"] },
];

export const EDUCATION: Education[] = [
  { id: "1", institution: "Universidade Santa Cecília — Unisanta", degree: "Análise e Desenvolvimento de Sistemas (ADS)", period: "Último semestre", description: "Graduação em tecnologia, atualmente no último semestre, com formação em programação, sistemas e fundamentos de desenvolvimento de software." },
  { id: "2", institution: "SENAI Cubatão", degree: "Técnico em Manutenção de Máquinas Industriais", period: "Concluído", description: "Formação que marcou o início da trajetória industrial, incluindo contato com planejamento de manutenção, processos de manutenção, metrologia e desenho técnico." },
  { id: "3", institution: "Programa Autonomia e Renda Petrobras / SENAI", degree: "Caldeiraria Industrial", period: "Concluído", description: "Formação complementar para fortalecimento técnico em caldeiraria e atuação em ambiente industrial." },
  { id: "4", institution: "SENAI", degree: "Desenvolvimento de aplicações com IA generativa utilizando Google Antigravity", period: "Concluído", description: "Formação complementar em tecnologia e desenvolvimento de aplicações com IA generativa." },
  { id: "5", institution: "SENAI", degree: "Oracle Java Foundations", period: "Concluído", description: "Formação complementar em fundamentos de programação Java." },
];

export const IDIOMAS: Idioma[] = [
  { name: "Português", category: "Nativo", proficiency: 100 },
  { name: "Inglês", category: "Em desenvolvimento", proficiency: 55 },
];

export const EXPERIENCE: Experience[] = [
  { id: "1", company: "C3 Engenharia & Soluções · Refinaria Presidente Bernardes (RPBC/Petrobras)", position: "Caldeireiro | Apoio ao planejamento e SMS", period: "jun 2026 – ago 2026 · 3 meses", description: "Atuação nas unidades UGAV e UT2 durante atividades de manutenção e parada, com experiência de campo em caldeiraria e apoio às equipes de planejamento e SMS. Durante o período, houve transferência interna para o setor de planejamento.", achievements: ["UGAV: apoio, coleta e movimentação de ferramentas na ferramentaria durante a parada.", "UT2: traçagem de raquetes e componentes de caldeiraria, com medições, marcações e preparação para fabricação e montagem.", "Trabalho em altura em torres e reatores, conforme procedimentos de segurança.", "Atuação em área com risco de exposição a HF, seguindo procedimentos de segurança."] },
  { id: "2", company: "C3 Engenharia & Soluções · Refinaria Presidente Bernardes (RPBC/Petrobras)", position: "Apoio ao Planejamento de Obras de Manutenção", period: "2026 · transferência interna", description: "Após a experiência de campo como caldeireiro, atuei internamente no setor de planejamento, participando da organização, programação e acompanhamento de atividades de manutenção.", achievements: ["Elaboração e emissão de Permissões de Trabalho (PTs).", "Acompanhamento de atividades de manutenção em campo.", "Entrega da programação de atividades para equipes de campo.", "Elaboração de planilhas de controle de PTs no Excel, incluindo gráfico de evolução da quantidade de permissões elaboradas para facilitar a leitura do avanço da obra."] },
  { id: "3", company: "Franciscon Infraestrutura", position: "Aprendiz Industrial — SENAI", period: "2023 – 2024", description: "Início da trajetória profissional industrial, conciliando formação no SENAI com experiência prática e desenvolvimento de fundamentos de manutenção.", achievements: ["Formação técnica e prática em ambiente industrial.", "Contato com fundamentos de manutenção de máquinas industriais.", "Desenvolvimento de metrologia, desenho técnico e processos de manutenção.", "Primeiro contato com planejamento de manutenção, área que despertou interesse profissional."] },
];

export const FEEDBACKS: Feedback[] = [];
