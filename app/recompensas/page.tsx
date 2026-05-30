"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Star, Gift, Trophy, Crown, Lock,
  ChevronRight, Ticket, Award, ShoppingBag, GraduationCap, Sparkles, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser, mockRewards, mockRanking } from "@/lib/mock-data";

const categoryIcons: Record<string, React.ReactNode> = {
  "Cupons": <Ticket className="w-4 h-4" />,
  "Entretenimento": <Gift className="w-4 h-4" />,
  "Produtos": <ShoppingBag className="w-4 h-4" />,
  "Certificados": <Award className="w-4 h-4" />,
  "Educação": <GraduationCap className="w-4 h-4" />,
};

const levels = [
  { level: 1, name: "Semente", minPoints: 0, icon: "🌱", gradient: "from-slate-100 to-slate-200" },
  { level: 5, name: "Broto", minPoints: 500, icon: "🌿", gradient: "from-emerald-100 to-emerald-200" },
  { level: 10, name: "Árvore", minPoints: 2000, icon: "🌳", gradient: "from-emerald-200 to-emerald-300" },
  { level: 15, name: "Floresta", minPoints: 5000, icon: "🌲", gradient: "from-emerald-300 to-teal-300" },
  { level: 20, name: "Guardião", minPoints: 10000, icon: "🏔️", gradient: "from-teal-300 to-cyan-300" },
];

export default function RecompensasPage() {
  const currentLevelIndex = levels.findIndex((l, i) => 
    mockUser.points < (levels[i + 1]?.minPoints || Infinity)
  );
  const currentLevel = levels[currentLevelIndex];
  const nextLevel = levels[currentLevelIndex + 1];
  const progressToNextLevel = nextLevel 
    ? ((mockUser.points - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100
    : 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect-strong border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/oportunidades" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#FACC15]" />
              <h1 className="text-lg font-semibold text-foreground">Recompensas</h1>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Points Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-primary-animated rounded-3xl p-8 text-white mb-8 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full"
          />
          
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white/80 mb-2 text-sm font-medium uppercase tracking-wide">Seu saldo de pontos</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <Star className="w-7 h-7 fill-current" />
                </div>
                <span className="text-5xl sm:text-6xl font-bold font-[family-name:var(--font-poppins)] tracking-tight">
                  {mockUser.points.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-white/80 mb-2 text-sm font-medium uppercase tracking-wide">Nível atual</p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <span className="text-3xl">{currentLevel.icon}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold">{currentLevel.name}</p>
                  <p className="text-sm text-white/70">Nível {mockUser.level}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress to next level */}
          {nextLevel && (
            <div className="relative mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-white/80">Progresso para {nextLevel.name}</span>
                <span className="font-semibold">
                  {mockUser.points.toLocaleString()}/{nextLevel.minPoints.toLocaleString()} pts
                </span>
              </div>
              <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressToNextLevel}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-white rounded-full progress-bar-animated"
                />
              </div>
              <p className="text-xs text-white/60 mt-2">
                Faltam {(nextLevel.minPoints - mockUser.points).toLocaleString()} pts
              </p>
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Levels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-premium rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    Níveis e Benefícios
                  </h2>
                  <p className="text-sm text-muted-foreground">Evolua e desbloqueie vantagens</p>
                </div>
              </div>
              <div className="space-y-3">
                {levels.map((level, index) => {
                  const isUnlocked = mockUser.points >= level.minPoints;
                  const isCurrent = index === currentLevelIndex;
                  
                  return (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                        isCurrent 
                          ? "bg-gradient-to-r from-primary/10 to-accent/5 border-2 border-primary/30" 
                          : isUnlocked 
                            ? "bg-muted/30 hover:bg-muted/50" 
                            : "bg-muted/20 opacity-50"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md ${
                        isUnlocked ? `bg-gradient-to-br ${level.gradient}` : "bg-muted"
                      }`}>
                        {isUnlocked ? level.icon : <Lock className="w-5 h-5 text-muted-foreground" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className={`font-semibold ${isUnlocked ? "text-foreground" : "text-muted-foreground"}`}>
                            {level.name}
                          </p>
                          {isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full gradient-primary text-white text-xs font-medium">
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Nível {level.level} • {level.minPoints.toLocaleString()} pts
                        </p>
                      </div>
                      {isUnlocked && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Rewards Catalog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-premium rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-reward flex items-center justify-center">
                  <Gift className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    Catálogo de Recompensas
                  </h2>
                  <p className="text-sm text-muted-foreground">Troque seus pontos por prêmios</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {mockRewards.map((reward, index) => {
                  const canRedeem = mockUser.points >= reward.points && reward.available;
                  
                  return (
                    <motion.div
                      key={reward.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      whileHover={{ scale: canRedeem ? 1.02 : 1, y: canRedeem ? -4 : 0 }}
                      className={`rounded-2xl overflow-hidden border-2 transition-all ${
                        canRedeem 
                          ? "border-primary/20 hover:border-primary/40 hover:shadow-xl cursor-pointer" 
                          : "border-border/50 opacity-70"
                      }`}
                    >
                      <div className="relative h-36">
                        <Image
                          src={reward.image}
                          alt={reward.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-medium">
                          {categoryIcons[reward.category]}
                          <span>{reward.category}</span>
                        </div>
                        {!reward.available && (
                          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                            <span className="px-4 py-2 rounded-full bg-white text-foreground text-sm font-semibold shadow-lg">
                              Esgotado
                            </span>
                          </div>
                        )}
                        {canRedeem && (
                          <div className="absolute top-3 right-3">
                            <Sparkles className="w-5 h-5 text-[#FACC15] animate-pulse" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 bg-card">
                        <h3 className="font-semibold text-foreground mb-1">{reward.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{reward.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Star className="w-5 h-5 text-[#FACC15] fill-current" />
                            <span className="font-bold text-lg text-foreground">{reward.points}</span>
                          </div>
                          <Button
                            size="sm"
                            disabled={!canRedeem}
                            className={canRedeem 
                              ? "gradient-primary text-white btn-premium" 
                              : "bg-muted text-muted-foreground"
                            }
                          >
                            {canRedeem ? "Resgatar" : "Bloqueado"}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ranking */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card-premium rounded-3xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#FACC15]" />
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    Ranking
                  </h2>
                </div>
              </div>
              <div className="space-y-2">
                {mockRanking.slice(0, 5).map((user, index) => (
                  <motion.div
                    key={user.position}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      user.name === mockUser.name 
                        ? "bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-md ${
                      index === 0 ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-white" :
                      index === 1 ? "bg-gradient-to-br from-slate-300 to-slate-400 text-white" :
                      index === 2 ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {user.position}
                    </div>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-border">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">{user.name}</p>
                      <p className="text-xs text-muted-foreground">Nível {user.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-transparent bg-clip-text gradient-reward">
                        {user.points.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/ranking">
                <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/5">
                  Ver ranking completo <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>

            {/* How to earn */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 via-accent/5 to-[#FACC15]/10 rounded-3xl p-6 border border-primary/10"
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Como ganhar pontos
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { action: "Completar ação", points: "50-250 pts" },
                  { action: "Convidar amigo", points: "100 pts" },
                  { action: "Avaliação positiva", points: "25 pts" },
                  { action: "Streak semanal", points: "50 pts" },
                ].map((item) => (
                  <div key={item.action} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                    <span className="text-muted-foreground">{item.action}</span>
                    <span className="font-semibold text-primary">{item.points}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
