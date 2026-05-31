"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, User, Bell, Shield, Lock, Sliders, Palette,
  Camera, Mail, MapPin, Phone, Save, ChevronRight,
  Moon, Sun, Monitor, Globe, Eye, EyeOff, Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockUser } from "@/lib/mock-data";

const settingsTabs = [
  { id: "profile", label: "Editar Perfil", icon: User },
  { id: "notifications", label: "Notificações", icon: Bell },
  { id: "privacy", label: "Privacidade", icon: Eye },
  { id: "security", label: "Segurança", icon: Lock },
  { id: "preferences", label: "Preferências", icon: Sliders },
  { id: "appearance", label: "Aparência", icon: Palette },
];

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState("system");

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                Editar Perfil
              </h2>
              <p className="text-sm text-muted-foreground">Atualize suas informações pessoais</p>
            </div>

            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-primary/10 ring-offset-2 ring-offset-background">
                  <Image
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <button className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </button>
              </div>
              <div>
                <p className="font-medium text-foreground">{mockUser.name}</p>
                <p className="text-sm text-muted-foreground mb-2">Nível {mockUser.level} • {mockUser.points} pts</p>
                <Button variant="outline" size="sm" className="rounded-xl text-xs">
                  Alterar foto
                </Button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input defaultValue="Ana Carolina Silva" className="pl-10 h-11 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input defaultValue="ana.silva@email.com" className="pl-10 h-11 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input defaultValue="(11) 99999-0000" className="pl-10 h-11 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Localização</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input defaultValue="São Paulo, SP" className="pl-10 h-11 rounded-xl" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Bio</label>
              <textarea 
                defaultValue="Apaixonada por sustentabilidade e voluntariado. Acredito que pequenas ações podem gerar grandes transformações 🌱"
                className="w-full h-24 px-4 py-3 rounded-xl bg-background border border-input text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="rounded-xl">Cancelar</Button>
              <Button className="gradient-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20 btn-premium">
                <Save className="w-4 h-4 mr-2" />
                Salvar Alterações
              </Button>
            </div>
          </motion.div>
        );

      case "notifications":
        return (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                Notificações
              </h2>
              <p className="text-sm text-muted-foreground">Gerencie como você recebe notificações</p>
            </div>

            {[
              { label: "Novas oportunidades", description: "Receba alertas de novas oportunidades de voluntariado", enabled: true },
              { label: "Pontos e conquistas", description: "Notificações de pontos ganhos e badges desbloqueados", enabled: true },
              { label: "Lembretes de eventos", description: "Lembretes antes dos eventos que você se inscreveu", enabled: true },
              { label: "Atualizações da plataforma", description: "Novidades e melhorias no EcoLink", enabled: false },
              { label: "E-mails semanais", description: "Resumo semanal das suas atividades", enabled: true },
              { label: "Notificações push", description: "Notificações no navegador em tempo real", enabled: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4 border-b border-border/50 last:border-b-0">
                <div>
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                </div>
                <button
                  className={`relative w-12 h-7 rounded-full transition-all duration-300 ${
                    item.enabled 
                      ? "bg-primary shadow-inner shadow-primary/30" 
                      : "bg-muted"
                  }`}
                >
                  <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                    item.enabled ? "left-5.5" : "left-0.5"
                  }`} />
                </button>
              </div>
            ))}
          </motion.div>
        );

      case "privacy":
        return (
          <motion.div
            key="privacy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                Privacidade
              </h2>
              <p className="text-sm text-muted-foreground">Controle quem pode ver suas informações</p>
            </div>

            {[
              { label: "Perfil público", description: "Permitir que outros usuários vejam seu perfil", enabled: true },
              { label: "Mostrar no ranking", description: "Exibir seu nome e pontos no ranking geral", enabled: true },
              { label: "Histórico de ações visível", description: "Permitir que outros vejam suas ações recentes", enabled: false },
              { label: "Compartilhar badges", description: "Mostrar seus badges e conquistas publicamente", enabled: true },
              { label: "Localização aproximada", description: "Mostrar sua cidade no perfil", enabled: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4 border-b border-border/50 last:border-b-0">
                <div>
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                </div>
                <button
                  className={`relative w-12 h-7 rounded-full transition-all duration-300 ${
                    item.enabled 
                      ? "bg-primary shadow-inner shadow-primary/30" 
                      : "bg-muted"
                  }`}
                >
                  <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${
                    item.enabled ? "left-5.5" : "left-0.5"
                  }`} />
                </button>
              </div>
            ))}

            <div className="pt-4">
              <Button variant="outline" className="rounded-xl text-destructive border-destructive/30 hover:bg-destructive/5">
                Baixar meus dados
              </Button>
            </div>
          </motion.div>
        );

      case "security":
        return (
          <motion.div
            key="security"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                Segurança
              </h2>
              <p className="text-sm text-muted-foreground">Proteja sua conta</p>
            </div>

            {/* Change Password */}
            <div className="card-premium rounded-2xl p-6 space-y-4">
              <h3 className="font-medium text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Alterar Senha
              </h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Senha atual</label>
                  <div className="relative">
                    <Input type={showPassword ? "text" : "password"} defaultValue="••••••••" className="h-11 rounded-xl pr-10" />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Nova senha</label>
                  <Input type="password" placeholder="Mínimo de 8 caracteres" className="h-11 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Confirmar nova senha</label>
                  <Input type="password" placeholder="Repita a nova senha" className="h-11 rounded-xl" />
                </div>
              </div>
              <Button className="gradient-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/20">
                Atualizar senha
              </Button>
            </div>

            {/* Two Factor */}
            <div className="card-premium rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Autenticação em dois fatores</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Adicione uma camada extra de segurança</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl">
                  Ativar
                </Button>
              </div>
            </div>

            {/* Active Sessions */}
            <div className="card-premium rounded-2xl p-6 space-y-4">
              <h3 className="font-medium text-foreground">Sessões ativas</h3>
              {[
                { device: "Chrome - Windows", location: "São Paulo, BR", current: true },
                { device: "Safari - iPhone", location: "São Paulo, BR", current: false },
              ].map((session) => (
                <div key={session.device} className="flex items-center justify-between py-3 border-b border-border/50 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {session.device}
                        {session.current && (
                          <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">ATUAL</span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{session.location}</p>
                    </div>
                  </div>
                  {!session.current && (
                    <button className="text-xs text-destructive hover:text-destructive/80 font-medium transition-colors">
                      Encerrar
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );

      case "preferences":
        return (
          <motion.div
            key="preferences"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                Preferências
              </h2>
              <p className="text-sm text-muted-foreground">Personalize sua experiência no EcoLink</p>
            </div>

            {/* Language */}
            <div className="card-premium rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Idioma</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Escolha o idioma da plataforma</p>
                  </div>
                </div>
                <select className="px-3 py-2 rounded-xl bg-muted border-0 text-sm font-medium text-foreground focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>Português (BR)</option>
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
            </div>

            {/* Interest Categories */}
            <div className="card-premium rounded-2xl p-6 space-y-4">
              <h3 className="font-medium text-foreground">Categorias de interesse</h3>
              <p className="text-xs text-muted-foreground">Selecione as áreas que mais te interessam</p>
              <div className="flex flex-wrap gap-2">
                {["Meio Ambiente", "Educação", "Saúde", "Animais", "Social", "Tecnologia", "Cultura", "Esportes"].map((cat, index) => (
                  <button 
                    key={cat} 
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      index < 4 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Distance Preference */}
            <div className="card-premium rounded-2xl p-6 space-y-4">
              <h3 className="font-medium text-foreground">Raio de busca</h3>
              <p className="text-xs text-muted-foreground">Distância máxima para oportunidades presenciais</p>
              <div className="space-y-3">
                <input
                  type="range"
                  min="5"
                  max="100"
                  defaultValue="25"
                  className="w-full h-2 rounded-full appearance-none bg-muted accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 km</span>
                  <span className="font-medium text-primary">25 km</span>
                  <span>100 km</span>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "appearance":
        return (
          <motion.div
            key="appearance"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-poppins)] mb-1">
                Aparência
              </h2>
              <p className="text-sm text-muted-foreground">Personalize a aparência da plataforma</p>
            </div>

            {/* Theme Selection */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Tema</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: "light", label: "Claro", icon: Sun, bg: "bg-white border-2" },
                  { id: "dark", label: "Escuro", icon: Moon, bg: "bg-slate-900 border-2" },
                  { id: "system", label: "Sistema", icon: Monitor, bg: "bg-gradient-to-br from-white to-slate-900 border-2" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-6 rounded-2xl transition-all flex flex-col items-center gap-3 ${
                      theme === t.id 
                        ? "border-primary shadow-lg shadow-primary/10 bg-primary/5" 
                        : "border-border hover:border-primary/30 bg-card"
                    } border-2`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${t.bg} flex items-center justify-center`}>
                      <t.icon className={`w-5 h-5 ${t.id === "dark" ? "text-white" : "text-foreground"}`} />
                    </div>
                    <span className={`text-sm font-medium ${theme === t.id ? "text-primary" : "text-foreground"}`}>
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size */}
            <div className="card-premium rounded-2xl p-6 space-y-4">
              <h3 className="font-medium text-foreground">Tamanho do texto</h3>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">A</span>
                <input
                  type="range"
                  min="12"
                  max="20"
                  defaultValue="16"
                  className="flex-1 h-2 rounded-full appearance-none bg-muted accent-primary cursor-pointer"
                />
                <span className="text-lg text-muted-foreground font-medium">A</span>
              </div>
            </div>

            {/* Animations */}
            <div className="card-premium rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground">Animações reduzidas</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Reduzir movimentos e animações na interface</p>
                </div>
                <button className="relative w-12 h-7 rounded-full bg-muted transition-all duration-300">
                  <span className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect-strong border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/perfil" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Voltar ao Perfil</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground font-[family-name:var(--font-poppins)]">
                Eco<span className="text-primary">Link</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-poppins)] tracking-tight">
            Configurações
          </h1>
          <p className="text-muted-foreground mt-1">Gerencie sua conta e preferências</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 shrink-0"
          >
            <nav className="card-premium rounded-2xl p-2 space-y-1">
              {settingsTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary/10 to-accent/5 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Danger Zone */}
            <div className="mt-6 card-premium rounded-2xl p-4">
              <p className="text-xs font-medium text-destructive mb-3">Zona de perigo</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full rounded-xl text-destructive border-destructive/30 hover:bg-destructive/5 text-xs"
              >
                Excluir minha conta
              </Button>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 card-premium rounded-2xl p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
