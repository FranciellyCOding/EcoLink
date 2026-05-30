"use client";

import { motion } from "framer-motion";
import { Star, Award, Crown, Zap, Flame, Sparkles, Gift, Trophy, Target, TrendingUp } from "lucide-react";

const levels = [
  { level: 1, name: "Semente", points: 0, icon: "🌱", color: "from-slate-100 to-slate-200", progress: 100 },
  { level: 5, name: "Broto", points: 500, icon: "🌿", color: "from-emerald-100 to-emerald-200", progress: 100 },
  { level: 10, name: "Árvore", points: 2000, icon: "🌳", color: "from-emerald-200 to-emerald-300", progress: 80 },
  { level: 15, name: "Floresta", points: 5000, icon: "🌲", color: "from-emerald-300 to-teal-300", progress: 0 },
  { level: 20, name: "Guardião", points: 10000, icon: "🏔️", color: "from-teal-300 to-cyan-300", progress: 0 },
];

const badges = [
  { name: "Primeiro Passo", icon: Star, description: "Complete sua primeira ação", color: "from-amber-400 to-yellow-500", earned: true },
  { name: "Guardião Verde", icon: Sparkles, description: "Plante 10 árvores", color: "from-emerald-400 to-green-500", earned: true },
  { name: "Super Voluntário", icon: Zap, description: "100 horas de voluntariado", color: "from-teal-400 to-cyan-500", earned: true },
  { name: "Lenda EcoLink", icon: Crown, description: "Alcance o nível máximo", color: "from-amber-500 to-orange-500", earned: false },
  { name: "Streak Master", icon: Flame, description: "30 dias seguidos", color: "from-orange-400 to-red-500", earned: false },
  { name: "Colecionador", icon: Gift, description: "Resgate 10 recompensas", color: "from-violet-400 to-purple-500", earned: false },
];

const pointActions = [
  { action: "Completar uma ação", points: "50-250", icon: Target },
  { action: "Convidar um amigo", points: "100", icon: Gift },
  { action: "Avaliação positiva", points: "25", icon: Star },
  { action: "Streak semanal", points: "50", icon: Flame },
];

export function GamificationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FACC15]/20 to-orange-500/10 border border-[#FACC15]/30 mb-6"
          >
            <Trophy className="w-4 h-4 text-[#FACC15]" />
            <span className="text-sm font-semibold text-foreground">Sistema de Recompensas</span>
            <Sparkles className="w-4 h-4 text-[#FACC15]" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
            Ganhe pontos, conquiste{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-orange-500">badges</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada ação voluntária te recompensa. Suba de nível, desbloqueie conquistas 
            e troque pontos por benefícios reais
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Levels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                  Sistema de Níveis
                </h3>
                <p className="text-sm text-muted-foreground">Evolua e desbloqueie benefícios</p>
              </div>
            </div>

            <div className="space-y-4">
              {levels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    level.progress > 0 
                      ? "bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10" 
                      : "bg-muted/30 opacity-60"
                  }`}
                >
                  {/* Level Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center text-2xl shadow-md`}>
                    {level.icon}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-foreground">{level.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        Nível {level.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {level.points.toLocaleString()} pontos para desbloquear
                    </p>
                    {/* Progress bar */}
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full gradient-primary rounded-full"
                      />
                    </div>
                  </div>

                  {/* Checkmark */}
                  {level.progress === 100 && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl gradient-reward flex items-center justify-center shadow-lg shadow-[#FACC15]/20">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                  Badges e Conquistas
                </h3>
                <p className="text-sm text-muted-foreground">Colecione e mostre seu progresso</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: badge.earned ? 1.03 : 1, y: badge.earned ? -2 : 0 }}
                  className={`relative p-5 rounded-2xl transition-all cursor-pointer group ${
                    badge.earned 
                      ? "badge-earned" 
                      : "badge-locked"
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center ${
                    badge.earned 
                      ? `bg-gradient-to-br ${badge.color} shadow-md`
                      : "bg-muted"
                  }`}>
                    <badge.icon className={`w-6 h-6 ${
                      badge.earned ? "text-white" : "text-muted-foreground"
                    } group-hover:scale-110 transition-transform`} />
                  </div>
                  
                  <h4 className={`font-semibold text-sm mb-1 ${
                    badge.earned ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {badge.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {badge.description}
                  </p>

                  {/* Locked overlay */}
                  {!badge.earned && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                        <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Earned indicator */}
                  {badge.earned && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Points Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-[#FACC15]/5 rounded-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl" />
          
          <div className="relative p-8 sm:p-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Como ganhar pontos
              </h3>
              <p className="text-muted-foreground mt-2">Várias formas de acumular e subir de nível</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {pointActions.map((item, index) => (
                <motion.div
                  key={item.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-transparent bg-clip-text gradient-primary font-[family-name:var(--font-poppins)]">
                    +{item.points}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.action}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
