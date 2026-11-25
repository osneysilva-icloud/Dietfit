/**
 * DIETFIT - Centralized Configuration Object
 * Edite aqui os dados de checkout, contacto do WhatsApp, preços e detalhes do produto.
 * Todas as alterações feitas neste arquivo refletem-se automaticamente em toda a página.
 */

export const siteConfig = {
  brand: {
    name: "DIETFIT",
    eyebrow: "DIETFIT | PROGRAMA DE TRANSFORMAÇÃO ALIMENTAR",
    tagline: "Emagrecer não precisa de ser um castigo. Aprende a comer melhor, cuida do teu corpo e volta a sentir-te bem contigo mesma.",
    shortDescription: "Programa prático, acessível, natural e sustentável de alimentação saudável para mulheres em Moçambique.",
  },

  // LINK CENTRALIZADO DE CHECKOUT (utilizado em todos os botões de adesão)
  checkoutUrl: "https://pay.tutora.co.mz/fcf06edfefd34360882aa1ea6b8fd6f3",

  // CONFIGURAÇÃO DO WHATSAPP
  // Substitua pelo número real de Moçambique com código de país (ex: "+258841234567" ou "258841234567")
  whatsapp: {
    number: "[INSERIR NÚMERO COM CÓDIGO DO PAÍS]",
    defaultMessage: "Olá! Tenho interesse no programa Dietfit e gostaria de receber mais informações.",
    getLink: function () {
      const cleanNumber = (this.number || "").replace(/[^0-9]/g, "");
      const encodedMsg = encodeURIComponent(this.defaultMessage);
      if (!cleanNumber || this.number.includes("[INSERIR")) {
        // Fallback seguro caso o utilizador ainda não tenha configurado o número numérico
        return `https://wa.me/?text=${encodedMsg}`;
      }
      return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
    }
  },

  // CONFIGURAÇÃO OFICIAL DE PREÇO (397 MT)
  pricing: {
    price: "397 MT",
    pricePlaceholder: "397 MT",
    originalPrice: "1.950 MT",
    discount: "80%",
    currency: "MT",
    paymentMethods: "Pagamento 100% seguro via M-Pesa, E-Mola e Cartão",
    deliveryNote: "Acesso imediato e digital após confirmação de pagamento via M-Pesa, E-Mola ou Cartão. Recebes os materiais diretamente no teu email e és adicionada ao grupo oficial de WhatsApp.",
    billingType: "Acesso completo às 7 semanas de programa com todos os bónus incluídos",
  },

  // PILHA DE PRODUTOS E ENTREGÁVEIS (Valor percebido premium)
  products: {
    mainItems: [
      {
        id: "main-01",
        badge: "PRODUTO PRINCIPAL 01",
        title: "Plano Alimentar — 6 Semanas",
        subtitle: "Cardápios estruturados com ingredientes moçambicanos",
        description: "Um guia organizado com sugestões de refeições para te ajudar a planear a tua alimentação, fazer escolhas melhores e manter uma rotina alimentar equilibrada com alimentos simples e acessíveis.",
        theme: "forest",
        pages: "64 Páginas",
        coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
        highlights: [
          "Estrutura organizada refeição a refeição",
          "Adaptação à rotina diária moçambicana",
          "Alimentos simples que encontras no mercado local"
        ]
      },
      {
        id: "main-02",
        badge: "PRODUTO PRINCIPAL 02",
        title: "Guia de Jejum Intermitente",
        subtitle: "Aprende o método de forma segura, natural e gradual",
        description: "Um guia introdutório com informações e orientações para compreenderes o jejum intermitente e avaliares com clareza se esta abordagem é adequada para ti e para o teu estilo de vida.",
        theme: "midnight",
        pages: "38 Páginas",
        coverImage: "https://images.unsplash.com/photo-1770393391946-7d9b658deec3?auto=format&fit=crop&w=600&q=80",
        highlights: [
          "Explicação clara e sem complicações médicas",
          "Como iniciar sem sofrimento",
          "Dicas para respeitar os sinais do teu corpo"
        ]
      }
    ],
    bonuses: [
      {
        id: "bonus-01",
        badge: "BÓNUS EXCLUSIVO 01",
        title: "Águas Naturais & Sucos Detox",
        subtitle: "Bebidas revigorantes e hidratação inteligente",
        description: "Aprende a preparar bebidas naturais para complementar uma rotina de hidratação saudável, saborosa e revigorante para o teu dia a dia com folhas, limão e frutas locais.",
        theme: "emerald",
        pages: "32 Páginas",
        estimatedValue: "450 MT",
        format: "Ebook 3D Digital • PDF HD",
        coverImage: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
        icon: "Droplets"
      },
      {
        id: "bonus-02",
        badge: "BÓNUS EXCLUSIVO 02",
        title: "Lanches para Quem Treina",
        subtitle: "Energia rápida, prática e económica",
        description: "Ideias de lanches nutritivos e práticos para complementar a alimentação de quem pratica ou quer começar a praticar atividade física sem gastar fortunas.",
        theme: "amber",
        pages: "28 Páginas",
        estimatedValue: "450 MT",
        format: "Ebook 3D Digital • PDF HD",
        coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        icon: "Dumbbell"
      },
      {
        id: "bonus-03",
        badge: "BÓNUS EXCLUSIVO 03",
        title: "Receitas Extras Dietfit",
        subtitle: "Pratos moçambicanos adaptados e saborosos",
        description: "Mais ideias de refeições simples, saborosas e nutritivas para diversificares o teu menu sem complicação na cozinha: peixe, matapa leve e feijoadas nutritivas.",
        theme: "terracotta",
        pages: "45 Páginas",
        estimatedValue: "550 MT",
        format: "Ebook 3D Master • PDF HD",
        coverImage: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        icon: "UtensilsCrossed"
      },
      {
        id: "bonus-04",
        badge: "BÓNUS EXCLUSIVO 04",
        title: "Canal VIP no WhatsApp & Lives",
        subtitle: "Apoio diário, dúvidas em direto e comunidade acolhedora",
        description: "Um espaço acolhedor para partilhares dúvidas, receberes orientações diárias e participares em momentos de interação e encontros em grupo, incluindo lives quando disponíveis.",
        theme: "forest",
        estimatedValue: "750 MT",
        isVipPass: true,
        format: "Acesso Contínuo • WhatsApp Oficial",
        icon: "MessageCircle"
      }
    ]
  },

  // COMUNIDADE MOÇAMBICANA (Avatares e representatividade)
  communityMembers: [
    {
      name: "Tânia M.",
      location: "Maputo",
      avatar: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?auto=format&fit=crop&w=200&q=80",
      status: "-11.5 kg eliminados"
    },
    {
      name: "Amina S.",
      location: "Matola",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
      status: "-16.1 kg eliminados"
    },
    {
      name: "Graça B.",
      location: "Beira",
      avatar: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?auto=format&fit=crop&w=200&q=80",
      status: "Fez as pazes com o espelho"
    },
    {
      name: "Fátima N.",
      location: "Nampula",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
      status: "Adeus dores na coluna"
    }
  ],

  // PROVA SOCIAL REAL - TRANSFORMAÇÕES ANTES E DEPOIS
  transformations: [
    {
      id: 1,
      image: "/transformations/transformation-3.jpg",
      view: "Vista Frontal",
      category: "frontal",
      title: "Redução Abdominal & Afunilamento de Cintura",
      badge: "-16.1 kg Eliminados",
      quote: "A minha barriga já se foi! Voltei a usar as minhas roupas com orgulho e confiança.",
      story: "Mudança marcante na região do ventre e cintura, eliminando o inchaço com os planos práticos do Dietfit.",
      weeks: "7 Semanas",
      verified: true
    },
    {
      id: 2,
      image: "/transformations/transformation-1.jpg",
      view: "Vista Lateral (Perfil)",
      category: "perfil",
      title: "Desinchaço Total e Perda de Flancos",
      badge: "Menos Medidas na Cintura",
      quote: "Usei a minha calça de cintura alta sem sufocar depois de tantos meses!",
      story: "Redução drástica da projeção abdominal e melhoria visível na postura e bem-estar corporal.",
      weeks: "7 Semanas",
      verified: true
    },
    {
      id: 3,
      image: "/transformations/transformation-2.jpg",
      view: "Vista Traseira (Costas)",
      category: "costas",
      title: "Eliminação de Dobras & Firmeza Muscular",
      badge: "Costas Lisas & Tonificadas",
      quote: "Com determinação e a orientação da coach, o meu corpo transformou-se sem dietas malucas.",
      story: "Afunilamento de cintura e redução acentuada de gordura localizada nas costas e flancos.",
      weeks: "7 Semanas",
      verified: true
    },
    {
      id: 4,
      image: "/transformations/transformation-5.jpg",
      view: "Vista Traseira (Evolução)",
      category: "costas",
      title: "Redução de Volume e Modelagem Corporal",
      badge: "-11.5 kg Eliminados",
      quote: "Menos dores na coluna e muito mais energia para trabalhar e cuidar de tudo.",
      story: "Harmonização de todo o tronco e pernas com base na reeducação alimentar saudável.",
      weeks: "Programa Dietfit",
      verified: true
    },
    {
      id: 5,
      image: "/transformations/transformation-4.jpg",
      view: "Vista Lateral (Evolução)",
      category: "perfil",
      title: "Fez as Pazes com o Espelho",
      badge: "Autoestima Renovada",
      quote: "Me sinto vencedora! O espelho voltou a transmitir-me confiança e amor-próprio.",
      story: "Evolução lateral consistente, perda de retenção de líquidos e alívio do cansaço.",
      weeks: "Programa Dietfit",
      verified: true
    }
  ],

  // CRONOGRAMA DAS 7 SEMANAS (Jornada Educacional)
  timeline: [
    {
      week: "Semana 1",
      number: "01",
      title: "Começa com organização",
      desc: "Conhece os planos e começa a organizar as tuas refeições sem pressões desnecessárias."
    },
    {
      week: "Semana 2",
      number: "02",
      title: "Descobre novas combinações",
      desc: "Aprende a combinar alimentos simples de forma equilibrada, nutritiva e deliciosa."
    },
    {
      week: "Semana 3",
      number: "03",
      title: "Constrói consistência",
      desc: "Trabalha na criação de hábitos que se encaixam naturalmente na tua rotina e na tua casa."
    },
    {
      week: "Semana 4",
      number: "04",
      title: "Mais consciência alimentar",
      desc: "Aprende a fazer escolhas alimentares mais conscientes ao ir às compras ou comer fora."
    },
    {
      week: "Semana 5",
      number: "05",
      title: "Continua a evoluir",
      desc: "Mantém a organização e experimenta novas receitas para não caíres na monotonia."
    },
    {
      week: "Semana 6",
      number: "06",
      title: "Consolida os teus hábitos",
      desc: "Continua a desenvolver uma rotina alimentar sustentável que perdura no tempo."
    },
    {
      week: "Semana 7",
      number: "07",
      title: "Olha para o teu progresso",
      desc: "Avalia os teus hábitos, a tua evolução corporal e planeia os teus próximos passos com confiança."
    }
  ],

  // PERGUNTAS FREQUENTES (FAQ)
  faq: [
    {
      q: "1. Preciso de frequentar um ginásio?",
      a: "Não obrigatoriamente. O Dietfit concentra-se na alimentação. A atividade física pode complementar uma rotina saudável, de acordo com as tuas condições e preferências."
    },
    {
      q: "2. Vou passar fome?",
      a: "Não. O objetivo do programa é ensinar-te a organizar refeições equilibradas, nutritivas e saciantes, sem recorrer a restrições extremas nem a castigos."
    },
    {
      q: "3. Preciso de comprar alimentos caros?",
      a: "De todo. O programa valoriza ingredientes simples, naturais e acessíveis, muitos dos quais podes encontrar nos mercados locais e que provavelmente já tens na tua cozinha."
    },
    {
      q: "4. Posso participar mesmo tendo uma rotina ocupada?",
      a: "Sim. Os planos foram pensados exatamente para quem trabalha, cuida da família e tem uma rotina intensa. Ensinam a planear e organizar as refeições para poupares tempo."
    },
    {
      q: "5. Em quanto tempo posso notar diferenças?",
      a: "Cada pessoa tem uma experiência diferente. Algumas mudanças nos hábitos, na digestão e na disposição podem ser percebidas com o tempo, mas os resultados variam consoante cada organismo."
    },
    {
      q: "6. Posso perder 6 a 8 kg?",
      a: "Essa é uma possibilidade mencionada para algumas participantes ao longo de aproximadamente 7 semanas, mas não é uma promessa nem um resultado garantido para toda a gente. A evolução depende de vários fatores individuais, incluindo consistência e estilo de vida."
    },
    {
      q: "7. Como funciona o acompanhamento?",
      a: "Terás acesso ao canal de WhatsApp indicado pelo programa, onde poderás colocar dúvidas, receber motivação, interagir com outras mulheres e participar nas atividades e lives disponibilizadas."
    },
    {
      q: "8. O programa é adequado para todas as mulheres?",
      a: "Não necessariamente. Mulheres grávidas, a amamentar, com condições médicas pré-existentes, histórico de transtornos alimentares ou necessidades nutricionais específicas devem procurar orientação de um profissional de saúde antes de iniciar qualquer plano alimentar ou jejum."
    },
    {
      q: "9. Tomo medicação prescrita pelo médico ou tenho alergias alimentares (como amendoim ou mariscos). Posso fazer o programa?",
      a: "Sim, mas com total responsabilidade: o menu do Dietfit tem carácter educativo e não substitui consultas nem orientações médicas. Caso esteja a seguir um tratamento recomendado pelo seu médico ou a tomar medicação prescrita, deve continuar rigorosamente o seu tratamento e nunca suspender a medicação sem ordem médica. Em relação a alergias, deve ter atenção e evitar todo o alimento ao qual saiba que é alérgica — ter atenção a mariscos no caso de preparações com algas marinhas, assim como amendoim se tiver alergia a amendoim. Os nossos cardápios são flexíveis e permitem substituições simples por outros alimentos locais seguros para si."
    }
  ],

  // DEPOIMENTOS REAIS (Screenshots autênticos do WhatsApp fornecidos)
  testimonials: [
    {
      id: 1,
      image: "/testimonials/depoimento-1.jpg",
      quote: "Sim, até fui medir hoje, pesei 73.5 ao invés de 85.10 que pesava quando comecei. Assim só me faltam 8.5 kg por tirar. Já tirei 11.5 em 3 meses. Obgda coach por salvar a minha vida 🙏🙏🙏",
      badge: "Menos 11.5 kg em 3 meses",
      authorLabel: "Relato de uma aluna Dietfit",
      highlight: "-11.5 kg"
    },
    {
      id: 5,
      image: "/testimonials/depoimento-5.jpg",
      quote: "Isso mesmo coach, foram 16.1kgs k sairam. Comecei a luta com 85.10kgs e hoje estou com 69.0kgs, tudo isso foi graças a sua orientação. Serei-lhe eternamente grata! 🙏 A minha barriga já-se foi!!! 😂😂😂",
      badge: "Menos 16.1 kg eliminados",
      authorLabel: "Experiência de uma participante",
      highlight: "-16.1 kg"
    },
    {
      id: 4,
      image: "/testimonials/depoimento-4.jpg",
      quote: "Bom dia. Hoje eu fiz as pazes com o meu espelho. Ele transmitiu-me confiança e mais motivação, 1º passo dado. Me sinto vencedora pk depois de meses usei a minha calça cintura alta sem me sufocar 😅, com determinação ainda irei usar aquele vestido sem precisar de uma cinta!",
      badge: "Recuperação de autoestima",
      authorLabel: "Relato de uma participante",
      highlight: "Fez as pazes com o espelho"
    },
    {
      id: 2,
      image: "/testimonials/depoimento-2.jpg",
      quote: "Eu tinha muitas dores na coluna, desde que comecei a reeducação alimentar e exercício físicos, as dores desapareceram por completo.",
      badge: "Alívio de dores na coluna",
      authorLabel: "Experiência de uma cliente",
      highlight: "Dores desapareceram"
    },
    {
      id: 6,
      image: "/testimonials/depoimento-6.jpg",
      quote: "Aconselho meninas top 👏👏 Experiência própria. Estou nesse grupo meninas acreditem a nossa coach vai nus colocar em forma. Emagrecer com saúde. Emagrecer a comer só com cardápios saudáveis. Não vão se arrepender... P quem me conhece já sabe como eu era!",
      badge: "Partilha no grupo DietFit",
      authorLabel: "Membro da comunidade DietFit Group",
      highlight: "Emagrecer a comer com saúde"
    },
    {
      id: 7,
      image: "/testimonials/depoimento-7.jpg",
      quote: "Do meu lado estou achando muito positivo, principalmente com o incentivo e a força que a coach tem nos dado, isso motiva-nos muito a alcançar os nossos objectivos. Em relação às receitas está tudo controlado. Muito obrigada.",
      badge: "Apoio e receitas práticas",
      authorLabel: "Relato de aluna",
      highlight: "Incentivo e receitas no ponto"
    },
    {
      id: 3,
      image: "/testimonials/depoimento-3.jpg",
      quote: "Wow, eu te admiro coach, você é uma pessoa maravilhosa, sempre disposta a ajudar os outros a ultrapassar seus problemas e a alcançar seus objectivos. Obgda por fazer parte da minha transformação e por me manter no foco 🙏 Que Deus lhe abençoe rica e poderosamente 🫂",
      badge: "Acompanhamento que faz a diferença",
      authorLabel: "Depoimento de aluna sobre a Coach",
      highlight: "Acompanhamento próximo"
    }
  ]
};
