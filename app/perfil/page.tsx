"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Settings, Share2, Star, Award, Zap, 
  TreePine, Heart, Calendar, Clock, ChevronRight, Flame,
  TrendingUp, Target, Medal, Shield, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser } from "@/lib/mock-data";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";

const badgeIcons: Record<string, React.ReactNode> = {
  "footprints": <Zap className="w-5 h-5" />,
  "tree": <TreePine className="w-5 h-5" />,
  "book": <Star className="w-5 h-5" />,
  "heart": <Heart className="w-5 h-5" />,
  "waves": <TrendingUp className="w-5 h-5" />,
  "graduation-cap": <Medal className="w-5 h-5" />,
  "star": <Star className="w-5 h-5" />,
  "crown": <Award className="w-5 h-5" />,
};

const badgeColors: Record<string, string> = {
  "footprints": "from-amber-400 to-yellow-500",
  "tree": "from-emerald-400 to-green-500",
  "book": "from-blue-400 to-indigo-500",
  "heart": "from-rose-400 to-pink-500",
  "waves": "from-cyan-400 to-teal-500",
  "graduation-cap": "from-violet-400 to-purple-500",
  "star": "from-orange-400 to-amber-500",
  "crown": "from-yellow-400 to-orange-500",
};

export default function PerfilPage() {
  const progressPercent = ((mockUser.points % 500) / 500) * 100;
  const pointsInCurrentLevel = mockUser.points % 500;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect-strong border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/oportunidades" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl hover:bg-muted text-muted-foreground transition-all hover:scale-105">
                <Share2 className="w-5 h-5" />
              </button>
              <Link href="/configuracoes">
                <button className="p-2.5 rounded-xl hover:bg-muted text-muted-foreground transition-all hover:scale-105">
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
          className="card-premium rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
          
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar with level badge */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                <Image
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-1 -right-1 w-11 h-11 rounded-xl level-badge flex items-center justify-center text-white font-bold text-lg shadow-lg"
              >
                {mockUser.level}
              </motion.div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                {mockUser.name}
              </h1>
              <p className="text-muted-foreground mb-4">Membro desde {mockUser.joinedDate}</p>
              
              {/* Level Progress */}
              <div className="bg-muted/50 rounded-2xl p-4">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-medium text-foreground">Nível {mockUser.level}</span>
                  <span className="text-primary font-semibold">
                    {pointsInCurrentLevel}/500 pts
                  </span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full gradient-primary rounded-full progress-bar-animated"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Faltam {500 - pointsInCurrentLevel} pts para o nível {mockUser.level + 1}
                </p>
              </div>

              {/* Streak Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full streak-badge text-white"
              >
                <Flame className="w-4 h-4" />
                <span className="text-sm font-semibold">{mockUser.streak} dias em sequência</span>
              </motion.div>
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
            { label: "Pontos", value: mockUser.points.toLocaleString(), icon: Star, gradient: "from-amber-400 to-yellow-500" },
            { label: "Ações", value: mockUser.totalActions, icon: Target, gradient: "from-emerald-400 to-green-500" },
            { label: "Horas", value: mockUser.hoursVolunteered, icon: Clock, gradient: "from-teal-400 to-cyan-500" },
            { label: "Árvores", value: mockUser.treesPlanted, icon: TreePine, gradient: "from-green-400 to-emerald-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-premium rounded-2xl p-5 text-center cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-premium rounded-3xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Evolução de Pontos
                </h2>
                <p className="text-sm text-muted-foreground">Últimos 6 meses</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
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
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="month" stroke="#94A3B8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94A3B8" tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                  labelStyle={{ fontWeight: 600, color: '#0F172A' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="points" 
                  stroke="#22C55E" 
                  strokeWidth={3}
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
          className="card-premium rounded-3xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-reward flex items-center justify-center">
                <Award className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Badges e Conquistas
                </h2>
                <p className="text-sm text-muted-foreground">
                  {mockUser.badges.filter(b => b.earned).length} de {mockUser.badges.length} desbloqueados
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mockUser.badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: badge.earned ? 1.05 : 1 }}
                className={`p-4 rounded-2xl text-center transition-all ${
                  badge.earned 
                    ? "badge-earned cursor-pointer" 
                    : "badge-locked"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center ${
                  badge.earned 
                    ? `bg-gradient-to-br ${badgeColors[badge.icon]} shadow-lg`
                    : "bg-muted"
                }`}>
                  <div className={badge.earned ? "text-white" : "text-muted-foreground"}>
                    {badgeIcons[badge.icon]}
                  </div>
                </div>
                <p className={`font-semibold text-sm ${badge.earned ? "text-foreground" : "text-muted-foreground"}`}>
                  {badge.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
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
          className="card-premium rounded-3xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Histórico de Ações
                </h2>
                <p className="text-sm text-muted-foreground">Suas contribuições recentes</p>
              </div>
            </div>
            <Link href="/historico">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                Ver tudo <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {mockUser.recentActions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{action.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {action.organization} • {action.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-transparent bg-clip-text gradient-reward">+{action.points}</p>
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
          className="gradient-primary rounded-3xl p-8 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8" />
              <h2 className="text-xl font-semibold font-[family-name:var(--font-poppins)]">
                Seu Impacto Total
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: mockUser.treesPlanted, label: "Árvores Plantadas", icon: TreePine },
                { value: mockUser.livesImpacted, label: "Vidas Impactadas", icon: Heart },
                { value: `${mockUser.hoursVolunteered}h`, label: "Horas Doadas", icon: Clock },
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-3xl font-bold font-[family-name:var(--font-poppins)]">{item.value}</p>
                  <p className="text-sm text-white/80 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
