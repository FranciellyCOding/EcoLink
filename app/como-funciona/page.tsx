"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserPlus,
  Search,
  CalendarCheck,
  Trophy,
  Gift,
  ArrowRight,
  Sparkles,
  Star,
  Flame,
  Target,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Crie sua Conta",
    description:
      "Cadastre-se gratuitamente em menos de 1 minuto. Complete seu perfil com interesses, habilidades e disponibilidade para encontrar as melhores oportunidades.",
    details: [
      "Cadastro rápido com e-mail ou Google",
      "Perfil personalizável com foto e bio",
      "Escolha suas causas favoritas",
    ],
    gradient: "from-emerald-400 to-green-500",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: Search,
    number: "02",
    title: "Encontre Oportunidades",
    description:
      "Explore centenas de ações voluntárias perto de você ou online. Filtre por causa, localização, data e tipo de atividade para encontrar o match perfeito.",
    details: [
      "Filtros por causa, local e data",
      "Oportunidades presenciais e online",
      "Recomendações personalizadas com IA",
    ],
    gradient: "from-teal-400 to-cyan-500",
    shadowColor: "shadow-teal-500/20",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Participe de Ações",
    description:
      "Inscreva-se nas ações que mais combinam com você. Receba lembretes, orientações e tudo que precisa para ter uma experiência incrível como voluntário.",
    details: [
      "Inscrição com um clique",
      "Lembretes automáticos por e-mail",
      "Chat com a organização",
    ],
    gradient: "from-cyan-400 to-blue-500",
    shadowColor: "shadow-cyan-500/20",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Ganhe Pontos e Badges",
    description:
      "Cada ação voluntária te recompensa com pontos. Suba de nível, desbloqueie badges exclusivos e acompanhe sua evolução no ranking da comunidade.",
    details: [
      "50 a 250 pontos por ação",
      "Badges por conquistas especiais",
      "Ranking mensal e geral",
    ],
    gradient: "from-amber-400 to-yellow-500",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Gift,
    number: "05",
    title: "Resgate Recompensas",
    description:
      "Troque seus pontos acumulados por benefícios reais: cupons de desconto, produtos sustentáveis, ingressos, certificados e muito mais.",
    details: [
      "Catálogo com dezenas de prêmios",
      "Parceiros como Natura e Cinemark",
      "Certificados de voluntariado",
    ],
    gradient: "from-violet-400 to-purple-500",
    shadowColor: "shadow-violet-500/20",
  },
];

const gamificationFeatures = [
  {
    icon: Star,
    title: "Pontos",
    description: "Ganhe pontos por cada ação voluntária completada",
    value: "50-250 pts",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    icon: Target,
    title: "Badges",
    description: "Conquiste badges por marcos e conquistas especiais",
    value: "20+",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: Flame,
    title: "Streaks",
    description: "Mantenha uma sequência semanal e ganhe bônus",
    value: "2x bônus",
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: Trophy,
    title: "Ranking",
    description: "Compete com amigos e suba no ranking da comunidade",
    value: "Top 100",
    gradient: "from-teal-400 to-cyan-500",
  },
];

const faqs = [
  {
    question: "O EcoLink é gratuito?",
    answer:
      "Sim! O EcoLink é 100% gratuito para voluntários. Você pode se cadastrar, participar de ações e ganhar recompensas sem nenhum custo.",
  },
  {
    question: "Preciso ter experiência para ser voluntário?",
    answer:
      "Não! Temos oportunidades para todos os perfis e níveis de experiência. Cada ação tem requisitos específicos, e muitas delas não exigem experiência prévia.",
  },
  {
    question: "Como funciona o sistema de pontos?",
    answer:
      "Você ganha pontos ao completar ações voluntárias (50-250 pts), convidar amigos (100 pts), manter streaks semanais (50 pts) e receber avaliações positivas (25 pts). Os pontos podem ser trocados por recompensas reais.",
  },
  {
    question: "Posso participar de ações online?",
    answer:
      "Sim! Oferecemos diversas oportunidades remotas como mentoria, aulas de reforço, tradução de materiais e muito mais. Basta filtrar por 'Online' na busca.",
  },
  {
    question: "Como as ONGs validam minha participação?",
    answer:
      "Após cada ação, a organização responsável confirma sua presença e avalia sua contribuição. Os pontos são creditados automaticamente após a validação.",
  },
  {
    question: "Posso resgatar recompensas a qualquer momento?",
    answer:
      "Sim, desde que tenha pontos suficientes! O catálogo é atualizado frequentemente com novos parceiros e prêmios. Alguns itens têm estoque limitado.",
  },
];

export default function ComoFuncionaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-hero-enhanced">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[15%] w-72 h-72 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-gradient-to-br from-accent/6 to-accent/2 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Simples e Intuitivo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6 font-[family-name:var(--font-poppins)] tracking-tight"
          >
            Como o EcoLink{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #22C55E 0%, #14B8A6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              funciona
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Em apenas 5 passos, você começa a transformar o mundo e a ser
            recompensado por cada ação voluntária
          </motion.p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-accent/20 to-[#FACC15]/20 -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-primary/20 items-center justify-center z-10">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient}`}
                      />
                    </div>

                    {/* Card */}
                    <div className="lg:w-[calc(50%-3rem)]">
                      <motion.div
                        whileHover={{ y: -6 }}
                        className={`card-premium rounded-3xl p-8 relative overflow-hidden`}
                      >
                        {/* Step number watermark */}
                        <div className="absolute top-4 right-6 text-7xl font-bold text-muted/50 font-[family-name:var(--font-poppins)] select-none pointer-events-none">
                          {step.number}
                        </div>

                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg ${step.shadowColor}`}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-5">
                          {step.description}
                        </p>

                        {/* Details list */}
                        <div className="space-y-2.5">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center gap-3 text-sm"
                            >
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Preview */}
      <section className="py-24 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-sm font-semibold text-foreground">
                Gamificação
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
              Voluntariado com{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                recompensas
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Um sistema completo de gamificação para tornar cada ação ainda mais
              gratificante
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamificationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-premium rounded-3xl p-7 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <p className="text-3xl font-bold text-foreground mb-1 font-[family-name:var(--font-poppins)]">
                  {feature.value}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre a plataforma
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className={`w-full card-premium rounded-2xl p-6 text-left transition-all ${
                    openFaq === index
                      ? "border-2 border-primary/20"
                      : "border-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-foreground text-lg">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-muted-foreground mt-4 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-primary-animated rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-8"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-poppins)] tracking-tight">
                Pronto para fazer a diferença?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Junte-se a mais de 15.000 voluntários que já estão transformando
                o mundo e sendo recompensados por isso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cadastro">
                  <Button
                    size="lg"
                    className="bg-white text-foreground hover:bg-white/90 transition-all text-base px-8 py-6 rounded-xl shadow-lg group font-semibold"
                  >
                    Começar Agora — É Grátis
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/oportunidades">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 transition-all text-base px-8 py-6 rounded-xl"
                  >
                    Ver Oportunidades
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
