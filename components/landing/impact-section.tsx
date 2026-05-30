"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TreePine, Users, Heart, Globe, Award, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const impactStats = [
  { icon: TreePine, value: 12500, label: "Árvores Plantadas", suffix: "+" },
  { icon: Users, value: 15420, label: "Voluntários Ativos", suffix: "" },
  { icon: Heart, value: 45678, label: "Ações Realizadas", suffix: "" },
  { icon: Globe, value: 234, label: "ONGs Parceiras", suffix: "" },
  { icon: Award, value: 2300000, label: "Pontos Distribuídos", suffix: "+" },
  { icon: Clock, value: 156000, label: "Horas Voluntárias", suffix: "" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value >= 1000000) {
      return `${(latest / 1000000).toFixed(1)}M${suffix}`;
    }
    if (value >= 1000) {
      return `${Math.round(latest / 1000)}K${suffix}`;
    }
    return `${Math.round(latest).toLocaleString()}${suffix}`;
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ImpactSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary-animated" />
      
      {/* Animated decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"
      />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Nosso Impacto em Tempo Real
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 font-[family-name:var(--font-poppins)] tracking-tight">
            Juntos, estamos mudando o mundo
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Números que mostram o poder da comunidade EcoLink em transformar realidades todos os dias
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/25 transition-all">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-poppins)] mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
            <p className="text-white/90 text-lg">Faça parte dessa história</p>
            <p className="text-white text-2xl font-bold font-[family-name:var(--font-poppins)]">
              Sua próxima ação pode mudar uma vida
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
