"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Mail, Lock, Eye, EyeOff, ArrowRight, User, Building2, MapPin, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserType = "voluntario" | "instituicao";

export default function CadastroPage() {
  const [userType, setUserType] = useState<UserType>("voluntario");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    // Institution fields
    cnpj: "",
    organizationType: "",
    website: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Mock registration - redirect to appropriate page
      if (userType === "voluntario") {
        window.location.href = "/oportunidades";
      } else {
        window.location.href = "/instituicao/dashboard";
      }
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md py-8"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground font-[family-name:var(--font-poppins)]">
              Eco<span className="text-primary">Link</span>
            </span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-poppins)]">
              Criar conta
            </h1>
            <p className="text-muted-foreground">
              Junte-se à nossa comunidade de voluntários
            </p>
          </div>

          {/* User Type Selector */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setUserType("voluntario")}
              className={`p-4 rounded-xl border-2 transition-all ${
                userType === "voluntario"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <User className={`w-8 h-8 mx-auto mb-2 ${userType === "voluntario" ? "text-primary" : "text-muted-foreground"}`} />
              <p className={`font-medium ${userType === "voluntario" ? "text-primary" : "text-foreground"}`}>
                Voluntário
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Quero participar
              </p>
            </button>
            <button
              type="button"
              onClick={() => setUserType("instituicao")}
              className={`p-4 rounded-xl border-2 transition-all ${
                userType === "instituicao"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <Building2 className={`w-8 h-8 mx-auto mb-2 ${userType === "instituicao" ? "text-primary" : "text-muted-foreground"}`} />
              <p className={`font-medium ${userType === "instituicao" ? "text-primary" : "text-foreground"}`}>
                Instituição
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Quero cadastrar ações
              </p>
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? "gradient-primary text-white" : "bg-muted text-muted-foreground"
              }`}>
                {step > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span className={`text-sm ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>
                Dados básicos
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-border">
              <div className={`h-full transition-all ${step > 1 ? "bg-primary w-full" : "w-0"}`} />
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? "gradient-primary text-white" : "bg-muted text-muted-foreground"
              }`}>
                2
              </div>
              <span className={`text-sm ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>
                {userType === "voluntario" ? "Perfil" : "Instituição"}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {userType === "voluntario" ? "Nome completo" : "Nome da instituição"}
                    </Label>
                    <div className="relative">
                      {userType === "voluntario" ? (
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      )}
                      <Input
                        id="name"
                        type="text"
                        placeholder={userType === "voluntario" ? "Seu nome" : "Nome da ONG"}
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="pl-10 h-12 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="pl-10 h-12 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Crie uma senha forte"
                        value={formData.password}
                        onChange={(e) => updateFormData("password", e.target.value)}
                        className="pl-10 pr-10 h-12 rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Mínimo 8 caracteres com letras e números
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {userType === "voluntario" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(11) 99999-9999"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            className="pl-10 h-12 rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="city"
                            type="text"
                            placeholder="Sua cidade"
                            value={formData.city}
                            onChange={(e) => updateFormData("city", e.target.value)}
                            className="pl-10 h-12 rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Interesses (opcional)</Label>
                        <div className="flex flex-wrap gap-2">
                          {["Meio Ambiente", "Educação", "Saúde", "Animais", "Social"].map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              className="px-3 py-1.5 rounded-full text-sm border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input
                          id="cnpj"
                          type="text"
                          placeholder="00.000.000/0001-00"
                          value={formData.cnpj}
                          onChange={(e) => updateFormData("cnpj", e.target.value)}
                          className="h-12 rounded-xl"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="city"
                            type="text"
                            placeholder="Cidade da sede"
                            value={formData.city}
                            onChange={(e) => updateFormData("city", e.target.value)}
                            className="pl-10 h-12 rounded-xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website (opcional)</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://suaong.org.br"
                          value={formData.website}
                          onChange={(e) => updateFormData("website", e.target.value)}
                          className="h-12 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Área de atuação</Label>
                        <div className="flex flex-wrap gap-2">
                          {["Meio Ambiente", "Educação", "Saúde", "Animais", "Social"].map((area) => (
                            <button
                              key={area}
                              type="button"
                              className="px-3 py-1.5 rounded-full text-sm border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                            >
                              {area}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 h-12 rounded-xl"
                >
                  Voltar
                </Button>
              )}
              <Button
                type="submit"
                className="flex-1 h-12 rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg group"
              >
                {step === 1 ? "Continuar" : "Criar conta"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>

          {/* Terms */}
          <p className="text-center mt-6 text-sm text-muted-foreground">
            Ao criar conta, você concorda com os{" "}
            <Link href="/termos" className="text-primary hover:underline">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
          </p>

          {/* Login Link */}
          <p className="text-center mt-4 text-muted-foreground">
            Já tem conta?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Entre aqui
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex flex-1 gradient-primary items-center justify-center p-12 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 text-center max-w-md">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center"
          >
            {userType === "voluntario" ? (
              <User className="w-16 h-16 text-white" />
            ) : (
              <Building2 className="w-16 h-16 text-white" />
            )}
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            {userType === "voluntario" 
              ? "Seja um agente de mudança" 
              : "Conecte-se a voluntários"}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {userType === "voluntario"
              ? "Encontre oportunidades de voluntariado, ganhe pontos e conquiste badges por suas ações."
              : "Cadastre suas ações, encontre voluntários engajados e acompanhe o impacto gerado."}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
