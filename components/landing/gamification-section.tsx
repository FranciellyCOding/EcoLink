"use client";

import { motion } from "framer-motion";
import { Star, Award, Crown, Zap, Flame, Sparkles, Gift } from "lucide-react";

const levels = [
  { level: 1, name: "Semente", points: 0, icon: "🌱", color: "bg-muted" },
  { level: 5, name: "Broto", points: 500, icon: "🌿", color: "bg-primary/20" },
  { level: 10, name: "Árvore", points: 2000, icon: "🌳", color: "bg-primary/40" },
  { level: 15, name: "Floresta", points: 5000, icon: "🌲", color: "bg-primary/60" },
  { level: 20, name: "Guardião", points: 10000, icon: "🏔️", color: "bg-primary" },
];

const badges = [
  { name: "Primeiro Passo", icon: Star, description: "Complete sua primeira ação", color: "text-[#FACC15]" },
  { name: "Guardião Verde", icon: Sparkles, description: "Plante 10 árvores", color: "text-primary" },
  { name: "Super Voluntário", icon: Zap, description: "100 horas de voluntariado", color: "text-accent" },
  { name: "Lenda EcoLink", icon: Crown, description: "Alcance o nível máximo", color: "text-[#FACC15]" },
  { name: "Streak Master", icon: Flame, description: "30 dias seguidos", color: "text-orange-500" },
  { name: "Colecionador", icon: Gift, description: "Resgate 10 recompensas", color: "text-primary" },
];

export function GamificationSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#FACC15]/10 text-[#FACC15] text-sm font-medium mb-4">
            Sistema de Recompensas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
            Ganhe pontos, conquiste badges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada ação voluntária te recompensa. Suba de nível, desbloqueie conquistas e troque pontos por benefícios reais
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Levels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Sistema de Níveis
              </h3>
            </div>

            <div className="space-y-4">
              {levels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-full ${level.color} flex items-center justify-center text-2xl`}>
                    {level.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">{level.name}</span>
                      <span className="text-sm text-muted-foreground">Nível {level.level}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {level.points.toLocaleString()} pontos para desbloquear
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#FACC15]" />
              <h3 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Badges e Conquistas
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <badge.icon className={`w-8 h-8 ${badge.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <h4 className="font-semibold text-foreground text-sm">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Points Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-[#FACC15]/10 rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center font-[family-name:var(--font-poppins)]">
            Como ganhar pontos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { action: "Completar uma ação", points: "50-250 pts" },
              { action: "Convidar um amigo", points: "100 pts" },
              { action: "Avaliação positiva", points: "25 pts" },
              { action: "Streak semanal", points: "50 pts/semana" },
            ].map((item, index) => (
              <motion.div
                key={item.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-primary font-[family-name:var(--font-poppins)]">{item.points}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.action}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
