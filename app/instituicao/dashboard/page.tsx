"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, Home, CalendarPlus, Users, BarChart3, Settings,
  Plus, MoreHorizontal, Eye, Edit, Trash2, CheckCircle,
  XCircle, Clock, TrendingUp, UserPlus, Calendar, MapPin, ChevronDown, 
  Activity, Target, TreePine, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockInstitution, mockOpportunities } from "@/lib/mock-data";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const sidebarLinks = [
  { href: "/instituicao/dashboard", label: "Dashboard", icon: Home },
  { href: "/instituicao/oportunidades", label: "Oportunidades", icon: CalendarPlus },
  { href: "/instituicao/candidatos", label: "Candidatos", icon: Users },
  { href: "/instituicao/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/instituicao/configuracoes", label: "Configurações", icon: Settings },
];

export default function InstitutionDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { 
      label: "Oportunidades Ativas", 
      value: mockInstitution.activeOpportunities, 
      icon: CalendarPlus, 
      gradient: "from-emerald-400 to-green-500",
      change: "+12%",
      changeType: "positive"
    },
    { 
      label: "Total de Voluntários", 
      value: mockInstitution.totalVolunteers.toLocaleString(), 
      icon: Users, 
      gradient: "from-teal-400 to-cyan-500",
      change: "+8%",
      changeType: "positive"
    },
    { 
      label: "Horas Voluntárias", 
      value: mockInstitution.totalHours.toLocaleString(), 
      icon: Clock, 
      gradient: "from-amber-400 to-yellow-500",
      change: "+15%",
      changeType: "positive"
    },
    { 
      label: "Candidatos Pendentes", 
      value: mockInstitution.recentApplications.filter(a => a.status === "pending").length, 
      icon: UserPlus, 
      gradient: "from-orange-400 to-red-500",
      change: "2 novos",
      changeType: "neutral"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-card/95 backdrop-blur-xl border-r border-border/50 transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border/50">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Eco<span className="text-primary">Link</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-4">
              Menu Principal
            </p>
            <ul className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = link.href === "/instituicao/dashboard";
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive 
                          ? "bg-gradient-to-r from-primary/10 to-accent/5 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <link.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-primary/20">
                <Image
                  src={mockInstitution.logo}
                  alt={mockInstitution.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">
                  {mockInstitution.name}
                </p>
                <p className="text-xs text-muted-foreground">Instituição</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 glass-effect-strong border-b border-border/50">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Dashboard
              </h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Bem-vindo de volta, {mockInstitution.name}
              </p>
            </div>
            <Link href="/instituicao/nova-oportunidade">
              <Button className="gradient-primary text-primary-foreground btn-premium shadow-lg shadow-primary/20">
                <Plus className="w-4 h-4 mr-2" />
                Nova Oportunidade
              </Button>
            </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    stat.changeType === "positive" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {stat.changeType === "positive" && <TrendingUp className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Volunteers Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-premium rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                      Voluntários por Mês
                    </h2>
                    <p className="text-sm text-muted-foreground">Crescimento mensal</p>
                  </div>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockInstitution.monthlyVolunteers}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                    <XAxis dataKey="month" stroke="#94A3B8" tickLine={false} axisLine={false} />
                    <YAxis stroke="#94A3B8" tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.98)', 
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="volunteers" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22C55E" />
                        <stop offset="100%" stopColor="#14B8A6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-premium rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-reward flex items-center justify-center">
                    <Target className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                      Métricas de Impacto
                    </h2>
                    <p className="text-sm text-muted-foreground">Resultados acumulados</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: "Árvores Plantadas", value: mockInstitution.impactMetrics.treesPlanted.toLocaleString(), max: 20000, color: "from-emerald-400 to-green-500", icon: TreePine },
                  { label: "Áreas Recuperadas (ha)", value: mockInstitution.impactMetrics.areasRecovered, max: 100, color: "from-teal-400 to-cyan-500", icon: MapPin },
                  { label: "Pessoas Impactadas", value: mockInstitution.impactMetrics.peopleImpacted.toLocaleString(), max: 15000, color: "from-amber-400 to-yellow-500", icon: Users },
                ].map((metric, index) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                          <metric.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{metric.label}</span>
                      </div>
                      <span className="font-bold text-foreground">{metric.value}</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseInt(metric.value.replace(/,/g, '')) / metric.max) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-premium rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    Candidaturas Recentes
                  </h2>
                  <p className="text-sm text-muted-foreground">Gerenciar novos voluntários</p>
                </div>
              </div>
              <Link href="/instituicao/candidatos">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  Ver todas <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Voluntário</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Oportunidade</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Data</th>
                    <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                    <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {mockInstitution.recentApplications.map((application, index) => (
                    <motion.tr 
                      key={application.id} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{application.volunteer}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{application.opportunity}</td>
                      <td className="py-4 px-4 text-muted-foreground">{application.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                          application.status === "approved" 
                            ? "bg-primary/10 text-primary" 
                            : application.status === "pending"
                            ? "bg-amber-500/10 text-amber-600"
                            : "bg-red-500/10 text-red-600"
                        }`}>
                          {application.status === "approved" && <CheckCircle className="w-3.5 h-3.5" />}
                          {application.status === "pending" && <Clock className="w-3.5 h-3.5" />}
                          {application.status === "rejected" && <XCircle className="w-3.5 h-3.5" />}
                          {application.status === "approved" ? "Aprovado" : application.status === "pending" ? "Pendente" : "Rejeitado"}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-1">
                          {application.status === "pending" && (
                            <>
                              <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 rounded-lg">
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg">
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="ghost" className="rounded-lg">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Active Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-premium rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <CalendarPlus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                    Oportunidades Ativas
                  </h2>
                  <p className="text-sm text-muted-foreground">Gerenciar suas oportunidades</p>
                </div>
              </div>
              <Link href="/instituicao/oportunidades">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  Ver todas <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockOpportunities.slice(0, 3).map((opp, index) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-lg transition-all bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-foreground line-clamp-2 leading-snug">{opp.title}</h3>
                    <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{opp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{opp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{opp.participants}</span>
                      <span className="text-muted-foreground">/{opp.maxParticipants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost" className="rounded-lg h-8 w-8 p-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="rounded-lg h-8 w-8 p-0 text-red-500 hover:text-red-500 hover:bg-red-500/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
