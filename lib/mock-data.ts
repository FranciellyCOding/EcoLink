// Mock data for EcoLink platform

export const mockOpportunities = [
  {
    id: "1",
    title: "Plantio de Árvores no Parque Municipal",
    organization: "ONG Verde Esperança",
    organizationLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
    location: "São Paulo, SP",
    date: "15 Jun 2025",
    time: "08:00 - 12:00",
    points: 150,
    participants: 23,
    maxParticipants: 50,
    tags: ["Meio Ambiente", "Presencial", "Família"],
    description: "Junte-se a nós para plantar 500 árvores nativas no Parque Municipal. Uma oportunidade única de contribuir para a restauração da mata nativa e aprender sobre a biodiversidade local.",
    requirements: ["Roupas confortáveis", "Protetor solar", "Garrafa de água"],
    impact: "500 árvores plantadas",
    category: "meio-ambiente"
  },
  {
    id: "2",
    title: "Aulas de Reforço Escolar",
    organization: "Instituto Educar",
    organizationLogo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
    location: "Rio de Janeiro, RJ",
    date: "20 Jun 2025",
    time: "14:00 - 17:00",
    points: 200,
    participants: 8,
    maxParticipants: 15,
    tags: ["Educação", "Presencial", "Jovens"],
    description: "Ajude crianças e adolescentes com dificuldades em matemática e português. Suas horas de dedicação podem transformar o futuro de um jovem.",
    requirements: ["Conhecimento básico de matemática/português", "Paciência", "Vontade de ensinar"],
    impact: "30 crianças assistidas",
    category: "educacao"
  },
  {
    id: "3",
    title: "Coleta de Resíduos na Praia",
    organization: "Oceano Limpo",
    organizationLogo: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&h=400&fit=crop",
    location: "Florianópolis, SC",
    date: "22 Jun 2025",
    time: "07:00 - 11:00",
    points: 180,
    participants: 45,
    maxParticipants: 100,
    tags: ["Meio Ambiente", "Presencial", "Pet Friendly"],
    description: "Mutirão de limpeza na Praia do Campeche. Vamos remover plásticos e outros resíduos, protegendo a vida marinha e preservando nosso litoral.",
    requirements: ["Protetor solar", "Luvas (forneceremos)", "Disposição"],
    impact: "2 toneladas de lixo coletadas",
    category: "meio-ambiente"
  },
  {
    id: "4",
    title: "Doação de Sangue Coletiva",
    organization: "Cruz Vermelha",
    organizationLogo: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=400&fit=crop",
    location: "Belo Horizonte, MG",
    date: "25 Jun 2025",
    time: "09:00 - 15:00",
    points: 250,
    participants: 67,
    maxParticipants: 200,
    tags: ["Saúde", "Presencial", "Adultos"],
    description: "Campanha especial de doação de sangue. Uma doação pode salvar até 4 vidas. Venha fazer parte deste ato de amor ao próximo.",
    requirements: ["Documento com foto", "Boa saúde", "Jejum de 4h (gorduras)"],
    impact: "268 vidas salvas",
    category: "saude"
  },
  {
    id: "5",
    title: "Mentoria de Carreira para Jovens",
    organization: "Futuro Digital",
    organizationLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    location: "Online",
    date: "28 Jun 2025",
    time: "19:00 - 21:00",
    points: 120,
    participants: 12,
    maxParticipants: 20,
    tags: ["Educação", "Online", "Profissional"],
    description: "Compartilhe sua experiência profissional com jovens em início de carreira. Sessões de mentoria online para orientação profissional.",
    requirements: ["Experiência profissional", "Webcam", "Disponibilidade semanal"],
    impact: "50 jovens orientados",
    category: "educacao"
  },
  {
    id: "6",
    title: "Cuidado de Animais Abandonados",
    organization: "Patinhas Felizes",
    organizationLogo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop",
    location: "Curitiba, PR",
    date: "30 Jun 2025",
    time: "09:00 - 13:00",
    points: 160,
    participants: 18,
    maxParticipants: 30,
    tags: ["Animais", "Presencial", "Pet Lovers"],
    description: "Ajude no cuidado diário de cães e gatos resgatados. Atividades incluem passeios, banho, alimentação e muito carinho.",
    requirements: ["Amor por animais", "Roupas que podem sujar", "Energia"],
    impact: "120 animais cuidados",
    category: "animais"
  }
];

