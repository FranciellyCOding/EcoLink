"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  CalendarPlus,
  BarChart3,
  CheckCircle2,
  Shield,
  Award,
  TrendingUp,
  Building2,
  Sparkles,
  Globe,
  Heart,
  Clock,
  TreePine,
  FileCheck,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: CalendarPlus,
    title: "Criar Oportunidades",
    description:
      "Publique ações voluntárias em minutos com nosso editor intuitivo. Defina data, local, requisitos e quantas vagas estão disponíveis.",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: Users,
    title: "Gerenciar Voluntários",
    description:
      "Visualize inscrições, aprove participantes, envie mensagens e forme equipes organizadas para cada ação da sua ONG.",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Acompanhar Impacto",
    description:
      "Dashboard completo com métricas de impacto: horas voluntárias, pessoas impactadas, ações realizadas e evolução mensal.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: CheckCircle2,
    title: "Validar Participação",
    description:
      "Confirme a presença dos voluntários com um clique. Os pontos são creditados automaticamente na conta de cada participante.",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    icon: Shield,
    title: "Acessar Analytics",
    description:
      "Relatórios detalhados sobre desempenho, engajamento e retenção de voluntários. Exporte dados para prestação de contas.",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    icon: Award,
    title: "Certificados Automáticos",
    description:
      "Emita certificados digitais de participação automaticamente para cada voluntário. Personalize com a identidade da sua ONG.",
    gradient: "from-rose-400 to-pink-500",
  },
];

const stats = [
  { value: "234", label: "ONGs Cadastradas", icon: Building2 },
  { value: "15K+", label: "Voluntários Ativos", icon: Users },
  { value: "45K+", label: "Ações Realizadas", icon: Heart },
  { value: "120K+", label: "Horas Voluntárias", icon: Clock },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Cadastre sua ONG",
    description:
      "Crie o perfil institucional da sua organização com logo, missão e áreas de atuação.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Publique Oportunidades",
    description:
      "Crie ações voluntárias com data, local, requisitos e número de vagas em poucos minutos.",
    icon: CalendarPlus,
  },
  {
    number: "03",
    title: "Gerencie e Cresça",
    description:
      "Acompanhe inscrições, valide participações e veja o impacto da sua organização crescer.",
    icon: TrendingUp,
  },
];

const dashboardStats = [
  {
    label: "Total de Voluntários",
    value: "1.234",
    change: "+12%",
    icon: Users,
    gradient: "from-emerald-400 to-green-500",
  },
  {
    label: "Horas Voluntárias",
    value: "15.600",
    change: "+8%",
    icon: Clock,
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    label: "Árvores Plantadas",
    value: "12.500",
    change: "+24%",
    icon: TreePine,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    label: "Pessoas Impactadas",
    value: "8.900",
    change: "+15%",
    icon: Heart,
    gradient: "from-rose-400 to-pink-500",
  },
];

export default function ParaOngsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden gradient-hero-enhanced">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[15%] w-80 h-80 bg-gradient-to-br from-primary/8 to-primary/3 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-gradient-to-br from-accent/6 to-accent/2 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
              >
                <Building2 className="w-4 h-4" />
                Para Organizações
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6 font-[family-name:var(--font-poppins)] tracking-tight"
              >
                Conecte sua ONG a{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #22C55E 0%, #14B8A6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  milhares de voluntários
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Publique oportunidades, gerencie equipes e acompanhe o impacto
                da sua organização com uma plataforma moderna e gratuita.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/cadastro?tipo=instituicao">
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground hover:opacity-90 transition-all text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 group btn-premium"
                  >
                    <span className="relative z-10 flex items-center">
                      Cadastrar Instituição
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Link href="/como-funciona">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 py-6 rounded-xl border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Como Funciona
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — Stats Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="card-premium rounded-2xl p-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Recursos da Plataforma
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
              Tudo que sua ONG precisa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ferramentas completas para gerenciar voluntários, publicar ações e
              medir o impacto da sua organização
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="card-premium rounded-3xl p-8 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
              Dashboard{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #22C55E 0%, #14B8A6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                completo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Acompanhe todas as métricas da sua organização em tempo real
            </p>
          </motion.div>

          {/* Mock Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-premium rounded-3xl p-8 sm:p-10 overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-poppins)]">
                      ONG Verde Esperança
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Dashboard de Impacto
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  8 ações ativas
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-muted/30 rounded-2xl p-5 border border-border/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}
                      >
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mock Chart Area */}
              <div className="bg-muted/20 rounded-2xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-foreground">
                    Voluntários por Mês
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    Últimos 6 meses
                  </span>
                </div>
                {/* Simplified bar chart */}
                <div className="flex items-end gap-3 h-40">
                  {[
                    { month: "Jan", height: 48 },
                    { month: "Fev", height: 58 },
                    { month: "Mar", height: 72 },
                    { month: "Abr", height: 84 },
                    { month: "Mai", height: 98 },
                    { month: "Jun", height: 76 },
                  ].map((bar, index) => (
                    <div
                      key={bar.month}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar.height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        className="w-full gradient-primary rounded-lg min-h-[8px]"
                      />
                      <span className="text-xs text-muted-foreground">
                        {bar.month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Applications Preview */}
              <div className="mt-6 bg-muted/20 rounded-2xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">
                    Inscrições Recentes
                  </h4>
                  <span className="text-sm text-primary cursor-pointer hover:underline">
                    Ver todas
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "João Silva",
                      action: "Plantio de Árvores",
                      status: "pending",
                    },
                    {
                      name: "Maria Santos",
                      action: "Plantio de Árvores",
                      status: "approved",
                    },
                    {
                      name: "Carlos Ferreira",
                      action: "Mutirão de Limpeza",
                      status: "pending",
                    },
                  ].map((app) => (
                    <div
                      key={app.name}
                      className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {app.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {app.action}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          app.status === "approved"
                            ? "bg-primary/10 text-primary"
                            : "bg-amber-500/10 text-amber-600"
                        }`}
                      >
                        {app.status === "approved" ? "Aprovado" : "Pendente"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-[1.5rem] -z-10 blur-sm" />
          </motion.div>
        </div>
      </section>

      {/* How It Works for NGOs */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
              Comece em 3 passos
            </h2>
            <p className="text-lg text-muted-foreground">
              É simples, rápido e totalmente gratuito
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-20 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-premium rounded-3xl p-8 text-center relative z-10"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl gradient-primary text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-poppins)]">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium rounded-3xl p-10 sm:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/3 rounded-full blur-3xl" />

            <div className="relative text-center">
              <div className="text-6xl text-primary/20 mb-6 font-serif">
                &ldquo;
              </div>
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                Encontramos voluntários incríveis através da plataforma. A
                gestão ficou muito mais fácil e organizada. O EcoLink
                transformou a forma como conectamos pessoas às nossas causas.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  RM
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    Ricardo Mendes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Diretor — ONG Vida Verde
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-card">
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
                <Building2 className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-poppins)] tracking-tight">
                Pronto para ampliar seu impacto?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Cadastre sua organização gratuitamente e conecte-se a milhares
                de voluntários engajados em transformar o mundo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cadastro?tipo=instituicao">
                  <Button
                    size="lg"
                    className="bg-white text-foreground hover:bg-white/90 transition-all text-base px-8 py-6 rounded-xl shadow-lg group font-semibold"
                  >
                    Cadastrar Minha ONG
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/como-funciona">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 transition-all text-base px-8 py-6 rounded-xl"
                  >
                    Saiba Mais
                    <ChevronRight className="w-4 h-4 ml-1" />
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
