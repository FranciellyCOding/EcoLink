"use client";

import { motion } from "framer-motion";
import { TreePine, Sparkles, Shield, Users, Zap, Globe } from "lucide-react";

const benefits = [
  {
    icon: TreePine,
    title: "Impacto Real",
    description: "Cada ação que você participa gera impacto mensurável. Acompanhe sua contribuição em tempo real.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Sparkles,
    title: "Gamificação Engajante",
    description: "Ganhe pontos, suba de nível, conquiste badges e desbloqueie recompensas exclusivas.",
    gradient: "from-[#FACC15] to-primary",
  },
  {
    icon: Shield,
    title: "ONGs Verificadas",
    description: "Todas as organizações são verificadas para garantir a segurança e legitimidade das ações.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com milhares de voluntários que compartilham dos mesmos valores que você.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Flexibilidade Total",
    description: "Ações presenciais ou online, em qualquer horário. Você escolhe como e quando contribuir.",
    gradient: "from-[#FACC15] to-accent",
  },
  {
    icon: Globe,
    title: "Certificados Válidos",
    description: "Receba certificados de horas voluntárias reconhecidos por empresas e instituições.",
    gradient: "from-accent to-[#FACC15]",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Vantagens Exclusivas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
            Por que escolher o EcoLink?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa que valoriza seu tempo e transforma voluntariado em uma experiência gratificante
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