export const mockUser = {
  id: "1",
  name: "Ana Carolina Silva",
  email: "ana.silva@email.com",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=200&h=200&fit=crop",
  level: 12,
  points: 2450,
  pointsToNextLevel: 550,
  totalActions: 34,
  hoursVolunteered: 156,
  treesPlanted: 45,
  livesImpacted: 230,
  streak: 7,
  joinedDate: "Mar 2024",
  badges: [
    { id: "1", name: "Primeiro Passo", icon: "footprints", description: "Completou a primeira ação", earned: true },
    { id: "2", name: "Guardião Verde", icon: "tree", description: "Plantou 10 árvores", earned: true },
    { id: "3", name: "Educador", icon: "book", description: "10h em ações de educação", earned: true },
    { id: "4", name: "Coração Solidário", icon: "heart", description: "Doou sangue 3 vezes", earned: true },
    { id: "5", name: "Protetor dos Mares", icon: "waves", description: "5 ações de limpeza", earned: true },
    { id: "6", name: "Mentor", icon: "graduation-cap", description: "Mentoreou 5 jovens", earned: false },
    { id: "7", name: "Super Voluntário", icon: "star", description: "100 horas de voluntariado", earned: true },
    { id: "8", name: "Lenda EcoLink", icon: "crown", description: "Alcance o nível 20", earned: false },
  ],
  recentActions: [
    { id: "1", title: "Plantio de Árvores", date: "10 Jun 2025", points: 150, organization: "Verde Esperança" },
    { id: "2", title: "Aulas de Reforço", date: "05 Jun 2025", points: 200, organization: "Instituto Educar" },
    { id: "3", title: "Coleta na Praia", date: "28 Mai 2025", points: 180, organization: "Oceano Limpo" },
    { id: "4", title: "Doação de Sangue", date: "20 Mai 2025", points: 250, organization: "Cruz Vermelha" },
  ],
  monthlyProgress: [
    { month: "Jan", points: 320 },
    { month: "Fev", points: 450 },
    { month: "Mar", points: 380 },
    { month: "Abr", points: 520 },
    { month: "Mai", points: 610 },
    { month: "Jun", points: 170 },
  ]
};

export const mockRewards = [
  {
    id: "1",
    title: "Cupom 10% Natura",
    description: "Desconto em produtos sustentáveis",
    points: 500,
    category: "Cupons",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=200&fit=crop",
    available: true,
    partner: "Natura"
  },
  {
    id: "2",
    title: "Ingresso Cinema",
    description: "1 ingresso para qualquer sessão",
    points: 800,
    category: "Entretenimento",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=200&fit=crop",
    available: true,
    partner: "Cinemark"
  },
  {
    id: "3",
    title: "Camiseta EcoLink",
    description: "Camiseta oficial da plataforma",
    points: 1200,
    category: "Produtos",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
    available: true,
    partner: "EcoLink"
  },
  {
    id: "4",
    title: "Certificado Digital",
    description: "Certificado de 50h de voluntariado",
    points: 300,
    category: "Certificados",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    available: true,
    partner: "EcoLink"
  },
  {
    id: "5",
    title: "Kit Ecobag",
    description: "3 sacolas reutilizáveis",
    points: 600,
    category: "Produtos",
    image: "https://images.unsplash.com/photo-1597348989645-39476c0a2a95?w=300&h=200&fit=crop",
    available: false,
    partner: "EcoShop"
  },
  {
    id: "6",
    title: "Curso Online",
    description: "Curso de sustentabilidade corporativa",
    points: 1500,
    category: "Educação",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    available: true,
    partner: "EcoAcademy"
  }
];

