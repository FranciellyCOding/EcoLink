"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, CalendarCheck, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie sua Conta",
    description: "Cadastre-se gratuitamente em menos de 1 minuto e complete seu perfil de voluntário.",
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "Encontre Oportunidades",
    description: "Explore ações voluntárias perto de você ou online, filtradas por causa e disponibilidade.",
    color: "bg-accent",
  },
  {
    icon: CalendarCheck,
    title: "Participe e Contribua",
    description: "Inscreva-se nas ações, participe e faça a diferença na sua comunidade.",
    color: "bg-primary",
  },
  {
    icon: Trophy,
    title: "Ganhe Recompensas",
    description: "Acumule pontos, conquiste badges e troque por benefícios exclusivos.",
    color: "bg-[#FACC15]",
  },
];

export function HowItWorksSection() {
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simples e Intuitivo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos você começa a transformar o mundo e a ser recompensado por isso
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all group">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
