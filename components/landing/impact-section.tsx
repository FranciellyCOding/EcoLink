"use client";

import { motion } from "framer-motion";
import { TreePine, Users, Heart, Globe, Award, Clock } from "lucide-react";

const impactStats = [
  { icon: TreePine, value: "12,500+", label: "Árvores Plantadas", color: "text-primary" },
  { icon: Users, value: "15,420", label: "Voluntários Ativos", color: "text-accent" },
  { icon: Heart, value: "45,678", label: "Ações Realizadas", color: "text-primary" },
  { icon: Globe, value: "234", label: "ONGs Parceiras", color: "text-accent" },
  { icon: Award, value: "2.3M+", label: "Pontos Distribuídos", color: "text-[#FACC15]" },
  { icon: Clock, value: "156K", label: "Horas Voluntárias", color: "text-primary" },
];

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Nosso Impacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            Juntos, estamos mudando o mundo
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Números que mostram o poder da comunidade EcoLink em transformar realidades
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
              <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-poppins)]">
                {stat.value}
              </p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/90 text-lg mb-2">Faça parte dessa história</p>
          <p className="text-white text-2xl font-semibold font-[family-name:var(--font-poppins)]">
            Sua próxima ação pode mudar uma vida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
