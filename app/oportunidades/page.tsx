"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, MapPin, Calendar, Users, Filter, 
  ChevronDown, X, Leaf, Bell, User, Menu, Star, Sparkles,
  Award, Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockOpportunities, categories } from "@/lib/mock-data";

export default function OportunidadesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mockNotifications = [
    { id: 1, type: "points", title: "Você ganhou +50 pontos", description: "Participação no plantio de árvores confirmada", time: "Há 5 min", unread: true },
    { id: 2, type: "opportunity", title: "Nova oportunidade disponível", description: "Coleta de resíduos na Praia do Campeche", time: "Há 1 hora", unread: true },
    { id: 3, type: "confirmation", title: "Sua participação foi confirmada", description: "Aulas de Reforço Escolar - 20 Jun", time: "Há 3 horas", unread: true },
    { id: 4, type: "badge", title: "Novo badge desbloqueado!", description: "Você conquistou o badge 'Protetor dos Mares'", time: "Há 1 dia", unread: false },
    { id: 5, type: "reward", title: "Recompensa disponível para resgate", description: "Você tem pontos suficientes para o Cupom Natura", time: "Há 2 dias", unread: false },
  ];

  const notificationIcons: Record<string, React.ReactNode> = {
    points: <Star className="w-4 h-4 text-amber-500" />,
    opportunity: <Sparkles className="w-4 h-4 text-primary" />,
    confirmation: <Calendar className="w-4 h-4 text-teal-500" />,
    badge: <Award className="w-4 h-4 text-purple-500" />,
    reward: <Gift className="w-4 h-4 text-rose-500" />,
  };

  const notificationColors: Record<string, string> = {
    points: "bg-amber-500/10",
    opportunity: "bg-primary/10",
    confirmation: "bg-teal-500/10",
    badge: "bg-purple-500/10",
    reward: "bg-rose-500/10",
  };

  const filteredOpportunities = mockOpportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || opp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect-strong border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20"
              >
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-lg font-bold text-foreground font-[family-name:var(--font-poppins)] hidden sm:block">
                Eco<span className="text-primary">Link</span>
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Buscar oportunidades..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-xl bg-muted/50 border-0 focus:bg-card focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="relative" ref={notificationRef}>
                <button 
                  className="relative p-2.5 rounded-xl hover:bg-muted transition-all group"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                >
                  <Bell className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </button>

                <AnimatePresence>
                  {notificationsOpen && (
                    <>
                      {/* Mobile backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
                        onClick={() => setNotificationsOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-96 bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden z-50"
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground font-[family-name:var(--font-poppins)]">Notificações</h3>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                              {mockNotifications.filter(n => n.unread).length}
                            </span>
                          </div>
                          <button 
                            className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                            onClick={() => setNotificationsOpen(false)}
                          >
                            Marcar todas como lidas
                          </button>
                        </div>

                        {/* Notification List */}
                        <div className="max-h-[380px] overflow-y-auto">
                          {mockNotifications.map((notification, index) => (
                            <motion.div
                              key={notification.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className={`flex items-start gap-3 px-5 py-4 hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/30 last:border-b-0 ${
                                notification.unread ? "bg-primary/[0.03]" : ""
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl ${notificationColors[notification.type]} flex items-center justify-center shrink-0 mt-0.5`}>
                                {notificationIcons[notification.type]}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <p className={`text-sm leading-snug ${notification.unread ? "font-semibold text-foreground" : "font-medium text-muted-foreground"}`}>
                                    {notification.title}
                                  </p>
                                  {notification.unread && (
                                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                  {notification.description}
                                </p>
                                <p className="text-xs text-muted-foreground/70 mt-1">
                                  {notification.time}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-3 border-t border-border/50 bg-muted/30">
                          <button className="w-full text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors py-1">
                            Ver todas as notificações
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/perfil">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center hover:from-primary/30 hover:to-accent/20 transition-all">
                  <User className="w-5 h-5 text-primary" />
                </div>
              </Link>
              <button 
                className="md:hidden p-2.5 rounded-xl hover:bg-muted transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="md:hidden pb-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar oportunidades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-muted/50 border-0 focus:bg-card transition-all"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-poppins)] tracking-tight">
            Oportunidades
          </h1>
          <p className="text-muted-foreground mt-2">
            {filteredOpportunities.length} oportunidades encontradas para você fazer a diferença
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 shrink-0">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-4 justify-between rounded-xl h-12"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filtros
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>

            {/* Filter Content */}
            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              {/* Categories */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-premium rounded-2xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Categorias
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-primary/10 to-accent/5 text-primary border border-primary/20"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Location Filter */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="card-premium rounded-2xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-4">Localização</h3>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Cidade ou estado"
                    className="pl-11 h-11 rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Date Filter */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="card-premium rounded-2xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-4">Data</h3>
                <div className="space-y-1">
                  {["Esta semana", "Este mês", "Próximos 3 meses", "Qualquer data"].map((option) => (
                    <button
                      key={option}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </aside>

          {/* Opportunities Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {selectedCategory !== "all" && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="text-sm text-muted-foreground">Filtros ativos:</span>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/oportunidades/${opportunity.id}`}>
                    <div className="card-interactive bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 group">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={opportunity.image}
                          alt={opportunity.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Points Badge */}
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="absolute top-3 right-3 px-3 py-1.5 rounded-full gradient-reward text-foreground text-sm font-bold shadow-lg"
                        >
                          +{opportunity.points} pts
                        </motion.div>

                        {/* Organization */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-2 ring-white/50">
                            <Image
                              src={opportunity.organizationLogo}
                              alt={opportunity.organization}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm text-white font-medium drop-shadow-md">
                            {opportunity.organization}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {opportunity.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                          {opportunity.title}
                        </h3>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{opportunity.date}</span>
                          </div>
                        </div>

                        {/* Participants Progress */}
                        <div className="pt-4 border-t border-border/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Users className="w-4 h-4" />
                              <span className="font-medium text-foreground">{opportunity.participants}</span>
                              <span>/{opportunity.maxParticipants}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {Math.round((opportunity.participants / opportunity.maxParticipants) * 100)}% preenchido
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(opportunity.participants / opportunity.maxParticipants) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              className="h-full gradient-primary rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredOpportunities.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhuma oportunidade encontrada
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar seus filtros ou busca
                </p>
                <Button onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }} className="gradient-primary text-white">
                  Limpar filtros
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
