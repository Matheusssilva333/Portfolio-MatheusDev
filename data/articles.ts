import React from "react";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: { heading?: string; paragraphs: string[] }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "do-campo-ao-planejamento",
    title: "Do campo ao planejamento: o que a execução ensina sobre manutenção industrial",
    excerpt: "Como a vivência operacional ajuda a interpretar restrições, recursos, segurança e sequência de execução antes de transformar uma atividade em planejamento.",
    date: "06/09/2026",
    category: "Planejamento Industrial",
    readTime: "6 min",
    content: [
      { paragraphs: ["Planejar manutenção industrial não é apenas montar uma lista de tarefas. O planejamento precisa representar uma execução possível, considerando recursos, acessos, interfaces, segurança, materiais e sequência lógica.", "A experiência de campo ajuda a enxergar essas variáveis com mais concretude. Quem já acompanhou uma atividade de manutenção consegue identificar com maior facilidade onde uma descrição aparentemente simples esconde restrições operacionais."] },
      { heading: "A interface entre planejamento e execução", paragraphs: ["Uma boa programação transforma informação técnica em uma sequência executável. Isso exige comunicação com as equipes, conferência de premissas e atualização das informações conforme a realidade da frente de serviço.", "Essa interface também mostra por que planejamento é uma disciplina própria: a experiência prática é uma base importante, mas precisa ser combinada com métodos de planejamento, controle, documentação e gestão de interfaces."] },
      { heading: "Próximo passo", paragraphs: ["Meu objetivo é aprofundar conhecimentos de planejamento de manutenção, tubulações e sistemas industriais, construindo uma carreira técnica baseada tanto na experiência de campo quanto no domínio dos processos de planejamento."] },
    ],
  },
  {
    slug: "tecnologia-no-planejamento-industrial",
    title: "Tecnologia no planejamento industrial: onde automação realmente agrega valor",
    excerpt: "Uma visão prática sobre automação de dados, padronização de informações e uso de IA como ferramentas complementares ao conhecimento industrial.",
    date: "06/09/2026",
    category: "Tecnologia Aplicada",
    readTime: "5 min",
    content: [
      { paragraphs: ["Tecnologia pode reduzir trabalho repetitivo no planejamento, mas seu valor aparece quando resolve um problema operacional bem definido. Automatizar um processo ruim apenas torna o processo ruim mais rápido.", "Planilhas, scripts, APIs e IA podem apoiar tarefas como organização de dados, validações, consolidação de informações e geração de relatórios. A decisão sobre o que automatizar deve partir do processo, e não da tecnologia disponível."] },
      { heading: "Tecnologia como competência complementar", paragraphs: ["Para quem atua no ambiente industrial, programação e análise de dados podem funcionar como multiplicadores de produtividade. O conhecimento do processo continua sendo necessário para definir regras, validar resultados e entender exceções.", "Essa é a abordagem que pretendo desenvolver: manter planejamento industrial como eixo profissional e usar tecnologia para melhorar informação, controle e tomada de decisão."] },
    ],
  },
];
