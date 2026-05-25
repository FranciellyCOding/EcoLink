"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Settings, Share2, Star, Award, Zap, 
  TreePine, Heart, Calendar, Clock, ChevronRight, Flame,
  TrendingUp, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser } from "@/lib/mock-data";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";

const badgeIcons: Record<string, React.ReactNode> = {
  "footprints": <Zap className="w-6 h-6" />,
  "tree": <TreePine className="w-6 h-6" />,
  "book": <Star className="w-6 h-6" />,
  "heart": <Heart className="w-6 h-6" />,
  "waves": <TrendingUp className="w-6 h-6" />,
  "graduation-cap": <Award className="w-6 h-6" />,
  "star": <Star className="w-6 h-6" />,
  "crown": <Award className="w-6 h-6" />,
};

export default function PerfilPage() {
  const progressPercent = ((mockUser.points % 500) / 500) * 100;
  const pointsInCurrentLevel = mockUser.points % 500;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/oportunidades" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <Link href="/configuracoes">
                <button className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-3xl p-6 sm:p-8 border border-border mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-lg">
                {mockUser.level}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                {mockUser.name}
              </h1>
              <p className="text-muted-foreground">Membro desde {mockUser.joinedDate}</p>
              
              {/* Level Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Nível {mockUser.level}</span>
                  <span className="text-primary font-medium">
                    {pointsInCurrentLevel}/500 pts para nível {mockUser.level + 1}
                  </span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full gradient-primary rounded-full"
                  />
                </div>
              </div>

              {/* Streak */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-orange-600">
                  <Flame className="w-4 h-4" />
                  <span className="text-sm font-medium">{mockUser.streak} dias seguidos</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: "Pontos", value: mockUser.points.toLocaleString(), icon: Star, color: "text-[#FACC15]" },
            { label: "Ações", value: mockUser.totalActions, icon: Target, color: "text-primary" },
            { label: "Horas", value: mockUser.hoursVolunteered, icon: Clock, color: "text-accent" },
            { label: "Árvores", value: mockUser.treesPlanted, icon: TreePine, color: "text-primary" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-4 border border-border text-center"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 border border-border mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
              Evolução de Pontos
            </h2>
            <span className="text-sm text-muted-foreground">Últimos 6 meses</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockUser.monthlyProgress}>
                <defs>
                  <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="points" 
                  stroke="#22C55E" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorPoints)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-6 border border-border mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
              Badges e Conquistas
            </h2>
            <span className="text-sm text-muted-foreground">
              {mockUser.badges.filter(b => b.earned).length}/{mockUser.badges.length} desbloqueados
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mockUser.badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`p-4 rounded-xl text-center transition-all ${
                  badge.earned 
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20" 
                    : "bg-muted/50 opacity-50"
                }`}
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  badge.earned ? "gradient-primary text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {badgeIcons[badge.icon]}
                </div>
                <p className={`font-medium text-sm ${badge.earned ? "text-foreground" : "text-muted-foreground"}`}>
                  {badge.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-2xl p-6 border border-border mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
              Histórico de Ações
            </h2>
            <Link href="/historico">
              <Button variant="ghost" size="sm" className="text-primary">
                Ver tudo <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {mockUser.recentActions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{action.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {action.organization} • {action.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#FACC15]">+{action.points}</p>
                  <p className="text-xs text-muted-foreground">pontos</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="gradient-primary rounded-2xl p-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4 font-[family-name:var(--font-poppins)]">
            Seu Impacto Total
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold">{mockUser.treesPlanted}</p>
              <p className="text-sm text-white/80">Árvores Plantadas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{mockUser.livesImpacted}</p>
              <p className="text-sm text-white/80">Vidas Impactadas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{mockUser.hoursVolunteered}h</p>
              <p className="text-sm text-white/80">Horas Doadas</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
