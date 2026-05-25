"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, Home, Users, Building2, CalendarCheck, Star, BarChart3, 
  Settings, Shield, Search, Bell, MoreHorizontal, Eye, Ban, CheckCircle,
  TrendingUp, AlertTriangle, FileText, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockAdminStats } from "@/lib/mock-data";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/usuarios", label: "Usuários", icon: Users },
  { href: "/admin/instituicoes", label: "Instituições", icon: Building2 },
  { href: "/admin/oportunidades", label: "Oportunidades", icon: CalendarCheck },
  { href: "/admin/pontos", label: "Sistema de Pontos", icon: Star },
  { href: "/admin/relatorios", label: "Relatórios", icon: FileText },
  { href: "/admin/configuracoes", label: "Configurações", icon: Settings },
];

const COLORS = ['#22C55E', '#14B8A6', '#FACC15', '#3B82F6', '#8B5CF6'];

const recentUsers = [
  { id: "1", name: "João Silva", email: "joao@email.com", type: "Voluntário", status: "active", joined: "Hoje" },
  { id: "2", name: "Maria Santos", email: "maria@email.com", type: "Voluntário", status: "active", joined: "Ontem" },
  { id: "3", name: "ONG Vida Verde", email: "contato@vidaverde.org", type: "Instituição", status: "pending", joined: "Há 2 dias" },
  { id: "4", name: "Carlos Ferreira", email: "carlos@email.com", type: "Voluntário", status: "active", joined: "Há 3 dias" },
  { id: "5", name: "Instituto Educar", email: "contato@educar.org", type: "Instituição", status: "pending", joined: "Há 3 dias" },
];

const recentReports = [
  { id: "1", type: "Conteúdo impróprio", target: "Oportunidade #123", reporter: "João Silva", date: "Hoje" },
  { id: "2", type: "Spam", target: "Usuário #456", reporter: "Maria Santos", date: "Ontem" },
  { id: "3", type: "Informação falsa", target: "Instituição #789", reporter: "Carlos Ferreira", date: "Há 2 dias" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-foreground transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-background/10">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-background font-[family-name:var(--font-poppins)]">
                  Eco<span className="text-primary">Link</span>
                </span>
                <p className="text-xs text-background/50">Painel Admin</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-background/60 hover:text-background hover:bg-background/10 transition-colors ${
                      link.href === "/admin" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Admin Profile */}
          <div className="p-4 border-t border-background/10">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-background/10 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-background text-sm truncate">Admin Master</p>
                <p className="text-xs text-background/50">Super Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-background/50" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 glass-effect border-b border-border">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden sm:block relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-9 h-9 rounded-full bg-muted border-0"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Painel Administrativo
            </h1>
            <p className="text-muted-foreground">Visão geral da plataforma EcoLink</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total de Usuários", value: mockAdminStats.totalUsers.toLocaleString(), icon: Users, color: "text-primary", bg: "bg-primary/10", change: "+12%" },
              { label: "Instituições", value: mockAdminStats.totalInstitutions, icon: Building2, color: "text-accent", bg: "bg-accent/10", change: "+8%" },
              { label: "Oportunidades", value: mockAdminStats.totalOpportunities.toLocaleString(), icon: CalendarCheck, color: "text-[#FACC15]", bg: "bg-[#FACC15]/10", change: "+15%" },
              { label: "Ações Concluídas", value: mockAdminStats.totalActionsCompleted.toLocaleString(), icon: CheckCircle, color: "text-primary", bg: "bg-primary/10", change: "+23%" },
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
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#FACC15]/10 border border-[#FACC15]/30 rounded-2xl p-4 mb-8"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FACC15]" />
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {mockAdminStats.pendingApprovals} instituições aguardando aprovação
                </p>
                <p className="text-sm text-muted-foreground">
                  {mockAdminStats.reportedContent} denúncias de conteúdo pendentes
                </p>
              </div>
              <Link href="/admin/pendentes">
                <Button size="sm" variant="outline">
                  Revisar
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* User Growth Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Crescimento de Usuários
              </h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockAdminStats.userGrowth}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
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
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#22C55E" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorUsers)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Category Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h2 className="text-lg font-semibold text-foreground mb-6 font-[family-name:var(--font-poppins)]">
                Oportunidades por Categoria
              </h2>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockAdminStats.categoryDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {mockAdminStats.categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {mockAdminStats.categoryDistribution.map((cat, index) => (
                  <div key={cat.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                      <span className="text-muted-foreground">{cat.name}</span>
                    </div>
                    <span className="font-medium text-foreground">{cat.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Users */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Cadastros Recentes
                </h2>
                <Link href="/admin/usuarios">
                  <Button variant="ghost" size="sm" className="text-primary">
                    Ver todos
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      user.type === "Voluntário" ? "bg-primary/10" : "bg-accent/10"
                    }`}>
                      {user.type === "Voluntário" ? (
                        <Users className="w-5 h-5 text-primary" />
                      ) : (
                        <Building2 className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "active" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-[#FACC15]/10 text-[#FACC15]"
                      }`}>
                        {user.status === "active" ? "Ativo" : "Pendente"}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{user.joined}</p>
                    </div>
                    <button className="p-1 hover:bg-muted rounded">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                  Denúncias Pendentes
                </h2>
                <Link href="/admin/denuncias">
                  <Button variant="ghost" size="sm" className="text-primary">
                    Ver todas
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{report.type}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {report.target} • por {report.reporter}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{report.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost" className="text-primary">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-500">
                        <Ban className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
