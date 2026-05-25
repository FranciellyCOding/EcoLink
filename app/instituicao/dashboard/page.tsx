"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, Home, CalendarPlus, Users, BarChart3, Settings,
  Plus, MoreHorizontal, Eye, Edit, Trash2, CheckCircle,
  XCircle, Clock, TrendingUp, UserPlus, Calendar, MapPin, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Eco<span className="text-primary">Link</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ${
                      link.href === "/instituicao/dashboard" ? "bg-primary/10 text-primary" : ""
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={mockInstitution.logo}
                  alt={mockInstitution.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">
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
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 glass-effect border-b border-border">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)]">
              Dashboard
            </h1>
            <Link href="/instituicao/nova-oportunidade">
              <Button className="gradient-primary text-primary-foreground">
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
            {[
              { label: "Oportunidades Ativas", value: mockInstitution.activeOpportunities, icon: CalendarPlus, color: "text-primary", bg: "bg-primary/10" },
              { label: "Total de Voluntários", value: mockInstitution.totalVolunteers.toLocaleString(), icon: Users, color: "text-accent", bg: "bg-accent/10" },
              { label: "Horas Voluntárias", value: mockInstitution.totalHours.toLocaleString(), icon: Clock, color: "text-[#FACC15]", bg: "bg-[#FACC15]/10" },
              { label: "Candidatos Pendentes", value: mockInstitution.recentApplications.filter(a => a.status === "pending").length, icon: UserPlus, color: "text-orange-500", bg: "bg-orange-500/10" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
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
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Voluntários por Mês
              </h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockInstitution.monthlyVolunteers}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px'
                      }}
                    />
                    <Bar dataKey="volunteers" fill="#22C55E" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Métricas de Impacto
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Árvores Plantadas", value: mockInstitution.impactMetrics.treesPlanted.toLocaleString(), max: 20000, color: "bg-primary" },
                  { label: "Áreas Recuperadas (ha)", value: mockInstitution.impactMetrics.areasRecovered, max: 100, color: "bg-accent" },
                  { label: "Pessoas Impactadas", value: mockInstitution.impactMetrics.peopleImpacted.toLocaleString(), max: 15000, color: "bg-[#FACC15]" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className="font-semibold text-foreground">{metric.value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(parseInt(metric.value.replace(/,/g, '')) / metric.max) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full ${metric.color} rounded-full`}
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
            className="bg-card rounded-2xl p-6 border border-border mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                Candidaturas Recentes
              </h2>
              <Link href="/instituicao/candidatos">
                <Button variant="ghost" size="sm" className="text-primary">
                  Ver todas
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Voluntário</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Oportunidade</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Data</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {mockInstitution.recentApplications.map((application) => (
                    <tr key={application.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{application.volunteer}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{application.opportunity}</td>
                      <td className="py-4 px-4 text-muted-foreground">{application.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          application.status === "approved" 
                            ? "bg-primary/10 text-primary" 
                            : application.status === "pending"
                            ? "bg-[#FACC15]/10 text-[#FACC15]"
                            : "bg-red-100 text-red-600"
                        }`}>
                          {application.status === "approved" && <CheckCircle className="w-3 h-3" />}
                          {application.status === "pending" && <Clock className="w-3 h-3" />}
                          {application.status === "rejected" && <XCircle className="w-3 h-3" />}
                          {application.status === "approved" ? "Aprovado" : application.status === "pending" ? "Pendente" : "Rejeitado"}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          {application.status === "pending" && (
                            <>
                              <Button size="sm" variant="ghost" className="text-primary">
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" className="text-red-500">
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
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
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                Oportunidades Ativas
              </h2>
              <Link href="/instituicao/oportunidades">
                <Button variant="ghost" size="sm" className="text-primary">
                  Ver todas
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
                  className="rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-foreground line-clamp-2">{opp.title}</h3>
                    <button className="p-1 hover:bg-muted rounded">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{opp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{opp.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{opp.participants}</span>
                      <span className="text-muted-foreground">/{opp.maxParticipants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-500">
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
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
