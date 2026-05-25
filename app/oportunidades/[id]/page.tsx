"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Calendar, Clock, Users, Share2, Heart,
  CheckCircle, AlertCircle, Leaf, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockOpportunities } from "@/lib/mock-data";
import { use } from "react";

export default function OpportunityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isParticipating, setIsParticipating] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const opportunity = mockOpportunities.find((opp) => opp.id === id) || mockOpportunities[0];

  const handleParticipate = () => {
    setIsParticipating(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/oportunidades" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-colors ${isFavorite ? "bg-red-100 text-red-500" : "hover:bg-muted text-muted-foreground"}`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
              </button>
              <button className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden"
            >
              <Image
                src={opportunity.image}
                alt={opportunity.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-poppins)]">
                  {opportunity.title}
                </h1>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
                Sobre a Ação
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {opportunity.description}
              </p>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-xl font-semibold text-foreground mb-4 font-[family-name:var(--font-poppins)]">
                O que levar
              </h2>
              <ul className="space-y-3">
                {opportunity.requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Location Map (Mock) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl overflow-hidden border border-border"
            >
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Localização
                </h2>
              </div>
              <div className="h-64 bg-muted relative">
                {/* Mock Map */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-foreground font-medium">{opportunity.location}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mapa interativo disponível no app
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sticky Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 space-y-6"
            >
              {/* Action Card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                {/* Points Badge */}
                <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FACC15]/10 mb-6">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-sm text-muted-foreground">Recompensa</p>
                    <p className="text-xl font-bold text-[#FACC15]">+{opportunity.points} pontos</p>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="font-medium text-foreground">{opportunity.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horário</p>
                      <p className="font-medium text-foreground">{opportunity.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Local</p>
                      <p className="font-medium text-foreground">{opportunity.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vagas</p>
                      <p className="font-medium text-foreground">
                        {opportunity.participants}/{opportunity.maxParticipants} inscritos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Vagas preenchidas</span>
                    <span className="font-medium text-foreground">
                      {Math.round((opportunity.participants / opportunity.maxParticipants) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div 
                      className="h-full gradient-primary rounded-full transition-all"
                      style={{ width: `${(opportunity.participants / opportunity.maxParticipants) * 100}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                {isParticipating ? (
                  <div className="text-center py-4 px-6 rounded-xl bg-primary/10">
                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium text-primary">Inscrição confirmada!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Você receberá mais informações por e-mail
                    </p>
                  </div>
                ) : (
                  <Button
                    onClick={handleParticipate}
                    className="w-full h-12 rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg"
                  >
                    Quero Participar
                  </Button>
                )}
              </div>

              {/* Organization Card */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-sm text-muted-foreground mb-4">Organizado por</h3>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                    <Image
                      src={opportunity.organizationLogo}
                      alt={opportunity.organization}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{opportunity.organization}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>ONG Verificada</span>
                    </div>
                  </div>
                </div>
                <Link href="/ong/1">
                  <Button variant="outline" className="w-full mt-4 rounded-xl">
                    Ver perfil da ONG
                  </Button>
                </Link>
              </div>

              {/* Impact Card */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Impacto esperado</h3>
                </div>
                <p className="text-2xl font-bold text-primary font-[family-name:var(--font-poppins)]">
                  {opportunity.impact}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Juntos podemos fazer a diferença!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
