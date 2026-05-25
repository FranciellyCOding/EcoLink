"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const partners = [
  { name: "Natura", logo: "N" },
  { name: "Grupo Boticário", logo: "GB" },
  { name: "Ambev", logo: "A" },
  { name: "Itaú", logo: "I" },
  { name: "Magazine Luiza", logo: "ML" },
  { name: "Nubank", logo: "NU" },
  { name: "iFood", logo: "iF" },
  { name: "99", logo: "99" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">
              Empresas e ONGs que confiam na EcoLink
            </span>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center w-24 h-16 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
            >
              <span className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {partner.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
