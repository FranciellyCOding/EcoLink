"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, CalendarCheck, Trophy, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie sua Conta",
    description: "Cadastre-se gratuitamente em menos de 1 minuto e complete seu perfil de voluntário.",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: Search,
    title: "Encontre Oportunidades",
    description: "Explore ações voluntárias perto de você ou online, filtradas por causa e disponibilidade.",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    icon: CalendarCheck,
    title: "Participe e Contribua",
    description: "Inscreva-se nas ações, participe e faça a diferença na sua comunidade.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Trophy,
    title: "Ganhe Recompensas",
    description: "Acumule pontos, conquiste badges e troque por benefícios exclusivos.",
    gradient: "from-amber-400 to-yellow-500",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Simples e Intuitivo
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Em apenas 4 passos você começa a transformar o mundo e a ser recompensado por isso
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-[#FACC15]/20" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="card-premium rounded-3xl p-7 h-full"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-7">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br ${step.gradient} text-white text-sm font-bold shadow-lg`}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow connector - between cards on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 w-8 h-8 items-center justify-center z-20">
                    <motion.div
                      initial={{ x: -5 }}
                      animate={{ x: 5 }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary/50" />
                    </motion.div>
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