export const mockRanking = [
  { position: 1, name: "Pedro Henrique", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", points: 5420, level: 18 },
  { position: 2, name: "Maria Fernanda", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", points: 4890, level: 16 },
  { position: 3, name: "Lucas Gabriel", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", points: 4250, level: 15 },
  { position: 4, name: "Ana Carolina", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=100&h=100&fit=crop", points: 2450, level: 12 },
  { position: 5, name: "Rafael Santos", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", points: 2180, level: 11 },
  { position: 6, name: "Juliana Costa", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", points: 1950, level: 10 },
  { position: 7, name: "Bruno Oliveira", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", points: 1720, level: 9 },
  { position: 8, name: "Camila Ribeiro", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", points: 1540, level: 8 },
];

export const mockInstitution = {
  id: "1",
  name: "ONG Verde Esperança",
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
  description: "Trabalhando pela preservação ambiental desde 2010",
  email: "contato@verdeesperanca.org",
  totalOpportunities: 45,
  activeOpportunities: 8,
  totalVolunteers: 1234,
  totalHours: 15600,
  impactMetrics: {
    treesPlanted: 12500,
    areasRecovered: 45,
    peopleImpacted: 8900
  },
  recentApplications: [
    { id: "1", volunteer: "João Silva", opportunity: "Plantio de Árvores", date: "12 Jun 2025", status: "pending" },
    { id: "2", volunteer: "Maria Santos", opportunity: "Plantio de Árvores", date: "11 Jun 2025", status: "approved" },
    { id: "3", volunteer: "Carlos Ferreira", opportunity: "Mutirão de Limpeza", date: "10 Jun 2025", status: "pending" },
    { id: "4", volunteer: "Ana Costa", opportunity: "Educação Ambiental", date: "09 Jun 2025", status: "rejected" },
  ],
  monthlyVolunteers: [
    { month: "Jan", volunteers: 120 },
    { month: "Fev", volunteers: 145 },
    { month: "Mar", volunteers: 180 },
    { month: "Abr", volunteers: 210 },
    { month: "Mai", volunteers: 245 },
    { month: "Jun", volunteers: 189 },
  ]
};

export const mockAdminStats = {
  totalUsers: 15420,
  totalInstitutions: 234,
  totalOpportunities: 1567,
  totalActionsCompleted: 45678,
  totalPointsDistributed: 2345000,
  activeUsers: 8934,
  pendingApprovals: 23,
  reportedContent: 5,
  userGrowth: [
    { month: "Jan", users: 8500 },
    { month: "Fev", users: 9200 },
    { month: "Mar", users: 10100 },
    { month: "Abr", users: 11800 },
    { month: "Mai", users: 13500 },
    { month: "Jun", users: 15420 },
  ],
  categoryDistribution: [
    { name: "Meio Ambiente", value: 45 },
    { name: "Educação", value: 25 },
    { name: "Saúde", value: 15 },
    { name: "Animais", value: 10 },
    { name: "Social", value: 5 },
  ]
};

export const mockTestimonials = [
  {
    id: "1",
    name: "Mariana Souza",
    role: "Voluntária desde 2023",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote: "O EcoLink transformou minha forma de contribuir com a sociedade. A gamificação torna tudo mais divertido e motivador!"
  },
  {
    id: "2",
    name: "Ricardo Mendes",
    role: "Diretor - ONG Vida Verde",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    quote: "Encontramos voluntários incríveis através da plataforma. A gestão ficou muito mais fácil e organizada."
  },
  {
    id: "3",
    name: "Fernanda Lima",
    role: "Voluntária Nível 15",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    quote: "Já participei de mais de 50 ações! Os pontos e badges me motivam a continuar fazendo a diferença."
  }
];

export const mockPartners = [
  { id: "1", name: "Natura", logo: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150&h=80&fit=crop" },
  { id: "2", name: "Grupo Boticário", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=80&fit=crop" },
  { id: "3", name: "Ambev", logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=150&h=80&fit=crop" },
  { id: "4", name: "Itaú", logo: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=150&h=80&fit=crop" },
  { id: "5", name: "Magazine Luiza", logo: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=150&h=80&fit=crop" },
];

export const categories = [
  { id: "all", name: "Todas", icon: "grid" },
  { id: "meio-ambiente", name: "Meio Ambiente", icon: "tree" },
  { id: "educacao", name: "Educação", icon: "book" },
  { id: "saude", name: "Saúde", icon: "heart-pulse" },
  { id: "animais", name: "Animais", icon: "paw-print" },
  { id: "social", name: "Social", icon: "users" },
];
