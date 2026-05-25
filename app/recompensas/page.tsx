"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Star, Gift, Trophy, Crown, Lock,
  ChevronRight, Ticket, Award, ShoppingBag, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser, mockRewards, mockRanking } from "@/lib/mock-data";

const categoryIcons: Record<string, React.ReactNode> = {
  "Cupons": <Ticket className="w-5 h-5" />,
  "Entretenimento": <Gift className="w-5 h-5" />,
  "Produtos": <ShoppingBag className="w-5 h-5" />,
  "Certificados": <Award className="w-5 h-5" />,
  "Educação": <GraduationCap className="w-5 h-5" />,
};

const levels = [
  { level: 1, name: "Semente", minPoints: 0, icon: "🌱" },
  { level: 5, name: "Broto", minPoints: 500, icon: "🌿" },
  { level: 10, name: "Árvore", minPoints: 2000, icon: "🌳" },
  { level: 15, name: "Floresta", minPoints: 5000, icon: "🌲" },
  { level: 20, name: "Guardião", minPoints: 10000, icon: "🏔️" },
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/oportunidades" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">Recompensas</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Points Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-primary rounded-3xl p-6 sm:p-8 text-white mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white/80 mb-2">Seu saldo de pontos</p>
              <div className="flex items-center gap-3">
                <Star className="w-10 h-10" />
                <span className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-poppins)]">
                  {mockUser.points.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-white/80 mb-2">Nível atual</p>
              <div className="flex items-center gap-2">
                <span className="text-4xl">{currentLevel.icon}</span>
                <div>
                  <p className="text-xl font-bold">{currentLevel.name}</p>
                  <p className="text-sm text-white/70">Nível {mockUser.level}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress to next level */}
          {nextLevel && (
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-white/80">Progresso para {nextLevel.name}</span>
                <span className="font-medium">
                  {mockUser.points.toLocaleString()}/{nextLevel.minPoints.toLocaleString()} pts
                </span>
              </div>
              <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressToNextLevel}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
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
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Níveis e Benefícios
              </h2>
              <div className="space-y-4">
                {levels.map((level, index) => {
                  const isUnlocked = mockUser.points >= level.minPoints;
                  const isCurrent = index === currentLevelIndex;
                  
                  return (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        isCurrent 
                          ? "bg-primary/10 border-2 border-primary" 
                          : isUnlocked 
                            ? "bg-muted/50" 
                            : "bg-muted/30 opacity-60"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                        isUnlocked ? "bg-card shadow-md" : "bg-muted"
                      }`}>
                        {isUnlocked ? level.icon : <Lock className="w-6 h-6 text-muted-foreground" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className={`font-semibold ${isUnlocked ? "text-foreground" : "text-muted-foreground"}`}>
                            {level.name}
                          </p>
                          {isCurrent && (
                            <span className="px-2 py-0.5 rounded-full bg-primary text-white text-xs">
                              Atual
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Nível {level.level} • {level.minPoints.toLocaleString()} pts
                        </p>
                      </div>
                      {isUnlocked && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Catálogo de Recompensas
                </h2>
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
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-xl overflow-hidden border transition-all ${
                        canRedeem 
                          ? "border-primary/30 hover:shadow-lg cursor-pointer" 
                          : "border-border opacity-70"
                      }`}
                    >
                      <div className="relative h-32">
                        <Image
                          src={reward.image}
                          alt={reward.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-xs">
                          {categoryIcons[reward.category]}
                          <span>{reward.category}</span>
                        </div>
                        {!reward.available && (
                          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                            <span className="px-3 py-1 rounded-full bg-white text-foreground text-sm font-medium">
                              Esgotado
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-1">{reward.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[#FACC15]">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold">{reward.points}</span>
                          </div>
                          <Button
                            size="sm"
                            disabled={!canRedeem}
                            className={canRedeem ? "gradient-primary text-white" : ""}
                          >
                            {canRedeem ? "Resgatar" : "Pontos insuficientes"}
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
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Ranking
                </h2>
                <Trophy className="w-5 h-5 text-[#FACC15]" />
              </div>
              <div className="space-y-3">
                {mockRanking.slice(0, 5).map((user, index) => (
                  <motion.div
                    key={user.position}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      user.name === mockUser.name ? "bg-primary/10 border border-primary/30" : "hover:bg-muted/50"
                    } transition-colors`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? "bg-[#FACC15] text-foreground" :
                      index === 1 ? "bg-gray-300 text-foreground" :
                      index === 2 ? "bg-amber-600 text-white" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {user.position}
                    </div>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
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
                      <p className="font-bold text-sm text-[#FACC15]">{user.points.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/ranking">
                <Button variant="ghost" className="w-full mt-4 text-primary">
                  Ver ranking completo <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </motion.div>

            {/* How to earn */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Como ganhar pontos</h3>
              <div className="space-y-3 text-sm">
                {[
                  { action: "Completar ação", points: "50-250 pts" },
                  { action: "Convidar amigo", points: "100 pts" },
                  { action: "Avaliação positiva", points: "25 pts" },
                  { action: "Streak semanal", points: "50 pts" },
                ].map((item) => (
                  <div key={item.action} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{item.action}</span>
                    <span className="font-medium text-primary">{item.points}</span>
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
