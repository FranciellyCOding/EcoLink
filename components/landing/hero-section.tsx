"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, TreePine, Heart, Award, Sparkles, Play, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15K+", label: "Voluntários Ativos", icon: Users },
  { value: "45K+", label: "Ações Realizadas", icon: Heart },
  { value: "234", label: "ONGs Parceiras", icon: Award },
  { value: "12K+", label: "Árvores Plantadas", icon: TreePine },
];

const features = [
  "Ganhe pontos por cada ação",
  "Conquiste badges exclusivos",
  "Troque por recompensas reais",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero-enhanced">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 10, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0], 
            x: [0, -15, 0],
            scale: [1, 1.15, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-accent/8 to-accent/3 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-[#FACC15]/8 to-[#FACC15]/3 rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Mais de 15.000 voluntários transformando o mundo</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 font-[family-name:var(--font-poppins)] text-balance tracking-tight"
            >
              Transforme o mundo,{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text gradient-primary">
                  uma ação de cada vez
                </span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 5 T 198 3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              Conecte-se a ONGs e projetos sociais, ganhe pontos por suas ações voluntárias 
              e faça parte de uma comunidade que está mudando o planeta.
            </motion.p>

            {/* Feature list */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/cadastro">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground hover:opacity-90 transition-all text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 group btn-premium relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Começar Agora - É Grátis
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/oportunidades">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 rounded-xl border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Ver Como Funciona
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-border/50"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center lg:text-left group"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-primary/15"
              />
              
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-dotted border-accent/20"
              />
              
              {/* Center Element */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-20 rounded-full gradient-primary shadow-2xl shadow-primary/25 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TreePine className="w-20 h-20 text-primary-foreground drop-shadow-lg" />
                </motion.div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-20 bg-card rounded-2xl shadow-xl p-4 border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Voluntários hoje</p>
                    <p className="text-lg font-bold text-foreground">+127</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-8 bg-card rounded-2xl shadow-xl p-4 border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Vidas impactadas</p>
                    <p className="text-lg font-bold text-foreground">8.9K</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 left-0 w-14 h-14 rounded-2xl bg-card shadow-lg border border-border/50 flex items-center justify-center"
              >
                <Award className="w-7 h-7 text-[#FACC15]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/3 right-0 w-14 h-14 rounded-2xl bg-card shadow-lg border border-border/50 flex items-center justify-center"
              >
                <Sparkles className="w-7 h-7 text-primary animate-glow" />
              </motion.div>

              {/* Points notification */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute bottom-16 right-4 bg-card rounded-2xl shadow-xl p-4 border border-[#FACC15]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-reward flex items-center justify-center shadow-lg shadow-[#FACC15]/25">
                    <span className="text-lg font-bold text-foreground">+</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pontos ganhos</p>
                    <p className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">150 pts</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
